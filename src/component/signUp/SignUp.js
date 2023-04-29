import React, { useContext, useState } from "react";
import { UserContext } from "../../state/context/userContext/UserContext";

export default function SignUp() {
  const { createUser, logOut, user } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    console.log("signingup");
    createUser(email, password)
      .then((res) => {
        console.log(res.user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const handleLogout = async () => {
    logOut()
      .then((res) => {
        console.log("logout");
      })
      .catch((err) => {
        console.log("eee", err);
      });
  };
  return (
    <div className="flex flex-col items-center">
      {user && (
        <>
          <div>
            <label>UserName : </label>
            <input type="string" placeholder="Enter  User Name" />
          </div>
          <div>
            <label>Name : </label>
            <input type="string" placeholder="Enter  Name" />
          </div>
        </>
      )}
      <div>
        <label>Email : </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter  mail"
        />
      </div>
      <div>
        <label>Password : </label>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button className="bg-cyan-200" onClick={handleSignUp}>
          SignUp
        </button>
      </div>

      <button onClick={handleLogout}>logout</button>
    </div>
  );
}
