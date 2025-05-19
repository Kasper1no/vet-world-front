import "./style.css";

interface BannerSectionProps {
  title: string;
  backgroundImage: string;
}

const BannerSection: React.FC<BannerSectionProps> = (bannerData: BannerSectionProps) => {
  return (
    <section
      className="breadcrumb-area"
      style={{ backgroundImage: `url(${bannerData.backgroundImage})` }}
    >
      {/* <div className="background" > */}
      <div className="banner-curve"></div>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="inner-content clearfix text-center">
              <div
                className="title wow slideInUp animated"
                data-wow-delay="0.3s"
                data-wow-duration="1500ms"
              >
                <h2>{bannerData.title}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
