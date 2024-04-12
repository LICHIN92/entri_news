import React, { useState } from 'react'
import Input from '../input/Input'
import './Signup.css'
const Signup = ({ setState }) => {
  let exp = /^[a-z. ]+$/i

  function namevalid() {
    let name = signupdata.name
    console.log(name);
    let che = exp.test(name)
    console.log(che);
    if (che) {
      return true
    } else {

      alert('enter valid name')
    }
  }
  function lastnamevalid() {
    if (signupdata.lastname) {
      let Lname = signupdata.lastname
      if (exp.test(Lname)) {
        return true
      } else {
        alert('enter last name')
        return flase
      }
    }
    alert('enter last name')

  }
  function emailvalid() {
    if (signupdata.email) {
      let email = signupdata.email;
      let mailcheck = /^([a-z0-9_\-.]+)@([a-z]{5,6}).([a-z]{3,6})$/
      console.log(mailcheck.test(email));
      if (mailcheck.test(email)) {
        return true
      } else {
        alert('enter valid email')
        return false
      }
    } else {
      alert('enter your email')
    }
  }
  function mobilevalid() {
    if (signupdata.mobile) {
      let mobile = /^[0-9]{10}$/
      let num = signupdata.mobile
      if (mobile.test(num)) {
        return true
      } else {
        alert('please enter valid mobile')
        return false
      }
    } else {
      alert('Enter your Mobile')
    }
  }
  function passwordvalid() {
    let password = signupdata.password;
    let ConfirmPassword = signupdata.confirmPassword
    console.log(password, ConfirmPassword);
    if (signupdata.password && signupdata.confirmPassword) {
      if (signupdata.password === signupdata.confirmPassword) {
        return true
      } else {
        alert('password mismatch')

      }
    } else {
      alert("please enter password")
    }
  }
  const handlesubmit = (e) => {
    e.preventDefault()

    if (namevalid() && lastnamevalid() && emailvalid() && mobilevalid() && passwordvalid()) {
      alert(`Name: ${signupdata.name}\nLastName: ${signupdata.lastname}\nEmail: ${signupdata.email}\n Password: ${signupdata.password}`)
      e.preventDefault()

    }
  }
  const [signupdata, setSignupData] = useState({})
  const handlechange = (e) => {

    setSignupData({ ...signupdata, [e.target.name]: e.target.value })
    console.log(signupdata);
    e.preventDefault()


  }
  return (
    <div className='signup'>
      {/* <form action=""> */}
      <Input label={'Name'} type={"text"} name={"name"} onChange={handlechange} />
      <Input label={'Last Name'} type={"text"} name={"lastname"} onChange={handlechange} />
      <Input label={'Email'} type={"email"} name={"email"} onChange={handlechange} />
      <Input label={'Mobile'} type={"number"} name={"mobile"} onChange={handlechange} />
      <Input label={'Password'} type={"password"} name={"password"} onChange={handlechange} />
      <Input label={'Confirm Password'} type={"password"} name={"confirmPassword"} onChange={handlechange} />
      <button onClick={handlesubmit}>Signup</button>
      <p >click here to <span onClick={() => setState('signin')}>Signin</span></p>

      {/* </form> */}
    </div>
  )
}

export default Signup