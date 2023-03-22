import React, { useState } from 'react'
import LoginWorkerComponent from '../../../component/auth/worker/loginWorkerComponent'

const LoginWorkerPages = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
    }


  return (
    < LoginWorkerComponent passwordValue={password} emailValue={email} passwordChange={(e) => setPassword(e.target.value)} emailChange={(e) => setEmail.target.value} onSubmit={onSubmit}/>
  )
}

export default LoginWorkerPages



// const {title, heading, passwordValue, passwordChange, emailValue, emailChange} = props