import React from 'react'
import Footer from './footer'
import Navbar from './Navbar'

export default function Layout({children}) {
  return (
    <>
    <Navbar/>
        {children}
    <Footer/>
    
    </>
  )
}
