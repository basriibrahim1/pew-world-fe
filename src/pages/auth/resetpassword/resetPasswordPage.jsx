import React, {useState} from 'react'
import ResetPasswordComponent from '../../../component/auth/resetPassword/resetPasswordComponent'

const ResetPasswordPage = () => {
    const [password, setPassword] = useState()
    const [confirmPassword, setconfirmPassword] = useState()
    const onSubmit = (e) => {
        e.preventDefault()
      }
  return (
    <ResetPasswordComponent passwordValue={password} passwordChange={(e) => setPassword(e.target.value)} confirmPasswordValue={confirmPassword} confirmPasswordChange={(e) => setconfirmPassword(e.target.value)} onSubmit={onSubmit}/>
  )
}

export default ResetPasswordPage