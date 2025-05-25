"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Input, Spin } from "antd";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Link from "next/link";
import Image from "next/image";
import { getImageUrl } from "@/utils/getImageUrl";
import { useGetAllServicesQuery } from "@/redux/apiSlices/serviceSlice";
import { useGetAllHorizonQuery } from "@/redux/apiSlices/horizonSlice";
import { useGetAllChallengesQuery } from "@/redux/apiSlices/challengeSlice";
import { useGetOurWaysQuery } from "@/redux/apiSlices/ourWaySlice";

// Component that uses useSearchParams
function SearchContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [searchQuery, setSearchQuery] = useState(initialQuery);

  // Fetch all data
  const { data: allServices, isLoading: isServiceLoading } =
    useGetAllServicesQuery(undefined);
  const { data: allInsights, isLoading: isInsightLoading } =
    useGetAllHorizonQuery(undefined);
  const { data: allChallenges, isLoading: isChallengeLoading } =
    useGetAllChallengesQuery(undefined);
  const { data: allOurWays, isLoading: isOurWayLoading } =
    useGetOurWaysQuery(undefined);

  // console.log(
  //   "service =>",
  //   allServices?.data,
  //   "insight =>",
  //   allInsights?.data,
  //   "challenge =>",
  //   allChallenges?.data,
  //   "ourWay =>",
  //   allOurWays?.data
  // );

  // Filtered results
  const [filteredServices, setFilteredServices] = useState<any[]>([]);
  const [filteredInsights, setFilteredInsights] = useState<any[]>([]);
  const [filteredChallenges, setFilteredChallenges] = useState<any[]>([]);
  const [filteredOurWays, setFilteredOurWays] = useState<any[]>([]);

  // Filter results when search query changes or data loads
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredServices([]);
      setFilteredInsights([]);
      setFilteredChallenges([]);
      setFilteredOurWays([]);
      return;
    }

    // Filter services
    const services =
      allServices?.data?.filter(
        (service: any) =>
          service?.title?.toLowerCase()?.includes(searchQuery.toLowerCase()) ||
          service?.description
            ?.toLowerCase()
            ?.includes(searchQuery.toLowerCase())
      ) || [];
    setFilteredServices(services);

    // Filter insights
    const insights =
      allInsights?.data?.filter(
        (insight: any) =>
          insight?.title?.toLowerCase()?.includes(searchQuery.toLowerCase()) ||
          insight?.description
            ?.toLowerCase()
            ?.includes(searchQuery.toLowerCase()) ||
          insight?.sections?.filter(
            (section: any) =>
              section?.title
                ?.toLowerCase()
                ?.includes(searchQuery.toLowerCase()) ||
              section?.bars?.filter(
                (bar: any) =>
                  bar?.title
                    ?.toLowerCase()
                    ?.includes(searchQuery.toLowerCase()) ||
                  bar?.body?.filter((item: any) =>
                    item.toLowerCase().includes(searchQuery.toLowerCase())
                  )?.length > 0
              )?.length > 0
          )?.length > 0
      ) || [];
    setFilteredInsights(insights);

    // Filter challenges
    const challenges =
      allChallenges?.data?.filter(
        (challenge: any) =>
          challenge?.title
            ?.toLowerCase()
            ?.includes(searchQuery.toLowerCase()) ||
          challenge?.description
            ?.toLowerCase()
            ?.includes(searchQuery.toLowerCase()) ||
          challenge?.footer
            ?.toLowerCase()
            ?.includes(searchQuery.toLowerCase()) ||
          challenge?.contents?.filter(
            (content: any) =>
              content?.title
                ?.toLowerCase()
                ?.includes(searchQuery.toLowerCase()) ||
              content?.description
                ?.toLowerCase()
                ?.includes(searchQuery.toLowerCase()) ||
              content?.details?.filter((item: any) =>
                item.toLowerCase().includes(searchQuery.toLowerCase())
              )?.length > 0
          )?.length > 0
      ) || [];
    setFilteredChallenges(challenges);

    // Filter our ways
    const ourWays =
      allOurWays?.data?.filter(
        (ourWay: any) =>
          ourWay?.title?.toLowerCase()?.includes(searchQuery.toLowerCase()) ||
          ourWay?.description
            ?.toLowerCase()
            ?.includes(searchQuery.toLowerCase()) ||
          ourWay?.label?.toLowerCase()?.includes(searchQuery.toLowerCase()) ||
          ourWay?.footer?.toLowerCase()?.includes(searchQuery.toLowerCase()) ||
          ourWay?.contents?.filter(
            (content: any) =>
              content?.heading
                ?.toLowerCase()
                ?.includes(searchQuery.toLowerCase()) ||
              content?.body?.toLowerCase()?.includes(searchQuery.toLowerCase())
          ).length > 0
      ) || [];
    setFilteredOurWays(ourWays);
  }, [searchQuery, allServices, allInsights, allChallenges, allOurWays]);

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Handle search submission
  const handleSearch = () => {
    router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
  };

  // Loading state
  if (
    isServiceLoading ||
    isInsightLoading ||
    isChallengeLoading ||
    isOurWayLoading
  ) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spin size="large" />
      </div>
    );
  }

  // Get all results for the "All" tab
  const allResults = [
    ...filteredServices.map((item) => ({ ...item, _type: "service" })),
    ...filteredInsights.map((item) => ({ ...item, _type: "insight" })),
    ...filteredChallenges.map((item) => ({ ...item, _type: "challenge" })),
    ...filteredOurWays.map((item) => ({ ...item, _type: "ourWay" })),
  ];

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Main content area */}
        <div className="flex-1">
          {/* Search input */}
          <div className="mb-6 flex">
            <Input
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
              onPressEnter={handleSearch}
              className="border-gray-300 rounded-l-md"
              style={{ height: "2.5rem" }}
            />
            <button
              onClick={handleSearch}
              className="bg-[#032237] text-white px-4 py-2 rounded-r-md hover:bg-[#043a5e] transition-colors"
            >
              Search
            </button>
          </div>

          {/* Search results count */}
          <div className="mb-6">
            <h2 className="text-xl text-[#032237]">
              <span className="font-semibold">{allResults.length}</span> Results
              for{" "}
              <span className="font-semibold"> &quot;{searchQuery}&quot;</span>
            </h2>
          </div>

          {/* Results list */}
          <div className="space-y-6">
            {allResults.length > 0 ? (
              allResults.map((item) => (
                <Link
                  href={
                    item._type === "service"
                      ? `/services/${item._id}`
                      : item._type === "insight"
                      ? `/healthcare-horizon/${item._id}`
                      : item._type === "ourWay"
                      ? `/our-way`
                      : `/insights/challenges/${item._id}`
                  }
                  key={item._id}
                >
                  <div className="border-b pb-6 hover:bg-gray-50 p-2 -mx-2 rounded-md transition-colors">
                    {item.image || item.background ? (
                      <div className="flex gap-4">
                        <div className="w-24 h-24 shrink-0">
                          <Image
                            width={245450}
                            height={2354350}
                            src={
                              getImageUrl(item.image || item.background) ||
                              "/default-service.jpg"
                            }
                            alt={item.title}
                            className="w-full h-full object-cover rounded-md border"
                          />
                        </div>
                        <div>
                          <h3 className="font-medium text-[#ba9956] hover:underline mb-1">
                            {item.title}
                          </h3>
                          <p className="text-sm text-gray-600 mb-2">
                            {item.createdAt
                              ? new Date(item.createdAt).toLocaleDateString()
                              : "No date available"}
                          </p>
                          <p className="text-sm text-gray-700 line-clamp-2">
                            {item.description || "No description available."}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <h3 className="font-medium text-[#ba9956] hover:underline mb-1">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-2">
                          {item.createdAt
                            ? new Date(item.createdAt).toLocaleDateString()
                            : "No date available"}
                        </p>
                        <p className="text-sm text-gray-700">
                          {item.description || "No description available."}
                        </p>
                      </div>
                    )}
                  </div>
                </Link>
              ))
            ) : (
              <div className="text-center text-gray-500 py-8">
                No results found. Try a different search term.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Main page component with Suspense boundary
const SearchPage = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="h-[150px] flex items-center bg-gradientBg justify-center ">
        <h1 className="text-2xl font-bold">Search Results</h1>
      </div>
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-screen">
            <Spin size="large" />
          </div>
        }
      >
        <SearchContent />
      </Suspense>
      <Footer />
    </div>
  );
};

export default SearchPage;
