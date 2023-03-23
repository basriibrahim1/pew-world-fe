import React from 'react'
import Navbar from '../../utility/navbar/navbar'
import {AiOutlineMail} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
import {FiGithub} from 'react-icons/fi'
import {FiGitlab} from 'react-icons/fi'
import louis from '../../assets/louis.png'
import rapp from '../../assets/rapp.png'
import rapp1 from '../../assets/rapp2.png'
import sapp from '../../assets/sapp.png'
import sapp1 from '../../assets/sapp2.png'
import pmw from '../../assets/pmw.png'
import pmw1 from '../../assets/pmw2.png'
import tokped from '../../assets/tokped.png'
import Footer from '../../utility/footer/footer'

const PortfolioComponent = () => {
  return (
    <>
        <Navbar />

        <div className='container-fluid position-absolute' style={{backgroundColor:'#5E50A1', top:'120px', height:'50vh'}}></div>
       

        <div className='container d-flex' style={{marginTop:'150px'}}>

        {/* left  */}
            <div className='w-25 d-flex flex-column border border-light shadow-lg align-items-center p-2 py-3 position-relative bg-white rounded vh-100'>
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
                    <div className='mt-3' style={{opacity:'0.7'}} >
                        <div className='d-flex'>
                            <div style={{width:'32px'}}><AiOutlineMail /></div>
                            <p>Louistommo@gmail.com</p>
                        </div>
                        <div className='d-flex'>
                            <div style={{width:'30px'}}><BsInstagram /> </div>
                            <p>@Louis91</p>
                        </div>
                        <div className='d-flex'>
                            <div style={{width:'30px'}}><FiGithub /></div>
                            <p>@Louistommo</p>
                        </div>
                        <div className='d-flex'>
                            <div style={{width:'30px'}}><FiGitlab /></div>
                            <p>@Louistommo91</p>
                        </div>
                    </div>
                </div>
                    <button className='btn btn-primary py-3 w-75 mt-3'>Hire</button>
            </div>
        {/* end left */}

        {/* right */}
            <div className='w-75 ms-5 d-flex flex-column border border-light shadow-lg p-2 py-3 position-relative bg-white rounded'>
                {/* portofolio */}
                <div className='mb-5'>
                    <h3 className='ms-4 mt-5 border-bottom border-3 border-dark w-25 mb-5'>Portofolio</h3>
                    <div className='row col-12 text-center'>
                        <div className='col-4'>
                            <img src={rapp} alt="" />
                            <p>Remainder App</p>
                        </div>
                        <div className='col-4'>
                            <img src={sapp} alt="" />
                            <p>Social Media Application</p>
                        </div>
                        <div className='col-4'>
                            <img src={pmw} alt="" />
                            <p>Project Manajemen Web</p>
                        </div>
                        <div className='col-4'>
                            <img src={rapp1} alt="" />
                            <p>Remainder App</p>
                        </div>
                        <div className='col-4'>
                            <img src={sapp1} alt="" />
                            <p>Social Media Application</p>
                        </div>
                        <div className='col-4'>
                            <img src={pmw1} alt="" />
                            <p>Project Manajemen Web</p>
                        </div>
                    </div>
                </div>
                {/* end portofolio */}
                
                {/* start pengalaman kerja */}
                <div>
                    <h3 className='ms-4 mt-5 border-bottom border-3 pb-2 border-dark w-25 '>Pengalaman Kerja</h3>
                    <div className='d-flex mx-5 border-bottom border-3'>
                        <img className='mx-4 ' style={{objectFit:'contain'}} src={tokped} alt="" />
                        <div className='d-flex flex-column mt-5'>
                            <h5>Engineer</h5>
                            <p>Tokopedia</p>
                            <p>July 2019 - January 2020 - 6 Months</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi laborum possimus placeat expedita neque amet nihil consectetur similique iusto corrupti.</p>
                        </div>
                    </div>
                    <div className='d-flex mx-5 border-bottom border-3 mb-5'>
                        <img className='mx-4 ' style={{objectFit:'contain'}} src={tokped} alt="" />
                        <div className='d-flex flex-column mt-5'>
                            <h5>Engineer</h5>
                            <p>Tokopedia</p>
                            <p>July 2019 - January 2020 - 6 Months</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi laborum possimus placeat expedita neque amet nihil consectetur similique iusto corrupti.</p>
                        </div>
                    </div>
                </div>
                {/* end pengalaman kerja */}    
           
        {/* end right */}
        </div>

         {/* endd */}
        </div>
        <Footer />
    </>
  )
}

export default PortfolioComponent