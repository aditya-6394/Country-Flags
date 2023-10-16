import { BsMoon } from "react-icons/bs";
import { PiMagnifyingGlassLight } from "react-icons/pi";

export default function Header({
  searchCountries,
  searchCountry,
  continents,
  continent,
}) {
  return (
    <>
      <header className="row px-5 py-2 align-items-center g-0 mb-2 shadow-sm p-3  bg-body rounded">
        <div className="col-6">
          <h1>Where in the world?</h1>
        </div>
        <div className="col-6 text-end">
          <p>
            <BsMoon className="icon-moon p-0 me-1" />
            <span>Dark Mode</span>
          </p>
        </div>
      </header>
      <nav className="row p-4 pb-0 px-5  g-0 d-flex align-items-center ">
        <div className="col-lg-5 col-12 shadow-sm p-3  bg-body rounded d-flex align-items-center ">
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
        <div className="col-lg-4"></div>
        <div className="col-lg-3">
          <select
            name="continents"
            id="continents"
            className="form-select shadow-sm p-3  bg-body rounded border-0"
            onChange={(e) => {
              continents(e);
            }}
            value={continent}
          >
            <option value="" defaultChecked={true}>
              Select a region
            </option>
            <option value="Americas">America</option>
            <option value="Oceania">Oceania</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
          </select>
        </div>
      </nav>
    </>
  );
}
