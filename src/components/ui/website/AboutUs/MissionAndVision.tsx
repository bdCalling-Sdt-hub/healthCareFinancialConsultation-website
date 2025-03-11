import Image from "next/image";
import missionAndVisionImg1 from "@/assets/image (24).png";
import missionAndVisionImg2 from "@/assets/image (25).png";

const MissionAndVision = () => {
  return (
    <div className="bg-[#032237] my-10 py-20">
      <div className="container md:flex w-full gap-20 items-center justify-center">
        <div className="md:w-[45%]">
          <h1 className="text-3xl mb-5 text-transparent bg-clip-text bg-gradientBg font-bold">
            Our Mission & Vision
          </h1>
          <p className="text-white">
            At HC Financial Consultants our mission is to empower healthcare
            organizations with expert financial and operational strategies that
            drive efficiency, reduce costs, and enhance patient care. We are
            committed to delivering innovative consulting solutions that
            optimize revenue, streamline workflows, and ensure long-term
            financial sustainability. Through collaboration, data-driven
            insights, and industry expertise, we help healthcare providers
            navigate the evolving landscape with confidence and success.
          </p>
        </div>
        <div className="md:w-[55%] md:flex gap-5 w-full">
          <Image
            src={missionAndVisionImg1}
            alt="missionAndVisionImage"
            width={50000}
            height={50000}
            className="md:w-[270px] md:h-[270px] h-[200px] rounded-2xl mt-20 object-cover"
          />
          <Image
            src={missionAndVisionImg2}
            alt="missionAndVisionImage"
            width={50000}
            height={50000}
            className="md:w-[270px] md:h-[270px] h-[200px] rounded-2xl mt-5 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default MissionAndVision;
