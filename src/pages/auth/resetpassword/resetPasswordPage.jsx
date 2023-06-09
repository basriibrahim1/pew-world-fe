import React, {useState} from 'react'
import ResetPasswordComponent from '../../../component/auth/resetPassword/resetPasswordComponent'
import { ResetPasswordAction } from '../../../storage/actions/auth/resetPasswordAction'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";

const ResetPasswordPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const resetPasswordState = useSelector((state) => state.resetPassword);

  const email = localStorage.getItem("email");

  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  const onSubmit = (e) => {
      e.preventDefault();
      let data = {email, password, confirm};
      dispatch(ResetPasswordAction(data, navigate));
    }
  return (
    <ResetPasswordComponent passwordValue={password} passwordChange={(e) => setPassword(e.target.value)} confirmValue={confirm} confirmChange={(e) => setConfirm(e.target.value)} onSubmit={onSubmit} resetPasswordState={resetPasswordState}/>
  )
}

export default ResetPasswordPage