import React from 'react'
import peworld from '../../assets/peworld.png'
import {BsBell} from 'react-icons/bs' 
import {AiOutlineMail} from 'react-icons/ai'
import {BsFillPersonFill} from 'react-icons/bs'
import {BsSearch} from 'react-icons/bs'

const HomeComponent = () => {

  const data = [
    {
      image: '',
      name: 'Louis Tomlinson',
      job: 'Web developer',
      location: 'Lorem ipsum',
      skill: ['PHP', 'Javascript', 'HTML']
    },
    {
      image: '',
      name: 'Harry Styles',
      job: 'Web developer',
      location: 'Lorem ipsum',
      skill: ['PHP', 'Javascript', 'HTML']
    },
    {
      image: '',
      name: 'Niall Horan',
      job: 'Web developer',
      location: 'Lorem ipsum',
      skill: ['PHP', 'Javascript', 'HTML']
    },
    {
      image: '',
      name: 'Liam Payne',
      job: 'Web developer',
      location: 'Lorem ipsum',
      skill: ['PHP', 'Javascript', 'HTML']
    },
    {
      image: '',
      name: 'Louis Tomlinson',
      job: 'Web developer',
      location: 'Lorem ipsum',
      skill: ['PHP', 'Javascript', 'HTML']
    },
  ]
   


  return (
    <>
    
      <div className='container d-flex align-items-center justify-content-between mt-5'>
        <img src={peworld} alt="" />
        <div className='d-flex'>
          <h4 className='text-secondary'><BsBell /></h4>
          <h4 className='text-secondary px-5'><AiOutlineMail /></h4>
          <h4 className='border-1 box-border'><BsFillPersonFill /></h4>
        </div>
      </div>

      <div className='p-4 mt-4 container-fluid' style={{backgroundColor:'#5E50A1'}}>
       <h3 className='container text-white'>TOP JOBS</h3> 
      </div>


      <div className='container'>

        <div className='d-flex align-items-center border-light border-5 shadow border mt-5 border-warning justify-content-between rounded mb-5'>
          <input className='p-4 border-0 w-100' type="text" placeholder='Search for any skill'/>
          <div className='d-flex align-items-center'>
            <h4 className='px-5'><BsSearch/></h4>
            <h5 className='px-4'>Kategori</h5>
            <button className='border-0 px-4 py-3 bg-primary text-white rounded me-2 fs-5'>Search</button>
          </div>
        </div>

        {data.map((item, index) => {
          return (
            <div className='border border-2 border-light shadow' key={index}>
              <img src={item.image} alt="" />
              <h3>{item.name}</h3>
              <p>{item.job}</p>
              <p className='d-flex'>{item.skill}</p>
              <button>Lihat Profile</button>
            </div>
          )
        })}
        


        </div>
      
    </>
  )
}

export default HomeComponent