import BannerSection from "@/сomponents/Section/BannerSection/page";
import ServiceDetailSection from "@/сomponents/Section/ServiceDetailSection/page";

export default function VeterinaryService() {
    return (
        <>
            <BannerSection 
                backgroundImage={"/images/veterinary_back.png"} 
                title="Ветеринарна допомога"
            />
            <ServiceDetailSection
                title="Регулярні чекапи"
                subtitle="Здоров’я вашого улюбленця"
                mainImage="/images/veterinary_serv1.jpg"
                mainHeading="Ветеринарні послуги"
                mainText1="Ветеринарні послуги – це не лише лікування тварин, а й важлива складова профілактики їхніх хвороб та забезпечення комфорту. Регулярні обстеження, вакцинації, лікування паразитів та стоматологічний догляд допомагають запобігти багатьом захворюванням і значно покращують якість життя вашого улюбленця. Професійна ветеринарна допомога дозволяє вчасно помітити навіть найменші проблеми зі здоров’ям та забезпечити ефективне їх вирішення."
                mainText2="Під час надання ветеринарних послуг спеціалісти враховують індивідуальні потреби тварини, її породу та спосіб життя. Якісні медичні препарати та сучасне обладнання гарантують високий рівень обслуговування. Регулярні профілактичні обстеження та вакцинації захищають вашого улюбленця від інфекційних хвороб та інших небезпечних станів. Турбота про здоров’я тварини – це турбота про її довге і щасливе життя поруч із вами."
                additionalImages={["/images/veterinary_serv2.jpg", "/images/veterinary_serv3.jpg"]}
                bottomText="Ветеринарна допомога – це не лише лікування, а й можливість зміцнити зв’язок між власником і його чотирилапим другом. Тварини, які регулярно проходять ветеринарні процедури, відчувають себе здоровими та щасливими, а також менше стресують під час медичних маніпуляцій. Своєчасна допомога ветеринара дозволяє запобігти серйозним проблемам зі здоров’ям, таким як інфекції, паразити чи хронічні захворювання. Турбота про здоров’я вашого улюбленця – це прояв справжньої любові і відповідальності."
            />
        </>
    );
}