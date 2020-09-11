import React from "react";

const Paginate = ({ pages }) => {
  const pageLinks = [];

  // add token to a new get request!

  if (pages._links) {
    pageLinks.push(pages._links.next.href);
    if (pages._links.previous) {
      pageLinks.push(pages._links.previous.href);
    }
  }

  // for (
  //   let i = 1;
  //   i <= Math.ceil(pages.total_count / pages.count_per_page);
  //   i++
  // ) {
  //   pageNumbers.push(i);
  // }
  // console.log("PAGES! ", pages);
  // console.log("PAGELINKS: ", pages._links ? pages._links.next.href : "");
  // console.log("KEYS: ", Object.keys(pages._links));

  // console.log("pagenumbers ", pageNumbers);
  return (
    <nav>
      {/* <ul className="pagination">
        <li className="page-item">
          <a
            href={
              pages._links
                ? `https://api.petfinder.com${pages._links.next.href}`
                : `https://api.petfinder.com/v2/animals?location=78641&type=Dog&page=1`
            }
            className="page-link"
          >
            Next
          </a>
        </li>
      </ul> */}
    </nav>
  );
};

export default Paginate;
