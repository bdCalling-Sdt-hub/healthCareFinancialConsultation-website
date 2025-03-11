import profileImage from "@/assets/randomProfile3.jpg";
import Image from "next/image";

const profileData = {
  image: profileImage,
  name: "John Doe",
  company: "The Jonas Northern Hospital",
};

const ProfileBanner = () => {
  return (
    <div className="relative">
      <div className="h-[150px] bg-gradientBg"></div>
      <div className="absolute top-200 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center">
        <Image
          alt="Profile"
          src={profileData.image}
          width={4654646}
          height={45634560}
          className="w-40 h-40 rounded-full"
        />
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold">{profileData.name}</h1>
          <p className="text-gray-700">{profileData.company}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;
