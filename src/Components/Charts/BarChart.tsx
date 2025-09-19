import { useState } from "react";
import { motion } from "framer-motion";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";

type TooltipProps = {
  active?: boolean;
  payload?: { value: number }[];
}
const weeklyData = [
  { day: "Mon", value: 0.2 },
  { day: "Tue", value: 0.3 },
  { day: "Wed", value: 0.25 },
  { day: "Thu", value: 0.35 },
  { day: "Fri", value: 0.4 },
  { day: "Sat", value: 0.38 },
  { day: "Sun", value: 0.32 },
]

const monthlyData = [
  { week: "W1", value: 1.1 },
  { week: "W2", value: 1.3 },
  { week: "W3", value: 1.25 },
  { week: "W4", value: 1.4 },
];

const yearlyData = [
  { month: "Jan", value: 1.1 },
  { month: "Feb", value: 1.2 },
  { month: "Mar", value: 1.25 },
  { month: "Apr", value: 1.35 },
  { month: "May", value: 1.3 },
  { month: "Jun", value: 1.15 },
  { month: "Jul", value: 1.2 },
  { month: "Aug", value: 1.4 },
  { month: "Sep", value: 1.38 },
  { month: "Oct", value: 1.45 },
  { month: "Nov", value: 1.42 },
  { month: "Dec", value: 1.35 },
];

const items = [
  { color: "#10B981", label: "Legend" },
  { color: "#F59E0B", label: "Legend" },
  { color: "#EF4444", label: "Legend" },
  { color: "#EC4899", label: "Legend" },
  { color: "#F97316", label: "Legend" },
];

export default function BarChartCard() {
  const [selected, setSelected] = useState<"1W" | "1M" | "1Y">("1Y");


  // depend on selected will get data from year or month or week
  const getData = () => {
    if (selected === "1W") return weeklyData;
    if (selected === "1M") return monthlyData;
    return yearlyData;
  };




  // custom tooltip on chart
  const TextTooltip = ({ payload }: TooltipProps) => {
    if (payload && payload.length) {
      return (
        <div className="bg-black text-white px-2 py-1 rounded text-sm shadow">
          {payload[0].value}T
        </div>
      );
    }
    return null;
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl p-4 w-full"
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-gray-600 text-sm">Volume {selected}</p>
          <h2 className="text-lg font-semibold">
            {selected === "1W" && "$0.32T"}
            {selected === "1M" && "$1.40T"}
            {selected === "1Y" && "$1.42T"}
          </h2>
        </div>

        <div className="flex gap-2">
          {["1W", "1M", "1Y"].map((label) => (
            <button
              key={label}
              onClick={() => setSelected(label as "1W" | "1M" | "1Y")}
              className={`px-3 py-1 rounded-lg text-sm cursor-pointer font-medium transition ${selected === label
                ? "bg-red-200"
                : "bg-red-100 hover:bg-red-200"
                }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
      <div className="w-full">
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={getData()}>
            <XAxis
              dataKey={selected === "1W" ? "day" : selected === "1M" ? "week" : "month"}
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9CA3AF", fontSize: 12 }}
            />
            <Tooltip content={<TextTooltip />} cursor={{ fill: "transparent" }} />
            <Bar dataKey="value" fill="#f87171" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {items.map((item, index) => (
          <div key={index} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span
              style={{
                width: "14px",
                height: "6px",
                borderRadius: "2px",
                backgroundColor: item.color,
              }}
            />
            <span style={{ fontSize: "12px", fontWeight: "600", color: "#111827" }}>
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
