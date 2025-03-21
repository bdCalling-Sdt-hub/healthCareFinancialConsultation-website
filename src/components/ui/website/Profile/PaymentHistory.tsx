import React from "react";
import { Table, ConfigProvider } from "antd";
import { EyeOutlined } from "@ant-design/icons";

const dataSource = [
  {
    key: "1",
    invoiceNo: "#643747",
    date: "15 Feb 2024",
    service: "Revenue Integrity & Compliance",
    amount: "300$",
    status: "Paid",
  },
  {
    key: "2",
    invoiceNo: "#643747",
    date: "15 Feb 2024",
    service: "Revenue Integrity & Compliance",
    amount: "300$",
    status: "Pay Now",
  },
  {
    key: "3",
    invoiceNo: "#643747",
    date: "15 Feb 2024",
    service: "Revenue Integrity & Compliance",
    amount: "300$",
    status: "Paid",
  },
];

const columns = [
  {
    title: "Invoice No.",
    dataIndex: "invoiceNo",
    key: "invoiceNo",
  },
  {
    title: "Date/Time",
    dataIndex: "date",
    key: "date",
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
      if (status === "Paid") {
        return <span style={{ color: "green" }}>{status}</span>;
      } else if (status === "Pay Now") {
        return (
          <span style={{ color: "red", fontWeight: "bold" }}>{status}</span>
        );
      }
      return status;
    },
  },
  {
    title: "Action",
    key: "action",
    render: () => <EyeOutlined style={{ cursor: "pointer" }} />,
  },
];

const PaymentHistory = () => {
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

export default PaymentHistory;
