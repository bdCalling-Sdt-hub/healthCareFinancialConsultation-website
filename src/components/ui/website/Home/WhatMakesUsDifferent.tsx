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
      <div className="md:flex gap-5 justify-center items-center">
        <div className="md:w-[50%]">
          <Image
            src={whatMakesUsDifferentImage1}
            alt=""
            width={50000}
            height={50000}
            className="md:h-[950px] w-full"
          />
        </div>
        <div className="md:w-[50%] space-y-5">
          <div className="relative p-[2px] shadow-md hover:shadow-lg rounded-2xl bg-gradient-to-r from-[#b99755] via-[#F5EC9B] to-[#b99755]">
            <div className="flex gap-5 items-center justify-center bg-white p-3 rounded-2xl">
              <div className="bg-[#103248] w-20 h-20 rounded-full flex items-center justify-center">
                <p className="text-3xl font-bold bg-gradient-to-r from-[#b99755] via-[#F5EC9B] to-[#b99755] text-transparent bg-clip-text">
                  01
                </p>
              </div>
              <div className="w-[80%]">
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
          <div className="relative p-[2px] shadow-md hover:shadow-lg rounded-2xl bg-gradient-to-r from-[#b99755] via-[#F5EC9B] to-[#b99755]">
            <div className="flex gap-5 items-center justify-center bg-white p-3 rounded-2xl">
              <div className="bg-[#103248] w-20 h-20 rounded-full flex items-center justify-center">
                <p className="text-3xl font-bold bg-gradient-to-r from-[#b99755] via-[#F5EC9B] to-[#b99755] text-transparent bg-clip-text">
                  02
                </p>
              </div>
              <div className="w-[80%]">
                <h1 className="text-2xl font-bold my-3">
                  Comprehensive Service Offering
                </h1>
                <p className="text-gray-600">
                  HC Financial provides a full spectrum of services—from
                  strategic financial planning to operational efficiency imp ...{" "}
                  <span className="text-blue-700 underline cursor-pointer">
                    See More
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="relative p-[2px] shadow-md hover:shadow-lg rounded-2xl bg-gradient-to-r from-[#b99755] via-[#F5EC9B] to-[#b99755]">
            <div className="flex gap-5 items-center justify-center bg-white p-3 rounded-2xl">
              <div className="bg-[#103248] w-20 h-20 rounded-full flex items-center justify-center">
                <p className="text-3xl font-bold bg-gradient-to-r from-[#b99755] via-[#F5EC9B] to-[#b99755] text-transparent bg-clip-text">
                  03
                </p>
              </div>
              <div className="w-[80%]">
                <h1 className="text-2xl font-bold my-3">Proven Track Record</h1>
                <p className="text-gray-600">
                  A history of successful engagements and measurable outcomes
                  demonstrates the firm&apos;s capability to drive sustainab ...{" "}
                  <span className="text-blue-700 underline cursor-pointer">
                    See More
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="relative p-[2px] shadow-md hover:shadow-lg rounded-2xl bg-gradient-to-r from-[#b99755] via-[#F5EC9B] to-[#b99755]">
            <div className="flex gap-5 items-center justify-center bg-white p-3 rounded-2xl">
              <div className="bg-[#103248] w-20 h-20 rounded-full flex items-center justify-center">
                <p className="text-3xl font-bold bg-gradient-to-r from-[#b99755] via-[#F5EC9B] to-[#b99755] text-transparent bg-clip-text">
                  04
                </p>
              </div>
              <div className="w-[80%]">
                <h1 className="text-2xl font-bold my-3">
                  Innovative Technological Integration
                </h1>
                <p className="text-gray-600">
                  Leveraging advanced technologies, such as data analytics and
                  AI, to enhance financial strategies and operational ...
                  <span className="text-blue-700 underline cursor-pointer">
                    See More
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="relative p-[2px] shadow-md hover:shadow-lg rounded-2xl bg-gradient-to-r from-[#b99755] via-[#F5EC9B] to-[#b99755]">
            <div className="flex gap-5 items-center justify-center bg-white p-3 rounded-2xl">
              <div className="bg-[#103248] w-20 h-20 rounded-full flex items-center justify-center">
                <p className="text-3xl font-bold bg-gradient-to-r from-[#b99755] via-[#F5EC9B] to-[#b99755] text-transparent bg-clip-text">
                  05
                </p>
              </div>
              <div className="w-[80%]">
                <h1 className="text-2xl font-bold my-3">
                  Client-Centric Approach
                </h1>
                <p className="text-gray-600">
                  Focusing on personalized solutions and building long-term
                  partnerships ensures that the firm&apos;s strategies ...
                  <span className="text-blue-700 underline cursor-pointer">
                    See More
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatMakesUsDifferent;
