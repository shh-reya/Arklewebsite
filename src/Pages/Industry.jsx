import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Industry.css'
import CardIndustry from '../Components/CardIndustry'
import VerticalStepper from '../Components/Stepper'
import Counters from '../Components/Counter'
import Footer from '../Components/Footer'
import logo from '../assets/industry.jpg'
// import VerticalLinearStepper from '../Components/Stepper'

const Industry = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contactus');
  };
  return (
    <div>
      {/* section-1 */}
      <div className='isec-1 flex'>
        <div className='isec-1-01'><h1><b>Industry </b></h1>
        <h6>Arkle Consultancy:Power of Relevance</h6>
        <div className='isec-1-0'></div></div>
        <div className='isec-1-02'>
          <img src={logo}/>
        </div>
      </div>
      <div className='isec-2'>
        <div className='isec-2-01'>
          <h1><b>A wide range of business
          and financial services</b></h1>
          <div className='flex isec-2-02'>
            <div className='isec-2-21'><img src='https://media.istockphoto.com/id/1151593834/photo/male-business-coach-speaker-in-suit-give-flipchart-presentation.jpg?s=612x612&w=0&k=20&c=B0JEeRXVgZbF9Mp1ZEgK_pQWgbolQCrQS5kbJqH2ykc='/>
            <p>We help transform the world's most important
               businesses into vigorous, agile organizations that 
               anticipate the unpredictable, adapt rapidly to disruption 
               and outcompete their opposition. We work with clients 
               who do not hide from the future but want to define it, 
               clients with high potential and high ambition ,
                determined to adapt and become enduring winners.</p>
            </div>
            <div className='isec-2-22'><img src='https://media.istockphoto.com/id/1181008199/photo/cheerful-businesswoman-meets-with-client.jpg?s=612x612&w=0&k=20&c=uI33Rn9CCdqq5KdJTux30b--lW5faBJRN7Il-bsGRaw='/>
           <center><b><h3>Our policy</h3></b></center> 
            </div>
          </div>
          <div>
        
        
      </div>
      </div>
          
        </div>
        <CardIndustry/>
      <div className='isec-3'>
        <center><h6><b>Industries</b></h6>
        <h1><b>Company Offers</b></h1></center>
        <VerticalStepper/>
      </div>
      <div>
        <Counters/>
      </div>
      <div className='isec-7 flex'>
        <div><p><b>Gain Success With Us</b></p>
        <h1>Ready to Get Started</h1></div>
        <div>
          <button onClick={handleContactClick}>Contact Us</button>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Industry