import React, { useState } from "react";
import { userContext } from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [name, setName] = useState("Starting Name");

  return (
    <userContext.Provider value={{ name, setName }}>
      {children}
    </userContext.Provider>
  );
};

export default UserContextProvider;
