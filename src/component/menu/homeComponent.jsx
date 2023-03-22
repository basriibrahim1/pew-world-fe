import React from 'react'
import peworld from '../../assets/peworld.png'
import {BsBell} from 'react-icons/bs' 
import {AiOutlineMail} from 'react-icons/ai'
import {BsFillPersonFill} from 'react-icons/bs'
import {BsSearch} from 'react-icons/bs'
import louis from '../../assets/louis.png'
import Footer from '../../utility/footer/footer'
import {CiLocationOn} from 'react-icons/ci'

const HomeComponent = () => {

  const data = [
    {
      id:1,
      image: `${louis}`,
      name: 'Louis Tomlinson',
      job: 'Web developer',
      location: 'Lorem ipsum',
      skill: ['PHP', 'Javascript', 'HTML']
    },
    {
      id:2,
      image: `${louis}`,
      name: 'Harry Styles',
      job: 'Web developer',
      location: 'Lorem ipsum',
      skill: ['PHP', 'Javascript', 'HTML']
    },
    {
      id:3,
      image: `${louis}`,
      name: 'Niall Horan',
      job: 'Web developer',
      location: 'Lorem ipsum',
      skill: ['PHP', 'Javascript', 'HTML']
    },
    {
      id:4,
      image: `${louis}`,
      name: 'Liam Payne',
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

        <div className='d-flex align-items-center border-transparent border-5 shadow mt-5 justify-content-between rounded mb-5'>
          <input className='form-control p-4 border-0 w-100' type="text" placeholder='Search for any skill'/>
            <h4 className='px-5'><BsSearch/></h4>
            <div className='d-flex align-items-center border-2 border-start'>
                <h5 className='px-5 text-center'>Kategori</h5>
                <button className='border-0 px-4 py-3 btn btn-primary text-white rounded me-2 fs-5'>Search</button>
            </div>
        </div>

        
        {data.map((item) => {
        return (
        <div className='border-1 d-flex justify-content-between shadow px-5' key={item.id}>
            <div className='d-flex py-3 my-1'>
                <img className='w-50 mx-5' style={{objectFit:'contain'}} src={item.image} alt="" />
                <div>
                <h3>{item.name}</h3>
                <p className='' style={{opacity:'0.5'}}>{item.job}</p>
                <div className='d-flex pb-1'>
                <div className='me-2'><CiLocationOn /></div>
                <p className='' style={{opacity:'0.5'}}>{item.location}</p>
                </div>
                <div className="d-flex">
                    {item.skill.map((skill) => (
                    <div className='border bg-warning rounded py-2 px-4 me-2 mb-2 text-white' style={{opacity:'0.6'}} key={skill}>{skill}</div>
                ))}
                </div>
                </div>
                </div>
            <div className='d-flex justify-content-end align-items-center'>
                <button className='btn btn-primary me-5 '>Lihat Profile</button>
            </div>
        </div>
        )
        })}

        
        <Footer />

        </div>
      
    </>
  )
}

export default HomeComponent