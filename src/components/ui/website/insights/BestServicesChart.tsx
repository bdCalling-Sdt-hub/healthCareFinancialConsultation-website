"use client";

import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

// Define the type for service data
interface ServiceItem {
  name: string;
  value: number;
}

interface ServiceData {
  _id: string;
  title: string;
  description: string;
  type: string;
  data: ServiceItem[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const COLORS = [
  "#032237",
  "#1C384B",
  "#354E5F",
  "#4F6473",
  "#6A7A87",
  "#85909B",
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      fontSize={12}
      fontWeight="bold"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

interface PieChartComponentProps {
  serviceData: ServiceData;
}

const PieChartComponent: React.FC<PieChartComponentProps> = ({
  serviceData,
}) => {
  // Calculate total value
  const totalValue =
    serviceData?.data?.reduce((sum, item) => sum + item.value, 0) || 0;

  // Calculate percentages
  const chartData = serviceData?.data?.map((item) => {
    const percentage = totalValue > 0 ? (item.value / totalValue) * 100 : 0;
    return {
      ...item,
      percentage: parseFloat(percentage.toFixed(1)),
    };
  });

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
      <div className="w-full md:w-1/2">
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={156}
              fill="#8884d8"
              dataKey="percentage"
            >
              {chartData?.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="w-full md:w-1/2">
        <h1 className="text-3xl mb-5 font-bold">{serviceData?.title}</h1>
        <p className="text-gray-600 mb-4">{serviceData?.description}</p>
        <div className="space-y-5">
          {chartData?.map((service, index) => (
            <div key={index} className="flex items-center gap-3">
              <div
                className="h-7 w-7 rounded-full flex-shrink-0"
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              ></div>
              <p className="text-lg font-bold">{service?.name}</p>
              <p className="text-sm ml-auto">
                {service?.percentage.toFixed(1)}%
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PieChartComponent;
