import React, { useState } from 'react'
import ResetOtpComponent from '../../../component/auth/resetPassword/resetOtpComponent'


const ResetOtpPage = () => {
    const [email, setEmail] = useState()
    const [otp, setOtp] = useState()
    const onSubmit = (e) => {
        e.preventDefault()
      }

  return (
    <>
    <ResetOtpComponent emailValue={email} emailChange={(e) => setEmail(e.target.value)} otpValue={otp} otpChange={(e) => setOtp(e.target.value)} onSubmit={onSubmit}/>
    </>
  )
}

export default ResetOtpPage