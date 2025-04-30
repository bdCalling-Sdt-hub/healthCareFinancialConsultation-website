import Image from "next/image";
import aboutImg from "@/assets/Handshake.png";
import Link from "next/link";

const AboutUsSection = () => {
  return (
    <div className="md:relative container">
      <div className=" mx-auto my-10 md:my-48 md:flex">
        <h1 className="md:text-5xl text-2xl font-bold mb-5 md:mb-0 md:w-[25%]">
          About Us
        </h1>
        <div className="bg-[#032237] md:p-10 p-5 md:ps-80 flex flex-col justify-center items-start space-y-5 rounded-2xl md:h-[400px] md:w-[75%]">
          <p className="text-transparent bg-gradientBg bg-clip-text text-[16px] mb-3">
            At HC Financial, we specialize in empowering healthcare
            organizations with expert financial guidance tailored to their
            unique needs. With deep industry expertise, we provide strategic
            financial consulting that optimizes operations, enhances
            profitability, and ensures long-term stability. Our team understands
            the complex challenges of healthcare finance, from revenue cycle
            management to cost containment and compliance.
          </p>
          <Link href={"/aboutUs"}>
            <button className="bg-gradientBg py-4 px-10 font-medium hover:opacity-90 rounded-md border-none">
              Learn More
            </button>
          </Link>
        </div>
      </div>
      <div className="md:absolute hidden md:block md:top-[200px] md:mt-16 md:ms-28 md:left-[200px] left-[400px] transform -translate-x-1/2 -translate-y-1/2">
        <Image
          src={aboutImg}
          alt=""
          width={50000}
          height={50000}
          className="md:w-[600px] md:h-[360px] rounded-2xl object-cover"
        />
      </div>
    </div>
  );
};

export default AboutUsSection;
