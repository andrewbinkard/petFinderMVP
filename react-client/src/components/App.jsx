import React, { useState } from "react";
import InputForm from "./InputForm.jsx";
import PetDisplay from "./PetDisplay.jsx";
import apiconfig from "../../../apiconfig.js";
import axios from "axios";
import Image from "react-bootstrap/Image";

const App = () => {
  const [animals, setAnimals] = useState([]);
  const [species, setSpecies] = useState("");
  const [zip, setZip] = useState("");

  const handleSpeciesChange = (e) => {
    setSpecies(e.target.value);
  };

  const handleZipChange = (e) => {
    setZip(e.target.value);
  };

  const config = {
    headers: { Authorization: `Bearer ${apiconfig.token}` },
  };

  // useEffect(() => {}, []);

  const getAnimals = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://api.petfinder.com/v2/animals?type=${species}&location=${zip}`,
        config
      )
      .then(({ data }) => {
        console.log("SUCCESS! ", data);
        setAnimals(data.animals);
      })
      .catch((err) => console.log("FAILURE! ", err));
  };

  return (
    <div>
      <header className="bg-light text-center h-10 mb-4 p-3">
        <Image src="./img/PetFinderLogoLightSmall.jpeg" alt="logo" fluid />
      </header>
      <div className="container">
        <InputForm
          getAnimals={getAnimals}
          handleZipChange={handleZipChange}
          handleSpeciesChange={handleSpeciesChange}
        />
        <PetDisplay animals={animals} />
      </div>
    </div>
  );
};

export default App;
