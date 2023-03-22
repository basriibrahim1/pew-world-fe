import React from 'react'
import { useState } from 'react'
import RegisterWorkerComponent from '../../../component/auth/worker/registerWorkerComponent'

const RegisterWorkerPages = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [handphone, setHandphone] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
    }

  return (
    <RegisterWorkerComponent nameValue={name} namechange={(e) => setName(e.target.value)} emailValue={email} emailChange={(e) => setEmail(e.target.value)} handphoneValue={handphone} handphoneChange={(e) => setHandphone(e.target.value)} passwordValue={password} passwordChange={(e) => setPassword(e.target.value)} confirmPasswordValue={confirmPassword} confirmPasswordChange={(e) => setConfirmPassword(e.target.value)} onSubmit={onSubmit}/>
  )
}

export default RegisterWorkerPages


// const {passwordValue, passwordChange, emailValue, emailChange, onSubmit, nameValue, nameChange, handphoneValue, handphoneChange, confirmPasswordValue, confirmPasswordChange} = props