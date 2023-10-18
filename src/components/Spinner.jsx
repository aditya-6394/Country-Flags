import React from "react";

function Spinner() {
  return (
    <div className="spinner d-flex  align-items-center justify-content-center container-fluid ">
      <div
        className="spinner-border  "
        style={{ width: "8rem", height: "8rem" }}
        role="status"
      ></div>
    </div>
  );
}

export default Spinner;
