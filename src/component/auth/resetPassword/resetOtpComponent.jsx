import React from 'react'
import loginImage from '../../../assets/loginImage.png'
import bgBlue from '../../../assets/bg-blue.png'
import pewLogo from '../../../assets/vector.png'
import pewLogo2 from '../../../assets/vector1.png'
import { Link } from 'react-router-dom'

const ResetOtpComponent = (props) => {
    const {emailValue, emailChange, otpValue, otpChange, onSubmit, checkOtpState} = props
  return (
    <>
        <div className='container-fluid d-flex justify-content- align-items-center vh-100 text-start'>
            <div className='left d-flex text-center justify-content-center align-items-center w-50'>
                <img className='' src={loginImage} alt="" />
                <img className='position-absolute' style={{opacity: '0.8'}} src={bgBlue} alt="" />
                <img className='position-absolute' style={{left: '200px', top: '150px'}} src={pewLogo} alt='/' />
                <img className='position-absolute' style={{left: '200px', top: '159px'}} src={pewLogo2} alt='/' />
                <img className='position-absolute' style={{left: '200px', top: '163px'}} src={pewLogo2} alt='/' />
                <p className='position-absolute text-white fw-semi-bold' style={{left: '230px', top: '147px'}}>Peworld</p>
                <h1 className='head-text w-25 text-start position-absolute text-white h-25 line-height-5'>Temukan developer berbakat & terbaik di berbagai bidang keahlian</h1>
            </div>
            <div className='right w-50 me-5'>
                <h1 className='mb-5'>OTP</h1>
                <h3 className='fw-light'>Enter your user account`s verified email address and we will send you a password reset link.</h3>
                <form className='form-group' onSubmit={onSubmit}>
                    <div className='d-flex flex-column mt-5'>
                        <label htmlFor="email">Email</label>
                        <input className='my-3 p-2' style={{opacity: '0.5'}} type="email" name='email' placeholder='Masukan alamat email' value={emailValue} onChange={emailChange}/>
                    </div>
                    <div className='d-flex flex-column mt-2'>
                        <label htmlFor="otp">OTP</label>
                        <input className='my-3 p-2' style={{opacity: '0.5'}} type="text" name='otp' placeholder='Masukan OTP' value={otpValue} onChange={otpChange}/>
                    </div>
                    <button className='border-0 w-100 p-3 bg-warning text-white fw-semi-bold mt-3 ' type='submit'>Go to change password</button>
                    <p className='text-start mt-3'>Ingin kembali ke login? <Link className='text-warning text-decoration-none'>Klik Disini</Link></p>
                    {checkOtpState.isLoading && <p>Validating OTP..</p>}
                    {checkOtpState.isError && <p>{checkOtpState.isError}</p>}
                </form>
            </div>
        </div>
    </>
  )
}

export default ResetOtpComponent