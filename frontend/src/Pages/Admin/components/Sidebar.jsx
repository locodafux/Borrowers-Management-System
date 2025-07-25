import React from "react";
import { Link } from "react-router-dom";
import {
  BarChart2,
  CheckCircle,
  Users,
  MessageSquare,
  Settings,
  UserPlus,
  LogOut,
} from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="w-64 min-h-screen bg-[#ece6fb] p-6 flex flex-col justify-between">
      {/* Top Section */}
      <div>
        {/* Logo */}
        <div className="flex items-center gap-2 mb-10">
          <BarChart2 className="text-purple-700" />
          <span className="text-xl font-semibold">Manage.</span>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-4 text-sm">
          <SidebarLink
            to="/"
            icon={<BarChart2 size={18} />}
            label="Dashboard"
            active
          />
          <SidebarLink
            to="/cleared"
            icon={<CheckCircle size={18} />}
            label="All Cleared"
          />
          <SidebarLink
            to="/borrowers"
            icon={<Users size={18} />}
            label="Borrowers List"
          />
          <SidebarLink
            to="/messages"
            icon={<MessageSquare size={18} />}
            label="Messages"
          />
          <SidebarLink
            to="/settings"
            icon={<Settings size={18} />}
            label="Settings"
          />
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col gap-4">
        {/* Profile */}
        <div className="flex items-center gap-3 p-2 bg-white rounded-lg">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            className="w-8 h-8 rounded-full object-cover"
            alt="Ayo Richard"
          />
          <span className="text-sm font-medium">Ayo Richard</span>
        </div>

        {/* Actions */}
        <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-700 border border-gray-300 rounded-lg hover:bg-white">
          <UserPlus size={16} />
          Add new borrower
        </button>
        <Link
          to="/"
          className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-700 border border-gray-300 rounded-lg hover:bg-white"
        >
          <LogOut size={16} />
          Log out
        </Link>

        {/* Premium card */}
        <div className="mt-2 p-4 bg-white rounded-2xl text-center">
          <div className="flex justify-center mb-2 -space-x-2">
            <img
              className="w-6 h-6 rounded-full border-2 border-white"
              src="https://randomuser.me/api/portraits/women/1.jpg"
              alt=""
            />
            <img
              className="w-6 h-6 rounded-full border-2 border-white"
              src="https://randomuser.me/api/portraits/men/2.jpg"
              alt=""
            />
            <img
              className="w-6 h-6 rounded-full border-2 border-white"
              src="https://randomuser.me/api/portraits/men/3.jpg"
              alt=""
            />
          </div>
          <p className="text-xs font-medium text-gray-700 mb-2">
            Join premium plan
          </p>
          <button className="text-xs font-medium text-purple-700 hover:underline">
            Learn more
          </button>
        </div>
      </div>
    </aside>
  );
};

// Helper component for sidebar links
const SidebarLink = ({ to, icon, label, active }) => {
  return (
    <Link
      to={to}
      className={`flex items-center gap-3 px-3 py-2 rounded-lg ${
        active
          ? "bg-purple-300 text-white"
          : "text-gray-700 hover:bg-purple-200 hover:text-white"
      }`}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
};

export default Sidebar;
