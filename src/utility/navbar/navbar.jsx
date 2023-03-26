import React from 'react'
import peworld from '../../assets/peworld.png'
import {BsBell} from 'react-icons/bs' 
import {AiOutlineMail} from 'react-icons/ai'
import {BsFillPersonFill} from 'react-icons/bs'
import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
// import PayloadWorkerAction from '../../storage/actions/worker/payloadWorkerAction'
import IdWorkerAction from '../../storage/actions/worker/idWorkerAction'

const Navbar = () => {

  const id = localStorage.getItem('id')

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const photo = localStorage.getItem("photo")
  const token = localStorage.getItem('refreshToken')
  const role = localStorage.getItem('role')

  const handleLogout = () => {
    localStorage.clear()
    navigate('/login')
  }

  const handleNavigate = () => {
    if(role === 'employee'){
      dispatch(IdWorkerAction(id))
      navigate('/addBiodata')
    } else if(role === 'employer'){
      navigate('/edit-profile-perusahaan')
    }
    
  }

  return (
    <div className='container d-flex align-items-center justify-content-between  mt-5'>
        <img src={peworld} alt="" />
        <div className='d-flex text-center justify-content-center align-items-center'>
         {token && <h4 className='text-secondary'><BsBell /></h4>} 
          {token && <h4 className='text-secondary px-5'><AiOutlineMail /></h4> }
            <Dropdown className=' d-flex'>
            <Dropdown.Toggle className="d-flex text-center align-items-center" id="dropdown-button-light-example1" variant="white">
              {photo === 'undefined' || !photo ?  <h4><BsFillPersonFill /></h4> : (<img src={photo} alt="profile" /> )  }
            </Dropdown.Toggle>
            

            {!token ?
                (<Dropdown.Menu variant="light" className='mt-3'>
                  <Dropdown.Item href='/login'>Login</Dropdown.Item>
                </Dropdown.Menu>)
                :
                (<Dropdown.Menu variant="light" className='mt-3'>
                  <Dropdown.Item onClick={() => handleNavigate()} >Edit Profile</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleLogout()}>Logout</Dropdown.Item>
                </Dropdown.Menu>) }      
           
          </Dropdown>
        
          
        </div>
      </div>
  )
}

export default Navbar