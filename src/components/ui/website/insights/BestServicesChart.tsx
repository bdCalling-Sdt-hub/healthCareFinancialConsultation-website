"use client";

import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

// Define the type for service data
interface ServiceData {
  _id: string;
  serviceName: string;
  count: number;
  percentage: string;
}

const COLORS = ["#032237", "#1C384B", "#354E5F", "#4F6473"];

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
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

interface PieChartComponentProps {
  serviceData: ServiceData[];
}

const PieChartComponent: React.FC<PieChartComponentProps> = ({ serviceData }) => {
  // Convert percentage strings to numbers for the chart
  const chartData = serviceData.map(item => ({
    ...item,
    percentage: parseFloat(item.percentage)
  }));

  return (
    <div className="flex items-center justify-center">
      <div className="w-1/2">
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
              {chartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="w-1/2">
        <h1 className="text-3xl mb-5 font-bold ">Best Services</h1>
        <div className="space-y-5">
          {chartData.map((service, index) => (
            <div key={service._id} className="flex items-center gap-3">
              <p 
                className="h-7 w-7 rounded-full" 
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              ></p>
              <p className="text-lg font-bold">{service.serviceName}</p>
              <p className="text-sm ml-auto">{service.percentage}%</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PieChartComponent;
