import { Outlet } from "react-router-dom";
import Sidebar from "./Components/Sidebar";

const AdminLayout = () => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 p-6 bg-gray-100">
        <Outlet /> {/* This is where nested admin pages render */}
      </div>
    </div>
  );
};

export default AdminLayout;
