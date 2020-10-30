import React, { useState } from "react";
import { Button } from "react-bootstrap";

const Paginate = ({ pages }) => {
  console.log("PAGES: ", pages);

  // if count_per_page is less than or equal to 20
  // both buttons inactive
  // if current_page is 1
  // only next page is active
  // if current_page is greater than 1 and less than total_pages
  // both buttons active
  // if current_page equals total_pages
  // only previous button active

  return (
    <div>
      <Button variant="secondary">Previous</Button>
      <Button variant="secondary">Next</Button>
    </div>
  );
};

export default Paginate;
