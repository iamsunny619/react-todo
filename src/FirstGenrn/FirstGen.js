import React, { useState } from "react";
import SecondGen from "./SecondGenrn/SecondGen";

const FirstGen = () => {
  const [pure1, setPure1] = useState(100);
  return (
    <div>
      <h2>firstGen</h2>
      <div>
        I'm first gen, with value: <b>{pure1}</b>
      </div>

      <SecondGen pure1={pure1} />
    </div>
  );
};

export default FirstGen;
