import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { CircleUser } from "lucide-react";

const data = [
  { name: "Jan", inflow: 400000, outflow: 300000 },
  { name: "Feb", inflow: 800000, outflow: 900000 },
  { name: "Mar", inflow: 600000, outflow: 400000 },
  { name: "Apr", inflow: 300000, outflow: 300000 },
  { name: "May", inflow: 200000, outflow: 500000 },
  { name: "Jun", inflow: 600000, outflow: 300000 },
  { name: "Jul", inflow: 700000, outflow: 600000 },
  { name: "Aug", inflow: 500000, outflow: 800000 },
  { name: "Sep", inflow: 400000, outflow: 400000 },
  { name: "Oct", inflow: 600000, outflow: 700000 },
  { name: "Nov", inflow: 300000, outflow: 400000 },
  { name: "Dec", inflow: 700000, outflow: 500000 },
];

const Dashboard = () => {
  return (
    <div className="p-6 bg-white min-h-screen font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-gray-100 p-6 rounded-xl shadow">
          <div className="flex justify-between items-center mb-4">
            <div>
              <p className="text-gray-400 text-sm">Project revenue: ₦100,800</p>
              <h2 className="text-2xl font-bold">₦201,685.23</h2>
            </div>
            <select className="border px-2 py-1 rounded-md text-sm">
              <option>2022</option>
            </select>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="inflow" fill="#D9B8FF" radius={[5, 5, 0, 0]} />
              <Bar dataKey="outflow" fill="#9AD0C2" radius={[5, 5, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-gray-100 p-6 rounded-xl shadow space-y-4">
          <h3 className="text-lg font-semibold">Requests</h3>
          {[
            { name: "Mavin Dahunsin", date: "03/12/23" },
            { name: "Jake Junior", date: "10/02/24" },
            { name: "A. Damiohoun", date: "20/02/24" },
            { name: "Fashina John", date: "27/02/24" },
            { name: "Bola Badohun", date: "02/03/24" },
          ].map((req, i) => (
            <div key={i} className="flex items-center space-x-3">
              <CircleUser className="w-8 h-8 text-gray-400" />
              <div>
                <p className="font-medium">{req.name}</p>
                <p className="text-sm text-gray-400">to return {req.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div className="bg-gray-100 p-6 rounded-xl shadow">
          <p className="text-sm text-gray-400">Amount Loaned Out</p>
          <h2 className="text-xl font-bold">₦1,230,000</h2>
          <p className="text-red-500 text-sm">↓ 9%</p>
        </div>

        <div className="bg-gray-100 p-6 rounded-xl shadow">
          <p className="text-sm text-gray-400">Total Borrowers</p>
          <h2 className="text-xl font-bold">223</h2>
          <p className="text-green-500 text-sm">↑ 11%</p>
        </div>

        <div className="bg-gray-100 p-6 rounded-xl shadow">
          <p className="text-sm text-gray-400">Outstanding Amount</p>
          <h2 className="text-xl font-bold">₦325,030</h2>
          <p className="text-red-500 text-sm">↓ 20%</p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-gray-100 p-6 rounded-xl shadow">
          <div className="flex justify-between mb-4">
            <h3 className="text-lg font-semibold">Pending borrowers</h3>
            <select className="border px-2 py-1 rounded-md text-sm">
              <option>Last Week</option>
            </select>
          </div>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left border-b">
                <th className="pb-2">Name</th>
                <th className="pb-2">Borrowed</th>
                <th className="pb-2">Description</th>
                <th className="pb-2">Return Date</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "S. Adebeshin",
                  "₦25,030",
                  "School fees last semester",
                  "11/10/23",
                ],
                [
                  "A. Adidbie",
                  "₦10,500",
                  "To buy some books to read",
                  "04/11/23",
                ],
                ["M. Bankole", "₦205,000", "Feeding for a month", "20/12/23"],
                [
                  "D. Adefunsho",
                  "₦4,300",
                  "Tfare to hometown to see pa...",
                  "04/01/24",
                ],
                [
                  "D. Adefunsho",
                  "₦21,000",
                  "Miscellaneous activity",
                  "07/01/24",
                ],
              ].map(([name, amount, desc, date], idx) => (
                <tr key={idx} className="border-b">
                  <td className="py-2">{name}</td>
                  <td>{amount}</td>
                  <td>{desc}</td>
                  <td>{date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-gray-100 p-6 rounded-xl shadow">
          <h3 className="text-lg font-semibold mb-4">Gender</h3>
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-indigo-300 via-purple-300 to-pink-300 relative">
              <svg
                className="absolute top-0 left-0 w-full h-full"
                viewBox="0 0 36 36"
              >
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  stroke="#9F7AEA"
                  strokeWidth="6"
                  strokeDasharray="60, 100"
                />
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  stroke="#4299E1"
                  strokeWidth="6"
                  strokeDasharray="28, 100"
                  strokeDashoffset="-60"
                />
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  stroke="#CBD5E0"
                  strokeWidth="6"
                  strokeDasharray="12, 100"
                  strokeDashoffset="-88"
                />
              </svg>
            </div>
            <div className="mt-4 text-sm space-y-1">
              <p>
                <span className="inline-block w-3 h-3 bg-purple-400 rounded-full mr-2"></span>
                Women 60%
              </p>
              <p>
                <span className="inline-block w-3 h-3 bg-blue-400 rounded-full mr-2"></span>
                Men 28.04%
              </p>
              <p>
                <span className="inline-block w-3 h-3 bg-gray-300 rounded-full mr-2"></span>
                Others 11.96%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
