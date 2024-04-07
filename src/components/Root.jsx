import React from 'react'
import Header from './Header/Header'
import { Outlet } from 'react-router-dom'
const Root = () => {
  return (
    <div className='container-root'>
<Header/>
<Outlet/>
    </div>
  )
}

export default Root