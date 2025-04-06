import { useAuth } from "../../contexts/authContext";
import { logout } from "../../firebase/auth";

function Home() {
  const { user } = useAuth();

  return (
    <div>
      <h2>Welcome, {user?.email}</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Home;
