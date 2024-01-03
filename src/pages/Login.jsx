import React from 'react'
import Header from '../components/Header'
import LoginContainer from '../components/LoginContainer'
import { Outlet } from 'react-router-dom/dist'

function Login() {
  return (
    <>
      <LoginContainer />
      <Outlet />
    </>
  )
}

export default Login
