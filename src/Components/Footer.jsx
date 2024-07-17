import React from 'react'
import './Footer.css'
import logo from '../assets/arkle.png'

const Footer = () => {
  return (
    <div>
    <div className='flex foot'>
        <div><img src={logo} alt='' style={{width:'150px'}}/>
        <p><i class="fa-solid fa-location-dot"></i> J-18, Bapuji Marg, Sahkar Marg,<br/> Jaipur, Rajasthan 302005, IN</p>
        <p><i class="fa-solid fa-envelope"></i> arkleconsultancy@gmail.com</p>
         <p><i class="fa-solid fa-phone"></i> +91 8107998081</p>
         <div className='flex foot-1'>
         <a href='https://www.facebook.com/' target="_blank" ><i class="fa-brands fa-facebook"></i></a>
         <a href='https://www.instagram.com/' target="_blank"><i class="fa-brands fa-instagram"></i></a>
         <a href='https://www.twitter.com/' target="_blank"><i class="fa-brands fa-square-x-twitter"></i></a>
         <a href='https://www.linkedin.com/company/arkle-consultancy-pvt-ltd/mycompany/' target="_blankm"><i class="fa-brands fa-linkedin"></i></a>
         </div>
        </div>
        <div className='foot-2'>
            <h3>Company</h3>
            <p>Our Partners</p>
            <p>FAQ</p>
            <p>Careers</p>
            <p>Company Info</p>
        </div>
       
        <div className='foot-2'>
          <h3>Services</h3>
          <a href='./industry'><p>Industry</p></a>
          <a href='./capability'><p>Capability</p></a>
          <a href='./career'><p>Career</p></a>
          <a href='./contactus'><p>ContactUs</p></a>

        </div>
        <div className='foot-2'>
             <h3>Important Links</h3>
             <p> Privacy Policy</p>  
              <p>Terms and Conditions</p>  
        </div>
    </div>
     <div className='foot-02'>
      <center><h6>copyright &copy; 2024. All Right Reserved.<div style={{color:'var(--border-color)'}}>Arkle Consultancy</div></h6></center>
     </div>
    </div>
  )
}

export default Footer