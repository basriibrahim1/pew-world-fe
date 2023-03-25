import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import PortfolioComponent from '../../component/profilePekerja/portfolioComponent'
import dataWorkerIdAction from '../../storage/actions/worker/dataWorkerById'

const PortfolioPage = () => {
    const {id} = useParams()
    const data = useSelector(state => state.workerId.data)
    const dispatch = useDispatch()
    
    useEffect(() => {
      dispatch(dataWorkerIdAction(id))
    },[dispatch, id])


  return (
    <PortfolioComponent data={data}/>
  )
}

export default PortfolioPage