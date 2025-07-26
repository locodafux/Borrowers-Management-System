import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import TopBar from "./components/TopBar";

const AdminLayout = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        {/* TopBar */}
        <TopBar />

        {/* Scrollable content area */}
        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
