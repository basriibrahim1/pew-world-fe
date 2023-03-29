import React, { useState } from "react";
import Pagination from "react-bootstrap/Pagination";
import { useSelector } from "react-redux";

const PaginationHome = () => {
  const [active, setActive] = useState(1);

  const data = useSelector(state => state.getWorker.data)

  // const [currentPage, setCurrentPage] = useState(1)

  // const previousPage = () => {
  //   setCurrentPage((prev) => prev - 1)
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  // }

  // const nextPage = () => {
  //   setCurrentPage((prev) => prev + 1)
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  // }

  const handleClick = (number) => {
    setActive(number);
  };

  let items = [];
  for (let number = 1; number <= data.length; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active} onClick={() => handleClick(number)}>
        {number}
      </Pagination.Item>
    );
  }

  return (
    <>
      <div className="text-center w-100 align-items-center justify-content-center d-flex">
        <Pagination size="lg">{items}</Pagination>
      </div>
    </>
  );
};

export default PaginationHome;
