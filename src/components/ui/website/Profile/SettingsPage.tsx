import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import EditProfile from "./settingsOptions/EditProfile";
import ChangePassword from "./settingsOptions/ChangePassword";
import LogOut from "./settingsOptions/LogOut";
import TermsAndConditions from "./settingsOptions/TermsAndConditions";
import PrivacyPolicy from "./settingsOptions/PrivacyPolicy";
import DeleteAccount from "./settingsOptions/DeleteAccount";

const SettingsPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedMenu, setSelectedMenu] = useState(searchParams.get("menu") || "menu1");

  useEffect(() => {
    const menu = searchParams.get("menu");
    if (menu) {
      setSelectedMenu(menu);
    }
  }, [searchParams]);

  const handleMenuClick = (menu: string) => {
    setSelectedMenu(menu);
    router.replace(`/profile?tab=4&menu=${menu}`, { scroll: false });
  };

  const renderContent = () => {
    switch (selectedMenu) {
      case "menu1":
        return (
          <div>
            <EditProfile />
          </div>
        );
      case "menu2":
        return (
          <div>
            <ChangePassword />
          </div>
        );
      case "menu3":
        return (
          <div>
            <DeleteAccount />
          </div>
        );
      case "menu4":
        return (
          <div>
            <PrivacyPolicy />
          </div>
        );
      case "menu5":
        return (
          <div>
            <TermsAndConditions />
          </div>
        );
      case "menu6":
        return (
          <div>
            <LogOut />
          </div>
        );
      default:
        return <div>Select a menu item</div>;
    }
  };

  return (
    <div>
      <div className="py-20">
        <div className="md:flex">
          {/* Left Menu */}
          <div className="p-4 bg-white w-[300px]">
            <button
              className={`block w-full p-2 ps-5 mb-2 text-left border rounded-lg border-[#032237] ${
                selectedMenu === "menu1"
                  ? "bg-[#032237] text-white"
                  : "hover:bg-[#324e63] hover:text-white transition-transform duration-300 hover:scale-105"
              }`}
              onClick={() => handleMenuClick("menu1")}
            >
              Edit Profile
            </button>
            <button
              className={`block w-full p-2 ps-5 mb-2 text-left border rounded-lg border-[#032237] ${
                selectedMenu === "menu2"
                  ? "bg-[#032237] text-white"
                  : "hover:bg-[#324e63] hover:text-white transition-transform duration-300 hover:scale-105"
              }`}
              onClick={() => handleMenuClick("menu2")}
            >
              Password Settings
            </button>
            <button
              className={`block w-full p-2 ps-5 mb-2 text-left border rounded-lg border-[#032237] ${
                selectedMenu === "menu3"
                  ? "bg-[#032237] text-white"
                  : "hover:bg-[#324e63] hover:text-white transition-transform duration-300 hover:scale-105"
              }`}
              onClick={() => setSelectedMenu("menu3")}
            >
              Delete Account
            </button>
            <button
              className={`block w-full p-2 ps-5 mb-2 text-left border rounded-lg border-[#032237] ${
                selectedMenu === "menu4"
                  ? "bg-[#032237] text-white"
                  : "hover:bg-[#324e63] hover:text-white transition-transform duration-300 hover:scale-105"
              }`}
              onClick={() => setSelectedMenu("menu4")}
            >
              Privacy Policy
            </button>
            <button
              className={`block w-full p-2 ps-5 mb-2 text-left border rounded-lg border-[#032237] ${
                selectedMenu === "menu5"
                  ? "bg-[#032237] text-white"
                  : "hover:bg-[#324e63] hover:text-white transition-transform duration-300 hover:scale-105"
              }`}
              onClick={() => setSelectedMenu("menu5")}
            >
              Terms & Conditions
            </button>
            <button
              className={`block w-full p-2 ps-5 mb-2 text-left border rounded-lg border-[#032237] ${
                selectedMenu === "menu6"
                  ? "bg-[#032237] text-white"
                  : "hover:bg-[#324e63] hover:text-white transition-transform duration-300 hover:scale-105"
              }`}
              onClick={() => setSelectedMenu("menu6")}
            >
              Sign Out
            </button>
          </div>

          {/* Right Content */}
          <div className="md:w-[70%] p-4">{renderContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
