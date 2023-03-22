import React from 'react'

const LoginWorkerComponent = (props) => {
    const {title, heading, passwordValue, passwordChange, emailValue, emailChange, onSubmit} = props
  return (
    <>
        <div className='container'>
            <div className='left'>
                <img src="" alt="" />
                <p></p>
            </div>
            <div className='right'>
                <h3>{title}</h3>
                <p>{heading}</p>
                <form onSubmit={onSubmit}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="text" name='email' placeholder='Masukan alamat email' autoFocus value={emailValue} onChange={emailChange}/>
                    </div>
                    <div>
                        <label htmlFor="password">Kata Sandi</label>
                        <input type="password" name='password' placeholder='Masukan kata sandi' value={passwordValue} onChange={passwordChange} autoFocus/>
                    </div>
                    <button type='submit'>Masuk</button>
                </form>
            </div>
        </div>
    </>
  )
}

export default LoginWorkerComponent