export default function Header({ searchCountries, searchCountry, continents }) {
  return (
    <>
      <header className="row px-5 align-items-center">
        <div className="col-6">
          <h1>Where in the world?</h1>
        </div>
        <div className="col-6 text-end">
          <p>
            <i className="fa-thin fa-moon fa-2xs"></i>Dark Mode
          </p>
        </div>
      </header>
      <nav className="row px-5">
        <div className="col-lg-5 col-12">
          <input
            type="text"
            className="form-control"
            placeholder="Search for a country"
            id="search-country"
            value={searchCountry}
            onChange={(e) => searchCountries(e)}
          />
        </div>
        <div className="col-lg-5"></div>
        <div className="col-lg-2">
          <select
            name="continents"
            id="continents"
            className="form-select"
            onChange={(e) => {
              continents(e);
            }}
            value="select by continent"
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
