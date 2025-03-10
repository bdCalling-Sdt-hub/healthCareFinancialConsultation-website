"use client";

import Image from "next/image";
import { Tabs } from "antd";
import { useState } from "react";
import servicesMenuImg from "@/assets/image (28).png";

const tabItems = [
  {
    key: "1",
    label: "Staff Productivity Analysis",
    content: (
      <ul className="list-disc pl-5 space-y-2 text-gray-700">
        <li>
          Workforce Utilization Review: Analyzing workloads, shifts, and patient
          demand.
        </li>
        <li>
          Role Optimization: Ensuring staff focus on tasks that match their
          expertise.
        </li>
        <li>
          Cross-Training & Task Delegation: Enhancing flexibility and reducing
          overtime.
        </li>
        <li>
          Productivity Metrics & KPIs: Tracking patient wait times and
          efficiency.
        </li>
        <li>
          Performance-Based Incentives: Implementing rewards for motivation.
        </li>
      </ul>
    ),
  },
  {
    key: "2",
    label: "Workflow Optimization",
    content: (
      <ul className="list-disc pl-5 space-y-2 text-gray-700">
        <li>Streamlining administrative processes to reduce delays.</li>
        <li>Implementing automation tools for faster documentation.</li>
        <li>Reducing bottlenecks in patient care coordination.</li>
        <li>Improving staff communication and task management.</li>
      </ul>
    ),
  },
  {
    key: "3",
    label: "Revenue Cycle Management",
    content: (
      <ul className="list-disc pl-5 space-y-2 text-gray-700">
        <li>Enhancing billing efficiency and reducing claim denials.</li>
        <li>Automating patient invoicing and payments.</li>
        <li>
          Ensuring accurate coding and documentation for insurance claims.
        </li>
        <li>Optimizing financial reporting for better decision-making.</li>
      </ul>
    ),
  },
  {
    key: "4",
    label: "Technology and Automation",
    content: (
      <ul className="list-disc pl-5 space-y-2 text-gray-700">
        <li>Using AI-driven analytics for predictive insights.</li>
        <li>Automating patient scheduling and reminders.</li>
        <li>Integrating EHR (Electronic Health Records) systems.</li>
        <li>Ensuring cybersecurity and data protection.</li>
      </ul>
    ),
  },
  {
    key: "5",
    label: "Benchmarking",
    content: (
      <ul className="list-disc pl-5 space-y-2 text-gray-700">
        <li>Comparing performance metrics against industry standards.</li>
        <li>Identifying areas for improvement through analytics.</li>
        <li>Setting performance goals for continuous improvement.</li>
      </ul>
    ),
  },
];

const SingleServicesPage = () => {
  const [activeTab, setActiveTab] = useState("1");

  return (
    <div>
      {/* Banner Section */}
      <div className="relative mb-20">
        <Image
          src={servicesMenuImg}
          alt="servicesMenuImg"
          width={50000}
          height={50000}
          className="w-full h-[600px] object-cover"
        />
        <div className="max-w-[750px] absolute -bottom-20 right-20 p-10 rounded-2xl bg-[#032237] bg-opacity-30 backdrop-blur-md">
          <h1 className="text-5xl mb-5 font-bold bg-gradientBg text-transparent bg-clip-text leading-normal">
            Operational Finance Optimization
          </h1>
          <p className="text-white text-lg">
            Optimizing operational finance in healthcare is essential for
            reducing costs, improving efficiency, and ensuring high-quality
            patient care.
          </p>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="max-w-5xl mx-auto px-5">
        <Tabs
          activeKey={activeTab}
          onChange={setActiveTab}
          size="large"
          items={tabItems.map(({ key, label }) => ({
            key,
            label: (
              <span
                className={`px-5 py-2 rounded-full transition ${
                  activeTab === key
                    ? "bg-[#032237] text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {label}
              </span>
            ),
          }))}
        />

        {/* Dynamic Content */}
        <div className="mt-10 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-5 text-[#032237]">What We Do</h2>
          {tabItems.find((tab) => tab.key === activeTab)?.content}
        </div>
      </div>
    </div>
  );
};

export default SingleServicesPage;
