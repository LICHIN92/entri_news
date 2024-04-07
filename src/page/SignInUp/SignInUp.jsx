import React, { useState } from 'react'
import Sign from '../../components/Signin/Sign'
import Signup from '../../components/Signup/Signup'
import './Signupin.css'

const SignInUp = () => {
  const [state, setState] = useState('signin')
  return (
    <div className='sign'>
 
      <div className='second'>
        <h1>{state === 'signin' ? "Sign In" : "Sign Up"}</h1>
        {state === 'signin' ? <Sign setState={setState} /> : <Signup setState={setState} />}
      </div>
    </div>
  )
}

export default SignInUp