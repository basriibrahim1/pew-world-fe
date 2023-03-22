import React, { useState } from 'react'
import ResetEmailComponent from '../../../component/auth/resetPassword/resetEmailComponent'

const ResetEmailPage = () => {
    const [email, setEmail] = useState()
    const onSubmit = (e) => {
      e.preventDefault()
    }

  return (
    <>
    <ResetEmailComponent emailValue={email} emailChange={(e) => setEmail(e.target.value)} onSubmit={onSubmit}/>
    </>
  )
}

export default ResetEmailPage