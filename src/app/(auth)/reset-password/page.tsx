"use client";

import { useState } from "react";
import { useRouter } from 'next/navigation';
import axios from "axios";
import "../style.css";
import { deleteTokens } from "@/utils/cookieUtil";

export default function ResetPassword() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        password: "",
        confirmPassword: "",
    });
    const [error, setError] = useState<string | null>(null);   
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

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

            const token = new URLSearchParams(window.location.search).get('token');

            const response = await axios.post("http://localhost:4000/auth/reset-password", {
                token,
                newPassword: formData.password,
            });

            if (response.status === 200) {
                setLoading(true);
                setError(null);
                deleteTokens();
                localStorage.removeItem("user");

                setSuccessMessage("Пароль успішно скинуто. Переходимо на сторінку логіну.");

                setTimeout(() => {
                    setLoading(false);
                    router.replace("/login");
                }, 3000);
            }
        } catch (error: any) {
            setError(error.response?.data?.error || "Щось пішло не так. Спробуйте ще раз.");
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
            <div className="card shadow p-4 contact-form" style={{ maxWidth: "400px", width: "100%" }}>
                <h2 className="text-center mb-3">Скидання паролю</h2>
                <form onSubmit={handleSubmit}>
                    {error && <div className="alert alert-danger">{error}</div>}
                    {successMessage && <div className="alert alert-success">{successMessage}</div>}
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
                            <span className="txt justify-content-center">{loading ? "Завантаження..." : "Скинути пароль"}</span>
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}
