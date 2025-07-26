import React from "react";
import { Search, SlidersHorizontal, Bell } from "lucide-react";

const TopBar = () => {
  return (
    <div className="w-full bg-white px-6 py-4 flex items-center justify-between">
      {/* Left: Search bar */}
      <div className="flex items-center w-full max-w-xl bg-white border border-gray-300 rounded-full px-4 py-2">
        <Search className="w-4 h-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search for anything..."
          className="flex-1 px-2 bg-transparent text-sm text-gray-600 focus:outline-none"
        />
      </div>

      {/* Right: Filter, Subscription, Notification */}
      <div className="flex items-center gap-3 ml-4">
        {/* Filter Icon */}
        <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-100">
          <SlidersHorizontal className="w-4 h-4 text-gray-600" />
        </button>

        {/* Subscription Button */}
        <button className="border border-gray-300 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 text-gray-700">
          Subscription
        </button>

        {/* Notification Button */}
        <button className="w-9 h-9 rounded-full bg-[#E6DEFA] flex items-center justify-center hover:bg-[#d5c8f3]">
          <Bell className="w-4 h-4 text-white" />
        </button>
      </div>
    </div>
  );
};

export default TopBar;
