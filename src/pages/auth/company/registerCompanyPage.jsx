import React from 'react'
import { useState } from 'react'
import RegisterCompanyComponent from '../../../component/auth/company/registerCompanyComponent'

const RegisterCompanyPages = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [perusahaan, setPerusahaan] = useState('')
    const [jabatan, setJabatan] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
    }

  return (
    <RegisterCompanyComponent nameValue={name} namechange={(e) => setName(e.target.value)} emailValue={email} emailChange={(e) => setEmail(e.target.value)} perusahaanValue={perusahaan} perusahaanChange={(e) => setPerusahaan(e.target.value)} jabatanValue={jabatan} jabatanChange={(e) => setJabatan(e.target.value)} passwordValue={password} passwordChange={(e) => setPassword(e.target.value)} confirmPasswordValue={confirmPassword} confirmPasswordChange={(e) => setConfirmPassword(e.target.value)} onSubmit={onSubmit}/>
  )
}

export default RegisterCompanyPages



// const {nameValue, nameChange, passwordValue, passwordChange, emailValue, emailChange,  perusahaanValue, perusahaanChange, jabatanValue, jabatanChange, confirmPasswordValue, confirmPasswordChange, onSubmit } = props