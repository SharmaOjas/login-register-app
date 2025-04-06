// src/firebase/auth.js
import { auth } from "./firebase";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  sendPasswordResetEmail,     // ✅ ADDED
  updatePassword,             // ✅ ADDED
  sendEmailVerification       // ✅ ADDED
} from "firebase/auth";

// Email/Password Registration
export const register = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

// Email/Password Login
export const login = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// Google Login
export const loginWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};

// Logout
export const logout = () => {
  return signOut(auth);
};

// Forgot Password
export const resetPassword = (email) => {
  return sendPasswordResetEmail(auth, email);
};

// Change Password
export const changePassword = (password) => {
  return updatePassword(auth.currentUser, password);
};

// Send Verification Email
export const verifyEmail = () => {
  return sendEmailVerification(auth.currentUser);
};
