import axios from "axios";
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
  const [total, setTotal] = useState()


  const totalData = async () => {
    await axios.get(`${process.env.REACT_APP_URL}/employee/count/employee`).then(res => setTotal(res))
  } 


  const totalItems = data.length;
  const totalPages = (totalItems / total);
  console.log(data)
  const [pages, setPages] = useState(1)


  const handlePagination = (number) => {
    setActive(number);
    setPages((number - 1) * total);
  };


  let items = [];
  for (let number = 1; number <= totalData ; number++) {
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
    
    dispatch(GetWorkerAction(text, sortByName, 7, pages));
  }, [dispatch, text, sortByName, pages])
  

  return (
    <>
      <HomeComponent data={data} isLoading={loading} search={search} setText={setText} setSearch={setSearch} handleClick={handleClick} items={items}/>
    </>
  );
};

export default HomePages;
