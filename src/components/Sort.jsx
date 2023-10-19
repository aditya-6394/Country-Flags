import React from "react";
import Select from "./Select";

function Sort({ sortingOption, sortingOrder }) {
  return (
    // <div className="row px-5 mt-2 g-0">
    <>
      <div className="col-lg-2 col-12   shadow-sm">
        <Select
          options={["Area", "Population"]}
          onChangeHandler={sortingOption}
          optionOne="Sort by"
        />
      </div>

      <div className="col-lg-1 col-12  border-0 shadow-sm">
        <Select
          options={["Increasing", "Decreasing"]}
          onChangeHandler={sortingOrder}
          optionOne="Order"
        />
      </div>
      <div className="col-lg-6"></div>
    </>
    // </div>
  );
}

export default Sort;
