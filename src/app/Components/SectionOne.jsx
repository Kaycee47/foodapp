import React from 'react'
import './SectonOne.css' 
import Image from 'next/image'
import burger from '../assets/burger.png'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaBurger } from "react-icons/fa6";

const SectionOne = () => {
  return (
    <div className='sectionOne'>
        <div className='sectionOneback'> 
        <div className='textdiv'> 
        <h2>ENJOY OUR <span style={{color: '#ff8e28'}}>DELICIOUS</span> <br></br>  <span style={{color: '#00a850'}}>FOOD</span></h2>
            <p>Hey Our Delicius Food is wating for you, We are always Near to you, oreder food whatever you need</p>

            <div className='inputdiv'>
            <input type="text" placeholder='Type your location' />
            <button>Search</button>
        </div>

        <div className='icondiv'>
            <span><FaFacebook /></span>
            <span> <FaTwitter /></span>
            <span> <FaYoutube /></span>
           
           
        </div>
        </div>

        
       

        <div>
            <Image src={burger}
            alt=''
            height={500}
            width={400}
            />
        </div>
            
        </div>

        <div className='optionsdiv'>
            <p>
                <span>DRINKS</span>
            </p>
            <p>
                <span>STUCKS</span>
            </p>
            <p>
                <span>BURGER</span>
            </p>
            <p>
                <span>PIZZA</span>
            </p>
            <p>
                <span>COMBO</span>
            </p>
            <p>
                <span>CHICKEN</span>
            </p>
        </div>
    </div>
  )
}

export default SectionOne