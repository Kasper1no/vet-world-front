"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";
import "../style.css";
import { getCookie, setCookie } from "@/utils/cookieUtil";

export default function Register() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const checkAuth = async () => {
            setLoading(true);
            const token = await getCookie("accessToken");
            if (token) {
                router.replace("/profile");
            }
            setLoading(false);
        };

        checkAuth();
    }, [router]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            setError("Паролі не співпадають");
            return;
        }

        try {
            setLoading(true);
            setError(null);

            const response = await axios.post("http://localhost:4000/user/register", {
                email: formData.email,
                password: formData.password,
            });

            if (response.status === 200) {
                const { accessToken, user } = response.data;

                setCookie({ accessToken });

                localStorage.setItem("user", JSON.stringify(user));

                console.log("Cookies:" + document.cookie);

                router.replace("/profile");
            }
        } catch (error: any) {
            try {
                const rawError = error.response?.data?.error; // Отримуємо помилку від сервера
                if (Array.isArray(rawError)) {
                    const firstErrorMessage = rawError[0]?.message || "Unknown error"; // Беремо тільки першу помилку
                    setError(firstErrorMessage);
                } else if (typeof rawError === 'string') {
                    // Якщо відповідь — стрінг, перетворюємо її на масив і беремо першу помилку
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
        }
    };

    return (
        <>
            <div className="shape1">
                <img src="/images/shape-1.png" alt="shape1" />
            </div>
            <div className="shape2">
                <img src="/images/shape-2.png" alt="shape2" />
            </div>
            <button className="btn-one back-button" onClick={() => router.replace("/")}>
                <span className="txt">&larr; Головна</span>
            </button>
            <div className="card shadow p-4 contact-form" style={{ maxWidth: "400px", width: "100%" }}>
                <h2 className="text-center mb-3">Реєстрація</h2>
                <form onSubmit={handleSubmit}>
                    {error && <div className="alert alert-danger">{error}</div>}
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Електронна пошта</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Пароль</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="confirmPassword" className="form-label">Підтвердження паролю</label>
                        <input
                            type="password"
                            className="form-control"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="button">
                        <button type="submit" className="btn-one w-100" disabled={loading}>
                            <span className="txt justify-content-center">{loading ? "Завантаження..." : "Зареєструватися"}</span>
                        </button>
                    </div>
                    <div className="btm-btns">
                        <p className="text-center mt-3">
                            Уже маєте аккаунт? <Link href="/login">Увійти</Link>
                        </p>
                    </div>
                </form>
            </div>
        </>
    );
}
