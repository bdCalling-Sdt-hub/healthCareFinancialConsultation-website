"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import logo from "@/assets/logo.svg";
import { Plus_Jakarta_Sans } from "next/font/google";
import NavItems from "./NavItems";
import MobileDrawer from "./MobileDrawer";
import CustomDropdown from "../ui/CustomDropdown";
import { FaBell } from "react-icons/fa";
import randomImage from "@/assets/randomImage22.jpg";
import { Badge } from "antd";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Navbar = () => {
  const [showDrawer, setShowDrawer] = useState(false);

  const items = [
    { key: "our-insights", label: "Our Insights", path: "/our-insights" },
    { key: "services", label: "Services", path: "/services" },
    { key: "how-we-work", label: "How We Work", path: "/how-we-work" },
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
        <nav className="container h-[100px] relative z-10 w-full">
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
                  width={4654646}
                  height={45634560}
                  className="w-36 h-16"
                />
              </Link>
            </div>
            {/* Nav Items for Desktop */}
            <div className="hidden md:flex p-2 items-center gap-5">
              <NavItems items={items} />
            </div>

            <div className="flex items-center gap-2">
              <Badge count={3} offset={[-3, 4]}>
                <FaBell
                  className="text-primaryText text-[#ba9956] cursor-pointer"
                  size={25}
                />
              </Badge>
              <CustomDropdown />
              {/* <Link href="/login">
                <button className="bg-gradientBg px-10 py-2 rounded-md">
                  Login
                </button>
              </Link> */}
              <Link href={"/profile"}>
                <div className="flex items-center gap-2 cursor-pointer text-white">
                  <Image
                    alt="Profile"
                    src={randomImage}
                    width={4654646}
                    height={45634560}
                    className="w-10 h-10 rounded-full"
                  />
                  <h1 className="text-lg font-[500]">John Doe</h1>
                </div>
              </Link>
            </div>
          </div>
        </nav>

        {/* Mobile Drawer */}
        <MobileDrawer
          open={showDrawer}
          setOpen={setShowDrawer}
          items={items}
          userProfile={""}
          adminProfile={""}
          cartItems={[]}
          count={0}
        />
      </header>
    </div>
  );
};

export default Navbar;
