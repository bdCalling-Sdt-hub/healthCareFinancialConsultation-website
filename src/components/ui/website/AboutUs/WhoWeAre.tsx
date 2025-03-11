import image1 from "@/assets/image (22).png";
import image2 from "@/assets/image (23).png";
import Image from "next/image";

const WhoWeAre = () => {
  return (
    <div className="container md:flex items-center gap-10">
      <div className="md:w-[50%] md:flex gap-6 pt-10 md:pt-0 w-full">
        <Image
          src={image1}
          alt="image1"
          width={50000}
          height={50000}
          className="md:w-full md:h-[300px] h-[200px] rounded-2xl object-cover"
        />
        <Image
          src={image2}
          alt="image1"
          width={50000}
          height={50000}
          className="md:w-full md:h-[300px] h-[200px] md:mt-28 mt-5 rounded-2xl object-cover"
        />
      </div>
      <div className="md:w-[50%] w-full">
        <h1 className="text-3xl mb-5 mt-5 md:mt-0 font-bold">Who We Are</h1>
        <p className="text-gray-600">
          With years of experience in healthcare finance, we offer tailored
          solutions that drive efficiency, reduce financial risks, and maximize
          profitability, allowing your organization to focus on what lies at the
          heart of the business: patient care and outcomes.
        </p>
      </div>
    </div>
  );
};

export default WhoWeAre;
