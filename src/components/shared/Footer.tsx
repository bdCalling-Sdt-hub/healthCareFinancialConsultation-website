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

const Footer = () => {
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
            Authentic Job Bulletins for Influencer. Friendly for brands to
            create campaigns.
          </p>
          <div className="mt-4 flex space-x-3">
            <FaFacebookF
              size={36}
              className="text-xl bg-gradientBg p-2 rounded-full"
            />
            <FaTwitter
              size={36}
              className="text-xl bg-gradientBg p-2 rounded-full"
            />
            <FaLinkedinIn
              size={36}
              className="text-xl bg-gradientBg p-2 rounded-full"
            />
            <FaInstagram
              size={36}
              className="text-xl bg-gradientBg p-2 rounded-full"
            />
          </div>
        </div>

        {/* Middle Section */}
        <div className="md:flex justify-around items-center gap-8 space-y-8 md:space-y-0 md:w-[50%]">
          <div className="text-transparent bg-gradientBg bg-clip-text">
            <h3 className="font-bold text-lg mb-5">Pages</h3>
            <ul className="text-transparent bg-gradientBg bg-clip-text space-y-2 mt-2">
              <li>Home Page</li>
              <li>Services</li>
              <li>Insight</li>
              <li>About</li>
            </ul>
          </div>
          <div className="text-transparent bg-gradientBg bg-clip-text">
            <h3 className="font-bold text-lg mb-5">Support</h3>
            <ul className="text-transparent bg-gradientBg bg-clip-text space-y-2 mt-2">
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Log In</li>
              <li>FAQ</li>
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-[25%] text-transparent bg-gradientBg bg-clip-text">
          <h3 className="font-bold text-lg mb-5">Contact Us</h3>
          <div className="mt-2">
            <p className="flex items-center gap-2">
              <PhoneOutlined className="!text-[#b99755]" /> 317-449-3031
            </p>
            <p className="flex items-center gap-2 mt-2">
              <MailOutlined className="!text-[#b99755]" /> support@gsahd.com
            </p>
          </div>
          <button className="mt-4 bg-gradientBg text-black font-semibold px-6 py-2 rounded-md">
            Book Now
          </button>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 pb-3 bg-gradientBg text-center border-t border-gray-600 pt-4">
        <p className="text-black">
          &copy; All rights reserved by HC Financial Consultant.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
