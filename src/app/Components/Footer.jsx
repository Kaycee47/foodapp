import React from 'react'
import './Footer.css'
import Image from 'next/image'
import t_hour from '../assets/t_hour.png'
import food8 from '../assets/food8.jpg'
import food9 from '../assets/food9.jpg'
import whitelogo from '../assets/whitelogo.png'
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";



const Footer = () => {
  
  return (
    <div className='mainfooter'>
      <div className='footer1'>
        <h2>SUBSCRIBE NEWS LATTER</h2>

        <div className='input'>
          <input type="text"
          placeholder='Enter Your Mail' />

          <button>SUBSCRBE NOW</button>
        </div>
      </div>

      <div className='footer2'>
        <div className='frudbaz'>
        <h2>ABOUT FRUDBAZ</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit ullam, sequi tempore a reprehenderit labore dolor laborum sint quaerat nisi.</p>

        <div className='openinghours'>
          <div className='openinghoursimage'>
          <Image
          src={t_hour}
          width={50}
          height={50}
          alt='' />
          </div>
          <div>
            <h4>Opening Hours</h4>
            <p>Mon - Sat (8:00 - 6:00)</p>
            <p>Sunday - Closed</p>
          </div>

        </div>
        </div>
       

        


            <div className='contact'>
            <h2>CONTACT US</h2>
              <div className='contactp'>
                <h4>ADDRESS:</h4><p id='ama'>8638 Amarica Stranfo Mailbon Star</p>
               </div>
                <div className='contactp'>
                <h4>MAIL:</h4><p> support@example.com</p> 
                </div>             
              <div className='contactp'>
              <h4>PHONE:</h4><p>+7464 0187 3535 645</p>  
              </div>             
              <div className='contactp'>
              <h4>FAX ID:</h4><p>+9 659459 49594</p>  
              </div>             
          
          
         
         

            </div>
        
      
          <div className='links'>
            <h2>LINKS</h2>
            <p>HOME</p>
            <p>ABOUT</p>
            <p>NEWS</p>
            <p>SHOP</p>
            <p>FAQ</p>
            <p>CONTACT</p>
          </div>
       
          <div className='recent'>
          <h2>RECENT BLOGS</h2>

           <div className='recentimage'>
                <Image 
                 src={food8}
                 height={70}
                 width={70}
                 alt=''
                 style={{paddingTop: '10px', borderRadius: '7px'}}/>
                <p>Best Smell of Americano Cofee Trins</p>
           </div>


           <div className='recentimage'>
           <Image
              src={food9}
              height={70}
              width={70} 
              style={{paddingTop: '10px', borderRadius: '7px'}}/>
            <p>Best Smell of Americano Cofee Trins</p>
 

            </div>

          </div>
        
        
      </div>

      <hr style={{width:'80%', marginLeft:'120px'}}></hr>
      <div className='footer3'>
        <Image
        src={whitelogo}
        width={150}
        height={40}
        alt=''
        />

        <p id='copy'>Copy Right@ Example 2021.Design By XpressRow</p>
        <div className='iconsdiv'>
          <p><FaFacebookF/></p>
          <p>  <IoLogoTwitter /></p>
          <p> <FaYoutube /></p>
          <p><FaInstagram /></p>
          
        
         
          
        </div>

      </div>
      
    </div>
  )
}

export default Footer