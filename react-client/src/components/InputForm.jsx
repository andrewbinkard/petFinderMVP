import React from "react";

const InputForm = ({ getAnimals, handleZipChange, handleSpeciesChange }) => {
  return (
    <div>
      <form id="pet-form" onSubmit={getAnimals}>
        <div className="form-group">
          <select
            id="animal"
            className="form-control form-control-lg mb-3"
            onChange={handleSpeciesChange}
          >
            <option value="select">Select Your Species</option>
            <option value="Dog">Dog</option>
            <option value="Cat">Cat</option>
            <option value="Bird">Bird</option>
            <option value="Barnyard">Barnyard</option>
          </select>
          <input
            type="text"
            id="zip"
            onChange={handleZipChange}
            className="form-control form-control-lg"
            placeholder="Enter Your 5-Digit Zipcode"
            maxLength="5"
          />
          <button
            type="submit"
            className="btn btn-secondary btn-lg btn-block mt-3"
          >
            Find Some Fur Babies!
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputForm;
