import React, { useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import HomeComponent from "../../component/menu/homeComponent";
import GetWorkerAction from "../../storage/actions/worker/getWorkerAction";


const HomePages = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.getWorker.data);
  const loading = useSelector((state) => state.getWorker.isLoading)
  const [active, setActive] = useState(1);
  
  const itemsPerPage = 3;
  const [startIndex, setStartIndex] = useState(0);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  
  const handlePagination = (number) => {
    setActive(number);
    setStartIndex((number - 1) * itemsPerPage);
  };


  let items = [];
  for (let number = 1; number <= totalPages; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active} onClick={() => handlePagination(number)}>
        {number}
      </Pagination.Item>
    );
  }

  const [search, setSearch] = useState('')
  const [text, setText] = useState('')
  const [sortByName, setSortByName] = useState('')

  const handleClick = () => {
    setSortByName('name')
  }

  useEffect(() => {
  
    dispatch(GetWorkerAction(text, sortByName));
  }, [dispatch, text, sortByName]);
  

  return (
    <>
      <HomeComponent data={data.slice(startIndex, startIndex + itemsPerPage)} isLoading={loading} search={search} setText={setText} setSearch={setSearch} handleClick={handleClick} items={items}/>
    </>
  );
};

export default HomePages;
