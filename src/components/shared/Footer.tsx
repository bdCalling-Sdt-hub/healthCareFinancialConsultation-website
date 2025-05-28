"use client";

import React from "react";
import { MailOutlined, PhoneOutlined } from "@ant-design/icons";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import Image from "next/image";
import logo from "@/assets/logo.svg";
import Link from "next/link";
import { useGetFooterApiQuery } from "@/redux/apiSlices/publicSlice";
import { Spin } from "antd";

const Footer = () => {
  const { data: footerData, isLoading } = useGetFooterApiQuery(undefined);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spin />
      </div>
    );
  }

  const currentYear = new Date().getFullYear(); // Get the current yea

  const footerInfo = footerData?.data;
  // //console.log("footerr", footerInfo);

  return (
    <footer className="bg-[#032237] pt-10">
      <div className="container mx-auto px-5 md:px-10 lg:px-20 md:flex space-y-8 md:space-y-0 justify-between items-center gap-8">
        {/* Left Section */}
        <div className="md:w-[25%]">
          <div className="flex items-center space-x-3 mb-4">
            <Image
              src={logo}
              alt="HC Financial Consultants"
              className="w-40 h-26"
            />
          </div>
          <p className="text-transparent bg-gradientBg bg-clip-text">
            {footerInfo?.footerDescription}
          </p>
          <div className="mt-4 flex space-x-3">
            {footerInfo?.facebook && (
              <Link
                href={footerInfo.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF
                  size={36}
                  className="text-xl bg-gradientBg p-2 rounded-full"
                />
              </Link>
            )}

            {footerInfo?.x && (
              <Link
                href={footerInfo.x}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter
                  size={36}
                  className="text-xl bg-gradientBg p-2 rounded-full"
                />
              </Link>
            )}

            {footerInfo?.linkedin && (
              <Link
                href={footerInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn
                  size={36}
                  className="text-xl bg-gradientBg p-2 rounded-full"
                />
              </Link>
            )}

            {footerInfo?.instagram && (
              <Link
                href={footerInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram
                  size={36}
                  className="text-xl bg-gradientBg p-2 rounded-full"
                />
              </Link>
            )}
          </div>
        </div>

        {/* Middle Section */}
        <div className="md:flex justify-around items-center gap-8 space-y-8 md:space-y-0 md:w-[50%]">
          <div className="text-transparent bg-gradientBg bg-clip-text">
            <h3 className="font-bold text-lg mb-5">Pages</h3>
            <ul className="text-transparent bg-gradientBg bg-clip-text space-y-2 mt-2">
              <Link href={"/"}>
                <li>Home Page</li>
              </Link>
              <Link href={"/services"}>
                <li>Services</li>
              </Link>
              <Link href={"/insights"}>
                <li>Insight</li>
              </Link>
              <Link href={"/aboutUs"}>
                <li>About</li>
              </Link>
            </ul>
          </div>
          <div className="text-transparent bg-gradientBg bg-clip-text">
            <h3 className="font-bold text-lg mb-5">Support</h3>
            <ul className="text-transparent bg-gradientBg bg-clip-text space-y-2 mt-2">
              <Link href="/terms-and-conditions">
                <li>Terms & Conditions</li>
              </Link>
              <Link href="/privacy-policy">
                <li>Privacy Policy</li>
              </Link>
              <Link href="/login">
                <li>Log In</li>
              </Link>
              <Link href="/faq">
                <li>FAQ</li>
              </Link>
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-[25%] text-transparent bg-gradientBg bg-clip-text">
          <h3 className="font-bold text-lg mb-5">Contact Us</h3>
          <div className="mt-2">
            <p className="flex items-center gap-2">
              <PhoneOutlined className="!text-[#b99755]" /> {}
              {footerInfo?.contact}
            </p>
            <p className="flex items-center gap-2 mt-2">
              <MailOutlined className="!text-[#b99755]" /> {footerInfo?.email}
            </p>
          </div>
          <Link href={"/book-your-consultation"}>
            <button className="mt-4 bg-gradientBg text-black font-semibold px-6 py-2 rounded-md">
              Book Now
            </button>
          </Link>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 pb-3 bg-gradientBg text-center border-t border-gray-600 pt-4">
        <p className="text-black">
          &copy; {currentYear} All rights reserved by HC Financial Consultants.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
