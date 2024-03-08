'use client'
import React, {useState} from 'react'
import './Navbar.css'
import Image from "next/image";
import Logo from '../assets/logo.png'
import food2 from '../assets/food2.png'
import food3 from '../assets/food3.png'
import food1 from '../assets/food1.png'
import food5 from '../assets/food5.png'
import { FaBasketShopping } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import Link from 'next/link';



const Navbar = () => {
    const[show, setShow]=useState(false)

    const hidefunc= () =>{
        setShow(false);
    }
    const showfunc= () =>{
        setShow(true);
    }


  return (
    <div className='maindiv'>
     <nav className='gendiv'>
        <div>
            <Image src={Logo}
            alt='logo'
            width={100}
            height={25}/>
        </div>

        <div className='secondiv'>
            <Link href="/"> <p>Home</p></Link>
           
            <Link href="/about"><button>About</button></Link>
            <Link href="/pages"><button>Pages</button></Link>
          
         
            <p></p>
            <p>Shop</p>
            <p>Blog</p>
            <p>Contact</p>
        </div>


        <div className='thirddiv'>
            <div className='cartnumber' onClick={showfunc}>
            <p><FaBasketShopping /></p>
            <span>0</span>
            </div>
            
            <p><CiHeart /></p>
        </div>

    </nav>
  {show=== true && (
      <div className='sidebarModal' onClick={hidefunc}>
      <div className='sidebar'  data-aos="fade-left"  data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="600">
       <div className='closesidebar'>
           <p style={{cursor: 'pointer'}} onClick={hidefunc}><IoClose /></p>
        <h2>CART ITEMS - 4</h2>
       
        
       </div>
       <hr></hr>
         <div className='allcarts'>
       
           <div className='cartimg'>
               <Image
                src={food2}
                id='img1'
                alt='food'
                width={50}
                height={40}
                
               />
               <div>
                   <p>Rorem ipsum dolor sit amet.</p>
                   <p id='p1'>$19.00</p>
               </div>
           </div>

           <div className='cartimg2'>
               <Image
                src={food3}
                id='img2'
                alt='food'
                width={50}
                height={40}
               
               />
               <div>
                   <p>Rorem ipsum dolor sit amet</p>
                   <p id='p2'>$22.00</p>
               </div>
           </div>

           <div className='cartimg3'>
               <Image
                src={food1}
                id='img3'
                alt='food'
                width={50}
                height={40}
               />
               <div>
                   <p>Rorem ipsum dolor sit amet.</p>
                   <p id='p3'>$43.00</p>
               </div>

           </div>
           <div className='cartimg4'>
               <Image
                src={food5}
                id='img4'
                alt='food'
                width={50}
                height={40}
               />
               <div>
                   <p>Rorem ipsum dolor sit amet.</p>
                   <p id='p4'>$14.00</p>
               </div>
           </div>
           <br></br>
           <br></br>
           <br></br>

           <hr></hr>
            <div className='subtotal'>
            <div>
           <p>SUB TOTAL </p>
            </div>
            <div>
            <p> $87.00</p>
            
          </div> 
           </div>
           <hr></hr>

        <div className='button'>
           <button id='btn1'>View Cart</button>
           
           <button id='btn2'>Check Out</button>
           </div>
          
        </div>
       
           
       </div>
     </div>
  )}
  
   </div>
   
    
  )
}

export default Navbar