import React, { useState } from 'react'
import ResetEmailComponent from '../../../component/auth/resetPassword/resetEmailComponent'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { MailAction } from '../../../storage/actions/auth/mailAction'

const ResetEmailPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const sendOtpState = useSelector((state)=>state.sendOtp)

  const [email, setEmail] = useState('')
  const onSubmit = (e) => {
    e.preventDefault()
    let data = {email};
    dispatch(MailAction(data, navigate));
  }

  return (
    <>
    <ResetEmailComponent emailValue={email} emailChange={(e) => setEmail(e.target.value)} onSubmit={onSubmit} sendOtpState={sendOtpState}/>
    </>
  )
}

export default ResetEmailPage