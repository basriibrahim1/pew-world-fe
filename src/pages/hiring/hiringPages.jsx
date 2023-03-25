import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import HiringComponent from '../../component/hiring/hiringComponent'
import dataWorkerIdAction from '../../storage/actions/worker/dataWorkerById'


const HiringPages = () => {

  const {id} = useParams()
  const data = useSelector(state =>  state.workerId.data)

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(dataWorkerIdAction(id))
  },[id, dispatch])

  return (
    <HiringComponent data={data}/>
  )
}

export default HiringPages