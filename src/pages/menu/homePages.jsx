import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeComponent from "../../component/menu/homeComponent";
import GetWorkerAction from "../../storage/actions/worker/getWorkerAction";

const HomePages = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.getWorker.data);
  const loading = useSelector((state) => state.getWorker.isLoading)

  const [search, setSearch] = useState('')
  const [text, setText] = useState('')
  const [sortByName, setSortByName] = useState('')

  const handleClick = () => {
    setSortByName('name')
  }

  useEffect(() => {
    dispatch(GetWorkerAction(text, sortByName));
  }, [dispatch, text, sortByName])
  

  return (
    <>
      <HomeComponent data={data} isLoading={loading} search={search} setText={setText} setSearch={setSearch} handleClick={handleClick}/>
    </>
  );
};

export default HomePages;
