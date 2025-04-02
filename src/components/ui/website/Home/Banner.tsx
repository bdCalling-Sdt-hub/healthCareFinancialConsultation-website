import Image from "next/image";
import bannerImg from "@/assets/bannerImg.png";

const Banner = () => {
  return (
    <div className="relative">
      <Image
        src={bannerImg}
        alt=""
        width={50000}
        height={50000}
        className="w-full h-[800px] object-cover"
      />
      <div className="absolute top-1/2 left-[200px] md:left-1/3 transform -translate-x-1/2 -translate-y-1/2 space-y-5">
        <h1 className="text-3xl md:text-[56px]  px-5 md:px-0 font-bold md:w-[800px] text-transparent bg-gradientBg bg-clip-text leading-tight">
          Empowering Healthcare with Financial Excellence
        </h1>
        <p className="text-xl md:w-[700px] w-[400px] px-5 md:px-0 text-white">
          Specialized operational finance consultation tailored to your
          healthcare organization’s needs
        </p>
        <button className="bg-gradientBg px-10 text-lg font-medium ms-5 md:ms-0 py-4 rounded-md border-none">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Banner;
