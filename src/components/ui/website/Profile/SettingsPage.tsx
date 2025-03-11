import { useState } from "react";
import EditProfile from "./settingsOptions/EditProfile";
import ChangePassword from "./settingsOptions/ChangePassword";
import LogOut from "./settingsOptions/LogOut";
import TermsAndConditions from "./settingsOptions/TermsAndConditions";
import PrivacyPolicy from "./settingsOptions/PrivacyPolicy";
import DeleteAccount from "./settingsOptions/DeleteAccount";

const SettingsPage = () => {
  const [selectedMenu, setSelectedMenu] = useState("menu1");

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
      <div className="py-20 md:h-[850px]">
        <div className="md:flex">
          {/* Left Menu */}
          <div className="p-4 bg-white w-[300px]">
            <button
              className={`block w-full p-2 ps-5 mb-2 text-left border rounded-lg border-[#032237] ${
                selectedMenu === "menu1" ? "bg-[#032237] text-white" : ""
              }`}
              onClick={() => setSelectedMenu("menu1")}
            >
              Edit Profile
            </button>
            <button
              className={`block w-full p-2 ps-5 mb-2 text-left border rounded-lg border-[#032237] ${
                selectedMenu === "menu2" ? "bg-[#032237] text-white" : ""
              }`}
              onClick={() => setSelectedMenu("menu2")}
            >
              Password Settings
            </button>
            <button
              className={`block w-full p-2 ps-5 mb-2 text-left border rounded-lg border-[#032237] ${
                selectedMenu === "menu3" ? "bg-[#032237] text-white" : ""
              }`}
              onClick={() => setSelectedMenu("menu3")}
            >
              Delete Account
            </button>
            <button
              className={`block w-full p-2 ps-5 mb-2 text-left border rounded-lg border-[#032237] ${
                selectedMenu === "menu4" ? "bg-[#032237] text-white" : ""
              }`}
              onClick={() => setSelectedMenu("menu4")}
            >
              Privacy Policy
            </button>
            <button
              className={`block w-full p-2 ps-5 mb-2 text-left border rounded-lg border-[#032237] ${
                selectedMenu === "menu5" ? "bg-[#032237] text-white" : ""
              }`}
              onClick={() => setSelectedMenu("menu5")}
            >
              Terms & Conditions
            </button>
            <button
              className={`block w-full p-2 ps-5 mb-2 text-left border rounded-lg border-[#032237] ${
                selectedMenu === "menu6" ? "bg-[#032237] text-white" : ""
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
