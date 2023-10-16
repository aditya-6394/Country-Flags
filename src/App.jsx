import { useState, useEffect } from "react";
import Header from "./components/Header";
import Countries from "./components/Countries";

function App() {
  const [countries, setCountries] = useState([]);
  const [searchCountry, setSearchCountry] = useState("");
  const [continent, setContinent] = useState("");
  const [filterCountries, setFilterCountries] = useState([]);

  const fetchCountries = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const countriesData = await response.json();
      setCountries(countriesData);
      console.log(countries);
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  const searchCountries = (event) => {
    setSearchCountry(event.target.value.toLowerCase());
    console.log(searchCountry);
  };
  const continents = (e) => {
    setContinent(e.target.value.toLowerCase());
    console.log("continent set" + continent);
  };

  useEffect(() => {
    if (countries) {
      const searchedCountries = countries.filter((country) => {
        const countryName = country.name.official.toLowerCase();
        const countryRegion = country.region.toLowerCase();

        const matchesSearch = countryName.includes(searchCountry.toLowerCase());
        const matchesContinent = countryRegion === continent.toLowerCase();

        if (searchCountry && continent) {
          return matchesSearch && matchesContinent;
        } else if (searchCountry) {
          return matchesSearch;
        } else if (continent) {
          return matchesContinent;
        }
        return true;
      });

      setFilterCountries(searchedCountries);
    }
  }, [searchCountry, continent]);

  return (
    <main className="container-fluid bg-dark-subtle overflow-hidden p-0">
      <Header
        searchCountries={searchCountries}
        searchCountry={searchCountry}
        continents={continents}
      />
      {countries && !searchCountry && continent == "" && (
        <Countries countries={countries} />
      )}
      {filterCountries && <Countries countries={filterCountries} />}
    </main>
  );
}

export default App;
