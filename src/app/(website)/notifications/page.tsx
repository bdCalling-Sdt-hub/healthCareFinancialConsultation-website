"use client";

import Image from "next/image";

import {
  useNotificationsQuery,
  useReadNotificationMutation,
} from "@/redux/apiSlices/notificationSlice";
import { Spin } from "antd";
import { getImageUrl } from "@/utils/getImageUrl";

// Type definition for notification data
interface Notification {
  _id: string;
  receiver: {
    _id: string;
    name: string;
    profile: string;
  };
  sender: {
    _id: string;
    name: string;
    profile: string;
  };
  title: string;
  body: string;
  isRead: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const Notifications = () => {
  const { data: allNotifications, isLoading } =
    useNotificationsQuery(undefined);
  const [readNotification] = useReadNotificationMutation();
  // const [markAllAsRead, setMarkAllAsRead] = useState(false);

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen">
        <Spin />
      </div>
    );

  const notificationsData = allNotifications?.data || [];
  // console.log(notificationsData);

  // const handleMarkAllAsRead = () => {
  //   setMarkAllAsRead(true);
  //   // Here you would typically call an API to mark all notifications as read
  //   // For now, we're just updating the UI state
  // };

  // Handle reading a single notification
  const handleReadNotification = async (id: string) => {
    try {
      await readNotification(id).unwrap();
      // The notification list will be automatically refreshed due to invalidatesTags in the slice
    } catch (error) {
      console.error("Failed to mark notification as read:", error);
    }
  };

  // Format date to a more readable format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="">
      <div className="h-[150px] flex items-center justify-center bg-gradientBg">
        <h1 className="text-2xl font-bold">Notifications</h1>
      </div>
      <div className="container my-10">
        {notificationsData?.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-500 text-lg">No notifications found</p>
          </div>
        ) : (
          notificationsData?.map((notification: Notification) => (
            <div
              key={notification._id}
              className={`border-b border-dashed py-4 cursor-pointer p-5 rounded-lg border-gray-400 mb-4 ${
                notification?.isRead ? "" : "bg-gray-200"
              }`}
              onClick={() =>
                !notification?.isRead &&
                handleReadNotification(notification?._id)
              }
            >
              <div className="flex items-center gap-2">
                <Image
                  alt="Profile"
                  src={getImageUrl(notification?.sender?.profile)}
                  width={56}
                  height={56}
                  className="w-14 h-14 border border-[#ba9956] rounded-full object-cover"
                />
                <div>
                  <h1 className="font-semibold">
                    {notification?.sender?.name || "N/A"}
                  </h1>
                  <p className="text-sm text-gray-500">
                    {formatDate(notification?.createdAt)}
                  </p>
                </div>
                <p className="text-sm text-gray-500 ml-auto">
                  {(() => {
                    const timeDiff =
                      new Date()?.getTime() -
                      new Date(notification?.createdAt)?.getTime();
                    const minutes = Math?.floor(timeDiff / (1000 * 60));
                    const hours = Math?.floor(minutes / 60);
                    const days = Math?.floor(hours / 24);

                    if (minutes < 60) return `${minutes}m ago`;
                    if (hours < 24) return `${hours}h ago`;
                    return `${days}d ago`;
                  })()}
                </p>
              </div>
              <div className="mt-3">
                <h3 className="font-medium text-gray-800">
                  {notification?.title}
                </h3>
                <p
                  className={`text-gray-600 mt-2 ${
                    notification?.isRead ? "" : "font-medium"
                  }`}
                >
                  {notification?.body}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Notifications;
