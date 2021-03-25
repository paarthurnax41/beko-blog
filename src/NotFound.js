import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Sorry</h2>
      <p>This Page does not exist anymore</p>
      <Link to="/">Back to the Homepage...</Link>
    </div>
  );
};

export default NotFound;
