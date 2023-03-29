import React, { useState } from 'react'
import ResetOtpComponent from '../../../component/auth/resetPassword/resetOtpComponent'
import { OtpAction } from '../../../storage/actions/auth/otpAction'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";


const ResetOtpPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const checkOtpState = useSelector((state) => state.checkOtp);
  // console.log(checkOtp);

  const [email, setEmail] = useState('')
  const [otp, setOtp] = useState('')
  const onSubmit = (e) => {
        e.preventDefault()
        let data = {email, otp};
        dispatch(OtpAction(data, navigate));
  }

  return (
    <>
    <ResetOtpComponent emailValue={email} emailChange={(e) => setEmail(e.target.value)} otpValue={otp} otpChange={(e) => setOtp(e.target.value)} onSubmit={onSubmit} checkOtpState={checkOtpState}/>
    </>
  )
}

export default ResetOtpPage