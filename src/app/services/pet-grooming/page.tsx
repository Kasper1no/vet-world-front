import BannerSection from "@/сomponents/Section/BannerSection/page";
import ServiceDetailSection from "@/сomponents/Section/ServiceDetailSection/page";

export default function PetGrooming() {
    return (
        <>
            <BannerSection 
                backgroundImage={"/images/grooming_back3.jpg"} 
                title="Грумінг"
            />
            <ServiceDetailSection
                title="Постійний Догляд"
                subtitle="Комфорт вашого улюбленця"
                mainImage="/images/grooming_service1.jpg"
                mainHeading="Грумінг"
                mainText1="Догляд за тваринами – це не лише естетична процедура, а й важлива складова їхнього здоров'я та комфорту. Регулярне купання, розчісування шерсті, підстригання кігтів та чищення вух допомагають запобігти шкірним захворюванням, інфекціям і дискомфорту для вашого улюбленця. Професійний грумінг дозволяє не тільки підтримувати гарний вигляд тварини, а й контролювати стан її шкіри, шерсті та загального здоров’я."
                mainText2="Під час процедур грумінгу спеціалісти використовують якісні засоби, що підходять для конкретного типу шерсті та шкіри. Також враховуються особливості породи та індивідуальні потреби тварини. Регулярний догляд за шерстю допомагає уникнути ковтунів, що можуть спричинити біль та подразнення. Чищення вух та підстригання кігтів запобігають розвитку інфекцій та дискомфорту під час руху. Догляд за тваринами – це турбота про їхнє здоров’я, гарний настрій і комфортне життя!"
                additionalImages={["/images/grooming1.jpg", "/images/grooming_serv3.jpg"]}
                bottomText="Грумінг – це також чудова можливість зміцнити зв’язок між власником і його улюбленцем. Тварини, які регулярно проходять процедури догляду, стають більш спокійними та звикають до гігієнічних маніпуляцій. Це особливо важливо для собак і котів, які можуть відчувати стрес під час стрижки або купання. Крім того, професійний догляд дозволяє вчасно помітити можливі проблеми зі здоров’ям, такі як подразнення шкіри, паразити або порушення у стані шерсті. Турбота про зовнішній вигляд та здоров’я домашнього улюбленця – це не просто рутина, а прояв любові та відповідального ставлення до свого чотирилапого друга."
            />
        </>
    );
}