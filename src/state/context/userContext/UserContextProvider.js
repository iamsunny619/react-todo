import React, { useEffect, useState } from "react";
import { UserContext } from "./UserContext.js";
import { auth } from "../../../config/fireabse.js";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setUser(null);
    return signOut(auth);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);
  return (
    <UserContext.Provider value={{ createUser, signIn, logOut, user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
