"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import serviceBookImg from "@/assets/Group 27.png";
import RelatedChallengeCard from "@/components/ui/website/RelatedChallengeCard";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  useGetServiceTabsQuery,
  useGetSingleServiceQuery,
} from "@/redux/apiSlices/serviceSlice";
import { useParams } from "next/navigation";
import { Spin } from "antd";
import { getImageUrl } from "@/utils/getImageUrl";

// Define TypeScript interface for tab data
interface TabContent {
  _id: string;
  tabName: string;
  contents: Array<{
    title: string;
    descriptions: string[];
  }>;
  images: string[];
  videos: string[];
}

const SingleServicesPage = () => {
  const [selectedTab, setSelectedTab] = useState<string>("");
  const { id } = useParams();

  const { data: singleService, isLoading } = useGetSingleServiceQuery(id);
  const { data: allTabs, isLoading: isLoadingTabs } =
    useGetServiceTabsQuery(id);

  // Set initial tab when data loads
  useEffect(() => {
    if (allTabs?.data?.length) {
      setSelectedTab(allTabs.data[0]._id);
    }
  }, [allTabs]);

  if (isLoading || isLoadingTabs)
    return (
      <div className="flex items-center justify-center h-screen">
        <Spin />
      </div>
    );

  const serviceInfo = singleService?.data;
  const tabs = allTabs?.data;

  // Find the currently selected tab
  const activeTab = tabs?.find(
    (tab: TabContent) => tab._id.toString() === selectedTab
  );

  console.log(activeTab);

  const relatedChallenges = [
    {
      _id: "1",
      background: "https://i.ibb.co.com/GfNydhRW/random-Profile-Image.jpg",
      title: "HIPAA & Financial Security",
    },
    {
      _id: "2",
      background: "https://i.ibb.co.com/GfNydhRW/random-Profile-Image.jpg",
      title: "Avoiding Reimbursement Pitfalls",
    },
  ];

  // Render dynamic content based on the active tab
  const renderContent = () => {
    if (!activeTab) return <div>Please select a tab</div>;

    return (
      <div className="mt-10">
        <div className="container">
          {/* Render tab content sections */}
          {activeTab?.contents
            ?.slice() // Create a copy to avoid mutating the original array
            ?.sort((a: any, b: any) => {
              // Sort to bring "Goal" to the top
              if (a.title === "Goal") return -1;
              if (b.title === "Goal") return 1;
              return 0;
            })
            ?.map((content: any, index: number) => (
              <div key={index} className="mb-16">
                <div className="md:flex gap-10 justify-between items-center w-full">
                  <div className="md:w-1/2">
                    {" "}
                    <h1 className="text-3xl mb-5 font-bold">{content.title}</h1>
                    <div>
                      {content?.descriptions?.length === 1 ? (
                        <p className="text-[16px] text-gray-600">
                          {content.descriptions[0]}
                        </p>
                      ) : (
                        <ul className="space-y-5 text-[16px] text-gray-600 list-disc pl-5">
                          {content?.descriptions?.map(
                            (desc: any, i: number) => (
                              <li key={i}>{desc}</li>
                            )
                          )}
                        </ul>
                      )}
                    </div>
                  </div>
                  {index === 1 && activeTab?.images?.length > 0 && (
                    <div className="md:w-1/2 mt-5 md:mt-0">
                      <Image
                        src={getImageUrl(activeTab.images[0])}
                        alt={`${activeTab.tabName} image`}
                        width={500}
                        height={320}
                        className="w-full h-[320px] rounded-2xl object-cover"
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}

          {/* Media section */}
          <div className="container mt-10">
            <h1 className="text-3xl mb-5 font-bold">Media Gallery</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Display remaining images */}
              {activeTab?.images?.slice(1)?.map((image: any, index: number) => (
                <div key={`img-${index + 1}`} className="col-span-1">
                  <Image
                    src={getImageUrl(image)}
                    alt={`${activeTab.tabName} image ${index + 1}`}
                    width={500}
                    height={320}
                    className="w-full h-[320px] rounded-2xl object-cover"
                  />
                </div>
              ))}

              {/* Display videos */}
              {activeTab?.videos?.map((video: any, index: number) => (
                <div key={`vid-${index}`} className="col-span-1">
                  <video
                    key={`${selectedTab}-video-${index}`}
                    className="w-full rounded-2xl shadow-xl"
                    controls
                    loop
                  >
                    <source src={getImageUrl(video)} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Book consultation section */}
        <div className="relative my-16">
          <Image
            src={serviceBookImg}
            alt="Book consultation"
            width={50000}
            height={50000}
            className="w-full h-[300px] object-cover"
          />
          <div className="absolute w-full h-full top-0 flex flex-col bg-[#032237] bg-opacity-20 backdrop-blur-sm items-center justify-center">
            <h1 className="md:text-3xl text-2xl text-center bg-gradientBg text-transparent bg-clip-text font-bold">
              Need A Consultation For {serviceInfo?.title}?
            </h1>
            <Link href={"/book-your-consultation"}>
              <button className="bg-gradientBg px-5 py-2 my-5 rounded-md">
                Book Now
              </button>
            </Link>
          </div>
        </div>

        {/* Related challenges section */}
        <div className="container">
          <h1 className="text-3xl mb-5 font-bold">Related Challenges</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {relatedChallenges?.map((item) => (
              <RelatedChallengeCard key={item._id} item={item} />
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {/* Banner Section */}
      <div className="relative mb-20">
        <div className="relative">
          <Image
            src={getImageUrl(serviceInfo?.image)}
            alt="servicesMenuImg"
            width={50000}
            height={50000}
            className="w-full h-[600px] object-cover"
          />
          {/* White overlay animations */}
          <motion.div
            initial={{ width: "100%" }}
            animate={{ width: "0%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute top-0 left-0 h-full bg-white"
          />
          <motion.div
            initial={{ width: "100%" }}
            animate={{ width: "0%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute top-0 right-0 h-full bg-white"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="max-w-[750px] absolute -bottom-20 right-20 p-10 rounded-2xl bg-[#032237] bg-opacity-30 backdrop-blur-md"
        >
          <h1 className="md:text-5xl text-3xl mb-5 font-bold bg-gradientBg text-transparent bg-clip-text leading-normal">
            {serviceInfo?.title}
          </h1>
          <p className="text-white md:text-lg">{serviceInfo?.description}</p>
        </motion.div>
      </div>

      {/* Tabs Section */}
      <div className="mx-auto py-20">
        {/* Tabs */}
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {tabs?.map((tab: TabContent) => (
            <button
              key={tab._id}
              className={`px-6 py-5 text-[16px] border rounded-lg transition-colors ${
                selectedTab === tab._id
                  ? "bg-[#032237] text-white"
                  : "border-[#032237] hover:bg-gray-200"
              }`}
              onClick={() => setSelectedTab(tab._id)}
            >
              {tab.tabName}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="p-4">{renderContent()}</div>
      </div>
    </div>
  );
};

export default SingleServicesPage;
