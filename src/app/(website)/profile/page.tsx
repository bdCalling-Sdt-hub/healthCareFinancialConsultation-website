"use client";

import { ConfigProvider, Spin, Tabs } from "antd";
import ProfileBanner from "@/components/ui/website/Profile/ProfileBanner";
import BookingHistory from "@/components/ui/website/Profile/BookingHistory";
import PaymentHistory from "@/components/ui/website/Profile/PaymentHistory";
import SettingsPage from "@/components/ui/website/Profile/SettingsPage";
import { useGetUserProfileQuery } from "@/redux/apiSlices/authSlice";

<style jsx global>{`
  .custom-tabs .ant-tabs-nav {
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 768px) {
    .custom-tabs .ant-tabs-nav {
      flex-direction: column;
      align-items: center;
    }
  }
`}</style>;

const ProfilePage = () => {
  const { data: userData, isLoading } = useGetUserProfileQuery(undefined);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spin />
      </div>
    );
  }

  const userDataDetails = userData?.data;
  console.log(userDataDetails);

  const items = [
    {
      label: "Profile Information",
      key: "1",
      children: (
        <div>
          <div className="rounded-xl border mt-10 p-6 w-full max-w-lg mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 text-gray-700">
              <span className="font-medium">Client Name:</span>
              <span>{userDataDetails?.name}</span>

              <span className="font-medium">Industry Name:</span>
              <span>{userDataDetails?.industry}</span>

              <span className="font-medium">E-mail:</span>
              <span>{userDataDetails?.email}</span>

              <span className="font-medium">Phone:</span>
              <span>{userDataDetails?.phone}</span>

              <span className="font-medium">Address:</span>
              <span>{userDataDetails?.address}</span>

              <span className="font-medium">About:</span>
              <span>{userDataDetails?.about}</span>
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
    <div className="min-h-screen">
      <ProfileBanner />
      <div className="mt-32 md:mt-40 container mx-auto px-4">
        <ConfigProvider
          theme={{
            components: {
              Tabs: {
                fontSize: 16,
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
