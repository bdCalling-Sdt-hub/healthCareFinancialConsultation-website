import Image from "next/image";
import insightImage from "@/assets/image (33).png";
import Horizon from "@/components/ui/website/Home/Horizon";
import BookNowBanner from "@/components/ui/website/BookNowBanner";
import relatedImg1 from "@/assets/image (31).png";
import relatedImg2 from "@/assets/image (32).png";
import RelatedChallengeCard from "@/components/ui/website/RelatedChallengeCard";
import WhatClientsSay from "@/components/ui/website/Home/Review/WhatClientsSay";
import GrowthChart from "@/components/ui/website/insights/GrowthChart";
import BestServicesChart from "@/components/ui/website/insights/BestServicesChart";

const InsightsPage = () => {
  const topFiveChallenges = [
    {
      id: "1",
      image: relatedImg1,
      title: "HIPAA & Financial Security",
    },
    {
      id: "2",
      image: relatedImg2,
      title: "Avoiding Reimbursement Pitfalls",
    },
    {
      id: "3",
      image: relatedImg1,
      title: "HIPAA & Financial Security",
    },
    {
      id: "4",
      image: relatedImg2,
      title: "Avoiding Reimbursement Pitfalls",
    },
    {
      id: "5",
      image: relatedImg1,
      title: "HIPAA & Financial Security",
    },
  ];

  return (
    <div>
      <div className="relative mb-20">
        <Image
          src={insightImage}
          alt="howWeWorkImg"
          width={50000}
          height={50000}
          className="w-full h-[600px] object-cover"
        />
        <div className="max-w-[750px] absolute -bottom-20 right-20 p-10 rounded-2xl bg-[#032237] bg-opacity-30 backdrop-blur-md">
          <h1 className="md:text-5xl text-3xl mb-5 font-bold bg-gradientBg text-transparent bg-clip-text leading-normal">
            Our Insights
          </h1>
          <p className="text-white md:text-lg text-md">
            Rising Costs, Staffing Shortages, Disparity in Healthcare, Growing
            Need for improved Mental Health Care are some of the top issues
            facing the Healthcare Industry.
          </p>
        </div>
      </div>
      <div>
        <Horizon />
        <div className="container">
          <h1 className="text-3xl mb-5 font-bold">Our Statistics</h1>
          <div className="border-4 border-gray-200 p-10 rounded-2xl">
            <GrowthChart />
            <BestServicesChart />
          </div>
        </div>
        <BookNowBanner />
      </div>
      <div>
        <div className="container my-20">
          <h1 className="text-3xl mb-5 font-bold">Top 5 Challenges</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {topFiveChallenges?.map((item) => (
              <RelatedChallengeCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
      <div className="my-20">
        <WhatClientsSay />
      </div>
    </div>
  );
};

export default InsightsPage;
