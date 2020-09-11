import React, { useState } from "react";
import InputForm from "./InputForm.jsx";
import PetDisplay from "./PetDisplay.jsx";
import Paginate from "./Paginate.jsx";

import apiconfig from "../../../apiconfig.js";
import axios from "axios";
import Image from "react-bootstrap/Image";
import isValidZip from "is-valid-zip";

const App = () => {
  const [animals, setAnimals] = useState([]);
  const [pages, setPages] = useState([]);
  const [species, setSpecies] = useState("");
  const [zip, setZip] = useState("");

  const handleSpeciesChange = (e) => {
    setSpecies(e.target.value);
  };

  const handleZipChange = (e) => {
    setZip(e.target.value);
  };

  const showAlert = (message, className) => {
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const alert = document.querySelector("#alert");
    container.insertBefore(div, alert);
    setAnimals([]);
    setTimeout(() => document.querySelector(".alert").remove(), 3000);
  };

  const config = {
    headers: { Authorization: `Bearer ${apiconfig.token}` },
  };

  const getAnimals = (e) => {
    e.preventDefault();
    if (!isValidZip(zip)) {
      showAlert("Please enter a valid zip", "danger");
    } else {
      axios
        .get(
          `https://api.petfinder.com/v2/animals?type=${species}&location=${zip}`,
          config
        )
        .then(({ data }) => {
          console.log("SUCCESS! ", data);
          setAnimals(data.animals.sort((a, b) => a.distance - b.distance));
          setPages(data.pagination);
        })
        .catch((err) =>
          showAlert(
            "No animals of that species found near the inputted zip code",
            "danger"
          )
        );
    }
  };

  const paginateIt = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <header className="bg-light text-center h-10 mb-4 p-3">
        <Image src="./img/PetFinderLogoLightSmall.jpeg" alt="logo" fluid />
      </header>
      <div className="container">
        <div id="alert"></div>
        <InputForm
          getAnimals={getAnimals}
          handleZipChange={handleZipChange}
          handleSpeciesChange={handleSpeciesChange}
        />
        <PetDisplay animals={animals} />
        <Paginate pages={pages} />
      </div>
    </div>
  );
};

export default App;
