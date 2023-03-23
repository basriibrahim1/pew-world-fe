import React from 'react'
import Navbar from '../../utility/navbar/navbar'
import profile from '../../assets/cc.png'
import { Link } from 'react-router-dom'
import {BsFillSendFill} from 'react-icons/bs'
import Footer from '../../utility/footer/footer'

const ChatCompanyComponent = () => {
  return (
    <>
    <div className='shadow p-3 mb-5 bg-white rounded'>
        <Navbar/>
    </div>


    <div className='container d-flex'>
        {/* left */}
        <div className='border-2 w-25 border shadow border-light d-flex flex-column' style={{height: '700px'}}>
            <div className='w-100 border-bottom border-4 border-light pb-2'>
                <h5 className='mt-4 ms-3'>Message</h5>
            </div>
            <div className='d-flex ms-2 mt-4'>
                <img style={{objectFit:'cover',width:'60px', height:'60px', borderRadius:'100%'}} src={profile} alt="" />
                <div className='d-flex flex-column ms-3 justify-content-center'>
                    <p className='fw-bold fs-5'>Luis</p>
                    <span style={{opacity:'0.5', marginTop:'-15px'}}>Fulltime Frontend Developer</span>
                </div>
            </div>
            <div className='d-flex ms-2 mt-4'>
                <img style={{objectFit:'cover',width:'60px', height:'60px', borderRadius:'100%'}} src={profile} alt="" />
                <div className='d-flex flex-column ms-3 justify-content-center'>
                    <p className='fw-bold fs-5'>Luis</p>
                    <span style={{opacity:'0.5', marginTop:'-15px'}}>Fulltime Frontend Developer</span>
                </div>
            </div>
        </div>
        {/* end left */}


        {/* right */}
        <div className='border-2 w-75 border shadow border-light d-flex flex-column ms-5' style={{height: '700px'}}>

            <div className='w-100 border-bottom border-4 border-light pb-2 d-flex justify-content-between'>
                <div className='d-flex'>
                    <img className='mt-3 ms-5' style={{objectFit:'cover',width:'50px', height:'50px', borderRadius:'100%'}} src={profile} alt="" />
                    <h5 className='mt-4 ms-3 text-center'>Luis</h5>
                </div>
                <p className='mt-4' style={{opacity:'0.5'}}>Fulltime Frontend Developer</p>
                <Link className='text-decoration-none mt-4 me-3 fw-bold'>Detail profile</Link>
            </div>

            <div className='d-flex flex-column justify-content-end' style={{ height:'500px'}}>
                <div className='me-4 mt-2 justify-content-end d-flex align-items-end'>
                    <p className='border-secondary border border-1 shadow-sm p-1 rounded me-3' style={{opacity:'0.7'}}>Membuat fitur dan maintenance untuk dashboard </p>
                </div>

                <div className='ms-4 mt-2 justify-content-start d-flex align-items-start'>
                    <p className='border-secondary border border-1 shadow-sm p-1 rounded me-3' style={{opacity:'0.7'}}>Membuat fitur dan maintenance untuk dashboard dan siang, saya tertarik</p>
                </div>
            </div>

            <div className='d-flex justify-content-center align-items-center'>
                <input className='w-100 py-3 border ps-4 m-4' style={{borderRadius:'25px'}} type="text" placeholder='type message...' />
                <div className=' me-5 px-3 py-2 border-0 bg-primary text-white' style={{borderRadius:'50%'}}><BsFillSendFill /></div>
            </div>
        </div>
        {/* end right */}
    

    </div>
    <div style={{marginTop:'200px'}}>
        <Footer />
    </div>
    </>
  )
}

export default ChatCompanyComponent