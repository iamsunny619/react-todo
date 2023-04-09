import React, { useState } from "react";
import ThirdGen from "./ThirdGenrn/ThirdGen";

const SecondGen = ({ pure1 }) => {
  const [pure2, setPure2] = useState();
  return (
    <div>
      <h2>I'm second genration</h2>
      <div>
        {" "}
        I have reacved in hertigate the pure value from parent : <b>{pure1}</b>
      </div>

      <div>
        for 3rd gen
        <input onChange={(e) => setPure2(e.target.value)} value={pure2} />
      </div>

      <ThirdGen pure2={pure2} pure1={pure1} />
    </div>
  );
};

export default SecondGen;
