// import { useState, useEffect, createContext } from "react";
// import Header from "./components/Header";
// import Countries from "./components/Countries";
// import Spinner from "./components/Spinner";
// import WrongCountry from "./components/WrongCountry";
// import Nav from "./components/Nav";
// import Sort from "./components/Sort";
// import { Route,Routes } from "react-router-dom";

// export const ThemeContext = createContext();

// function App() {
//   const [countries, setCountries] = useState([]);
//   const [searchCountry, setSearchCountry] = useState("");
//   const [continent, setContinent] = useState("");
//   const [subRegionList, setSubRegionList] = useState([]);
//   const [subRegion, setSubRegion] = useState("");
//   const [sortOption, setSortOption] = useState("");
//   const [sortOrder, setSortOrder] = useState("increasing");
//   const [theme, setTheme] = useState("light");

//   const toggleTheme = () => {
//     theme === "light" ? setTheme("dark") : setTheme("light");
//   };

//   const fetchCountries = async () => {
//     try {
//       const response = await fetch("https://restcountries.com/v3.1/all");
//       const countriesData = await response.json();
//       setCountries(countriesData);
//     } catch (error) {
//       console.error("Error fetching countries:", error);
//     }
//   };

//   useEffect(() => {
//     setTimeout(() => {
//       fetchCountries();
//     }, 2000);
//   }, []);

//   const searchCountries = (event) => {
//     setSearchCountry(event.target.value.toLowerCase());
//   };

//   const continents = (event) => {
//     setContinent(event.target.value.toLowerCase());
//     setSubRegionList([
//       ...new Set(
//         countries.map((country) => {
//           if (
//             country.region.toLowerCase() === event.target.value.toLowerCase()
//           ) {
//             return country.subregion;
//           }
//         })
//       ),
//     ]);
//   };

//   const continentList = [
//     ...new Set(countries.map((country) => country.region)),
//   ];

//   const subregions = (event) => {
//     const subregion = event.target.value.toLowerCase();
//     setSubRegion(subregion);
//     console.log(subRegion);
//   };

//   const sortingOption = (event) => {
//     const option = event.target.value.toLowerCase();
//     setSortOption(option);
//   };

//   const sortingOrder = (event) => {
//     const order = event.target.value.toLowerCase();
//     setSortOrder(order);
//   };

//   const filteredCountries = countries
//     .filter((country) => country.region.toLowerCase().includes(continent))
//     .filter((country) =>
//       country.name.official.toLowerCase().includes(searchCountry)
//     )
//     .filter((country) => {
//       if (!country.subregion) {
//         return true;
//       }
//       return country.subregion.toLowerCase().includes(subRegion);
//     });

//   if (sortOption !== "") {
//     console.log(sortOption);
//     console.log(sortOrder);
//     filteredCountries.sort((a, b) => {
//       if (sortOrder === "increasing") {
//         return sortOption === "area"
//           ? a.area > b.area
//           : a.population > b.population;
//       } else {
//         return sortOption === "area"
//           ? a.area < b.area
//           : a.population < b.population;
//       }
//     });
//   }

//   if (countries.length === 0) {
//     return <Spinner />;
//   }

//   return (
//     <ThemeContext.Provider value={theme}>
//       {/* <Route> */}
//       <main
//         className={`${theme} container-fluid bg-dark-subtle overflow-hidden p-0`}
//       >
//         <Header toggleTheme={toggleTheme} />
//         <Nav
//           searchCountries={searchCountries}
//           searchCountry={searchCountry}
//           continents={continents}
//           continentList={continentList}
//           subRegionList={subRegionList}
//           subRegion={subRegion}
//           subregion={subregions}
//         />
//         <Sort sortingOption={sortingOption} sortingOrder={sortingOrder} />
//         {countries && filteredCountries.length !== 0 && (
//           <Countries countries={filteredCountries} />
//         )}
//         {searchCountry && filteredCountries.length === 0 && <WrongCountry />}
//       </main>
//       {/* </Route> */}
//     </ThemeContext.Provider>
//   );
// }

// export default App;

import { useState, useEffect, createContext } from "react";
import Header from "./components/Header";
import Countries from "./components/Countries";
import Spinner from "./components/Spinner";
import WrongCountry from "./components/WrongCountry";
import Nav from "./components/Nav";
import Sort from "./components/Sort";
import CountryDetails from "./components/CountryDetails";
import { Route, Routes } from "react-router-dom";

export const ThemeContext = createContext();

function App() {
  const [countries, setCountries] = useState([]);
  const [searchCountry, setSearchCountry] = useState("");
  const [continent, setContinent] = useState("");
  const [subRegionList, setSubRegionList] = useState([]);
  const [subRegion, setSubRegion] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [sortOrder, setSortOrder] = useState("increasing");
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const fetchCountries = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const countriesData = await response.json();
      setCountries(countriesData);
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      fetchCountries();
    }, 2000);
  }, []);

  const searchCountries = (event) => {
    setSearchCountry(event.target.value.toLowerCase());
  };

  const continents = (event) => {
    setContinent(event.target.value.toLowerCase());
    setSubRegionList([
      ...new Set(
        countries.map((country) => {
          if (
            country.region.toLowerCase() === event.target.value.toLowerCase()
          ) {
            return country.subregion;
          }
        })
      ),
    ]);
  };

  const continentList = [
    ...new Set(countries.map((country) => country.region)),
  ];

  const subregions = (event) => {
    const subregion = event.target.value.toLowerCase();
    setSubRegion(subregion);
    console.log(subRegion);
  };

  const sortingOption = (event) => {
    const option = event.target.value.toLowerCase();
    setSortOption(option);
  };

  const sortingOrder = (event) => {
    const order = event.target.value.toLowerCase();
    setSortOrder(order);
  };

  const filteredCountries = countries
    .filter((country) => country.region.toLowerCase().includes(continent))
    .filter((country) =>
      country.name.official.toLowerCase().includes(searchCountry)
    )
    .filter((country) => {
      if (!country.subregion) {
        return true;
      }
      return country.subregion.toLowerCase().includes(subRegion);
    });

  if (sortOption !== "") {
    console.log(sortOption);
    console.log(sortOrder);
    filteredCountries.sort((a, b) => {
      if (sortOrder === "increasing") {
        return sortOption === "area"
          ? a.area > b.area
          : a.population > b.population;
      } else {
        return sortOption === "area"
          ? a.area < b.area
          : a.population < b.population;
      }
    });
  }

  if (countries.length === 0) {
    return <Spinner />;
  }

  return (
    <ThemeContext.Provider value={theme}>
      {/* <Route> */}

      {/* {" "} */}
      <main
        className={`${theme} container-fluid bg-dark-subtle overflow-hidden p-0`}
      >
        <Header toggleTheme={toggleTheme} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Nav
                  searchCountries={searchCountries}
                  searchCountry={searchCountry}
                  continents={continents}
                  continentList={continentList}
                  subRegionList={subRegionList}
                  subRegion={subRegion}
                  subregion={subregions}
                />
                <Sort
                  sortingOption={sortingOption}
                  sortingOrder={sortingOrder}
                />
                {countries && filteredCountries.length !== 0 && (
                  <Countries countries={filteredCountries} />
                )}
                {searchCountry && filteredCountries.length === 0 && (
                  <WrongCountry />
                )}
              </>
            }
          />
          <Route path="country/:id" element={<CountryDetails />} />
        </Routes>
      </main>

      {/* </Route> */}
    </ThemeContext.Provider>
  );
}

export default App;
