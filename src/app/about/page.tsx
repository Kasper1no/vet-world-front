import AboutAreaSection from "@/сomponents/Section/AboutSection/AboutAreaSection/page";
import BannerSection from "@/сomponents/Section/BannerSection/page";
import ShowcaseSection from "@/сomponents/Section/ShowcaseSection/page";
import TeamSection from "@/сomponents/Section/TeamSection/page";

export default function About() {
    return (
        <>
            <BannerSection
                backgroundImage={"/images/about_back1.jpg"}
                title="Про Нас" />
            <AboutAreaSection />
            <ShowcaseSection />
            <TeamSection backgroundColor="#ffffff" />
        </>
    );
}