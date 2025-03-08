import Image from "next/image";
import horizonImage1 from "@/assets/image (11).png";
import horizonImage2 from "@/assets/image (12).png";
import horizonImage3 from "@/assets/image (13).png";
import horizonImage4 from "@/assets/image (14).png";
import horizonImage5 from "@/assets/image (15).png";

const Horizon = () => {
  return (
    <div className="container py-20">
      <h1 className="text-3xl md:text-5xl font-bold mb-5 md:mb-0">
        Healthcare Horizon
      </h1>
      <p className="md:text-xl text-gray-600 my-5">
        Healthcare in 2025 is poised for significant transformation driven by
        renewed investment, advanced technology integration, and evolving
        regulatory and cybersecurity demands. Here at HC Financial Consultants,
        we aim to help our clients stay ahead of this ever-changing curve.
      </p>
      <div className="flex gap-5 w-full justify-between">
        <div className="w-[50%]">
          <Image
            src={horizonImage1}
            alt="horizonImage1"
            width={50000}
            height={50000}
          />
          <div className="my-5">
            <h1 className="text-xl md:text-3xl font-bold mb-5 md:mb-0">
              Rising Costs and Affordability
            </h1>
            <div className="flex text-lg justify-between items-center my-4 text-gray-600">
              <p>14 Jan,2025</p>
              <p>London,UK</p>
            </div>
            <p className="text-gray-600">
              Expert operational finance consulting tailored for healthcare
              providers. Secure your financial future today. Revenue Integrity
              Consulting Secure your financial future today. Revenue Integrity
              Revenue Integrity Consulting Secure your financial future today.
              Revenue Integrity...{" "}
              <span className="text-blue-700 underline cursor-pointer">
                See More
              </span>
            </p>
          </div>
        </div>
        <div className="w-[50%] flex flex-col gap-5 justify-between">
          <div className="flex gap-5 items-center">
            <Image
              className="w-56 h-32 object-cover"
              src={horizonImage2}
              alt="horizonImage2"
              width={50000}
              height={50000}
            />
            <div>
              <h1 className="text-xl md:text-2xl font-bold md:mb-0">
                AI and Technology
              </h1>
              <div className="flex text-lg justify-between my-1 items-center text-gray-600">
                <p>14 Jan,2025</p>
                <p>London,UK</p>
              </div>
              <p className="text-gray-600">
                Expert operational finance consulting tailored for health care
                providers. Secure healthcare service providers ...
                <span className="text-blue-700 underline cursor-pointer">
                  See More
                </span>
              </p>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <Image
              className="w-56 h-32 object-cover"
              src={horizonImage3}
              alt="horizonImage2"
              width={50000}
              height={50000}
            />
            <div>
              <h1 className="text-xl md:text-2xl font-bold md:mb-0">
                Regulatory Risks
              </h1>
              <div className="flex text-lg my-1 justify-between items-center text-gray-600">
                <p>14 Jan,2025</p>
                <p>London,UK</p>
              </div>
              <p className="text-gray-600">
                Expert operational finance consulting tailored for health care
                providers. Secure healthcare service providers ...
                <span className="text-blue-700 underline cursor-pointer">
                  See More
                </span>
              </p>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <Image
              className="w-56 h-32 object-cover"
              src={horizonImage4}
              alt="horizonImage2"
              width={50000}
              height={50000}
            />
            <div>
              <h1 className="text-xl md:text-2xl font-bold md:mb-0">
                Workforce
              </h1>
              <div className="flex text-lg my-1 justify-between items-center text-gray-600">
                <p>14 Jan,2025</p>
                <p>London,UK</p>
              </div>
              <p className="text-gray-600">
                Expert operational finance consulting tailored for health care
                providers. Secure healthcare service providers ...
                <span className="text-blue-700 underline cursor-pointer">
                  See More
                </span>
              </p>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <Image
              className="w-56 h-32 object-cover"
              src={horizonImage5}
              alt="horizonImage2"
              width={50000}
              height={50000}
            />
            <div>
              <h1 className="text-xl md:text-2xl font-bold md:mb-0">
                Market Consolidation (Competition)
              </h1>
              <div className="flex text-lg my-1 justify-between items-center text-gray-600">
                <p>14 Jan,2025</p>
                <p>London,UK</p>
              </div>
              <p className="text-gray-600">
                Expert operational finance consulting tailored for health care
                providers. Secure healthcare service providers ...
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

export default Horizon;
