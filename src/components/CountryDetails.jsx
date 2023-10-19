import React from "react";
import { useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";
import { ThemeContext } from "../App";

function CountryDetails() {
  const theme = useContext(ThemeContext);
  const navigate = useNavigate();
  const [country, setCountry] = useState(undefined);
  const [allCountries, setAllCountries] = useState(undefined);
  const { id } = useParams();
  const countryCodeMap = {};
  const fetchCountry = async () => {
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/alpha/${id}`
      );
      const details = await response.json();
      const [countryData] = details;
      setCountry(countryData);

      const allCountriesResponse = await fetch(
        "https://restcountries.com/v3.1/all"
      );
      const allCountries = await allCountriesResponse.json();

      allCountries.map((country) => {
        countryCodeMap[country.cca3] = country.name.common;
      });

      setAllCountries(countryCodeMap);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCountry();
  }, [id]);

  const nativeName = () => {
    for (let key in country.name.nativeName) {
      return country.name.nativeName[key].common;
    }
  };

  const currencies = () => {
    if (!country.currencies) {
      return "";
    }
    const currencyList = Object.values(country.currencies).map((currency) => {
      return currency.name;
    });
    return currencyList.toString();
  };

  const languages = () => {
    // console.log(country.languages);
    if (!country.languages) {
      return "";
    }
    return Object.values(country.languages).toString();
  };

  if (!allCountries) {
    return <Spinner />;
  }

  return (
    country &&
    allCountries && (
      <div className="row g-0 ">
        <div className="row g-0 px-5 my-4">
          <div className="col-lg-2">
            <button
              className="btn btn-sm shadow-sm border-light"
              onClick={() => navigate("/")}
            >
              ← Go Back
            </button>
          </div>
        </div>

        <div className="country-details row g-0 mt-3 ">
          <div className="col-lg-6 col-12 px-5">
            {
              <img
                src={`${country.flags.svg}`}
                alt=""
                className="shadow-sm w-100"
              />
            }
          </div>

          <div className="col-lg-6 col-12 px-5 py-3">
            <div className="row g-0 ">
              <h3>{`${country.name.official}`}</h3>
            </div>

            <div className="row g-0">
              <div className="col-lg-5 col-12">
                <p className="mb-1">
                  <span className="bold"> Native name: </span>
                </p>
                <p className="mb-1">
                  <span className="bold"> Population: </span>

                  {country.population.toLocaleString("en-US")}
                </p>
                <p className="mb-1">
                  <span className="bold"> Region: </span>
                  {country.region}
                </p>
                <p className="mb-1">
                  <span className="bold"> Sub Region: </span>
                  {country.subregion}
                </p>
                <p className="mb-1">
                  <span className="bold">Capital: </span>
                  {country.capital?.toString()}
                </p>
              </div>
              <div className="col-2"></div>
              <div className="col-lg-5 col-12">
                <p className="mb-1">
                  <span className="bold">Top Level Domain: </span>

                  {country.tld}
                </p>
                <p className="mb-1">
                  <span className="bold">Currencies: </span>
                  {currencies()}
                </p>
                <p className="mb-1">
                  <span className="bold">Languages: </span>

                  {languages()}
                </p>
              </div>
            </div>

            <div className="row g-0 d-flex align-items-center">
              <div className="col-4">
                <p>
                  <span className="bold">Border Countries:</span>
                </p>
              </div>

              <div className="col-8">
                {country.borders?.map((borderCntry) => {
                  return (
                    <Link to={`/country/${borderCntry}`}>
                      <button
                        key={borderCntry}
                        className={`${theme} me-1 mb-1 btn shadow-sm py-1 border-light `}
                      >
                        {allCountries[borderCntry]}
                      </button>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default CountryDetails;
