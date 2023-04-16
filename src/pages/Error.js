import React from "react";
import { Link } from "react-router-dom";
import Home from "./Home";

export default function Error() {
  return (
    <div className="section">
      <div>404.... No page found</div>
      <Link className="btn" to="/" element={<Home />}>
        Home
      </Link>
    </div>
  );
}
