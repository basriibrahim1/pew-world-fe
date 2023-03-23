import React from 'react'
import peworld from '../../assets/peworld.png'
import {BsBell} from 'react-icons/bs' 
import {AiOutlineMail} from 'react-icons/ai'
import {BsFillPersonFill} from 'react-icons/bs'

const Navbar = () => {
  return (
    <div className='container d-flex align-items-center justify-content-between mt-5'>
        <img src={peworld} alt="" />
        <div className='d-flex'>
          <h4 className='text-secondary'><BsBell /></h4>
          <h4 className='text-secondary px-5'><AiOutlineMail /></h4>
          <h4 className='border-1 box-border'><BsFillPersonFill /></h4>
        </div>
      </div>
  )
}

export default Navbar