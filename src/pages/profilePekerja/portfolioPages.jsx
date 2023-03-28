/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PortfolioComponent from "../../component/profilePekerja/portfolioComponent";
import IdWorkerAction from "../../storage/actions/worker/idWorkerAction";
import UserPengalamanAction from "../../storage/actions/pengalaman/userPengalamanAction";
import UserPortoAction from "../../storage/actions/portofolio/userPortoAction";

const PortfolioPage = () => {

  const data = useSelector((state) => state.idWorker.data);
  const loading = useSelector((state) => state.idWorker.isLoading);
  const porto = useSelector(state => state.userPorto);
  const exp = useSelector(state => state.userPengalaman);
  const dispatch = useDispatch();
  const {id} = useParams();
  
  useEffect(() => {
    dispatch(IdWorkerAction(id));
  }, [id]);
  
  useEffect(() => {
    dispatch(UserPengalamanAction(id));
  }, [id]);
  
  useEffect(() => {
    dispatch(UserPortoAction(id));
  }, [id]);

  return <PortfolioComponent data={data} isLoading={loading} porto={porto} exp={exp} id={id}/>;
};

export default PortfolioPage;
