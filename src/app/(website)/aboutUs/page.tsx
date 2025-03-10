import aboutBannerImg from "@/assets/image (21).png";
import MissionAndVision from "@/components/ui/website/AboutUs/MissionAndVision";
import OurCoreValues from "@/components/ui/website/AboutUs/OurCoreValues";
import WhoWeAre from "@/components/ui/website/AboutUs/WhoWeAre";
import Image from "next/image";

const AboutUsPage = () => {
  return (
    <div>
      <div className="relative mb-20">
        <Image
          src={aboutBannerImg}
          alt="servicesMenuImg"
          width={50000}
          height={50000}
          className="w-full h-[600px] object-cover"
        />
        <div className="max-w-[750px] absolute -bottom-20 right-20 p-10 rounded-2xl bg-[#032237] bg-opacity-30 backdrop-blur-md">
          <h1 className="text-5xl mb-5 font-bold bg-gradientBg text-transparent bg-clip-text leading-normal">
            About Us
          </h1>
          <p className="text-white text-lg">
            Leveraging years of expertise in healthcare finance, we deliver
            tailored solutions that drive efficiency, reduce financial risks,
            and maximize profitability—empowering your organization to focus on
            what matters most: patient care and outcomes.
          </p>
        </div>
      </div>

      <div className="container my-10">
        <WhoWeAre />
      </div>
      <MissionAndVision />
      <OurCoreValues />
    </div>
  );
};

export default AboutUsPage;
