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
import randomImage from "@/assets/randomProfile3.jpg";
import { Badge, Spin, Input } from "antd";
import { useGetUserProfileQuery } from "@/redux/apiSlices/authSlice";
import { getImageUrl } from "@/utils/getImageUrl";
import { useNotificationsQuery } from "@/redux/apiSlices/notificationSlice";
import { useGetAllServicesQuery } from "@/redux/apiSlices/serviceSlice";
import { useGetAllHorizonQuery } from "@/redux/apiSlices/horizonSlice";
import { useGetAllChallengesQuery } from "@/redux/apiSlices/challengeSlice";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Navbar = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);

  // Sample services data - replace with your actual data or API call

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

  const servicesData = allServices?.data;
  const insightsData = allInsights?.data;
  const challengesData = allChallenges?.data;
  // console.log(servicesData);

  // Show loading only when authenticated and APIs are loading
  if (
    isLoading ||
    (isAuthenticated &&
      (isProfileLoading ||
        isNotificationLoading ||
        isServiceLoading ||
        isInsightLoading ||
        isChallengeLoading)) // <-- Add isChallengeLoading here
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

    // Filter services, insights, and challenges based on search query
    const filteredServices =
      servicesData?.filter((service: any) =>
        service?.title?.toLowerCase()?.includes(query.toLowerCase())
      ) || [];
    const filteredInsights =
      insightsData?.filter((insight: any) =>
        insight?.title?.toLowerCase()?.includes(query.toLowerCase())
      ) || [];
    const filteredChallenges =
      challengesData?.filter((challenge: any) =>
        challenge?.title?.toLowerCase()?.includes(query.toLowerCase())
      ) || [];

    // Combine and tag results
    const combinedResults = [
      ...filteredServices.map((item: any) => ({ ...item, _type: "service" })),
      ...filteredInsights.map((item: any) => ({ ...item, _type: "insight" })),
      ...filteredChallenges.map((item: any) => ({
        ...item,
        _type: "challenge",
      })),
    ];

    setSearchResults(combinedResults);
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
      {/* 2nd navbar */}
      <header className={`bg-[#032237] shadow w-full`}>
        <nav className="max-w-[1800px] mx-auto h-[100px] relative z-10 w-full">
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
              <div className="relative" ref={searchRef}>
                <FaSearch
                  size={24}
                  color="#F0E595"
                  className="cursor-pointer"
                  onClick={() => setShowSearch(!showSearch)}
                />

                {/* Full-width Search Dropdown */}
                {showSearch && (
                  <div className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-40 z-50 flex flex-col items-center justify-start">
                    {/* Click outside to close */}
                    <div
                      className="absolute inset-0"
                      onClick={() => setShowSearch(false)}
                      style={{ zIndex: 0 }}
                    />
                    <div className="w-full max-w-2xl mt-16 bg-white rounded-xl shadow-lg p-8 relative z-10">
                      <Input
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                        autoFocus
                        className="mb-6 text-xl py-4 px-6 rounded-lg border-2 border-[#ba9956]"
                        suffix={<FaSearch size={20} color="#ba9956" />}
                        style={{ fontSize: "1.25rem", height: "3.5rem" }}
                      />

                      {/* Search Results */}
                      {searchResults?.length > 0 ? (
                        <div className="max-h-[60vh] overflow-y-auto space-y-4">
                          {searchResults?.map((item) => (
                            <Link
                              href={
                                item._type === "service"
                                  ? `/services/${item._id}`
                                  : item._type === "insight"
                                  ? `/healthcare-horizon/${item._id}`
                                  : `/insights/challenges/${item._id}` // For challenge type
                              }
                              key={item._id}
                              onClick={() => setShowSearch(false)}
                              className="block"
                            >
                              <div className="flex items-center gap-4 p-4 hover:bg-gray-100 rounded-lg cursor-pointer transition">
                                <img
                                  src={
                                    getImageUrl(
                                      item.image || item.background
                                    ) || "/default-service.jpg"
                                  }
                                  alt={item.title}
                                  className="w-20 h-20 object-cover rounded-md border"
                                />
                                <div>
                                  <div className="font-bold text-lg text-[#032237] flex items-center gap-2">
                                    {item.title}
                                    <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded ml-2">
                                      {item._type === "service"
                                        ? "Service"
                                        : item._type === "insight"
                                        ? "Insight"
                                        : "Challenge"}
                                    </span>
                                  </div>
                                  <div className="text-gray-600 text-sm line-clamp-2">
                                    {item.description ||
                                      "No description available."}
                                  </div>
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      ) : searchQuery.trim() !== "" ? (
                        <div className="p-4 text-gray-500 text-center">
                          No services, insights, or challenges found
                        </div>
                      ) : null}
                    </div>
                  </div>
                )}
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

                      {/* <h1 className="text-lg font-[500]">{userInfo?.name}</h1> */}
                    </div>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </nav>

        {/* Mobile Drawer */}
        <MobileDrawer open={showDrawer} setOpen={setShowDrawer} items={items} />
      </header>
    </div>
  );
};

export default Navbar;
