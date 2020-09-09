import React, { useState, useEffect } from "react";

const InputForm = () => (
  <div>
    <form id="pet-form">
      <div className="form-group">
        <select id="animal" className="form-control form-control-lg mb-3">
          <option value="species">Select Your Species</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="bird">Bird</option>
          <option value="barnyard">Barnyard</option>
        </select>
        <input
          type="text"
          id="zip"
          className="form-control form-control-lg"
          placeholder="Enter Your 5-Digit Zipcode"
          maxLength="5"
        />
        <input
          type="submit"
          value="Find Some Fur Babies!"
          className="btn btn-dark btn-lg btn-block mt-3"
        />
      </div>
    </form>
  </div>
);

export default InputForm;
