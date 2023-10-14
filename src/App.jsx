import { useState, useEffect } from "react";
import Header from "./components/Header";
import Countries from "./components/Countries";

function App() {
  const [countries, setCountries] = useState();
  const [searchCountry, setSearchCountry] = useState();
  const [filterCountries, setFilterCountries] = useState();
  const [continent, setContinent] = useState();
  const [countriesInContinent, setCountriesInContinent] = useState();

  const allCountries = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const countriesData = await response.json();
    setCountries(countriesData);
  };

  useEffect(() => {
    allCountries();
  }, []);

  const searchCountries = (event) => {
    console.log("search country set");
    setSearchCountry(event.target.value);
  };

  useEffect(() => {
    if (countries) {
      if (!continent) {
        const searchedCountries = countries.filter((country) => {
          return country.name.official
            .toLowerCase()
            .includes(searchCountry.toLowerCase());
        });
        console.log(searchedCountries);
        setFilterCountries(searchedCountries);
      } else {
        console.log(`else`);
        if (countriesInContinent) {
          const searchedCountries = countriesInContinent.filter((country) => {
            return country.name.official
              .toLowerCase()
              .includes(searchCountry.toLowerCase());
          });
          setFilterCountries(searchedCountries);
        }
      }
    }
  }, [searchCountry]);

  const continents = (e) => {
    setContinent(e.target.value.toLowerCase());
  };

  useEffect(() => {
    if (countries) {
      const countriesInContinent = countries.filter((country) => {
        return country.region.toLowerCase() === continent.toLowerCase();
      });
      setCountriesInContinent(countriesInContinent);
      console.log(countriesInContinent);
    }
  }, [continent]);

  return (
    <main className="container-fluid bg-dark-subtle overflow-hidden">
      <Header
        searchCountries={searchCountries}
        searchCountry={searchCountry}
        continents={continents}
      />
      {countries && !searchCountry && !continent && (
        <Countries countries={countries} />
      )}

      {!searchCountry && continent && countriesInContinent && (
        <Countries countries={countriesInContinent} />
      )}
      {searchCountry && !continent && filterCountries && (
        <Countries countries={filterCountries} />
      )}
      {searchCountry && continent && filterCountries && (
        <Countries countries={filterCountries} />
      )}
    </main>
  );
}

export default App;
