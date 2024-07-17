import React from 'react'
import './Industry.css'
import logo from '../assets/capability.jpg';
import Footer from '../Components/Footer'

const Capability = () => {
  return (
    <div>
       <div className='isec-1 flex'>
        <div className='isec-1-01'><h1><b>Capabilities </b></h1>
        <h6>Arkle Consultancy:Power of Relevance</h6>
        <div className='isec-1-0'></div></div>
        <div className='isec-1-02'>
          <img src={logo}/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Capability