import React, { useState } from "react";
import { Button } from "react-bootstrap";

const Paginate = ({ pages }) => {
  console.log("PAGES: ", pages);

  const { current_page, total_pages } = pages;
  // if count_per_page is less than or equal to 20

  const paginationButtonStyle = {
    display: "flex",
    justifyContent: "center",
    marginBottom: "10px",
  };
  // both buttons inactive
  if (total_pages === 1) {
    return (
      <div style={paginationButtonStyle}>
        <Button variant="secondary" disabled>
          Previous
        </Button>
        <Button variant="secondary" disabled>
          Next
        </Button>
      </div>
    );
    // if current_page is 1
    // only next page is active
  } else if (current_page === 1) {
    return (
      <div style={paginationButtonStyle}>
        <Button variant="secondary" disabled>
          Previous
        </Button>
        <Button variant="secondary">Next</Button>
      </div>
    );
    // if current_page is greater than 1 and less than total_pages
    // both buttons active
  } else if (current_page > 1 && current_page < total_pages) {
    return (
      <div style={paginationButtonStyle}>
        <Button variant="secondary">Previous</Button>
        <Button variant="secondary">Next</Button>
      </div>
    );
    // if current_page equals total_pages
    // only previous button active
  } else if (current_page === total_pages) {
    return (
      <div style={paginationButtonStyle}>
        <Button variant="secondary">Previous</Button>
        <Button variant="secondary" disabled>
          Next
        </Button>
      </div>
    );
  }
};

export default Paginate;
