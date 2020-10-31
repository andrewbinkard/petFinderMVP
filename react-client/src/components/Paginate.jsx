import React from "react";
import { Button } from "react-bootstrap";
import { requestConfig, corsHeaders } from "../../../config.js";
import axios from "axios";

const Paginate = ({ pages, setPages, setAnimals }) => {
  const { current_page, total_pages } = pages;

  const getNextPage = () => {
    axios
      .get(
        `https://api.petfinder.com${pages._links.next.href}`,
        requestConfig,
        corsHeaders
      )
      .then(({ data }) => {
        console.log("NEXT PAGE SUCCESS! ", data);
        setAnimals(data.animals.sort((a, b) => a.distance - b.distance));
        setPages(data.pagination);
      })
      .catch((err) => {
        console.error("PAGINATION FAILURE: ", err);
      });
  };

  const getPrevPage = () => {
    axios
      .get(
        `https://api.petfinder.com${pages._links.previous.href}`,
        requestConfig,
        corsHeaders
      )
      .then(({ data }) => {
        console.log("NEXT PAGE SUCCESS! ", data);
        setAnimals(data.animals.sort((a, b) => a.distance - b.distance));
        setPages(data.pagination);
      })
      .catch((err) => {
        console.error("PAGINATION FAILURE: ", err);
      });
  };

  const paginationDiv = {
    display: "flex",
    justifyContent: "center",
  };

  const paginationButtons = {
    margin: "10px 10px",
  };

  // if count_per_page is less than or equal to 20
  // both buttons inactive
  if (total_pages === 1) {
    return (
      <div style={paginationDiv}>
        <Button style={paginationButtons} variant="secondary" disabled>
          Previous
        </Button>
        <Button style={paginationButtons} variant="secondary" disabled>
          Next
        </Button>
      </div>
    );
    // if current_page is 1
    // only next page is active
  } else if (current_page === 1) {
    return (
      <div style={paginationDiv}>
        <Button style={paginationButtons} variant="secondary" disabled>
          Previous
        </Button>
        <Button
          style={paginationButtons}
          onClick={getNextPage}
          variant="secondary"
        >
          Next
        </Button>
      </div>
    );
    // if current_page is greater than 1 and less than total_pages
    // both buttons active
  } else if (current_page > 1 && current_page < total_pages) {
    return (
      <div style={paginationDiv}>
        <Button
          style={paginationButtons}
          onClick={getPrevPage}
          variant="secondary"
        >
          Previous
        </Button>
        <Button
          style={paginationButtons}
          onClick={getNextPage}
          variant="secondary"
        >
          Next
        </Button>
      </div>
    );
    // if current_page equals total_pages
    // only previous button active
  } else if (current_page === total_pages) {
    return (
      <div style={paginationDiv}>
        <Button
          style={paginationButtons}
          onClick={getPrevPage}
          variant="secondary"
        >
          Previous
        </Button>
        <Button style={paginationButtons} variant="secondary" disabled>
          Next
        </Button>
      </div>
    );
  }
};

export default Paginate;
