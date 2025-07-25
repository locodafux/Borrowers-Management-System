import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const AdminLayout = () => {
  return (
    <Router>
      {/* <nav>
        <Link to="/">Login</Link> | <Link to="/about">About</Link>
      </nav> */}
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
};

export default AdminLayout;
