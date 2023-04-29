import React from "react";
import { UserContext } from "./UserContext.js";
import { auth } from "../../../config/fireabse.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const UserContextProvider = ({ children }) => {
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };
  return (
    <UserContext.Provider value={{ createUser, signIn, logOut }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
