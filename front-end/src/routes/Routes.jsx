import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Link,
  useLocation,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "../pages/Home.jsx";
import Login from "../pages/Login.jsx";
import User from "../pages/User.jsx";

// Composant pour les routes protégées
function PrivateRoute({ children }) {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const location = useLocation();

  if (!isAuthenticated) {
    // Rediriger vers la page de login en sauvegardant l'URL d'origine
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

// Composant pour les routes publiques (non authentifiées)
function PublicRoute({ children }) {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const location = useLocation();

  if (isAuthenticated) {
    // Rediriger vers la page de profil si déjà authentifié
    return <Navigate to="/profile" replace />;
  }

  return children;
}

function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* Route par défaut */}
        <Route path="/" element={<Home />} />

        {/* Route de login (publique) */}
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />

        {/* Route du profil (protégée) */}
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <User />
            </PrivateRoute>
          }
        />

        {/* Route 404 */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
