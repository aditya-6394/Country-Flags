import React from "react";

export default function Countries({ countries }) {
  return (
    <div className="row d-flex overflow-hidden p-4 pb-0 g-0">
      {countries.map((country, index) => {
        return (
          <div className="col-lg-3 col-md-6 col-sm-12 d-flex flex-column p-4 ">
            <div className="card h-100 border-0 shadow-sm p-3  bg-body rounded">
              <div className="card-image h-50 mb-0">
                <img
                  src={country.flags.png}
                  alt="Country Image"
                  style={{ height: "100%", width: "100%" }}
                />
              </div>
              <div className="card-description h-50 ps-3 h-auto ">
                <h6 className="mt-3 mb-3">{country.name.common}</h6>
                <p className="mb-1">
                  <span>Population:</span> {country.population}
                </p>
                <p className="mb-1">
                  <span>Region:</span>
                  {country.region}
                </p>
                <p className="mb-1">
                  <span>Capital:</span>
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
