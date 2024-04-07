import React, { useState } from 'react'
import Input from '../input/Input'
import './Signup.css'
const Signup = ({ setState }) => {
  const handlesubmit=()=>{
   alert(`Name:${signupdata.name},LastName:${signupdata.Lastname}`)
  }
  const [signupdata,setSignupData]=useState({})
  const handlechange=(e)=>{
    e.preventDefault()
    e.preventDefault();
    setSignupData({...signupdata,[e.target.name]:e.target.value})
    console.log(signupdata);


  }
  return (
    <div className='signup'>
       <form action="" onSubmit={handlesubmit}>
       <Input label={'Name'} type={"text"} name={"name"} onChange={handlechange}/>
      <Input label={'Last Name'} type={"text"} name={"lastname"} onChange={handlechange}/>
      <Input label={'Email'} type={"email"} name={"email"} onChange={handlechange}/>
      <Input label={'Mobile'} type={"number"} name={"mobile"} onChange={handlechange}/>
      <Input label={'Password'} type={"password"} name={"password"} onChange={handlechange}/>
      <Input label={'Confirm Password'} type={"password"} name={"confirmPassword"} onChange={handlechange}/>
      <button type='submit'>Signup</button>
      
       </form>
      <p >click here for <span onClick={() => setState('signin')}>siginin</span></p>
    </div>
  )
}

export default Signup