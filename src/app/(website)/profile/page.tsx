"use client";

import { ConfigProvider, Tabs } from "antd";
import ProfileBanner from "@/components/ui/website/Profile/ProfileBanner";
import BookingHistory from "@/components/ui/website/Profile/BookingHistory";
import PaymentHistory from "@/components/ui/website/Profile/PaymentHistory";
import SettingsPage from "@/components/ui/website/Profile/SettingsPage";

const clientData = {
  clientName: "John Doe",
  industryName: "The Jonas Hospital",
  email: "johndoe@gmail.com",
  phone: "+728974308485",
  location: "Buffalo, The USA",
  serviceType: "Revenue Integrity & Compliance",
};

<style jsx global>{`
  .custom-tabs .ant-tabs-nav {
    display: flex;
    justify-content: space-between;
  }
`}</style>;

const ProfilePage = () => {
  const items = [
    {
      label: "Profile Information",
      key: "1",
      children: (
        <div>
          <div className="rounded-xl border mt-10 p-6 w-full max-w-lg mx-auto">
            <div className="grid grid-cols-2 gap-y-4 text-gray-700">
              <span className="font-medium">Client Name:</span>
              <span>{clientData.clientName}</span>

              <span className="font-medium">Industry Name:</span>
              <span>{clientData.industryName}</span>

              <span className="font-medium">E-mail:</span>
              <span>{clientData.email}</span>

              <span className="font-medium">Phone:</span>
              <span>{clientData.phone}</span>

              <span className="font-medium">Location:</span>
              <span>{clientData.location}</span>

              <span className="font-medium">Service Type:</span>
              <span>{clientData.serviceType}</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      label: "Booking History",
      key: "2",
      children: (
        <div className="mt-10">
          <BookingHistory />
        </div>
      ),
    },
    {
      label: "Payment History",
      key: "3",
      children: (
        <div className="mt-10">
          <PaymentHistory />
        </div>
      ),
    },
    {
      label: "Settings",
      key: "4",
      children: (
        <div className="mt-10 w-full">
          <SettingsPage />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[1500px]">
      <ProfileBanner />
      <div className="mt-40 container">
        <ConfigProvider
          theme={{
            components: {
              Tabs: {
                fontSize: 20,
              },
            },
          }}
        >
          <Tabs className="custom-tabs" items={items} defaultActiveKey="1" />
        </ConfigProvider>
      </div>
    </div>
  );
};

export default ProfilePage;
