import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import HiringComponent from "../../component/hiring/hiringComponent";
import IdWorkerAction from "../../storage/actions/worker/idWorkerAction";

const HiringPages = () => {
  const { id } = useParams();
  const data = useSelector((state) => state.idWorker.data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(IdWorkerAction(id));
  }, [id, dispatch]);

  return <HiringComponent data={data} />;
};

export default HiringPages;
