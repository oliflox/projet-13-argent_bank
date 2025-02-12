import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Home from "../pages/Home.jsx";
import Login from "../pages/Login.jsx";
import User from "../pages/User.jsx";
import { logout } from "../components/StateManager";

function AppRoutes() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Router>
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/logout"
          element={<Navigate to="/" replace onNavigate={handleLogout} />}
        />
        <Route
          path="/user"
          element={isLoggedIn ? <User /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
