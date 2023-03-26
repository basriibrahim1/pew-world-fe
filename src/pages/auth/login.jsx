import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import LoginWorkerComponent from '../../component/auth/worker/loginWorkerComponent'
import { loginAction } from '../../storage/actions/auth/loginAction'

const LoginWorkerPages = () => {

    const isLoading = useSelector(state => state.login.isLoading)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleChangePassword = (e) => {
      setPassword(e.target.value)
    }

    const handleChangeEmail = (e) => {
      setEmail(e.target.value)
    }

    
    const onSubmit = (e) => {
      e.preventDefault()
      
      const data = {
        email,
        password
      }
      
      dispatch(loginAction(data, navigate))
      console.log(email, password)

    }


  return (
    <LoginWorkerComponent passwordValue={password} emailValue={email} passwordChange={handleChangePassword} emailChange={handleChangeEmail} onSubmit={onSubmit} isLoading={isLoading}/>
  )
}

export default LoginWorkerPages



// const {title, heading, passwordValue, passwordChange, emailValue, emailChange} = props