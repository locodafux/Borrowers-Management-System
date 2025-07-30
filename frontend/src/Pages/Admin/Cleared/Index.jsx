import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

const borrowers = [
  {
    name: "D. Mariam",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    amount: "₦305,025",
    date: "07/03/23",
    description: "Children’s school fees",
    returnDate: "12/04/23",
    status: "Cleared",
  },
  {
    name: "A. Timothy",
    avatar: "https://randomuser.me/api/portraits/men/66.jpg",
    amount: "₦200,000",
    date: "13/03/23",
    description: "Miscellaneous",
    returnDate: "20/03/23",
    status: "Pending",
  },
  {
    name: "S. Richard",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    amount: "₦45,000",
    date: "15/03/23",
    description: "Data",
    returnDate: "18/03/23",
    status: "Cleared",
  },
  {
    name: "J. Doe",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    amount: "₦150,000",
    date: "01/05/23",
    description: "Car Repair",
    returnDate: "15/05/23",
    status: "Cleared",
  },
  {
    name: "L. Smith",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    amount: "₦75,000",
    date: "10/06/23",
    description: "Medical Bills",
    returnDate: "25/06/23",
    status: "Pending",
  },
  {
    name: "M. Johnson",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    amount: "₦120,000",
    date: "20/07/23",
    description: "Home Renovation",
    returnDate: "05/08/23",
    status: "Cleared",
  },
  {
    name: "K. Brown",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    amount: "₦60,000",
    date: "01/08/23",
    description: "Travel Expenses",
    returnDate: "10/08/23",
    status: "Cleared",
  },
];

const Cleared = () => {
  return (
    <div className="p-4 sm:p-6">
      <h1 className="text-lg sm:text-xl font-semibold mb-4">Cleared List</h1>

      <div className="bg-white rounded-2xl p-3 sm:p-4 shadow-sm">
        {/* Search and Filter - remains similar */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-3 sm:gap-0">
          <div className="relative w-full sm:w-auto">
            <input
              type="text"
              placeholder="Search data"
              className="pl-10 pr-4 py-2 rounded-full border border-gray-300 bg-gray-50 w-full sm:w-64 text-sm"
            />
            <svg
              className="absolute left-3 top-2.5 w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <button className="flex items-center text-sm border rounded-full px-4 py-2 w-full sm:w-auto justify-center">
            Last 2 months <ChevronDown className="w-4 h-4 ml-2" />
          </button>
        </div>

        {/* Desktop Table (Visible on medium screens and up) */}
        <div className="hidden md:block overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left bg-purple-100 text-gray-700">
                <th className="px-4 py-2 font-medium">Name</th>
                <th className="px-4 py-2 font-medium">Borrowed</th>
                <th className="px-4 py-2 font-medium">Date</th>
                <th className="px-4 py-2 font-medium">Description</th>
                <th className="px-4 py-2 font-medium">Return Date</th>
                <th className="px-4 py-2 font-medium">Status</th>
                <th className="px-4 py-2 font-medium">Action</th>
              </tr>
            </thead>
            <tbody>
              {borrowers.map((b, i) => (
                <tr key={i} className="border-b last:border-0">
                  <td className="px-4 py-3 flex items-center gap-2">
                    <img
                      src={b.avatar}
                      alt={b.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span>{b.name}</span>
                  </td>
                  <td className="px-4 py-3">{b.amount}</td>
                  <td className="px-4 py-3">{b.date}</td>
                  <td className="px-4 py-3">{b.description}</td>
                  <td className="px-4 py-3">{b.returnDate}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`flex items-center gap-2 ${
                        b.status === "Cleared"
                          ? "text-green-600"
                          : "text-red-500"
                      }`}
                    >
                      <span className="h-2 w-2 rounded-full bg-current"></span>
                      {b.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-purple-600 underline cursor-pointer">
                    View more
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card Layout (Visible on small screens only) */}
        <div className="md:hidden">
          {borrowers.map((b, i) => (
            <div
              key={i}
              className="bg-gray-50 p-4 rounded-lg shadow-sm mb-4 border border-gray-200"
            >
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={b.avatar}
                  alt={b.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <h3 className="font-semibold text-base">{b.name}</h3>
              </div>
              <div className="grid grid-cols-2 gap-y-2 text-sm">
                <div className="font-medium text-gray-600">Borrowed:</div>
                <div>{b.amount}</div>
                <div className="font-medium text-gray-600">Date:</div>
                <div>{b.date}</div>
                <div className="font-medium text-gray-600">Description:</div>
                <div>{b.description}</div>
                <div className="font-medium text-gray-600">Return Date:</div>
                <div>{b.returnDate}</div>
                <div className="font-medium text-gray-600">Status:</div>
                <div>
                  <span
                    className={`flex items-center gap-1 ${
                      b.status === "Cleared" ? "text-green-600" : "text-red-500"
                    }`}
                  >
                    <span className="h-2 w-2 rounded-full bg-current"></span>
                    {b.status}
                  </span>
                </div>
              </div>
              <button className="mt-4 text-purple-600 underline cursor-pointer text-sm w-full text-left">
                View more
              </button>
            </div>
          ))}
        </div>

        {/* Pagination - remains similar */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-4 text-sm text-gray-600 gap-3 sm:gap-0">
          <div className="flex items-center gap-1">
            Rows per page: <span className="font-medium">10</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          <div className="flex items-center gap-2">
            <span>1–7 of 7</span>
            <button className="p-1 text-gray-400 hover:text-black">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="p-1 text-gray-400 hover:text-black">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cleared;
