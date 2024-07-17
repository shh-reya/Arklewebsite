import React from 'react'
import Footer from '../Components/Footer'
import logo from '../assets/career.jpg';

const Career = () => {
  return (
    <div>
       <div className='isec-1 flex'>
        <div className='isec-1-01'><h1><b>Careers </b></h1>
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

export default Career