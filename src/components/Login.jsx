import React from 'react'
import '../Login.css'

const Login = () => {
  return (
    <div className='loginForm'>
      <div className="mainForm">
        <form>
          <label>Username</label><br />
          <input type='text' /><br />
          <label>Password</label><br />
          <input type='password' /><br />
          <input type='submit'  className='btn-black' />
        </form>
      </div>

      <div className='formArt'>
        <img src='../logo512.png' />
      </div>
    </div>
  )
}

export default Login
