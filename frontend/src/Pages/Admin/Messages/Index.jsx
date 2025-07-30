import React, { useState } from "react";
import {
  Search,
  Plus,
  Send,
  MoreVertical,
  ChevronDown,
  LogOut,
  Menu, // Added for mobile menu toggle
  X, // Added for close button in mobile menu
} from "lucide-react";

const Messages = () => {
  const [isLeftPaneOpen, setIsLeftPaneOpen] = useState(true); // State to control left pane visibility on mobile

  const chatList = [
    {
      id: 1,
      name: "D. Mariam",
      message: "I am very sorry about the...",
      time: "12:05PM",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2600&auto=format&fit=crop",
      active: true,
    },
    {
      id: 2,
      name: "S. Richard",
      message: "Taking sometime to get...",
      time: "11:40AM",
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2574&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "A. Demilare",
      message: "Thanks so much",
      time: "11:20AM",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29329?q=80&w=2574&auto=format&fit=crop",
    },
  ];

  const messages = [
    {
      id: 1,
      from: "other",
      text: `Hello Mariam! This is about the loan you collected some months
      back. Has there been any updates from your end and what's your
      plan for the payment. I am quite in need of it`,
      time: "07:25AM",
    },
    {
      id: 2,
      from: "me",
      text: "This is me checking in again, could you give me an update before the end of the day.",
      time: "09:10AM",
    },
    {
      id: 3,
      from: "other",
      text: "Hey there Richard, really sorry about the delay. I will be making the payment soon.",
      time: "12:05PM",
    },
  ];

  return (
    <div className="flex flex-1 h-screen bg-gray-100 antialiased text-gray-900 overflow-hidden rounded-lg shadow-lg md:h-full">
      {/* Overlay for mobile when left pane is open */}
      {isLeftPaneOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={() => setIsLeftPaneOpen(false)}
        ></div>
      )}

      {/* Left Pane - Conditional visibility for mobile */}
      <div
        className={`fixed inset-y-0 left-0 z-30 w-full bg-white border-r border-gray-200 flex flex-col h-full flex-shrink-0
          transform transition-transform duration-300 ease-in-out md:static md:w-[300px] md:translate-x-0
          ${isLeftPaneOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="px-4 pt-4 pb-2 flex-shrink-0">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Messages</h2>
            <button
              className="md:hidden text-gray-500 hover:text-gray-700"
              onClick={() => setIsLeftPaneOpen(false)}
            >
              <X size={24} />
            </button>
          </div>

          {/* Search */}
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Search data"
              className="w-full pl-10 pr-10 py-2 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-500 hover:text-blue-600">
              <Plus size={20} />
            </button>
          </div>

          <h3 className="text-lg font-medium mb-3">Chats</h3>
        </div>

        {/* Chats List */}
        <div className="flex-1 overflow-y-auto custom-scrollbar px-4 pb-4">
          {chatList.map((chat) => (
            <div
              key={chat.id}
              className={`flex items-center p-3 rounded-lg mb-2 cursor-pointer ${
                chat.active
                  ? "bg-indigo-500 text-white"
                  : "hover:bg-gray-50 text-gray-900"
              }`}
              onClick={() => {
                // In a real app, this would set the active chat
                // For this demo, we'll just close the left pane on selection
                setIsLeftPaneOpen(false);
              }}
            >
              <img
                src={chat.avatar}
                alt={`${chat.name} Avatar`}
                className="w-10 h-10 rounded-full mr-3 object-cover"
              />
              <div className="flex-1">
                <p className="font-semibold">{chat.name}</p>
                <p className="text-sm truncate">{chat.message}</p>
              </div>
              <span className="text-xs text-right min-w-[50px]">
                {chat.time}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Pane */}
      <div
        className={`flex-1 flex flex-col bg-gray-50 h-full ${
          isLeftPaneOpen ? "hidden md:flex" : "flex"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white flex-shrink-0">
          <div className="flex items-center">
            {/* Mobile menu button */}
            <button
              className="md:hidden mr-3 text-gray-500 hover:text-gray-700"
              onClick={() => setIsLeftPaneOpen(true)}
            >
              <Menu size={24} />
            </button>
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2600&auto=format&fit=crop"
              alt="D. Mariam Avatar"
              className="w-10 h-10 rounded-full mr-3 object-cover"
            />
            <p className="font-semibold text-lg">D. Mariam</p>
          </div>
          <button className="text-gray-500 hover:text-gray-700">
            <MoreVertical size={20} />
          </button>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 p-4 overflow-y-auto flex flex-col justify-end">
          {messages.map((msg) =>
            msg.from === "me" ? (
              <div key={msg.id} className="flex justify-end mb-4 items-end">
                <div className="bg-white p-3 rounded-lg max-w-[75%] md:max-w-lg shadow">
                  <p className="text-sm">{msg.text}</p>
                  <span className="text-xs text-gray-500 mt-1 block text-right">
                    {msg.time}
                  </span>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2576&auto=format&fit=crop"
                  alt="My Avatar"
                  className="w-8 h-8 rounded-full ml-3 object-cover"
                />
              </div>
            ) : (
              <div key={msg.id} className="flex mb-4 items-end">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2600&auto=format&fit=crop"
                  alt="Other Avatar"
                  className="w-8 h-8 rounded-full mr-3 object-cover"
                />
                <div className="bg-white p-3 rounded-lg max-w-[75%] md:max-w-lg shadow">
                  <p className="text-sm">{msg.text}</p>
                  <span className="text-xs text-gray-500 mt-1 block text-right">
                    {msg.time}
                  </span>
                </div>
              </div>
            )
          )}
        </div>

        {/* Message Input */}
        <div className="p-4 border-t border-gray-200 bg-white flex items-center flex-shrink-0">
          <input
            type="text"
            placeholder="Type message"
            className="flex-1 px-4 py-2 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 mr-3 text-sm"
          />
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 flex items-center text-sm">
            <span className="hidden md:inline">Send</span>{" "}
            <Send size={18} className="md:ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Messages;
