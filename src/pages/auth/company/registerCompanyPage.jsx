import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import RegisterCompanyComponent from '../../../component/auth/company/registerCompanyComponent'
import { RegisterWorkerAction } from '../../../storage/actions/auth/registerWorkerAction'

const RegisterCompanyPages = () => {


  const loading = useSelector(state => state.registerWorker.isLoading)


  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [data, setData] = useState ({
    name: '',
    email: '',
    password: '',
    confirm: '',
    phone: '',
    company_name: '',
    position: ''
  })


  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name] : e.target.value
    })
  }

  

    const onSubmit = (e) => {
      e.preventDefault()
        let submit = {
          name: data.name,
          email: data.email,
          password: data.password,
          confirm: data.confirm,
          phone: data.phone,
          company_name: data.company_name,
          position: data.position,
        }

       dispatch(RegisterWorkerAction(submit, navigate))
    }

  return (
    <RegisterCompanyComponent data={data} handleChange={handleChange} onSubmit={onSubmit} loading={loading}/>
  )
}

export default RegisterCompanyPages



// const {nameValue, nameChange, passwordValue, passwordChange, emailValue, emailChange,  perusahaanValue, perusahaanChange, jabatanValue, jabatanChange, confirmPasswordValue, confirmPasswordChange, onSubmit } = props