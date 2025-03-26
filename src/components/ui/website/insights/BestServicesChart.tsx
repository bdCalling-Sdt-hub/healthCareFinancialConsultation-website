"use client";

import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

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

const PieChartComponent: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-1/2">
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={156}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
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
          <div className="flex items-center gap-3">
            <p className="h-7 w-7 bg-[#0088FE] rounded-full"></p>
            <p className="text-lg font-bold">Financial Management</p>
          </div>
          <div className="flex items-center gap-3">
            <p className="h-7 w-7 bg-[#FF8042] rounded-full"></p>
            <p className="text-lg font-bold">Financial Management</p>
          </div>
          <div className="flex items-center gap-3">
            <p className="h-7 w-7 bg-[#FFBB28] rounded-full"></p>
            <p className="text-lg font-bold">Financial Management</p>
          </div>
          <div className="flex items-center gap-3">
            <p className="h-7 w-7 bg-[#00C49F] rounded-full"></p>
            <p className="text-lg font-bold">Financial Management</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PieChartComponent;
