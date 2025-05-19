"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Dropdown from "../Dropdown/Dropdown";
import "./style.css";

interface FormData {
    name: string;
    email: string;
    phone: string;
    month: string;
    day: string;
    message: string;
}

const getSortedMonths = () => {
    const months = [
        { value: "01", label: "Січень" },
        { value: "02", label: "Лютий" },
        { value: "03", label: "Березень" },
        { value: "04", label: "Квітень" },
        { value: "05", label: "Травень" },
        { value: "06", label: "Червень" },
        { value: "07", label: "Липень" },
        { value: "08", label: "Серпень" },
        { value: "09", label: "Вересень" },
        { value: "10", label: "Жовтень" },
        { value: "11", label: "Листопад" },
        { value: "12", label: "Грудень" }
    ];
    const currentMonthIndex = new Date().getMonth();
    return [...months.slice(currentMonthIndex), ...months.slice(0, currentMonthIndex)];
};

const getValidDates = (month: string) => {
    if (!month) return [];

    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth();
    const currentDate = today.getDate();

    const monthIndex = parseInt(month, 10) - 1;
    const selectedYear = monthIndex < currentMonth ? currentYear + 1 : currentYear;
    const daysInMonth = new Date(selectedYear, monthIndex + 1, 0).getDate();

    return Array.from({ length: daysInMonth }, (_, i) => {
        const day = i + 1;
        const date = new Date(selectedYear, monthIndex, day);

        if (date.getDay() !== 0 && (selectedYear > currentYear || monthIndex > currentMonth || day >= currentDate)) {
            return { value: `${day}`, label: `${day}` };
        }
        return null;
    }).filter(Boolean) as { value: string; label: string }[];
};

const ContactFormSection = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        phone: "",
        month: "",
        day: "",
        message: ""
    });

    const [monthOptions, setMonthOptions] = useState(getSortedMonths());
    const [dateOptions, setDateOptions] = useState<{ value: string; label: string }[]>([]);
    const [phoneError, setPhoneError] = useState("");
    const [messageError, setMessageError] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (formData.month) {
            setDateOptions(getValidDates(formData.month));
        }
        const storedData = localStorage.getItem("user");
        if (storedData) {
            const firstName = JSON.parse(storedData).firstName as string;
            const lastName = JSON.parse(storedData).lastName as string;

            let name = "";
            if (firstName && lastName) {
                name = firstName + " " + lastName;
            } else if (firstName) {
                name = firstName;
            } else if (lastName) {
                name = lastName;
            }
            setFormData({
                name: formData.name !== "" ? formData.name : name || "",
                email: formData.email !== "" ? formData.email : JSON.parse(storedData).email as string,
                phone: formData.phone !== "" ? formData.phone : JSON.parse(storedData).phone as string || "",
                month: formData.month,
                day: formData.day,
                message: formData.message
            });
        }
    }, [formData.month]);

    const validatePhone = (phone: string) => /^[+]?[0-9]{10,15}$/.test(phone);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        if (name === "phone") {
            setError(validatePhone(value) ? "" : "Невірний формат номера телефону");
            setPhoneError(validatePhone(value) ? "" : "Невірний формат номера телефону");
        }

        if (name === "message") {
            setError(value.length > 500 ? "Максимальна довжина повідомлення - 500 символів" : "");
            setMessageError(value.length > 500 ? "Максимальна довжина повідомлення - 500 символів" : "");
        }
    };

    const handleDropdownChange = (field: keyof FormData, value: string) => {
        setFormData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (phoneError || messageError) {
            alert("Будь ласка, виправте помилки у формі перед відправкою.");
            return;
        }

        try {
            setLoading(true);
            setError(null);
            setSuccessMessage(null);

            const today = new Date();
            const currentYear = today.getFullYear();
            const currentMonth = today.getMonth() + 1;

            const selectedMonth = parseInt(formData.month, 10);
            const selectedDate = parseInt(formData.day, 10);

            const year = selectedMonth < currentMonth ? currentYear + 1 : currentYear;

            const formattedMonth = selectedMonth.toString().padStart(2, "0");
            const formattedDay = selectedDate.toString().padStart(2, "0");

            const formattedDate = `${year}-${formattedMonth}-${formattedDay}`;
            console.log(formattedDate);

            const response = await axios.post("http://localhost:4000/appointment/create",
                {
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    date: formattedDate,
                    message: formData.message
                }
            );

            if (response.status == 200) {
                setSuccessMessage("Запис успішно створено!");
                setFormData({ name: "", email: "", phone: "", month: "", day: "", message: "" });
                setMonthOptions([]);
                setMonthOptions(getSortedMonths());
                setDateOptions([]);
                setDateOptions(getValidDates(formData.month));

                setTimeout(() => {
                    setSuccessMessage(null);
                    setError(null);
                }, 3000);
            }
        } catch (error: any) {
            console.error("Помилка відправки форми: ", error.response?.data.message);
            setError(error.response?.data?.message.message || "Не вдалося відправити запит. Спробуйте ще раз.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="contact-form-style1-area">
            <div className="contact-form-style1-bg" style={{ backgroundImage: "url(/images/contact-form-style1-bg.png)" }}></div>
            <div className="container">
                <div className="sec-title text-center">
                    <h5>//<span>Зв'язок</span>//</h5>
                    <h2>Записатись на прийом</h2>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="contact-form contact-page">
                            <form onSubmit={handleSubmit} className="default-form2">
                                {error && <div className="alert alert-danger">{error}</div>}
                                {successMessage && <div className="alert alert-success">{successMessage}</div>}
                                <div className="row">
                                    <div className="col-xl-6">
                                        <div className="input-box">
                                            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Ваше ім'я" required />
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="input-box">
                                            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Ваш email" required />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-6">
                                        <div className="input-box">
                                            <input type="text"
                                                name="phone"
                                                value={formData.phone}
                                                placeholder="Номер телефону"
                                                required
                                                onChange={(e) => {
                                                    const value = e.target.value;

                                                    const sanitizedValue = value.replace(/[^0-9+]/g, "");
                                                    if (/^[+]?[0-9]{0,15}$/.test(sanitizedValue)) {
                                                        e.target.value = sanitizedValue;
                                                        handleChange(e);
                                                    }
                                                }} />
                                        </div>
                                    </div>
                                    <div className="col-xl-3">
                                        <Dropdown placeholder="Місяць" options={monthOptions} onSelect={(value) => handleDropdownChange("month", value)} />
                                    </div>
                                    <div className="col-xl-3">
                                        <Dropdown placeholder="Число" options={dateOptions} onSelect={(value) => handleDropdownChange("day", value)} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="input-box">
                                            <textarea name="message"
                                                value={formData.message}
                                                placeholder="Опишіть питання"
                                                onChange={(e) => {
                                                    const value = e.target.value;

                                                    if (value.length > 500) {
                                                        const cursorPosition = e.target.selectionStart;
                                                        const trimmedValue = value.slice(0, 500);
                                                        e.target.value = trimmedValue;
                                                        handleChange(e);

                                                        setTimeout(() => {
                                                            e.target.selectionStart = e.target.selectionEnd = cursorPosition - (value.length - 500);
                                                        }, 0);
                                                    } else {
                                                        handleChange(e);
                                                    }
                                                }}
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="button-box text-center">
                                            <button className="btn-one gradient-bg-1" type="submit" disabled={!!phoneError || !!messageError || loading}>
                                                <span className="txt"><i className="icon-send"></i>{loading ? "Завантаження..." : "Надіслати"}</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactFormSection;
