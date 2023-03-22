import React, { useState } from 'react'
import LoginCompanyComponent from '../../../component/auth/company/loginCompanyComponent'

const LoginCompanyPages = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
    }


  return (
    < LoginCompanyComponent passwordValue={password} emailValue={email} passwordChange={(e) => setPassword(e.target.value)} emailChange={(e) => setEmail.target.value} onSubmit={onSubmit}/>
  )
}

export default LoginCompanyPages



// const {title, heading, passwordValue, passwordChange, emailValue, emailChange} = props