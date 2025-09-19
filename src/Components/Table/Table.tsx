import { motion } from "framer-motion"
import { Edit2, Search, CloudDownload, Printer, Filter, ChevronLeft, ChevronRight } from "lucide-react";

const employees = [
  {
    name: "Andrew Jacob",
    id: "ADBW-124K9",
    phone: "+971 00 123 4567",
    shift: "9:00 - 15:00\nAll Days",
    substitute: "N/A",
    status: { text: "Active", color: "text-red-500" },
    comments: "N/A",
  },
  {
    name: "John Castrevich",
    id: "ADBW-832F7",
    phone: "+971 00 123 4567",
    shift: "9:00 - 13:00,\nSun, Mon, Tue, Sat",
    substitute: "N/A",
    status: { text: "Active Substitute", color: "text-blue-500" },
    comments: "N/A",
  },
];

export default function Table() {

  return (
    <motion.div className="p-4 sm:p-6 bg-white rounded-2xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-base sm:text-lg">Employees</h2>
        <div className="flex items-center gap-3 sm:gap-4 text-gray-700">
          <Search className="w-4 h-4 sm:w-5 sm:h-5 text-black cursor-pointer" />
          <CloudDownload className="w-4 h-4 sm:w-5 sm:h-5 text-black cursor-pointer" />
          <Printer className="w-4 h-4 sm:w-5 sm:h-5 text-black cursor-pointer" />
          <Filter className="w-4 h-4 sm:w-5 sm:h-5 text-black cursor-pointer" />
        </div>
      </div>

      <div className="rounded-md overflow-x-auto">
        <table className="min-w-full text-xs sm:text-sm border-collapse table-auto">
          <thead>
            <tr>
              <th className="p-2 sm:p-3 text-left w-8 sm:w-10">
                <input type="checkbox" />
              </th>
              <th className="p-2 sm:p-3 text-left">Name</th>
              <th className="p-2 sm:p-3 text-left">ID</th>
              <th className="p-2 sm:p-3 text-left">Phone</th>
              <th className="p-2 sm:p-3 text-left">Applied Shift</th>
              <th className="p-2 sm:p-3 text-left">Substitute</th>
              <th className="p-2 sm:p-3 text-left">Status</th>
              <th className="p-2 sm:p-3 text-left">Comments</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((emp, i) => (
              <tr key={i} className="border-b">
                <td className="p-2 sm:p-3">
                  <input type="checkbox" />
                </td>
                <td className="p-2 sm:p-3 font-semibold">{emp.name}</td>
                <td className="p-2 sm:p-3 font-semibold">{emp.id}</td>
                <td className="p-2 sm:p-3 font-semibold">{emp.phone}</td>
                <td className="p-2 sm:p-3 whitespace-pre-line font-semibold">{emp.shift}</td>
                <td className="p-2 sm:p-3 font-semibold">{emp.substitute}</td>
                <td className={`p-2 sm:p-3 font-semibold ${emp.status.color}`}>
                  {emp.status.text}
                </td>
                <td className="p-2 sm:p-3 flex font-semibold items-center md:gap-10 gap-3">
                  <p>{emp.comments}</p>
                  <Edit2 className="w-3 h-3 sm:w-4 sm:h-4 text-red-500 cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center gap-3 mt-2 text-xs sm:text-sm font-semibold justify-end">
        <div className="flex items-center gap-1">
          Rows per page:
          <select className="border rounded px-1 py-0.5 text-xs sm:text-sm cursor-pointer">
            <option>25</option>
            <option>50</option>
            <option>100</option>
          </select>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <span>1-4 of 4</span>
          <button className="px-1 cursor-pointer"><ChevronLeft size={18} /></button>
          <button className="px-1 cursor-pointer"><ChevronRight size={18} /></button>
        </div>
      </div>
    </motion.div>
  )
}
