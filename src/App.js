import { AuthProvider } from "./contexts/authContext";
import { useRoutes } from "react-router-dom";
import Header from "./components/header";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Home from "./components/home";

function App() {
  const routes = useRoutes([
    { path: "/", element: <Login /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/home", element: <Home /> },
  ]);

  return (
    <AuthProvider>
      <Header />
      {routes}
    </AuthProvider>
  );
}

export default App;
