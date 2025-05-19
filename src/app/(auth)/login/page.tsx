"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import "../style.css";
import axios from "axios";
import { getCookie, setCookie } from "@/utils/cookieUtil";

export default function Login() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            setLoading(true);
            setError(null);

            const response = await axios.post("http://localhost:4000/auth/login", {
                email: formData.email,
                password: formData.password,
            },
                {
                    withCredentials: true
                });

            if (response.status === 200) {
                const { accessToken, user } = response.data;

                setCookie({ accessToken });

                localStorage.setItem("user", JSON.stringify(user));

                console.log("Cookies:" + getCookie("refreshToken"));

                router.replace("/profile");
            }
        } catch (error: any) {
            try {
                console.log(error.response?.data);
                const rawError = error.response?.data;
                setError(rawError.error || "Помилка входу. Cпробуйте ще раз.");
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
                <h2 className="text-center mb-3">Вхід</h2>
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
                    <div className="button">
                        <button type="submit" className="btn-one w-100" disabled={loading}>
                            <span className="txt justify-content-center">{loading ? "Завантаження..." : "Увійти"} </span>
                        </button>
                    </div>
                    <div className="btm-btns">
                        <p className="text-center mt-3">
                            <a href="/forgot">Скинути пароль</a> | <a href="/register">Реєстрація</a>
                        </p>
                    </div>
                </form>
            </div>
        </>
    );
}