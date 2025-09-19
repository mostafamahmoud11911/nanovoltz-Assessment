import { motion } from "framer-motion";
import { TrendingDown, TrendingUp } from "lucide-react";


const cards = [
    {
        name: "SHIB",
        price: "$0.00002642",
        change: 1.56,
        icon: "https://i.pravatar.cc/50?img=9",
    },
    {
        name: "LTC",
        price: "$106.42",
        change: 1.56,
        icon: "https://i.pravatar.cc/50?img=7",
    },
    {
        name: "XRP",
        price: "$0.8235",
        change: 1.56,
        icon: "https://i.pravatar.cc/50?img=2",
    },
    {
        name: "TRX",
        price: "$1.01",
        change: 1.56,
        icon: "https://i.pravatar.cc/50?img=8",
    },
    {
        name: "SUSHI",
        price: "$2.642",
        change: 1.56,
        icon: "https://i.pravatar.cc/50?img=21",
    }
];

export default function Cards() {
    return (
        <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 grid-cols-1  gap-4 p-6 bg-white rounded-2xl">
            {cards.map((card, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    whileHover={{ scale: 1.03, boxShadow: "0px 4px 15px rgba(0,0,0,0.1)" }}
                    className="bg-[#fcf0f0] px-4 py-3 flex flex-col gap-1 rounded-2xl"
                >
                    <div className="flex items-center gap-4">
                        <img src={card.icon} className="w-10 h-10 rounded-full object-cover" alt="icon" />
                        <div className="min-w-0">
                            <p className="text-gray-400 text-xs">{card.name}</p>
                            <p className="font-semibold break-words">{card.price}</p>
                        </div>
                    </div>
                    {/* if change is positive then text-green-500 else text-red-500 and icon will be TrendingUp or TrendingDown */}
                    <div className="flex items-center gap-2">
                        {card.change > 0 ? <TrendingUp size={16} className="text-green-500" /> : <TrendingDown size={16} className="text-red-500" />}
                        <p className={`${card.change > 0 ? "text-green-500" : "text-red-500"} font-semibold text-sm`}> {card.change}%</p>
                    </div>
                </motion.div>
            ))}
        </div>
    )
}
