import React from "react";

export default function Countries({ countries }) {
  return (
    <div className="row d-flex overflow-hidden">
      {countries.map((country, index) => {
        return (
          <div className="col-lg-3 col-md-6 d-flex flex-column p-4 border">
            <div className="card h-100">
              <div className="card-image h-50">
                <img
                  src={country.flags.png}
                  alt="Country Image"
                  style={{ height: "100%", width: "100%" }}
                />
              </div>
              <div className="card-description h-50">
                <h3>{country.name.common}</h3>
                <p>Population: {country.population}</p>
                <p>Region:{country.region}</p>
                <p>Capital:{country.capital}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
