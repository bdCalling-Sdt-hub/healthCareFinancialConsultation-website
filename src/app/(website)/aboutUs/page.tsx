import aboutBannerImg from "@/assets/image (21).png";
import WhoWeAre from "@/components/ui/website/AboutUs/WhoWeAre";
import PageBannerSec from "@/utils/PageBannerSec";

const AboutUsPage = () => {
  return (
    <div>
      <PageBannerSec
        image={aboutBannerImg}
        title="About Us"
        description="Leveraging years of expertise in healthcare finance, we deliver tailored solutions that drive efficiency, reduce financial risks, and maximize profitability—empowering your organization to focus on what matters most: patient care and outcomes."
      />

      <div className="container my-10">
        <WhoWeAre />
      </div>
    </div>
  );
};

export default AboutUsPage;
