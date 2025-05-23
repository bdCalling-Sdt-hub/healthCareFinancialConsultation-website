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
  const services = [
    { id: 1, name: "General Checkup" },
    { id: 2, name: "Dental Care" },
    { id: 3, name: "Eye Care" },
    { id: 4, name: "Cardiology" },
    { id: 5, name: "Neurology" },
    { id: 6, name: "Orthopedics" },
  ];

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

  const servicesData = allServices?.data;
  console.log(servicesData);

  // Show loading only when authenticated and APIs are loading
  if (
    isLoading ||
    (isAuthenticated &&
      (isProfileLoading || isNotificationLoading || isServiceLoading))
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

    // Filter services based on search query
    const filteredResults = servicesData?.filter((service: any) =>
      service?.title?.toLowerCase()?.includes(query.toLowerCase())
    );
    setSearchResults(filteredResults);
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
                  color="#ba9956"
                  className="cursor-pointer"
                  onClick={() => setShowSearch(!showSearch)}
                />

                {/* Search Dropdown */}
                {showSearch && (
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg p-3 z-20">
                    <Input
                      placeholder="Search services..."
                      value={searchQuery}
                      onChange={handleSearchChange}
                      autoFocus
                      className="mb-2"
                      suffix={<FaSearch size={16} color="#ba9956" />}
                    />

                    {/* Search Results */}
                    {searchResults?.length > 0 ? (
                      <div className="max-h-60 overflow-y-auto">
                        {searchResults.map((service) => (
                          <Link
                            href={`/services/${service._id}`}
                            key={service._id}
                          >
                            <div
                              className="p-2 hover:bg-gray-100 cursor-pointer rounded-md"
                              onClick={() => setShowSearch(false)}
                            >
                              {service.title}
                            </div>
                          </Link>
                        ))}
                      </div>
                    ) : searchQuery.trim() !== "" ? (
                      <div className="p-2 text-gray-500">No services found</div>
                    ) : null}
                  </div>
                )}
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
                  <div className="hidden md:block w-40">
                    <CustomDropdown />
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
