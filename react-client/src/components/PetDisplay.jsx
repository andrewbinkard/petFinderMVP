import React from "react";

const PetDisplay = ({ animals }) => {
  // return <div></div>;
  return (
    <div>
      {/* {console.log("ANIMALS! ", animals)} */}
      {animals.map((animal) => {
        return (
          <div key={animal.id} className="card card-body mb-3">
            {animal.name}
          </div>
        );
      })}
    </div>
  );
};

export default PetDisplay;
