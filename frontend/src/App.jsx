import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import  LoginPage from './Pages/LoginPage'

function App() {
  return (
    <Router>
      {/* <nav>
        <Link to="/">Login</Link> | <Link to="/about">About</Link>
      </nav> */}
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
