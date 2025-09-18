import type React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";



export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen flex flex-col w-full max-w-full bg-[#faefef]">
      <Navbar />

      <div className="flex flex-1">
        <div className="bg-[#fcf0f0] ">
          <Sidebar />
        </div>

        <main className="flex-1 p-5 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  )
}
