import React from 'react'
import './Carouse.css';
import Carousel from 'react-bootstrap/Carousel'
import logo2 from '../assets/slider-01.jpg';
import logo3 from '../assets/slider-02.jpg';
import logo1 from '../assets/slider-03.jpg';

const Carouse = () => {
  return (
    <div>
      <Carousel>
      <Carousel.Item>
        <img className='img-carous' src={logo1}/>
        <Carousel.Caption>
            <div className='box1'>
            <p>Power of Relevance</p>
            <h1>Arkle Consultancy!!</h1>
            <div className='div1'>view our solution</div>
            </div>
           
        
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='img-carous' src={logo2}/>
        <Carousel.Caption>
            <div className='box1'>
            <p>Power of Relevance</p>
            <h1>Business & Coaching Consultancy</h1> 
             
            </div>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='img-carous' src={logo3}/>
        <Carousel.Caption>
            <div className='box1'>
              <p>Power of Relevance</p>
              <h1>Leading The Way For Future Growth</h1>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Carouse