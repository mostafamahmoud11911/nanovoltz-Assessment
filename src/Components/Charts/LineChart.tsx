import { motion } from "framer-motion";
import { MoreHorizontal } from "lucide-react";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";



type TooltipProps = {
  active?: boolean;
  payload?: { value: number }[];
}


const data = [
  { month: "Jan", value: 4.4 },
  { month: "Feb", value: 4.9 },
  { month: "Mar", value: 3.1 },
  { month: "Apr", value: 4.6 },
  { month: "May", value: 5.1 },
  { month: "Jun", value: 4.8 },
  { month: "Jul", value: 5.9 },
  { month: "Aug", value: 6.3 },
  { month: "Sep", value: 6.9 },
  { month: "Oct", value: 6.7 },
  { month: "Nov", value: 6.2 },
  { month: "Dec", value: 6.1 },
];


export default function LineChart() {

  // write tooltip in charts
  const TextTooltip = ({ payload }: TooltipProps) => {
    if (payload && payload.length) {
      return (
        <div className="bg-black text-white px-2 py-1 rounded-2xl text-sm">
          {payload[0].value}B
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
      className="bg-white rounded-2xl p-3 w-full"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-black/70" />
          <div>
            <p className="text-gray-600 text-xs">TVL</p>
            <h2 className="text-lg font-semibold">$4.86B</h2>
          </div>
        </div>
        <button className="p-2 bg-[#faefef] rounded-full">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>


      <ResponsiveContainer width="100%" height={200}>
        <AreaChart data={data} margin={{ top: 3, right: 0, left: 0, bottom: 9 }}>
          <>

            {/* to make area gradient from bottom to top */}
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="10%" stopColor="#f87171" stopOpacity={0.2} />
              <stop offset="100%" stopColor="#f87171" stopOpacity={0.01} />
            </linearGradient>
          </>
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            interval={0}
            padding={{ left: 10, right: 10 }}
            tick={{ fill: "#9CA3AF", fontSize: 12 }}
          />
          <Tooltip content={<TextTooltip />} />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#f87171"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorValue)" // use it linearGradient
            activeDot={({ cx, cy }) => (
              // custom active dot
              <>
                <circle
                  cx={cx}
                  cy={cy}
                  r={10}
                  fill="black"
                  opacity={0.3}
                />
                <circle
                  cx={cx}
                  cy={cy}
                  r={5}
                  stroke="black"
                  strokeWidth={2}
                  fill="white"
                />
              </>
            )}
          />
        </AreaChart>
      </ResponsiveContainer>
    </motion.div>
  );
};
