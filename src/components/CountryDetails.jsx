import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
function CountryDetails() {
  const navigate = useNavigate();
  const [country, setCountry] = useState(undefined);

  const { id } = useParams();

  const fetchCountry = async () => {
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/alpha/${id}`
      );
      const details = await response.json();
      const [countryData] = details;
      setCountry(countryData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchCountry();
  }, []);
  return (
    country && (
      <div>
        <div className="row g-0 px-5">
          <button onClick={() => navigate(-1)}>Go Back</button>
        </div>

        <div className="row g-0 mt-5">
          <div className="col-lg-6 px-5">
            {
              <img
                src={`${country.flags.svg}`}
                alt=""
                className="h-100 w-100 shadow-sm"
              />
            }
          </div>

          {/* <div className="col-lg-1 d-none d-lg-block"></div> */}

          <div className="col-lg-6 px-5">
            <div className="row g-0">
              <h3>{`${country.name.official}`}</h3>
            </div>

            <div className="row g-0">
              <div className="col-5">
                <p>Native name</p>
                <p>Population: {country.population}</p>
                <p>Region: {country.region}</p>
                <p>Sub Region: {country.subregion}</p>
                <p>Capital: </p>
              </div>
              <div className="col-2"></div>
              <div className="col-5">
                <p>Top Level Domain: {country.tld}</p>
                <p>Currencies</p>
                <p>Languages</p>
              </div>
            </div>

            <div className="row g-0">
              <p>Border Countries</p>
              {country.borders?.map((borderCntry) => {
                return <button key={borderCntry}>{borderCntry}</button>;
              })}
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default CountryDetails;
