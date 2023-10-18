import React from "react";
import { useNavigate, useParams } from "react-router-dom";
function CountryDetails() {
  const navigate = useNavigate();

  const { id } = useParams();

  const fetchCountry = async () => {
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/alpha/${id}`
      );
      const details = await response.json();
      console.log(details);
    } catch (error) {}
  };
  fetchCountry();
  return (
    <div>
      {/* <button onClick={() => navigate(-1)}>Go Back</button> */}
      <div className="row">
        <button onClick={() => navigate(-1)} className="btn"></button>
      </div>
      <div className="row">
        <div className="col-lg-5">{/* <img src="" alt="" /> */}</div>
        <div className="col-lg-2 d-none col-lg-block"></div>
        <div className="col-lg-5"></div>
      </div>
    </div>
  );
}

export default CountryDetails;
