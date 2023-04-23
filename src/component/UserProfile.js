import React, { useContext } from "react";
import { userContext } from "../context/UserContext";

const UserProfile = () => {
  const { name, setName } = useContext(userContext);
  return (
    <>
      <div>Hello world intial value is {name}</div>
      <div>
        enter new value:{" "}
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
        />
      </div>
    </>
  );
};

export default UserProfile;
