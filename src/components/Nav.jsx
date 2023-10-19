import React, { useContext } from "react";
import { PiMagnifyingGlassLight } from "react-icons/pi";
import { ThemeContext } from "../App";
import Select from "./Select";
import SearchInput from "./SearchInput";
import Sort from "./Sort";

function Nav({
  searchCountries,
  searchCountry,
  continents,
  continentList,
  subRegionList,
  subregion,
  sortingOption,
  sortingOrder,
}) {
  const theme = useContext(ThemeContext);

  return (
    <nav
      className={`${theme} row p-4 pb-0 px-5  g-0 d-flex align-items-center `}
    >
      <div className="col-lg-3 col-12 shadow-sm p-3 rounded d-flex align-items-center input-div">
        <span>
          <PiMagnifyingGlassLight className="icon-search me-2" />
        </span>
        <SearchInput value={searchCountry} eventHandler={searchCountries} />
      </div>

      {/* <div className="col-1"></div> */}

      <div className={`${theme} col-lg-3`}>
        <Select
          options={subRegionList}
          onChangeHandler={subregion}
          optionOne="Select a sub-region"
        />
      </div>

      {/* <div className="col-1"></div> */}

      <div className={`${theme} col-lg-3`}>
        <Select
          options={continentList}
          onChangeHandler={continents}
          optionOne="Select a region"
        />
      </div>

      <Sort sortingOption={sortingOption} sortingOrder={sortingOrder} />
    </nav>
  );
}

export default Nav;
