import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../../firebase/firebase";

import { onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    return onAuthStateChanged(auth, setUser);
  }, []);

  return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>;
}
