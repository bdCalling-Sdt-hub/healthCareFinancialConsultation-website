"use client";

import image1 from "@/assets/image 36.png";
import { useState } from "react";
import Image from "next/image";
import servicesMenuImg from "@/assets/image (28).png";
import serviceBookImg from "@/assets/Group 27.png";
import relatedImg1 from "@/assets/image (31).png";
import relatedImg2 from "@/assets/image (32).png";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const SingleServicesPage = () => {
  const [selectedTab, setSelectedTab] = useState("tab1");

  const relatedChallenges = [
    {
      id: 1,
      image: relatedImg1,
      title: "HIPAA & Financial Security",
    },
    {
      id: 2,
      image: relatedImg2,
      title: "Avoiding Reimbursement Pitfalls",
    },
  ];

  const renderContent = () => {
    switch (selectedTab) {
      case "tab1":
        return (
          <div className="mt-10">
            <div className="container">
              <h1 className="text-3xl mb-5 font-bold">What We Do</h1>
              <div className="md:flex gap-10 justify-between items-center w-full">
                <div className="md:w-1/2">
                  <ul className="space-y-5 text-gray-600 list-disc pl-5">
                    <li>
                      Workforce Utilization Review: Analyze staff workloads,
                      shift patterns, and patient demand to prevent under or
                      overstaffing.
                    </li>
                    <li>
                      Role Optimization: Ensure clinical and non-clinical staff
                      focus on tasks that match their expertise to prevent
                      inefficiencies.
                    </li>
                    <li>
                      Cross-Training & Task Delegation: Train employees for
                      multiple roles to enhance flexibility and reduce
                      dependency on overtime.
                    </li>
                    <li>
                      Productivity Metrics & KPIs: Track key metrics such as
                      patient wait times, staff-to-patient ratios, and average
                      time per task.
                    </li>
                    <li>
                      Performance-Based Incentives: Implement rewards and
                      recognition programs to boost efficiency and motivation.
                    </li>
                  </ul>
                </div>
                <div className="md:w-1/2 mt-5 md:mt-0">
                  <Image
                    src={image1}
                    alt="image1"
                    width={50000}
                    height={50000}
                    className="w-[550px] h-[320px] rounded-2xl object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="container mt-32">
              <h1 className="text-3xl mb-5 font-bold">Targeted Results</h1>
              <div>
                <ul className=" space-y-2 text-gray-600 list-disc pl-5">
                  <li>Reduced labor costs without sacrificing care quality</li>
                  <li>Enhanced employee satisfaction and retention</li>
                  <li>Improved patient flow and service delivery</li>
                </ul>
              </div>
              <div className="md:flex gap-10 items-center justify-center">
                <div className="md:w-1/2">
                  <video
                    className="w-full mt-14 mx-auto my-5 rounded-2xl shadow-xl"
                    controls
                    loop
                    autoPlay
                  >
                    <source
                      src={
                        "https://media-hosting.imagekit.io//2fb82348a5654b88/doctorVid2.mp4?Expires=1836282693&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=xVpo9RSEownbmXc-~qDijvelRV6HuF~tseMS~AxjDZn8VlDfGsADaV5~3O9hulv3p5~2szLgtACSAsQyCbIcevawUI2mBH9z3scSQ~l0sWNmsyiFJsJ9wVjC7Na4VcNDHgJ9886tKg-sFOOvtkTwT53GyGFMeg2Wbzi9aEgwwlak1eY70Gn~fIDe4rUwHQU3Woo-8mbyDf6rlH7jg-G13pV~YoLfF~5xvOxe5gHGa326Fk-j1BlJCQGMrX509g394HUXkwkwMTwY2EtpJgPABmy2jL7eC6naSh~6mncUXuJOV2U8bDm9ieeAfsHZ9EK8nC3IJOaC~YrQIfvPAANr~w__"
                      }
                      type="video/mp4"
                    />
                  </video>
                </div>
                <div className="md:w-1/2">
                  <video
                    className="w-full md:mt-14 mx-auto my-5 rounded-2xl shadow-xl"
                    controls
                    loop
                    autoPlay
                  >
                    <source
                      src={
                        "https://media-hosting.imagekit.io//49ef1ac50bf9457d/5805532_Coll_wavebreak_Hospital_1280x720.mp4?Expires=1836283035&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=k5Ue3PKye2SO-N3GipNEnAtcSBlo6rCBwUUiigtKypCGvPRqQFH1TtQPb4RfkZZ5KF2sLW1pxjXLQQpAYujGgq3w~hrOow52mLjPMnclBJbSCDeyMRJPpBCDKXuv1EYV2o9yDUZLfwNj-KZsPpWCCh4fBYGKz5jXlU~RQmp83iSycXeVLOOL7Wd85DQ~e0V5BPDQaRdx2EhHlSV9VnZeApsdp-TX-GcVfxABvVciw5pcUXvzJ9DleNFb0dVnavFBQX1ZvDGJ4o2XikcMRPeLAytmzjg6Vw39nsUyXuyWzJ-j4EVJhRboJ8~i6lC8RzM2X8N1kcbewnr4CQYourNDgQ__"
                      }
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
            </div>
            <div className="relative my-16">
              <Image
                src={serviceBookImg}
                alt="aa"
                width={50000}
                height={50000}
                className="w-full h-[300px] object-cover"
              />
              <div className="absolute w-full h-full top-0 flex flex-col bg-[#032237] bg-opacity-20 backdrop-blur-sm items-center justify-center">
                <h1 className="md:text-3xl text-2xl text-center bg-gradientBg text-transparent bg-clip-text font-bold">
                  Need A Consultation For Health care Finance?
                </h1>
                <button className="bg-gradientBg px-5 py-2 my-5 rounded-md">
                  Book Now
                </button>
              </div>
            </div>
            <div className="container">
              <h1 className="text-3xl mb-5 font-bold">Related Challenges</h1>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                {relatedChallenges?.map((item) => (
                  <div key={item.id} className="relative">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={50000}
                      height={50000}
                      className="w-[400px] h-[300px] rounded-2xl object-cover"
                    />
                    <div className="absolute -bottom-5 rounded-md bg-[#032237] flex gap-2 items-center justify-start h-[60px]">
                      <div className="bg-gradientBg ml-2 w-[85%] pl-2">
                        <h1 className="text-sm font-bold w-[75%] leading-normal">
                          {item.title}
                        </h1>
                      </div>
                      <Link href={`/services/challenge/${item?.id}`}>
                        <FaArrowRight
                          className="cursor-pointer"
                          color="white"
                        />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case "tab2":
        return <div>Content for Tab 2</div>;
      case "tab3":
        return <div>Content for Tab 3</div>;
      case "tab4":
        return <div>Content for Tab 4</div>;
      case "tab5":
        return <div>Content for Tab 5</div>;
      default:
        return <div>Select a tab</div>;
    }
  };

  return (
    <div>
      {/* Banner Section */}
      <div className="relative mb-20">
        <Image
          src={servicesMenuImg}
          alt="servicesMenuImg"
          width={50000}
          height={50000}
          className="w-full h-[600px] object-cover"
        />
        <div className="max-w-[750px] absolute -bottom-20 right-20 p-10 rounded-2xl bg-[#032237] bg-opacity-30 backdrop-blur-md">
          <h1 className="md:text-5xl text-3xl mb-5 font-bold bg-gradientBg text-transparent bg-clip-text leading-normal">
            Operational Finance Optimization
          </h1>
          <p className="text-white md:text-lg">
            Optimizing operational finance in healthcare is essential for
            reducing costs, improving efficiency, and ensuring high-quality
            patient care.
          </p>
        </div>
      </div>

      {/* Tabs Section */}
      <div className=" mx-auto py-20">
        {/* Tabs */}
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          <button
            className={`px-6 py-5 border rounded-lg ${
              selectedTab === "tab1"
                ? "bg-[#032237] text-white"
                : "border-[#032237] hover:bg-gray-200"
            }`}
            onClick={() => setSelectedTab("tab1")}
          >
            Staff Productivity Analysis
          </button>
          <button
            className={`px-6 py-5 border rounded-lg ${
              selectedTab === "tab2"
                ? "bg-[#032237] text-white"
                : "border-[#032237] hover:bg-gray-200"
            }`}
            onClick={() => setSelectedTab("tab2")}
          >
            Workflow Optimization
          </button>
          <button
            className={`px-6 py-5 border rounded-lg ${
              selectedTab === "tab3"
                ? "bg-[#032237] text-white"
                : "border-[#032237] hover:bg-gray-200"
            }`}
            onClick={() => setSelectedTab("tab3")}
          >
            Revenue Cycle Management
          </button>
          <button
            className={`px-6 py-5 border rounded-lg ${
              selectedTab === "tab4"
                ? "bg-[#032237] text-white"
                : "border-[#032237] hover:bg-gray-200"
            }`}
            onClick={() => setSelectedTab("tab4")}
          >
            Technology and Automation
          </button>
          <button
            className={`px-6 py-5 border rounded-lg ${
              selectedTab === "tab5"
                ? "bg-[#032237] text-white"
                : "border-[#032237] hover:bg-gray-200"
            }`}
            onClick={() => setSelectedTab("tab5")}
          >
            Benchmarking
          </button>
        </div>

        {/* Content */}
        <div className="p-4">{renderContent()}</div>
      </div>
    </div>
  );
};

export default SingleServicesPage;
