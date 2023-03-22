import React from 'react'
import loginImage from '../../../assets/loginImage.png'
import bgBlue from '../../../assets/bg-blue.png'
import pewLogo from '../../../assets/vector.png'
import pewLogo2 from '../../../assets/vector1.png'
import { Link } from 'react-router-dom'
  
const RegisterCompanyComponent = (props) => {
const {nameValue, nameChange, passwordValue, passwordChange, emailValue, emailChange,  perusahaanValue, perusahaanChange, jabatanValue, jabatanChange, confirmPasswordValue, confirmPasswordChange, onSubmit } = props
  return (
    <>
        <div className='container-fluid d-flex justify-content- align-items-center vh-100 w-100 text-start'>
            <div className='left d-flex text-center justify-content-center align-items-center w-50'>
                <img className='bg-blue' src={loginImage} alt="" />
                <img className='position-absolute' style={{opacity: '0.8'}} src={bgBlue} alt="" />
                <img className='position-absolute' style={{left: '200px', top: '150px'}} src={pewLogo} alt='/' />
                <img className='position-absolute' style={{left: '200px', top: '159px'}} src={pewLogo2} alt='/' />
                <img className='position-absolute' style={{left: '200px', top: '163px'}} src={pewLogo2} alt='/' />
                <p className='position-absolute text-white fw-semi-bold' style={{left: '230px', top: '147px'}}>Peworld</p>
                <h1 className='head-text w-25 text-start position-absolute text-white h-25'>Temukan developer berbakat & terbaik di berbagai bidang keahlian</h1>
            </div>
            <div className='right w-50 me-5'>
                <h1 className='mt-5'>Halo, Pewpeople</h1>
                <h4 className='fw-light mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, quidem. Voluptas nesciunt, doloribus voluptatum id voluptate sed recusandae excepturi! Sint!</h4>
                <form className='form-group' onSubmit={onSubmit}>
                    <div className='form-group d-flex flex-column mt-3'>
                        <label htmlFor="name">Nama</label>
                        <input className='my-3 p-2' style={{opacity: '0.5'}} type="text" id='name' placeholder='Masukan nama panjang' autoFocus value={nameValue} onChange={nameChange}/>
                    </div>
                    <div className='d-flex flex-column '>
                        <label htmlFor="email">Email</label>
                        <input className='my-3 p-2' style={{opacity: '0.5'}} type="email" id='email' placeholder='Masukan Email' value={emailValue} onChange={emailChange} autoFocus/>
                    </div>
                    <div className='d-flex flex-column '>
                        <label htmlFor="perusahaan">Perusahaan</label>
                        <input className='my-3 p-2' style={{opacity: '0.5'}} type="text" id='perusahaan' placeholder='Masukan nama perusahaan' value={perusahaanValue} onChange={perusahaanChange} autoFocus/>
                    </div>
                    <div className='d-flex flex-column '>
                        <label htmlFor="jabatan">Jabatan</label>
                        <input className='my-3 p-2' style={{opacity: '0.5'}} type="text" id='jabatan' placeholder='Masukan posisi di perusahaan anda' value={jabatanValue} onChange={jabatanChange} autoFocus/>
                    </div>
                    <div className='d-flex flex-column '>
                        <label htmlFor="confirmPassword">Kata sandi</label>
                        <input className='my-3 p-2' style={{opacity: '0.5'}} type="password" id='confirmPassword' placeholder='Masukan kembali kata sandi' value={passwordValue} onChange={passwordChange} autoFocus/>
                    </div>
                    <div className='d-flex flex-column '>
                        <label htmlFor="password">Konfirmasi kata Sandi</label>
                        <input className='my-3 p-2' style={{opacity: '0.5'}} type="password" id='password' placeholder='Masukan kata sandi' value={confirmPasswordValue} onChange={confirmPasswordChange} autoFocus/>
                    </div>
                    <Link className='text-decoration-none'><p className='text-end w-100 text-decoration-none text-black fs-5  fw-semi-bold'>Lupa kata sandi?</p></Link>
                    <button className='border-0 w-100 p-3 bg-warning text-white fw-semi-bold ' type='submit'>Daftar</button>
                    <h5 className='text-center mt-2'>Anda sudah punya akun? <Link className='text-warning text-decoration-none'>Masuk Disini</Link></h5>
                </form>
            </div>
        </div>
    </>
  )
}

export default RegisterCompanyComponent