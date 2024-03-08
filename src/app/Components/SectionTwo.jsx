import React from 'react'
import Image from 'next/image'
import mapImage from '../assets/map.png' 
import './SectionTwo.css'
import { FaBowlFood } from "react-icons/fa6";
import { FaShippingFast } from "react-icons/fa";
import { GrVmMaintenance } from "react-icons/gr";
import { GrServices } from "react-icons/gr";

const SectionTwo = () => {
  return (
    <div className='secondTwo'>
      <div className='sectionTwoBack'>
      <div>
            <Image
            src={mapImage}
            width={500}
            height={550}
            alt='' />
        </div>

        <div className='textdiv2'>
            <p id='why'>why choose us</p>
            <h2>WHY WE ARE THE BEST ?</h2>
            <div className='textdivlorem'> 
            <p >
            Rrem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisquiey.
            </p>
            <br></br>
            <p>
            Rrem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            </div>

            <div className='options2'>
              <div>
                
              <p id='fresh'> <FaBowlFood />Fresh Food </p>
              </div>
              <div>
            
              <p id='quality'> <GrServices />Quality Maintain</p>
            
              </div>
              <div>
              <p id='fast'> <FaShippingFast />Fast Delivery</p>
              </div>
              <div>
              <p id='service'> <GrVmMaintenance />24/7 Service</p>
              </div>
              
            
           
             
          </div>
        </div>

          
      </div>
       

    </div>
  )
}

export default SectionTwo