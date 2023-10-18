import React from "react";

function Sort({ sortingOption, sortingOrder }) {
  return (
    <div className="row px-5 mt-2 border-0">
      <div className="col-lg-3 col-12  rounded border-0 shadow-sm">
        <select
          className="form-select p-3"
          aria-label="Default select example"
          onChange={(e) => sortingOption(e)}
        >
          <option value="">Sort by</option>
          <option value="area">Area</option>
          <option value="population">Population</option>
        </select>
      </div>

      <div className="col-lg-3 col-12  border-0 shadow-sm">
        <select
          className="form-select p-3 rounded "
          aria-label="Default select example"
          onChange={(e) => sortingOrder(e)}
        >
          <option value="increasing">Increasing</option>
          <option value="decreasing">Decreasing</option>
        </select>
      </div>
      <div className="col-lg-6"></div>
    </div>
  );
}

export default Sort;
