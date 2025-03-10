import Image, { StaticImageData } from "next/image";

interface PageBannerSecProps {
  image: StaticImageData;
  title: string;
  description: string;
}

const PageBannerSec = ({ image, title, description }: PageBannerSecProps) => {
  return (
    <div className="relative mb-20">
      <Image
        src={image}
        alt="servicesMenuImg"
        width={50000}
        height={50000}
        className="w-full h-[600px] object-cover"
      />
      <div className="max-w-[750px] absolute -bottom-20 right-20 p-10 rounded-2xl bg-[#032237] bg-opacity-30 backdrop-blur-md">
        <h1 className="text-5xl mb-5 font-bold bg-gradientBg text-transparent bg-clip-text leading-normal">
          {title}
        </h1>
        <p className="text-white text-lg">{description}</p>
      </div>
    </div>
  );
};

export default PageBannerSec;
