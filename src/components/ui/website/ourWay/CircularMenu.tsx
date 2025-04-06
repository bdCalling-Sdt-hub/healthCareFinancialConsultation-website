// components/CircularMenu.tsx
import { useEffect, useState } from "react";
import logo1 from "@/assets/image 61.svg";
import logo2 from "@/assets/image 62.svg";
import logo3 from "@/assets/image 63.svg";
import logo4 from "@/assets/image 64.svg";
import logo5 from "@/assets/image 65.svg";
import Image from "next/image";

const items = [
  {
    key: "menu1",
    label: "DIE",
    icon: (
      <Image
        src={logo1}
        alt="Logo"
        width={34545100}
        height={3535100}
        className="w-9 h-9"
      />
    ),
  },
  {
    key: "menu2",
    label: "CSO",
    icon: (
      <Image
        src={logo2}
        alt="Logo"
        width={34545100}
        height={3535100}
        className="w-9 h-9"
      />
    ),
  },
  {
    key: "menu3",
    label: "PTR",
    icon: (
      <Image
        src={logo3}
        alt="Logo"
        width={34545100}
        height={3535100}
        className="w-9 h-9"
      />
    ),
  },
  {
    key: "menu4",
    label: "ITI",
    icon: (
      <Image
        src={logo4}
        alt="Logo"
        width={34545100}
        height={3535100}
        className="w-9 h-9"
      />
    ),
  },
  {
    key: "menu5",
    label: "CCA",
    icon: (
      <Image
        src={logo5}
        alt="Logo"
        width={34545100}
        height={3535100}
        className="w-9 h-9"
      />
    ),
  },
];

