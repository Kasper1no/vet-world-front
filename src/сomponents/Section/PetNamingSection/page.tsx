"use client";

import axios from "@/utils/apiUtil";
import { AxiosResponse } from "axios";
import { useState, useEffect } from "react";
import "./style.css";
import "../ServiceDetailSection/style.css";
import Dropdown from "../Dropdown/Dropdown";


type PetType = {
    value: string;
    label: string;
};

type BreedType = {
    value: string;
    label: string;
};

type petBreeds = {
    type: string;
    breeds: BreedType[];
}

const genderOptions = [{ value: "", label: "Всі" }, { value: "male", label: "Чоловіча" }, { value: "female", label: "Жіноча" }];

const PetNamingSection = () => {
    const [petOptions, setPetOptions] = useState<PetType[]>([]);
    const [currentBreeds, setCurrentBreeds] = useState<BreedType[]>([]);
    const [breeds, setBreeds] = useState<petBreeds[]>([]);
    const [formData, setFormData] = useState({
        petType: "",
        petBreed: "",
        petGender: "",
    });
    const [petNames, setPetNames] = useState({
        petName1: "",
        petName2: "",
        petName3: "",
    });
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const flattenBreeds = (data: petBreeds[]): BreedType[] => {
        return data.flatMap(item => item.breeds);
    };

    const mapResponse = (response: AxiosResponse<any, any>) => {
        const data = response.data.breeds;
        if (Array.isArray(data)) {
            const uniqueTypes = Array.from(new Set(data.map((item: { type: string }) => item.type)));
            setPetOptions(uniqueTypes.map(type => ({ value: type, label: type })));

            const petBreedsData = uniqueTypes.map(type => ({
                type,
                breeds: data
                    .filter((item: { type: string }) => item.type === type)
                    .map((item: { name: string }) => ({ value: item.name, label: item.name })),
            }));

            setBreeds(petBreedsData);
            setCurrentBreeds([{ value: "", label: "Всі" }, ...flattenBreeds(petBreedsData)]);
        }
    };

    const getPetOptions = async () => {
        try {
            const response = await axios.get(process.env.NEXT_PUBLIC_BACKEND_URL + "/pet/breeds");
            mapResponse(response);
        } catch (error) {
            console.error("Error fetching pet options:", error);
        }
    };

    useEffect(() => {
        getPetOptions();
    }, []);

    const handlePetChange = (value: string) => {
        setFormData({ ...formData, petType: value, petBreed: "" });
        const rightBreeds = breeds.find((option) => option.type === value);
        setCurrentBreeds([{ value: "", label: "Всі" }, ... (rightBreeds?.breeds || flattenBreeds(breeds))]);
    };

    const handleBreedChange = (value: string) => {
        setFormData({ ...formData, petBreed: value });
    };

    const handleGenderChange = (value: string) => {
        setFormData({ ...formData, petGender: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        console.log(formData.petBreed + " ", formData.petType + " ", formData.petGender);
        if (!formData.petType && !formData.petBreed && !formData.petGender) {
            setError("Заповніть хочаби одне поле!");
            return;
        }

        try {
            setError(null);
            setSuccessMessage(null);
            setLoading(true);


            const { petType, petBreed, petGender } = formData;
            let endpoint = "/pet/random-names";

            if (petType) endpoint += `/type/${petType}`;
            if (petGender) endpoint += `/gender/${petGender}`;
            if (petBreed) endpoint += `/breed/${petBreed}`;

            const response = await axios.get(process.env.NEXT_PUBLIC_BACKEND_URL + endpoint);

            if (response.status === 200) {
                setPetNames({
                    petName1: response.data.names[0] || "",
                    petName2: response.data.names[1] || "",
                    petName3: response.data.names[2] || "",
                });

                setSuccessMessage("Клички успішно згенеровано!");

                setTimeout(() => {
                    setSuccessMessage(null);
                }, 3000);
            }
        } catch (error) {
            console.error("Error fetching pet names:", error);
            setError("Помилка при отриманні кличок. Спробуйте ще раз.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <section className="service-details-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-9 col-lg-8">
                        <div className="service-details-content">
                            <div className="service-details-main-image">
                                <img src="/images/pet-naming.jpg" alt="" />
                                <div className="overlay-box">
                                    <div className="icon">
                                        <span className="icon-dog"></span>
                                    </div>
                                    <div className="title">
                                        <h3></h3>
                                        <p>Згенеруй кличку для улюбленця</p>
                                    </div>
                                </div>
                            </div>
                            <div className="service-details-text-box">
                                <h2>Генератор клички</h2>
                                <p>Ім’я для вашого улюбленця – це не просто набір звуків. Це ідентичність, відображення характеру та навіть ваших почуттів до нього. Вибір клички – це важливий і відповідальний момент, адже вона буде супроводжувати вашого пухнастого друга протягом усього життя. Підібрати правильну кличку означає знайти слово, яке звучатиме не лише мило, але й передаватиме індивідуальність вашого улюбленця.

                                    Ви помічали, як деякі імена чудово відповідають характеру тварини? Наприклад, енергійного песика можна назвати Спайком, а лагідного котика – Ласуном. Правильна кличка допомагає встановити емоційний зв'язок із вашим другом, роблячи взаємодію ще більш особливою.</p>

                                <p>Проте вибір імені – не завжди легкий процес. Сотні варіантів, сумніви, чи підходить ім’я, і бажання обрати найкраще можуть викликати труднощі. Ідеальна кличка має бути простою у вимові, зрозумілою для тварини та зручною у використанні щодня.

                                    Саме тому ми пропонуємо вам простий спосіб вирішення цієї дилеми – наш генератор імен для тварин. Він допоможе створити кілька унікальних варіантів, серед яких ви зможете вибрати те, що вам до вподоби, і подарувати своєму улюбленцю ім’я, яке стане частиною його індивідуальності. Спробуйте – і переконайтеся, як легко та весело це може бути!</p>
                            </div>

                            <div className="form-section">
                                <div className="sec-title text-center">
                                    <h4><span><b>Згенеруй кличку</b></span></h4>
                                </div>

                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="contact-form contact-page">
                                            <form id="contact-form" name="contact_form" className="default-form2" onSubmit={handleSubmit} method="post">
                                                <div className="justify-content-center row">
                                                    <div className="col-xl-6 col-lg-6">
                                                        {error && <div className="alert alert-danger">{error}</div>}
                                                        {successMessage && <div className="alert alert-success">{successMessage}</div>}
                                                    </div>
                                                </div>
                                                <div className="justify-content-center row" >
                                                    <div className="col-xl-9 col-lg-9">
                                                        <div className="input-box">
                                                            <Dropdown placeholder="Вид тваринки" options={petOptions} onSelect={handlePetChange} rewrite={false} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="justify-content-center row">
                                                    <div className="col-xl-9 col-lg-9">
                                                        <div className="input-box">
                                                            <Dropdown placeholder="Порода тваринки" options={currentBreeds} onSelect={handleBreedChange} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="justify-content-center row">
                                                    <div className="col-xl-9 col-lg-9">
                                                        <div className="input-box">
                                                            <Dropdown placeholder="Стать тваринки" options={genderOptions} onSelect={handleGenderChange} />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row justify-content-evenly mb-3 g-1 flex-nowrap">
                                                    <div className="col-auto d-flex justify-content-center">
                                                        <span className="txt"><b>{petNames.petName1}</b></span>
                                                    </div>
                                                    <div className="col-auto d-flex justify-content-center">
                                                        <span className="txt"><b>{petNames.petName2}</b></span>
                                                    </div>
                                                    <div className="col-auto d-flex justify-content-center">
                                                        <span className="txt"><b>{petNames.petName3}</b></span>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-xl-12">
                                                        <div className="button-box text-center">
                                                            <input id="form_botcheck" name="form_botcheck" className="form-control" type="hidden" value="" />
                                                            <button className="btn-one gradient-bg-1" type="submit" disabled={loading}>
                                                                <span className="txt">{loading ? <>Генерується...</> : <> <i className="icon-send"></i>Зегенерувати </>}</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>

                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-4">
                        <div className="service-details-sidebar">
                            <div className="service-details-categories">
                                <div className="title">
                                    <h3>Категорії Послуг</h3>
                                </div>
                                <div className="categories-box">
                                    <ul className="categories clearfix">
                                        <li><a href="/services/pet-grooming">Грумінг</a></li>
                                        <li><a href="/services/dog-walking">Вигул</a></li>
                                        <li><a href="/services/veterinary-service">Ветеринарні Послуги</a></li>
                                        <li className="active"><a href="/services/pet-naming">Генератор клички</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PetNamingSection;