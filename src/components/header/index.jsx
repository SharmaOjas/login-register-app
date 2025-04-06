import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
import { logout } from "../../firebase/auth";

function Header() {
  const { user } = useAuth();

  return (
    <nav className="bg-black  text-white">
      {user ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </nav>
  );
}

export default Header;
