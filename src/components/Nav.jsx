import React, { useContext } from "react";
import { PiMagnifyingGlassLight } from "react-icons/pi";
import { ThemeContext } from "../App";

function Nav({
  searchCountries,
  searchCountry,
  continents,
  continent,
  continentList,
  subRegionList,
  subRegion,
  subregion,
}) {
  const theme = useContext(ThemeContext);

  return (
    <nav
      className={`${theme} row p-4 pb-0 px-5  g-0 d-flex align-items-center `}
    >
      <div
        className={`${theme} col-lg-4 col-12 shadow-sm p-3  rounded d-flex align-items-center input-div`}
      >
        <span>
          <PiMagnifyingGlassLight className="icon-search me-2" />
        </span>

        <input
          type="text"
          className="form-control border-0 p-0"
          placeholder="Search for a country"
          id="search-country"
          value={searchCountry}
          onChange={(e) => searchCountries(e)}
        />
      </div>

      <div className="col-1"></div>

      <div className={`${theme} col-lg-3`}>
        <select
          name="subRegion"
          id="subRegion"
          className="form-select shadow-sm p-3   rounded border-0"
          onChange={(e) => {
            subregion(e);
          }}
        >
          <option value="" defaultChecked={true}>
            Select a sub-region
          </option>
          {subRegionList.map(
            (item, index) =>
              item && (
                <option key={index} value={item}>
                  {item}
                </option>
              )
          )}
        </select>
      </div>

      <div className="col-1"></div>

      <div className={`${theme} col-lg-3`}>
        <select
          name="continents"
          id="continents"
          className="form-select shadow-sm p-3   rounded border-0"
          onChange={(e) => {
            continents(e);
          }}
          value={continent}
        >
          <option value="" defaultChecked={true}>
            Select a region
          </option>
          {continentList.map((continent, index) => (
            <option key={index} value={continent}>
              {continent}
            </option>
          ))}
        </select>
      </div>
    </nav>
  );
}

export default Nav;
