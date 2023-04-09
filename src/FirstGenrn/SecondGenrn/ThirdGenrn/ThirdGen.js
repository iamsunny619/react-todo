import React from "react";

const ThirdGen = ({ pure2, pure1 }) => {
  return (
    <div>
      <h3> Third Genration components</h3>
      <div>I have recived in hertigate : {pure2 + " " + pure1} </div>
    </div>
  );
};

export default ThirdGen;
