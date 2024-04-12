import React from 'react'
import './input.css'
export default function Input({label,name,type,onChange}) {
  return (
    <div className='input-container'>
        <label htmlFor="">{label}: </label>
        <input type={type} name={name}  onChange={onChange}/>
    </div>
  )
}
