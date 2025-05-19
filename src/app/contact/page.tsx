import BannerSection from "@/сomponents/Section/BannerSection/page";
import ContactFormSection from "@/сomponents/Section/ContactFormSection/page";
import ContactInfoSection from "@/сomponents/Section/ContactInfoSection/page";
import ScheduleSection from "@/сomponents/Section/ScheduleSection/page";

export default function Contact() {
    return (
        <>
            <BannerSection
                backgroundImage={"/images/about_back1.jpg"}
                title="Контакти" />
            <ContactInfoSection />
            <ScheduleSection />
            <ContactFormSection />
        </>
    );
}