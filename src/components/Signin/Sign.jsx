import React, { useState } from 'react'
import Input from '../input/Input'
import './sign.css'
export default function Sign({ setState }) {
    const [signinData, setSigninData] = useState({})
    const handlechange = (e) => {
        setSigninData({ ...signinData, [e.target.name]: e.target.value })
        console.log(signinData);
    }
    function emailvalid() {
        if (signinData.email) {
            let email = signinData.email;
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
    function passvalid() {
        if (signinData.password) {
            return true
        } else {
            alert('Enter your password')
        }
    }
    const handleSignin = () => {
        if (signinData.email && signinData.password) {
            if (emailvalid() && passvalid()) {
                alert(signinData.email + '\n' + signinData.password)
            }
        }
        else {
            alert('enter the feild')
        }
    }
    return (
        <div className='signin-container'>

            <div className="signin">
                {/* <form action=""> */}
                    <Input label={'Email'} type={'text'} name={'email'} onChange={handlechange} />
                    <Input label={'Password'} type={'password'} name={'password'} onChange={handlechange} />

                    <button onClick={handleSignin}>Sign In</button>
                    <p>Already have an Account <span onClick={() => setState('signup')}>Click Here</span></p>
                {/* </form> */}
            </div>


        </div>
    )
}
