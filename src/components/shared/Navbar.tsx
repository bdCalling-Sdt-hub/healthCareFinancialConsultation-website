"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { useEffect, useState, useRef } from "react";
import logo from "@/assets/logo.svg";
import { Plus_Jakarta_Sans } from "next/font/google";
import NavItems from "./NavItems";
import MobileDrawer from "./MobileDrawer";
import CustomDropdown from "../ui/CustomDropdown";
import { FaBell, FaSearch } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import randomImage from "@/assets/randomProfile3.jpg";
import { Badge, Spin, Input, Button } from "antd";
import { useGetUserProfileQuery } from "@/redux/apiSlices/authSlice";
import { getImageUrl } from "@/utils/getImageUrl";
import { useNotificationsQuery } from "@/redux/apiSlices/notificationSlice";
import {
  useGetAllServicesQuery,
  useGetAllTabsQuery,
} from "@/redux/apiSlices/serviceSlice";
import { useGetAllHorizonQuery } from "@/redux/apiSlices/horizonSlice";
import { useGetAllChallengesQuery } from "@/redux/apiSlices/challengeSlice";
import { useRouter } from "next/navigation";
import { useGetOurWaysQuery } from "@/redux/apiSlices/ourWaySlice";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Navbar = () => {
  const router = useRouter();
  const [showDrawer, setShowDrawer] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);

  console.log("sgvsbv", searchResults);

  // Close search dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setShowSearch(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Check if user is authenticated
  useEffect(() => {
    const token =
      localStorage.getItem("authenticationToken") ||
      sessionStorage.getItem("authenticationToken");
    setIsAuthenticated(!!token);
    setIsLoading(false);
  }, []);

  // Only call APIs if user is authenticated
  const { data: userData, isLoading: isProfileLoading } =
    useGetUserProfileQuery(undefined, {
      skip: !isAuthenticated,
    });

  const { data: allNotifications, isLoading: isNotificationLoading } =
    useNotificationsQuery(undefined, {
      skip: !isAuthenticated,
    });
  const { data: allServices, isLoading: isServiceLoading } =
    useGetAllServicesQuery(undefined);

  const { data: allInsights, isLoading: isInsightLoading } =
    useGetAllHorizonQuery(undefined);

  const { data: allChallenges, isLoading: isChallengeLoading } =
    useGetAllChallengesQuery(undefined);

  const { data: allOurWays, isLoading: isOurWayLoading } =
    useGetOurWaysQuery(undefined);

  const { data: allTabs, isLoading: isTabLoading } =
    useGetAllTabsQuery(undefined);

  const servicesData = allServices?.data;
  const insightsData = allInsights?.data;
  const challengesData = allChallenges?.data;
  const ourWaysData = allOurWays?.data;
  const tabsData = allTabs?.data;

  // Show loading only when authenticated and APIs are loading
  if (
    isLoading ||
    (isAuthenticated &&
      (isProfileLoading ||
        isNotificationLoading ||
        isServiceLoading ||
        isInsightLoading ||
        isChallengeLoading ||
        isOurWayLoading ||
        isTabLoading))
  ) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spin />
      </div>
    );
  }

  const userInfo = userData?.data;
  const notificationCount = isAuthenticated
    ? allNotifications?.data?.filter(
        (notification: any) => notification?.isRead === false
      ).length
    : 0;

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim() === "") {
      setSearchResults([]);
      return;
    }

    // Filter services with enhanced search
    const filteredServices =
      servicesData?.filter(
        (service: any) =>
          service?.title?.toLowerCase()?.includes(query.toLowerCase()) ||
          service?.description?.toLowerCase()?.includes(query.toLowerCase())
      ) || [];

    // Filter insights with enhanced search
    const filteredInsights =
      insightsData?.filter(
        (insight: any) =>
          insight?.title?.toLowerCase()?.includes(query.toLowerCase()) ||
          insight?.description?.toLowerCase()?.includes(query.toLowerCase()) ||
          insight?.sections?.filter(
            (section: any) =>
              section?.title?.toLowerCase()?.includes(query.toLowerCase()) ||
              section?.bars?.filter(
                (bar: any) =>
                  bar?.title?.toLowerCase()?.includes(query.toLowerCase()) ||
                  bar?.body?.filter((item: any) =>
                    item.toLowerCase().includes(query.toLowerCase())
                  )?.length > 0
              )?.length > 0
          )?.length > 0
      ) || [];

    // Filter challenges with enhanced search
    const filteredChallenges =
      challengesData?.filter(
        (challenge: any) =>
          challenge?.title?.toLowerCase()?.includes(query.toLowerCase()) ||
          challenge?.description
            ?.toLowerCase()
            ?.includes(query.toLowerCase()) ||
          challenge?.footer?.toLowerCase()?.includes(query.toLowerCase()) ||
          challenge?.contents?.filter(
            (content: any) =>
              content?.title?.toLowerCase()?.includes(query.toLowerCase()) ||
              content?.description
                ?.toLowerCase()
                ?.includes(query.toLowerCase()) ||
              content?.details?.filter((item: any) =>
                item.toLowerCase().includes(query.toLowerCase())
              )?.length > 0
          )?.length > 0
      ) || [];

    // Filter our ways with enhanced search
    const filteredOurWays =
      ourWaysData?.filter(
        (ourWay: any) =>
          ourWay?.title?.toLowerCase()?.includes(query.toLowerCase()) ||
          ourWay?.description?.toLowerCase()?.includes(query.toLowerCase()) ||
          ourWay?.label?.toLowerCase()?.includes(query.toLowerCase()) ||
          ourWay?.footer?.toLowerCase()?.includes(query.toLowerCase()) ||
          ourWay?.contents?.filter(
            (content: any) =>
              content?.heading?.toLowerCase()?.includes(query.toLowerCase()) ||
              content?.body?.toLowerCase()?.includes(query.toLowerCase())
          )?.length > 0
      ) || [];

    //tabs
    const filteredTabs = tabsData?.filter(
      (tab: any) =>
        tab?.tabName?.toLowerCase()?.includes(searchQuery.toLowerCase()) ||
        tab?.contents?.filter(
          (content: any) =>
            content?.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            content?.descriptions?.filter((description: any) =>
              description?.toLowerCase().includes(searchQuery.toLowerCase())
            ).length > 0
        ).length > 0
    );

    // Combine and tag results
    const combinedResults = [
      ...filteredServices.map((item: any) => ({ ...item, _type: "service" })),
      ...filteredInsights.map((item: any) => ({ ...item, _type: "insight" })),
      ...filteredChallenges.map((item: any) => ({
        ...item,
        _type: "challenge",
      })),
      ...filteredOurWays.map((item: any) => ({
        ...item,
        _type: "ourWay",
      })),
      ...filteredTabs.map((item: any) => ({
        ...item,
        _type: "tab",
      })),
    ];

    setSearchResults(combinedResults);
  };

  // Navigate to search page with query
  const handleViewAllResults = () => {
    router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    setShowSearch(false);
  };

  const items = [
    { key: "insights", label: "Our Insights", path: "/insights" },
    { key: "services", label: "Services", path: "/services" },
    { key: "our-way", label: "Our Way", path: "/our-way" },
    { key: "about", label: "About", path: "/aboutUs" },
    { key: "contact-us", label: "Contact Us", path: "/contactUs" },
  ];

  //   const items2: MenuProps["items"] = [
  //     {
  //       label: (
  //         <Link
  //           href={"/login"}
  //           onClick={() => {
  //             localStorage.removeItem("authenticationToken");
  //             localStorage.removeItem("refreshToken");
  //             localStorage.removeItem("role");
  //             localStorage.removeItem("cart");
  //             sessionStorage.removeItem("authenticationToken");
  //             sessionStorage.removeItem("refreshToken");
  //             sessionStorage.removeItem("role");
  //             window.location.reload();
  //           }}
  //         >
  //           Logout
  //         </Link>
  //       ),
  //       key: "0",
  //     },
  //   ];

  return (
    <div className={`${plusJakarta.className}`}>
      {/* Navbar */}
      <header
        className={`bg-[#032237] shadow w-full transition-all duration-300 ${
          showSearch ? "h-[200px]" : "h-[100px]"
        }`}
      >
        <nav className="max-w-[1800px] mx-auto h-full relative z-10 w-full">
          {!showSearch ? (
            // Regular Navbar
            <div className="flex justify-between items-center h-full w-full">
              <div className="flex items-center lg:gap-0 gap-1">
                <div className="md:hidden">
                  <AiOutlineMenu
                    onClick={() => setShowDrawer(!showDrawer)}
                    className="text-primaryText text-white cursor-pointer"
                    size={24}
                  />
                </div>
                {/* Logo */}
                <Link href={"/"}>
                  <Image
                    alt="Logo"
                    src={logo}
                    width={4654646698985}
                    height={45634560}
                    className="md:w-full md:h-24 w-28 h-14"
                  />
                </Link>
              </div>
              {/* Nav Items for Desktop */}
              <div className="hidden md:flex p-2 items-center gap-5">
                <NavItems items={items} />
              </div>

              <div className="flex items-center gap-4">
                <div className="relative">
                  <FaSearch
                    size={24}
                    color="#F0E595"
                    className="cursor-pointer"
                    onClick={() => setShowSearch(true)}
                  />
                </div>

                <div className="hidden md:block w-40">
                  <CustomDropdown />
                </div>

                {/* Login and Profile */}
                {!isAuthenticated || userInfo?.role !== "user" ? (
                  <Link href="/login">
                    <button className="bg-gradientBg px-10 py-2 rounded-md">
                      Login
                    </button>
                  </Link>
                ) : (
                  <div className="flex items-center gap-2">
                    <div className="mr-3">
                      <Link href={"/notifications"}>
                        <Badge count={notificationCount} offset={[-3, 4]}>
                          <FaBell
                            className="text-primaryText text-[#ba9956] cursor-pointer"
                            size={25}
                          />
                        </Badge>
                      </Link>
                    </div>

                    <Link href={"/profile"}>
                      <div className="flex items-center gap-2 cursor-pointer text-white">
                        <Image
                          alt="Profile"
                          src={
                            userInfo?.profile
                              ? getImageUrl(userInfo?.profile)
                              : randomImage
                          }
                          width={4654646}
                          height={45634560}
                          className="w-12 h-12 border object-cover border-[#ba9956] rounded-full"
                        />
                      </div>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ) : (
            // Search Mode Navbar
            <div
              className="flex flex-col justify-center h-full w-full px-4"
              ref={searchRef}
            >
              <div className="flex items-center justify-between mb-4">
                {/* Logo */}
                <Link href={"/"}>
                  <Image
                    alt="Logo"
                    src={logo}
                    width={4654646698985}
                    height={45634560}
                    className="md:w-full md:h-16 w-28 h-10"
                  />
                </Link>

                {/* Close button */}
                <button
                  onClick={() => {
                    setShowSearch(false);
                    setSearchQuery("");
                    setSearchResults([]);
                  }}
                  className="text-white hover:text-[#F0E595] transition-colors"
                >
                  <IoMdClose size={28} />
                </button>
              </div>

              {/* Search input */}
              <div className="w-full">
                <Input
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  autoFocus
                  className="text-lg py-3 px-6 rounded-lg border-2 border-[#ba9956]"
                  suffix={<FaSearch size={20} color="#ba9956" />}
                  style={{ fontSize: "1.1rem", height: "3rem" }}
                />

                {/* Quick search results */}
                {searchQuery.trim() !== "" && (
                  <div className="absolute left-0 right-0 bg-white shadow-lg rounded-b-lg mt-1 max-w-[1800px] mx-auto z-50">
                    {searchResults.length > 0 ? (
                      <>
                        <div className="p-4">
                          {searchResults.slice(0, 3).map((item) => (
                            <Link
                              href={
                                item._type === "service"
                                  ? `/services/${item._id}`
                                  : item._type === "insight"
                                  ? `/healthcare-horizon/${item._id}`
                                  : item._type === "ourWay"
                                  ? `/our-way`
                                  : item._type === "tab"
                                  ? `/services/${item.service}`
                                  : `/insights/challenges/${item._id}`
                              }
                              key={item._id}
                              onClick={() => setShowSearch(false)}
                            >
                              <div className="flex items-center gap-3 p-3 hover:bg-gray-100 rounded-lg cursor-pointer transition">
                                {(item?.image ||
                                  item?.background ||
                                  item?.images) && (
                                  <img
                                    src={
                                      getImageUrl(
                                        item?.image ||
                                          item?.background ||
                                          item?.images[0]
                                      ) || "/default-service.jpg"
                                    }
                                    alt={item?.title}
                                    className="w-12 h-12 object-cover rounded-md border"
                                  />
                                )}
                                <div>
                                  <div className="font-medium text-[#032237] flex items-center gap-2">
                                    {item?.title || item?.tabName}
                                    <span className="text-xs bg-gray-200 text-gray-700 px-2 py-0.5 rounded">
                                      {item._type === "service"
                                        ? "Service"
                                        : item._type === "insight"
                                        ? "Insight"
                                        : item._type === "ourWay"
                                        ? "Our Way"
                                        : item._type === "tab"
                                        ? "Service Tab"
                                        : "Challenge"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>

                        {searchResults.length > 3 && (
                          <div className="p-3 border-t text-center">
                            <Button
                              type="link"
                              onClick={handleViewAllResults}
                              className="text-[#ba9956] hover:text-[#8a7341]"
                            >
                              View all {searchResults.length} results
                            </Button>
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="p-4 text-gray-500 text-center">
                        No services, insights, or challenges found
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}
        </nav>

        {/* Mobile Drawer */}
        <MobileDrawer open={showDrawer} setOpen={setShowDrawer} items={items} />
      </header>
    </div>
  );
};

export default Navbar;
