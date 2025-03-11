import React from "react";
import { ConfigProvider, Table } from "antd";
import { EyeOutlined } from "@ant-design/icons";

const dataSource = [
  {
    key: "1",
    bookingId: "#647",
    dateTime: "17 Feb 2024\n4:00 PM - 6:00 PM",
    service: "Revenue Integrity & Compliance",
    amount: "300$",
    status: "Approved",
  },
  {
    key: "2",
    bookingId: "#647",
    dateTime: "17 Feb 2024\n4:00 PM - 6:00 PM",
    service: "Revenue Integrity & Compliance",
    amount: "300$",
    status: "Rejected",
  },
  {
    key: "3",
    bookingId: "#647",
    dateTime: "17 Feb 2024\n4:00 PM - 6:00 PM",
    service: "Revenue Integrity & Compliance",
    amount: "300$",
    status: "Pending",
  },
];

const columns = [
  {
    title: "Booking ID",
    dataIndex: "bookingId",
    key: "bookingId",
  },
  {
    title: "Date/Time",
    dataIndex: "dateTime",
    key: "dateTime",
    render: (text: string) => (
      <span style={{ whiteSpace: "pre-line" }}>{text}</span>
    ),
  },
  {
    title: "Service",
    dataIndex: "service",
    key: "service",
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status: string) => {
      let color = "";
      if (status === "Approved") color = "green";
      if (status === "Rejected") color = "red";
      if (status === "Pending") color = "orange";
      return <span style={{ color }}>{status}</span>;
    },
  },
  {
    title: "Action",
    key: "action",
    render: () => <EyeOutlined style={{ cursor: "pointer" }} />,
  },
];

const BookingHistory = () => {
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
        dataSource={dataSource}
        columns={columns}
        rowKey="key"
        pagination={false}
      />
    </ConfigProvider>
  );
};

export default BookingHistory;
