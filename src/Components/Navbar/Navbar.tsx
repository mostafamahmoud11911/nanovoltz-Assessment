import { useState } from "react";
import { ArrowDown, Menu, Search, XIcon } from "lucide-react";

export default function Navbar() {
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const [activeItem, setActiveItem] = useState<string>("Dashboard");
    const items = ["Dashboard", "Pools", "Tokens", "Market", "NFT"];
    return (
        <nav className="flex items-center justify-between px-6 py-3 relative">
            <button
                className="lg:hidden absolute right-7"
                onClick={() => setOpenMenu(true)}
            >
                <Menu className="!w-6 !h-6" />
            </button>
            <div className="mr-8">
                <p className="font-bold text-lg">
                    nano<span className="text-black">VOLTZ</span>
                </p>
            </div>
            <div className="flex justify-between items-center w-full">
                <ul className={`fixed ${openMenu ? "left-0 z-50" : "-left-full"
                    } lg:static top-0 px-10 py-20 lg:p-0 bg-white lg:bg-transparent transition-all duration-200 ease-in-out h-full lg:h-auto w-full lg:w-auto flex flex-col lg:flex-row items-start lg:items-center gap-10`}>
                    <button
                        className="absolute top-10 right-10 lg:hidden"
                        onClick={() => setOpenMenu(false)}
                    >
                        <XIcon className="!w-6 !h-6" />
                    </button>
                    {items.map((item, i) => (
                        <li
                            key={i}
                            onClick={() => setActiveItem(item)}
                            className={`cursor-pointer relative hover:text-red-500 ${item === activeItem ? "text-red-500" : ""
                                }`}
                        >
                            {item}
                            {item === activeItem && (
                                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-red-500 rounded"></span>
                            )}
                            {item === "Tokens" && (
                                <span className="absolute -top-1 -right-2 w-2 h-2 bg-red-500 rounded-full"></span>
                            )}
                        </li>
                    ))}
                </ul>
                <div className="hidden lg:flex items-center gap-2">
                    <div className="flex items-center bg-white rounded-full px-4 py-2">
                        <Search className="w-4 h-4 text-gray-400 mr-2" />
                        <input
                            type="text"
                            placeholder="Search pools or tokens"
                            className="outline-none text-sm w-[250px] placeholder-gray-400"
                        />
                    </div>
                    <div className=" w-9 h-9 overflow-hidden rounded-full flex items-center justify-center border border-gray-200">
                        <img
                            src="https://i.pravatar.cc/50"
                            alt="user avatar"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="w-4 h-4 overflow-hidden rounded-full flex items-center justify-center bg-[#f5dede]">
                        <ArrowDown size={13} />
                    </div>

                </div>
            </div>
        </nav>
    )
}
