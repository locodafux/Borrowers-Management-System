import React from "react";
import {
  Calendar,
  User,
  Phone,
  FileText,
  DollarSign,
  Upload,
  Trash,
  Users,
} from "lucide-react";

const AddBorrowerForm = () => {
  return (
    <div className="w-full h-full bg-[#f4f4f6] ">
      <div className="bg-white rounded-xl shadow-sm w-full h-full p-8">
        <h2 className="text-xl font-semibold mb-6">Add borrower details</h2>

        <button className="mb-6 bg-white border border-gray-300 px-4 py-2 rounded-full text-sm hover:bg-gray-100 flex items-center gap-2">
          <Users size={16} />
          Select from saved borrowers
        </button>

        {/* Image & Actions */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center">
            <User size={32} className="text-gray-500" />
          </div>
          <div className="flex flex-col gap-1 text-sm">
            <button className="text-indigo-500 hover:underline flex items-center gap-1">
              <Upload size={14} />
              Change Picture
            </button>
            <button className="text-red-500 hover:underline flex items-center gap-1">
              <Trash size={14} />
              Delete
            </button>
          </div>
        </div>

        {/* Form Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter full name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Phone Number
            </label>
            <input
              type="text"
              placeholder="Enter phone number"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Loan Amount */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Loan Amount
            </label>
            <input
              type="number"
              placeholder="0.00"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Loan Start Date */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Loan Start Date
            </label>
            <div className="relative">
              <input
                type="date"
                className="w-full p-3 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <Calendar
                className="absolute right-3 top-3 text-gray-400"
                size={18}
              />
            </div>
          </div>

          {/* Description */}
          <div className="md:col-span-1">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Description
            </label>
            <textarea
              rows="3"
              placeholder="Enter loan description"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none"
            ></textarea>
          </div>

          {/* Loan Return Date */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Loan Return Date
            </label>
            <div className="relative">
              <input
                type="date"
                className="w-full p-3 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <Calendar
                className="absolute right-3 top-3 text-gray-400"
                size={18}
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-8">
          <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-3 px-6 rounded-md">
            Add Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddBorrowerForm;
