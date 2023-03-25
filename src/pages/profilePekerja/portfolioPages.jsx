import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PortfolioComponent from "../../component/profilePekerja/portfolioComponent";
import IdWorkerAction from "../../storage/actions/worker/idWorkerAction";

const PortfolioPage = () => {
  const { id } = useParams();
  const data = useSelector((state) => state.idWorker.data);
  const loading = useSelector((state) => state.idWorker.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(IdWorkerAction(id));
  }, [dispatch, id]);

  return <PortfolioComponent data={data} loading={loading} />;
};

export default PortfolioPage;
