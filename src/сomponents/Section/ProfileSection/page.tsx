"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";
import "./style.css";
import { getCookie, deleteTokens } from "@/utils/cookieUtil";
import { refreshToken } from "@/utils/tokenUtil";

const ProfileSection = () => {
    const router = useRouter();
    const [formData, setFormData] = useState<{
        firstName: string | null;
        lastName: string | null;
        email: string | null;
        phone: string | null;
        address: string | null;
        password: string | null;
    }>({
        firstName: null,
        lastName: null,
        email: null,
        phone: null,
        address: null,
        password: null,
    });

    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const accessToken = getCookie("accessToken");
        if (!accessToken) router.replace("/login");

        const userData = localStorage.getItem("user");

        if (userData) {
            try {
                const storedData = JSON.parse(userData);

                const initializedData = {
                    firstName: storedData.firstName ?? null,
                    lastName: storedData.lastName ?? null,
                    email: storedData.email ?? null,
                    phone: storedData.phone ?? null,
                    address: storedData.address ?? null,
                    password: storedData.password ?? null,
                };

                setFormData(initializedData);
            } catch (error) {
                console.error("Помилка при парсингу user data:", error);
            }
        }
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        try {
            var accessToken = await getCookie("accessToken");
            if (!accessToken) {
                await refreshToken();
            }
            accessToken = await getCookie("accessToken");
            if (!accessToken) {
                router.replace("/login");
                return;
            }

            const filteredData = Object.entries(formData).reduce((acc, [key, value]) => {
                if (value !== null && value !== undefined && value !== "") {
                    (acc as { [key: string]: string })[key] = value;
                }
                return acc;
            }, {} as { [key: string]: string });

            console.log(filteredData);

            const response = await axios.put(process.env.NEXT_PUBLIC_BACKEND_URL + "/user/update",
                filteredData, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },  
                });

            if (response.status === 200) {
                localStorage.setItem("user", JSON.stringify(response.data));
                setSuccessMessage("Дані успішно оновлено.");
                setTimeout(() => {
                    setSuccessMessage(null);
                }, 5000);
            }
        } catch (err: any) {
            try {
                const rawError = err.response?.data?.error;
                console.log(rawError);
                if (Array.isArray(rawError)) {
                    const firstErrorMessage = rawError[0]?.message || "Unknown error";
                    setError(firstErrorMessage);
                } else if (typeof rawError === 'string') {
                    const parsedError = JSON.parse(rawError);
                    const firstErrorMessage = Array.isArray(parsedError) ? (parsedError[0]?.message || "Unknown error") : "Invalid error format";
                    setError(firstErrorMessage);
                } else {
                    setError("Щось пішло не так. Спробуйте ще раз.");
                }
            } catch (parseError) {
                setError("Помилка під час обробки даних. Перевірте формат відповіді сервера.");
            } finally {
                setLoading(false);
            }
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = async () => {
        try {
            try {
                const response = await axios.post(process.env.NEXT_PUBLIC_BACKEND_URL + "/auth/logout");

                if (response.status === 200) {
                    deleteTokens();
                    localStorage.removeItem("user");
                    router.replace("/");
                }
            } catch (error) {
                console.error("Помилка при видаленні токенів:", error);
            }
        } catch (error) {
            console.error("Помилка при видаленні токенів:", error);
            setError("Помилка при виході. Спробуйте ще раз!");
            setTimeout(() => {
                setError(null);
            }, 3000)
        }

    };

    return (
        <section className="service-style1-area">
            <div className="shape1">
                <img src="/images/shape-1.png" alt="shape1" />
            </div>
            <div className="shape2">
                <img src="/images/shape-2.png" alt="shape2" />
            </div>
            <div className="container">
                <div className="profile-card">
                    <div className="card shadow">
                        <h2 className="text-center mb-3">Персональні дані</h2>
                        <form onSubmit={handleSubmit}>
                            {error && (
                                <div className="alert alert-danger">{error}</div>
                            )}
                            {successMessage && <div className="alert alert-success">{successMessage}</div>}
                            <div className="mb-3">
                                <label htmlFor="first-name" className="form-label">Ім'я</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="first-name"
                                    name="firstName"
                                    value={formData.firstName || ""}
                                    placeholder={!formData.firstName ? "Не вказано" : ""}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="last-name" className="form-label">Прізвище</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="last-name"
                                    name="lastName"
                                    value={formData.lastName || ""}
                                    placeholder={!formData.lastName ? "Не вказано" : ""}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Електронна пошта</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    value={formData.email || ""}
                                    disabled
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phone" className="form-label">Номер телефону</label>
                                <input
                                    type="tel"
                                    className="form-control"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone || ""}
                                    placeholder={!formData.phone ? "Не вказано" : ""}
                                    onChange={(e) => {
                                        const value = e.target.value;

                                        const sanitizedValue = value.replace(/[^0-9+]/g, "");
                                        if (/^[+]?[0-9]{0,15}$/.test(sanitizedValue)) {
                                            e.target.value = sanitizedValue;
                                            handleChange(e);
                                        }
                                    }}

                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="address" className="form-label">Адреса</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="address"
                                    name="address"
                                    value={formData.address || ""}
                                    placeholder={!formData.address ? "Не вказано" : ""}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="button">
                                <button
                                    type="submit"
                                    className="btn-one w-100"
                                    disabled={loading}
                                >
                                    <span className="txt justify-content-center">{loading ? "Оновлення..." : "Оновити профіль"}</span>
                                </button>
                            </div>
                        </form>
                        <div className="btm-btns">
                            <p className="text-center mt-3">
                                <Link href="/forgot">Скинути пароль</Link> | <Link href="#" onClick={handleLogout}>Вийти</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProfileSection;
