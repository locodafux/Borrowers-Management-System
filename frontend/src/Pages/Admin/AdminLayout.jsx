import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";

// Import your pages here (replace these with your actual components)

const AdminLayout = () => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 p-6 bg-gray-100">
        <h1>Main Content</h1>
      </div>
    </div>
  );
};

export default AdminLayout;
