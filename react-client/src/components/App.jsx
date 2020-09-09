import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  return (
    <div>
      <header className="bg-light text-center mb-4 p-3">
        <img src="../img/PetFinderLogoLight.jpg" alt="logo" />
      </header>
      <div className="container">
        <form id="pet-form">
          <div className="form-group">
            <label for="animal">Type of Animal</label>
            <select id="animal" className="form-control form-control-lg mb-3">
              <option value="species">Select Your Species</option>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              <option value="bird">Bird</option>
              <option value="barnyard">Barnyard</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
