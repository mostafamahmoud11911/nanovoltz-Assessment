import { motion } from "framer-motion";
import { ResponsiveContainer, AreaChart, Area } from "recharts";
import { ArrowDown, ArrowUp, MoreHorizontal } from "lucide-react"

const cards = [
  {
    title: "TVL",
    value: "$4.86B",
    change: 1.56,
    color: "#22c55e",
    data: [
      { month: "Jan", value: 400 },
      { month: "Feb", value: 600 },
      { month: "Mar", value: 550 },
      { month: "Apr", value: 800 },
      { month: "May", value: 750 },
    ],
  },
  {
    title: "Volume",
    value: "285,277,770",
    change: -1.56,
    color: "#f43f5e",
    data: [
      { month: "Jan", value: 300 },
      { month: "Feb", value: 200 },
      { month: "Mar", value: 450 },
      { month: "Apr", value: 400 },
      { month: "May", value: 350 },
    ],
  },
  {
    title: "Users",
    value: "$0.51",
    change: 0.00,
    color: "gray",
    data: [
      { month: "Jan", value: 50 },
      { month: "Feb", value: 60 },
      { month: "Mar", value: 50 },
      { month: "Apr", value: 70 },
      { month: "May", value: 60 },
    ],
  },
];





export default function ChartCards() {

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {cards.map((card, i) => {
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.2 }}
            className="bg-white shadow rounded-2xl p-4 w-[300px] flex flex-col justify-between"
          >
            <div className="flex items-center justify-between">
              <div className="flex flex-col justify-center">
                <h3 className="text-sm font-medium text-gray-500">{card.title}</h3>
                <div className="text-lg font-semibold">
                  {card.value}
                </div>
                <div
                  className={`text-xs flex gap-1 items-center font-semibold`}
                >
                  <span className={`${card.change > 0
                    ? "text-green-500"
                    : card.change < 0
                      ? "text-red-500"
                      : "text-gray-400"}`}>{card.change ? <ArrowUp size={15} /> : <ArrowDown size={15} />}</span>
                  <span className="text-gray-500">{card.change}%</span>
                </div>

              </div>
              <MoreHorizontal size={15}/>
            </div>

            <div className="mt-3 h-[80px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={card.data}>
                {/* gradient for chart */}
                    <linearGradient
                      id={`color-${card.title}`}
                    >
                      <stop
                        offset="10%"
                        stopColor={card.color}
                        stopOpacity={0.2}
                      />
                      <stop
                        offset="100%"
                        stopColor={card.color}
                        stopOpacity={0.01}
                      />
                    </linearGradient>
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke={card.color}
                    strokeWidth={2}
                    fillOpacity={1}
                    fill={`url(#color-${card.title})`}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}