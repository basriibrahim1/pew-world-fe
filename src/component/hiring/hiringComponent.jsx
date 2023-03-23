import React from 'react'
import Navbar from '../../utility/navbar/navbar'
import louis from '../../assets/louis.png'
import Footer from '../../utility/footer/footer'

const HiringComponent = () => {
  return (
    <>
    <div className='shadow p-3 mb-5 bg-white rounded'>
      <Navbar />
    </div>


    <div className='container d-flex justify-content-between'>
        {/* left */}
        <div className='w-25 d-flex flex-column border border-light shadow-lg align-items-center p-2 py-3 position-relative bg-white rounded ms-5 '>
            <img className=' w-50' style={{objectFit:'contain'}} src={louis} alt="" />
            <div className='align-items-start ms-3 mt-4'>
                <h5 className='fw-bold'>Louis Tomlinson</h5>
                <p className='mt-4' style={{opacity:'0.7'}}>Web developer</p>
                <p  style={{opacity:'0.7'}}>location</p>
                <p  style={{opacity:'0.7'}}>Freelancer</p>
                <p  style={{opacity:'0.7'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quasi quas laboriosam animi necessitatibus, odio ea laborum ratione facere incidunt.</p>
                <h5 className='mt-5'>Skill</h5>
                <div className='row col-12 text-white mt-4' >
                    <p className='col-3 bg-warning mx-2 rounded p-1 text-center'>Python</p>
                    <p className='col-3 bg-warning mx-2 rounded p-1 text-center'>Laravel</p>
                    <p className='col-3 bg-warning mx-2 rounded p-1 text-center'>Golang</p>
                    <p className='col-3 bg-warning mx-2 rounded p-1 text-center'>Javascript</p>
                    <p className='col-3 bg-warning mx-2 rounded p-1 text-center'>PHP</p>
                    <p className='col-3 bg-warning mx-2 rounded p-1 text-center'>HTML</p>
                    <p className='col-3 bg-warning mx-2 rounded p-1 text-center'>C++</p>
                    <p className='col-3 bg-warning mx-2 rounded p-1 text-center'>Kotlin</p>
                    <p className='col-3 bg-warning mx-2 rounded p-1 text-center'>Swift</p>
                </div>
            </div>
        </div>
        {/* Right */}
        <div className='ms-5 w-100'>
            <div className='ms-5'>
            <h1>Hubungi Louis Tomlinson</h1>
            <p style={{opacity:'0.5'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo nam, quasi, harum consequatur recusandae tenetur qui nemo dolores officia cum eaque magni! Nam, eveniet quis.</p>
            <div className='d-flex flex-column mt-5' style={{opacity:'0.5'}} >
                <label htmlFor="">Untuk Posisi</label>
                <input className='p-3 border-0 shadow-sm border-light mt-2' type="text" placeholder='Fulltime frontend developer' />
            </div>
            <div className='d-flex flex-column mt-5' style={{opacity:'0.5'}} >
                <label htmlFor="">Deskripsi</label>
                <textarea className='p-3 border-0 shadow-sm border-light mt-2'rows='10' placeholder='Membuat fitur dan maintenance untuk dashboard admin dan posisi remote' />
            </div>
            <button className='btn btn-primary w-100 mt-5 p-3'>Hire</button>
            </div>
        </div>
    </div>
    

    <Footer />
    </>
  )
}

export default HiringComponent