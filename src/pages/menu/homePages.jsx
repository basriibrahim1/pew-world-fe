import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeComponent from "../../component/menu/homeComponent";
import GetWorkerAction from "../../storage/actions/worker/getWorkerAction";

const HomePages = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.getWorker.data);
  const loading = useSelector((state) => state.getWorker.isLoading)


  useEffect(() => {
    dispatch(GetWorkerAction());
  }, [dispatch]);

  return (
    <>
      <HomeComponent data={data} isLoading={loading}/>
    </>
  );
};

export default HomePages;
