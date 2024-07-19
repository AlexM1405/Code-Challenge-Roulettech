import React from 'react'
import Form from '../Components/Form'



function Login() {
  return (
    <Form route="/myserver/token/" method="login"/>
  )
}

export default Login