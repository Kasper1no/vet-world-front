"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import "../style.css";
import axios from "axios";

export default function Forgot() {
    const router = useRouter();
    const [formData, setFormData] = useState({ email: "" });
    const [error, setError] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            setLoading(true);
            setError(null);
            setSuccessMessage(null);

            const response = await axios.post("http://localhost:4000/auth/forgot-password", {
                email: formData.email
            });

            if (response.status === 200) {
                setSuccessMessage(response.data.message || "Посилання для скидання пароля надіслано на вашу пошту.");
            }
        } catch (error: any) {
            try {
                const rawError = error.response?.data?.error;
                if (Array.isArray(rawError)) {
                    setError(rawError[0]?.message || "Невідома помилка");
                } else if (typeof rawError === "string") {
                    const parsedError = JSON.parse(rawError);
                    setError(Array.isArray(parsedError) ? (parsedError[0]?.message || "Невідома помилка") : "Невірний формат помилки");
                } else {
                    setError("Щось пішло не так. Спробуйте ще раз.");
                }
            } catch {
                setError("Помилка під час обробки відповіді сервера.");
            }
        } finally {
            setLoading(false);
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
            <button className="btn-one back-button" onClick={() => router.back()}>
                <span className="txt">&larr; Назад</span>
            </button>
            <div className="card shadow p-4 contact-form" style={{ maxWidth: "400px", width: "100%" }}>
                <h2 className="text-center mb-3">Скидання паролю</h2>
                <form onSubmit={handleSubmit}>
                    {error && <div className="alert alert-danger">{error}</div>}
                    {successMessage && <div className="alert alert-success">{successMessage}</div>}
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
                    <div className="button">
                    <div className="button">
                        <button type="submit" className="btn-one w-100" disabled={loading}>
                            <span className="txt justify-content-center">{loading ? "Завантаження..." : "Скинути пароль"}</span>
                        </button>
                    </div>
                    </div>
                    <div className="btm-btns">
                        <p className="text-center mt-3">
                            <a href="/login">Увійти</a> | <a href="/register">Реєстрація</a>
                        </p>
                    </div>
                </form>
            </div>
        </>
    );
}