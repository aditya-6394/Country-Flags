import React, { useContext } from "react";
import { ThemeContext } from "../App";
import { useNavigate } from "react-router-dom";

export default function Countries({ countries }) {
  const navigate = useNavigate();
  const handleNavigation = (event) => {
    const ccn3 = event.target.closest(".country").id;
    navigate(`country/${ccn3}`);
  };

  const theme = useContext(ThemeContext);
  return (
    <div
      className={`${theme} card-row row d-flex overflow-hidden p-4 pb-0 g-0`}
      onClick={(e) => handleNavigation(e)}
    >
      {countries.map((country, index) => {
        return (
          <div
            key={index}
            className={`${theme} card-container col-lg-3 col-md-6 col-sm-12 d-flex flex-column p-4 country`}
            id={`${country.ccn3}`}
          >
            <div
              className={`${theme} card h-100 border-0 shadow-sm  bg-body rounded`}
            >
              <div className={`${theme} card-image h-50 mb-0`}>
                <img
                  src={country.flags.png}
                  alt="Country Image"
                  style={{ height: "100%", width: "100%" }}
                />
              </div>
              <div className={`${theme} card-description h-50 ps-3 h-auto `}>
                <h6 className="mt-3 mb-3 bold">{country.name.common}</h6>
                <p className="mb-1">
                  <span className="bold">Population: </span>{" "}
                  {country.population.toLocaleString("en-US")}
                </p>
                <p className="mb-1">
                  <span className="bold">Region: </span>
                  {country.region}
                </p>
                <p className="mb-1">
                  <span className="bold">Capital: </span>
                  {country.capital}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
