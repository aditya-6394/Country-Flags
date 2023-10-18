import React from "react";

function Select({ options, onChangeHandler, optionOne }) {
  return (
    <>
      <select
        className="form-select shadow-sm p-3   rounded border-0"
        onChange={(e) => {
          onChangeHandler(e);
        }}
      >
        <option value="" defaultChecked={true}>
          {optionOne}
        </option>
        {options.map(
          (item, index) =>
            item && (
              <option key={index} value={item}>
                {item}
              </option>
            )
        )}
      </select>
    </>
  );
}

export default Select;
