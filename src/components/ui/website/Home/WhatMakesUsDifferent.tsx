import Image from "next/image";
import whatMakesUsDifferentImage1 from "@/assets/whatMakesUs.png";

const WhatMakesUsDifferent = () => {
  return (
    <div className="container my-20">
      <h1 className="text-3xl md:text-5xl font-bold mb-5 md:mb-0">
        What Makes Us Different
      </h1>
      <p className="text-gray-600 mt-5 text-xl">
        By partnering closely with you, we drive change by combining the
        expertise of passionate problem-solvers, cutting-edge technologies, and
        comprehensive service capabilities to transform every insight into an
        opportunity.
      </p>
      <div className="flex gap-5 justify-center items-center">
        <div className="w-[50%]">
          <Image
            src={whatMakesUsDifferentImage1}
            alt=""
            width={50000}
            height={50000}
          />
        </div>
        <div className="w-[50%]">
          <div className="flex gap-5 items-center border p-3 rounded-2xl border-gradientBg">
            <div className="bg-[#103248] w-20 h-20 rounded-full flex items-center justify-center">
              <p className="text-3xl font-bold bg-gradientBg text-transparent bg-clip-text">
                01
              </p>
            </div>
            <div className="w-[70%]">
              <h1 className="text-2xl font-bold my-3">
                Deep Industry Expertise
              </h1>
              <p className="text-gray-600">
                We here at HC Financial have a profound understanding of the
                healthcare sector, including its unique financial ...{" "}
                <span className="text-blue-700 underline cursor-pointer">
                  See More
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatMakesUsDifferent;
