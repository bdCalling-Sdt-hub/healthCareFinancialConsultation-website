import React from "react";
import { ConfigProvider, Spin, Table } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import { useMyBookingsQuery } from "@/redux/apiSlices/bookingSlice";
import moment from "moment";

const columns = [
  {
    title: "Serial",
    dataIndex: "serial",
    key: "serial",
    render: (text: string, record: any, index: number) => index + 1,
  },
  {
    title: "Service",
    dataIndex: ["service", "title"],
    key: "dateTime",
  },
  {
    title: "Scheduled At",
    dataIndex: "scheduledAt",
    key: "scheduledAt",
    render: (time: string) => <p>{moment(time).format("LLLL")}</p>,
  },
  {
    title: "Amount",
    dataIndex: "fee",
    key: "fee",
    render: (amount: string) => <p>${amount || "N/A"}</p>,
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status: string) => {
      const statusColors = {
        pending: "text-orange-500",
        completed: "text-green-500",
        cancelled: "text-red-500",
        accepted: "text-blue-500",
        postponed: "text-yellow-500",
        paid: "text-emerald-500",
      };

      return (
        <span
          className={`font-medium ${
            statusColors[status as keyof typeof statusColors] || ""
          }`}
        >
          {status}
        </span>
      );
    },
  },
  {
    title: "Action",
    key: "action",
    render: () => <EyeOutlined style={{ cursor: "pointer" }} />,
  },
];

const BookingHistory = () => {
  const { data: BookingHistory, isLoading } = useMyBookingsQuery(undefined);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spin />
      </div>
    );
  }

  const bookingsData = BookingHistory?.data;
  console.log("sadfvsdvsdv", bookingsData);

  return (
    <ConfigProvider
      theme={{
        components: {
          Table: {
            headerBg: "#032237",
            headerColor: "#fff",
          },
        },
      }}
    >
      <Table
        dataSource={bookingsData}
        columns={columns}
        rowKey="_id"
        pagination={false}
      />
    </ConfigProvider>
  );
};

export default BookingHistory;
