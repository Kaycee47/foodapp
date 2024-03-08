'use client'
import React, {useState} from 'react'
import './Sectionfour.css'
import Image from 'next/image'
import wine from '../assets/wine.jpg'
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
import { LuPencilLine } from "react-icons/lu";


const Sectionfour = () => {

  const[show, setShow]=useState(false)

  const hidefunc=()=>{
    setShow(false)
  }

  const showfunc=()=>{
    setShow(true)
  }

  
  return (
    <div className='sectionfour'>
        
        <div className='sectionfourleft'>
            <p id='reserve'>Reservation</p>
            <h2>BOOK A TABLE NOW!</h2>

            <div>
            <input type="text"
            placeholder='1 person' 
            style={{position: 'relative'}}/>
            </div><br></br>

            
          {!show ?  <RiArrowDropDownLine   style={{position : 'absolute' , fontSize : 30,  color:'white', top : 150,left:350 }} onClick={showfunc} /> :  <RiArrowDropUpLine style={{position : 'absolute' , fontSize : 30,  color:'white', top : 150,left:350}} onClick={hidefunc}/>}

          
            {show=== true && (
                   <div className='dropdownlist' onClick={hidefunc} data-aos="fade-down"  data-aos-easing="linear"
                   data-aos-duration="300">
                   <div>
                   <p>1 person</p><br></br>
                   <p>2 persons</p><br></br>
                   <p>3 persons</p><br></br>
                   <p>4 persons</p><br></br>
                   <p>5+ persons</p><br></br>
                   </div>
                
             </div>

            )}
       

           
              <div>
              <input type="date" />
              </div><br></br>

              <div>
              <input type="time"
              placeholder='time' />
              </div><br></br>

              <div>
              <input type="text" 
              placeholder='Message'
              id='message'/>    <LuPencilLine style={{color:'white'}} />
          
              </div><br></br>

              <button>Reserve Now</button>
        </div>


        <div className='sectionfourright'>
            <Image 
            src={wine}
            height={600}
            width={500}
            alt=''/>

        </div>

        
    </div>
  )
}

export default Sectionfour