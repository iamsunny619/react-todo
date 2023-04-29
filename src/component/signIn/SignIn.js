import React from "react";

export default function SignIn() {
  return (
    <div className="flex flex-col items-center">
      <div>
        <label>Email : </label>
        <input type="email" placeholder="Enter  mail" />
      </div>
      <div>
        <label>Password : </label>
        <input type="password" placeholder="Enter password" />
      </div>
      <div>
        <button className="rounded-full ">SignIn</button>
      </div>
    </div>
  );
}
