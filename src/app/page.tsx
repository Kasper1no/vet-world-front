
import MainBannerSection from "../сomponents/Section/MainBannerSection/page"
import FeatureSection from "../сomponents/Section/FeatureSection/page";
import MainAboutSection from "../сomponents/Section/AboutSection/MainAboutSection/page";
import ServiceSection from "../сomponents/Section/ServiceSection/page";
import AdvantagesSection from "../сomponents/Section/AdvantagesSection/page";
import TeamSection from "../сomponents/Section/TeamSection/page";
import PriceSection from "../сomponents/Section/PriceSection/page";
import FeedbackSection from "../сomponents/Section/FeedbackSection/page";

export default function Home() {
  return (
    <>
      <MainBannerSection />
      <FeatureSection />
      <MainAboutSection />
      <ServiceSection />
      <AdvantagesSection />
      <TeamSection />
      <PriceSection />
      <FeedbackSection />
    </>
  );
}
