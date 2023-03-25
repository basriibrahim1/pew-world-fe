import React, { useEffect } from 'react'
import DataWorkerAction from '../../storage/actions/worker/dataWorkerAction'
import { useDispatch, useSelector } from 'react-redux'
import HomeComponent from '../../component/menu/homeComponent'


const HomePages = () => {
  //   const [getData, setData] = useState()
  
  const dispatch = useDispatch();
  const data = useSelector(state => state.worker.data);

  
  useEffect(() => {
  dispatch(DataWorkerAction());
}, [dispatch]);

  return (
    <>
        <HomeComponent data={data} />
    </>
  );
};

export default HomePages;