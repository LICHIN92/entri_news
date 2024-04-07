import React, { useState } from 'react'
import Input from '../input/Input'
import './sign.css'
export default function Sign({ setState }) {
    const[signinData,setSigninData]=useState({})
    const handlechange=(e)=>{
        setSigninData({...signinData,[e.target.name]:e.target.value})
        console.log(signinData);
        // console.log(signinData.password);
    }
    return (
        <div className='signin-container'>

            <div className="signin">
                <form action="">
                    <Input label={'Email'} type={'text'} name={'email'}  onChange={handlechange}/>
                    <Input label={'Password'} type={'password'} name={'password'} onChange={handlechange} />

                    <button type='submit'>Sign In</button>
                    <p>Already have an Account <span onClick={() => setState('signup')}>Click Here</span></p>
                </form>
            </div>


        </div>
    )
}
