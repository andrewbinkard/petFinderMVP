import React, { useState } from "react";
import axios from "axios";
import apiconfig from "../../../apiconfig.js";

const InputForm = () => {
  let [species, setSpecies] = useState("");
  let [zip, setZip] = useState("");
  let [animals, setAnimals] = useState([]);

  const config = {
    headers: { Authorization: `Bearer ${apiconfig.token}` },
  };

  console.log(apiconfig.token);

  const getAnimals = (e) => {
    e.preventDefault;
    axios
      .get("https://api.petfinder.com/v2/animals?type=dog&limit=1", config)
      .then((response) => console.log("SUCCESS! ", response))
      .catch((err) => console.log("FAILURE! ", err));
  };

  const handleSpeciesChange = (e) => {
    console.log(e.target.value);
    setSpecies(e.target.value);
  };

  const handleZipChange = (e) => {
    console.log(e.target.value);
    setZip(e.target.value);
  };

  return (
    <div>
      <form id="pet-form">
        <div className="form-group">
          <select
            id="animal"
            className="form-control form-control-lg mb-3"
            // name={species}
            onChange={handleSpeciesChange}
          >
            <option value="select">Select Your Species</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="bird">Bird</option>
            <option value="barnyard">Barnyard</option>
          </select>
          <input
            type="text"
            id="zip"
            // name={zip}
            onChange={handleZipChange}
            className="form-control form-control-lg"
            placeholder="Enter Your 5-Digit Zipcode"
            maxLength="5"
          />
          <input
            type="submit"
            value="Find Some Fur Babies!"
            className="btn btn-dark btn-lg btn-block mt-3"
            onSubmit={getAnimals}
          />
        </div>
      </form>
    </div>
  );
};

export default InputForm;
