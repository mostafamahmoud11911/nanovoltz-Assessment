import { useState } from "react";
import { ArrowLeftRight, BarChart2, Ellipsis, Home, Menu, Plus, Settings, Users, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Links = [
    {
        id: 1,
        name: "Dashboard",
        icon: <Home size={18} className="flex-shrink-0" />,
    },
    {
        id: 2,
        name: "Pools",
        icon: <BarChart2 size={18} className="flex-shrink-0" />,
        badge: true

    },
    {
        id: 3,
        name: "Tokens",
        icon: <ArrowLeftRight size={18} className="flex-shrink-0" />,

    },
    {
        id: 4,
        name: "Market",
        icon: <Menu size={18} className="flex-shrink-0" />,
    },
    {
        id: 5,
        name: "Users",
        icon: <Users size={18} className="flex-shrink-0" />,
        badge: 6

    },
    {
        id: 6,
        name: "Settings",
        icon: <Settings size={18} className="flex-shrink-0" />,

    },
    {
        id: 7,
        name: "other",
        icon: <Ellipsis size={18} className="flex-shrink-0" />,
    }
]

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);




    return (
        <>
            <motion.aside
                initial={{ width: "5rem" }}
                animate={{ width: isOpen ? "16rem" : "5rem" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="hidden md:block relative"
            >
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-3 bg-[#f5bfbf] rounded-xl ml-4 mt-4 transition duration-300 ease-in-out"
                >
                    {isOpen ? <X size={18} /> : <Plus size={18} />}
                </button>

                <motion.nav initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex h-full flex-col">
                    <ul className="flex-1 px-2 mt-11 py-4">
                        {Links.map((item, index) => (
                            <motion.li
                                key={item.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05, duration: 0.3 }}
                            >
                                <button className="w-full text-left mb-2 flex items-center rounded-lg p-3 hover:bg-[#f5bfbf] transition duration-300 ease-in-out cursor-pointer">
                                    <div className="relative ml-2">
                                        {item.icon}
                                        {item.badge && (
                                            <span className="absolute -top-1 left-4 w-3 h-3 flex items-center justify-center text-[9px] font-bold text-white bg-red-500 rounded-full">
                                                {item.badge}
                                            </span>
                                        )}
                                    </div>
                                    <span
                                        className={`ml-4 transition-all duration-300 ${isOpen ? "w-auto opacity-100" : "w-0 overflow-hidden opacity-0"
                                            }`}
                                    >
                                        {item.name}
                                    </span>
                                </button>
                            </motion.li>
                        ))}
                    </ul>
                </motion.nav>
            </motion.aside>

            <motion.aside initial={{ width: "5rem" }}
                animate={{ width: isOpen ? "16rem" : "5rem" }} transition={{ duration: 0.4, ease: "easeInOut" }} className="md:hidden">
                <button
                    onClick={() => setIsMobileOpen(true)}
                    className="p-3 bg-[#f5bfbf] rounded-xl ml-4 transition duration-300 ease-in-out"
                >
                    {isOpen ? <X size={18} /> : <Plus size={18} />}
                </button>

                <AnimatePresence>
                    {isMobileOpen && (
                        <motion.nav
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 bg-black/50 z-50 flex"
                            onClick={() => setIsMobileOpen(false)}
                        >
                            <motion.div
                                initial={{ x: "-100%" }}
                                animate={{ x: 0 }}
                                exit={{ x: "-100%" }}
                                transition={{ duration: 0.3 }}
                                className="w-64 bg-[#fcf0f0] h-full flex flex-col relative"
                            >
                                <button
                                    onClick={() => setIsMobileOpen(false)}
                                    aria-label="Close mobile menu"
                                    className="absolute top-4 right-4 p-2 bg-[#f5bfbf] rounded-xl text-white"
                                >
                                    <X className="w-5 h-5" />
                                </button>

                                <ul className="flex-1 space-y-2 mt-16">
                                    {Links.map((item, index) => (
                                        <motion.li initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.05, duration: 0.3 }} key={item.id}>
                                            <button className="flex w-full items-center gap-3 px-4 py-2 hover:bg-pink-200 cursor-pointer rounded-lg">
                                                <div className="relative ml-2">
                                                    {item.icon}
                                                    {item.badge && (
                                                        <span className="absolute -top-1 left-4 w-3 h-3 flex items-center justify-center text-[9px] font-bold text-white bg-red-500 rounded-full">
                                                            {item.badge}
                                                        </span>
                                                    )}
                                                </div>
                                                <span>{item.name}</span>
                                            </button>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        </motion.nav>
                    )}
                </AnimatePresence>
            </motion.aside>
        </>
    )
}