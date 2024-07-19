import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'
import Carouse from '../Components/Carouse'
import logo1 from '../assets/protection.png'
import logo2 from '../assets/optimization.png'
import logo3 from '../assets/share.jpeg'
import logo4 from '../assets/ideas.png'
import logo5 from '../assets/map.png'
import Cards from '../Components/Cards'
import Button from 'react-bootstrap/Button';
import Footer from '../Components/Footer'

const Home = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contactus');
    
  };
  const handleIndustryClick = () => {
    navigate('/industry');
  };
  return (
    <div>
      <Carouse/>
      {/* section-2 */}
      <div className='flex section2'>
        <div className='img-sec2'>
          <img src='https://cdn.pixabay.com/photo/2015/05/22/19/41/consultant-779590_1280.jpg'/>
        </div>
        <div className='sec2part2'>
          <div className='sec-p1'>
            <p>About Consultancy</p>
            <h1><b>Experincing Passion about work!!</b></h1>
          </div>
          <div className='sec-p2'>
           <div className='con1'><img src={logo1}/><div><h4><b>Protect Your Business</b></h4>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantiugb mjhgfvebhmdk k,iuj</p></div></div>
           <div className='con1'><img src={logo2}/><div><h4><b>Optimize your systems​</b></h4>
           <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beata hnmf,p;l,rmfk</p></div></div>
           <div className='con1'><img src={logo3}/><div><h4><b>
           Empower your employees</b></h4>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quos ex, aliquam repellat sint animi dignissimos temp</p></div></div>
           <div className='con1'><img src={logo4}/><div><h4><b>Valuable ideas​</b></h4>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti tempore autem possimus rem! Est adipisci natus, praesentium eum </p></div></div>
          </div>
        </div>
      </div>
      {/* section-3 */}
      <div className='sec-3'>
        <p>Our Solutions</p>
        <h1><b>We creating solutions 
        <br/>for your organization</b></h1>
       <Cards/>
       <Button variant="primary" className='btn-1' style={{backgroundColor:'rgb(144, 46, 46)' }} onClick={handleIndustryClick}>View More</Button>
      </div>
      {/* section-4 */}
      <div className='sec-4'>
        
        <center><h6><b>Our Client</b></h6>
        <h1><b>Trust is our Foundation</b></h1></center>
        <img src={logo5} alt='map'/>
      </div>
      {/* section-5 */}
      <div className='flex sec-5'>
        <div className='sec-5-01'>
          <div className='sec-5-1'></div>
          <div className='sec-5-2'>
            <h6><b>How we work</b></h6>
            <h1>4 Steps To Make
            Business Successful</h1>
          </div>
          <div className='sec-5-4'>
            <div><h3><b>01 Analize</b></h3>
            <p>We utilize creative and customized methods that tailor 
              our work to the client’s environment to the maximum.</p></div>
              <div><h3><b>02 Advise​</b></h3>
            <p>If you find out when and where your business needs to
               go and how to get there – then the real progress is made.</p></div>
              <div><h3><b>03 Strategy​</b></h3>
            <p>We deliver business results via hands-on execution and 
              leading teams through the complex change.</p></div>
              <div><h3><b>04 Result</b></h3>
            <p>We provide valuable guidance and support in the development,
               which help you run a successful business.</p></div>
          </div>
        </div>     
        <div className='sec-5-02'>
        <div className='sec-5-021'></div>
        <div className='sec-5-022'>
          <img style={{width:'100%', height:'100%'}} src='https://cdn.pixabay.com/photo/2022/01/20/17/51/office-desk-6952919_1280.jpg'/>
        </div>
        </div>
      </div>
      {/* section-6 */}
      <div className='sec-5-2'>
         <center><h6><b>Case Study</b></h6><h1><b>Enjoy our company’s
         awesome projects</b></h1></center>
         <div className='sec flex'>
          <div className='sec-6 a'><center><h6>Courses</h6></center>
          <h3><b>A map company enters new territory</b></h3></div>
          <div className='sec-6 b'><center><h6>Projects</h6></center>
          <h3><b>Extracting value by integrating business units</b></h3></div>
          <div className='sec-6 c'><center><h6>IT Consulting</h6></center>
          <h3><b>Redefining home entertainment</b></h3></div>
         </div>
      </div>
      {/* section-7 */}
      <div className='sec-7'>
        <h6><b>GAIN SUCCESS WITH US</b></h6>
        <h1><b>The Intelligent Choice</b></h1>
        <Button style={{backgroundColor:'var(--border-color)'}} onClick={handleContactClick}>Contact Us</Button>
      </div>
      <div>
        <Footer/>
      </div>
    </div>

  )
}

export default Home
