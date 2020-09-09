import React, { useState, useEffect } from "react";
import axios from "axios";
import InputForm from "./InputForm.jsx";
import PetDisplay from "./PetDisplay.jsx";

const App = () => {
  return (
    <div>
      <header className="bg-light text-center mb-4 p-3">
        <img src="../img/PetFinderLogoLight.jpg" alt="logo" />
      </header>
      <div className="container">
        <InputForm />
        <PetDisplay />
      </div>
    </div>
  );
};

export default App;
