import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeComponent from "../../component/menu/homeComponent";
import GetWorkerAction from "../../storage/actions/worker/getWorkerAction";

const HomePages = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.getWorker.data);

  useEffect(() => {
    dispatch(GetWorkerAction());
  }, [dispatch]);

  return (
    <>
      <HomeComponent data={data} />
    </>
  );
};

export default HomePages;
