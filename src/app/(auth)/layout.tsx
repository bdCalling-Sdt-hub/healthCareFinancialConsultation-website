import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import Image from "next/image";
import React from "react";
import loginImage from "@/assets/authImg.jpg";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-white">
      <div>
        <Navbar />
        <div className="flex items-center gap-10 justify-center">
          <div className="w-[75%]">
            <Image
              className="object-cover w-full"
              width={5045450}
              height={5045540}
              src={loginImage}
              alt="Login"
            />
          </div>
          <div className="w-[50%]">{children}</div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default layout;