const CircularMenu = ({ onSelect }: { onSelect: (key: string) => void }) => {
  const [selected, setSelected] = useState("menu1");
  const [dimensions, setDimensions] = useState({
    width: 700,
    height: 700,
    radius: 300,
    innerRadius: 120,
  });

  // Add useEffect to handle resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        // Small screens
        setDimensions({
          width: 400,
          height: 400,
          radius: 170,
          innerRadius: 70,
        });
      } else if (window.innerWidth < 1024) {
        // Medium screens
        setDimensions({
          width: 550,
          height: 550,
          radius: 230,
          innerRadius: 90,
        });
      } else {
        // Large screens
        setDimensions({
          width: 700,
          height: 700,
          radius: 300,
          innerRadius: 120,
        });
      }
    };

    // Set initial dimensions
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const {
    width: svgWidth,
    height: svgHeight,
    radius,
    innerRadius,
  } = dimensions;
  const centerX = svgWidth / 2;
  const centerY = svgHeight / 2;

  return (
    <div className="absolute -left-24 md:-left-72">
      <svg
        width={svgWidth}
        height={svgHeight}
        viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        className="mx-auto"
      >
        {/* Add SVG filter for glow effect */}
        <defs>
          <filter id="gold-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow
              dx="0"
              dy="0"
              stdDeviation="4"
              floodColor="#C8A95C"
              floodOpacity="0.7"
            />
          </filter>
        </defs>

        {/* Center circle - increased size */}
        <defs>
          <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#b99755" />
            <stop offset="50%" stopColor="#F5EC9B" />
            <stop offset="100%" stopColor="#b99755" />
          </linearGradient>
        </defs>
        <circle
          cx={centerX}
          cy={centerY}
          r={innerRadius}
          fill="url(#circleGradient)"
        />
        <text
          x={centerX}
          y={centerY - innerRadius / 8}
          textAnchor="middle"
          fill="#1B2A41"
          fontWeight="bold"
          fontSize={innerRadius / 5.5}
        >
          HC
        </text>
        <text
          x={centerX}
          y={centerY + innerRadius / 8}
          textAnchor="middle"
          fill="#1B2A41"
          fontWeight="bold"
          fontSize={innerRadius / 5.5}
        >
          Financial
        </text>
        <text
          x={centerX}
          y={centerY + innerRadius / 2.7}
          textAnchor="middle"
          fill="#1B2A41"
          fontWeight="bold"
          fontSize={innerRadius / 5.5}
        >
          Consultants
        </text>

        {/* Menu items */}
        {items.map((item, index) => {
          // Keep the angle calculation the same
          const totalArc = 180; // Half-circle (180 degrees)
          const gapAngle = 2; // Gap between slices in degrees
          const itemAngle = (totalArc - items.length * gapAngle) / items.length;

          // Start at 180° (left side) and progress clockwise
          const startAngleDeg = 270 + index * (itemAngle + gapAngle);
          const endAngleDeg = startAngleDeg + itemAngle;

          // Convert to radians
          const startAngle = startAngleDeg * (Math.PI / 180);
          const endAngle = endAngleDeg * (Math.PI / 180);

          // Add radial gap from center circle
          const gapRadial = 8;
          const effectiveInnerRadius = innerRadius + gapRadial;

          // Path coordinates (keep existing calculations but use effectiveInnerRadius)
          const x1 = centerX + effectiveInnerRadius * Math.cos(startAngle);
          const y1 = centerY + effectiveInnerRadius * Math.sin(startAngle);
          const x4 = centerX + effectiveInnerRadius * Math.cos(endAngle);
          const y4 = centerY + effectiveInnerRadius * Math.sin(endAngle);

          // Keep the rest of the path calculation the same
          const x2 = centerX + radius * Math.cos(startAngle);
          const y2 = centerY + radius * Math.sin(startAngle);
          const x3 = centerX + radius * Math.cos(endAngle);
          const y3 = centerY + radius * Math.sin(endAngle);

          const path = `M ${x1} ${y1} L ${x2} ${y2} A ${radius} ${radius} 0 0 1 ${x3} ${y3} L ${x4} ${y4} A ${effectiveInnerRadius} ${effectiveInnerRadius} 0 0 0 ${x1} ${y1}`;

          // Adjust positions for label and icon
          const midAngle = (startAngle + endAngle) / 2;
          const labelRadius = innerRadius + (radius - innerRadius) * 0.3;
          const iconRadius = innerRadius + (radius - innerRadius) * 0.65;
          const labelX = centerX + labelRadius * Math.cos(midAngle);
          const labelY = centerY + labelRadius * Math.sin(midAngle);
          const iconX = centerX + iconRadius * Math.cos(midAngle);
          const iconY = centerY + iconRadius * Math.sin(midAngle);

          // Calculate sizes based on current dimensions
          const iconSize = svgWidth / 12;
          const labelSize = svgWidth / 20;

          return (
            <g
              key={item.key}
              onClick={() => {
                setSelected(item.key);
                onSelect(item.key);
              }}
              style={{ cursor: "pointer" }}
              className={`transition-transform transform ${
                selected === item.key ? "scale(1.5)" : "scale(1)"
              }`}
            >
              <path
                d={path}
                fill="#032237"
                stroke={selected === item.key ? "#C8A95C" : "#fff"}
                strokeWidth={
                  selected === item.key
                    ? svgWidth / 100 // Thicker stroke for selected
                    : svgWidth / 230 // Normal stroke
                }
                filter={selected === item.key ? "url(#gold-glow)" : "none"}
              />
              {/* Responsive foreignObject for label */}
              <foreignObject
                x={labelX - labelSize / 2}
                y={labelY - labelSize / 4}
                width={labelSize}
                height={labelSize / 2}
              >
                <div className="flex items-center justify-center h-full">
                  <span
                    className="text-[#C8A95C] font-semibold text-center"
                    style={{ fontSize: `${svgWidth / 40}px` }}
                  >
                    {item.label}
                  </span>
                </div>
              </foreignObject>
              {/* Responsive foreignObject for icon */}
              <foreignObject
                x={iconX - iconSize / 2}
                y={iconY - iconSize / 2}
                width={iconSize}
                height={iconSize}
              >
                <div className="flex items-center justify-center h-full">
                  <div style={{ transform: `scale(${svgWidth / 420})` }}>
                    {item.icon}
                  </div>
                </div>
              </foreignObject>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default CircularMenu;
