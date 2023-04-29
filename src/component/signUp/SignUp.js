import React from "react";

export default function SignUp() {
  return (
    <div className="flex flex-col items-center">
      {/* <div>
        <label>UserName : </label>
        <input type="string" placeholder="Enter  User Name" />
      </div>
      <div>
        <label>Name : </label>
        <input type="string" placeholder="Enter  Name" />
      </div> */}
      <div>
        <label>Email : </label>
        <input type="email" placeholder="Enter  mail" />
      </div>
      <div>
        <label>Password : </label>
        <input type="password" placeholder="Enter password" />
      </div>
      <div>
        <button className="bg-cyan-200">SignUp</button>
      </div>
    </div>
  );
}
