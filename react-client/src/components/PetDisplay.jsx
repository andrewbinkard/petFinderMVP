import React from "react";
import Image from "react-bootstrap/Image";

const PetDisplay = ({ animals }) => {
  // return <div></div>;
  return (
    <div>
      {/* {console.log("ANIMALS! ", animals)} */}
      {animals.map((animal) => {
        return (
          <div key={animal.id} className="card card-body mb-3">
            <div className="row">
              <div className="col-sm-6">
                <h4>{animal.name}</h4>
                <p className="text-secondary">
                  {animal.breeds.primary} / {animal.age} / ID: {animal.id}
                </p>
                <p>
                  {animal.contact.address.address1}{" "}
                  {animal.contact.address.city}, {animal.contact.address.state},{" "}
                  {animal.contact.address.postcode} -{" "}
                  {Math.floor(animal.distance)} miles away.
                </p>
                <ul className="list-group">
                  <li className="list-group-item">
                    <p className="text-secondary">
                      Email:{" "}
                      <a href={`mailto:${animal.contact.email}`}>
                        {animal.contact.email
                          ? animal.contact.email
                          : "No email address listed"}
                      </a>
                    </p>
                    <p className="text-secondary">
                      Phone:{" "}
                      {animal.contact.phone
                        ? animal.contact.phone
                        : "No phone listed"}
                    </p>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6 d-flex justify-content-center">
                <Image
                  className="mt-2"
                  src={
                    animal.primary_photo_cropped
                      ? animal.primary_photo_cropped.small
                      : "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"
                  }
                  alt="picture"
                  roundedCircle
                  fluid
                />
              </div>
            </div>
            <button
              type="button"
              className="btn btn-secondary mt-3"
              data-toggle="modal"
              data-target=".bd-example-modal-lg"
            >
              Large modal
            </button>

            <div
              className="modal fade bd-example-modal-lg"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="myLargeModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-lg">
                <div className="modal-content">...</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PetDisplay;
