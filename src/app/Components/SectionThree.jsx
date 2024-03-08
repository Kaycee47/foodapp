import React, { useState } from 'react'
import './SectionThree.css'
import Image from "next/image"
import food1 from '../assets/food1.png'
import food2 from '../assets/food2.png'
import food3 from '../assets/food3.png'
import food4 from '../assets/food4.png'
import food5 from '../assets/food5.png'
import food6 from '../assets/food6.png'
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FaShoppingBasket } from "react-icons/fa";
import { FaEye } from "react-icons/fa";


const SectionThree = () => {
    const [show123, setShow123] = useState(false);
    const [show456, setShow456] = useState(false);
    const [show789, setShow789] = useState(false);
    const [show101112, setShow101112] = useState(false);
    const [show131415, setShow131415] = useState(false);
    const [showAll, setShowAll] = useState(true);

    const showAllFunc = ()=>{
        setShowAll(true)
        setShow123(false)
        setShow456(false)
        setShow789(false)
        setShow101112(false)
        setShow131415(false)
    }
    const show123Func = ()=>{
        setShow123(true)
        setShow456(false)
        setShowAll(false)
        setShow789(false)
        setShow101112(false)
        setShow131415(false)
    }
    const show456Func = ()=>{
        setShow456(true)
        setShow123(false)
        setShowAll(false)
        setShow789(false)
        setShow101112(false)
        setShow131415(false)
    }
    const show789Func = ()=>{
        setShow789(true)
        setShow456(false)
        setShow123(false)
        setShowAll(false)
        setShow101112(false)
        setShow131415(false)
    }
    const show101112Func = ()=>{
        setShow101112(true)
        setShow789(false)
        setShow456(false)
        setShow123(false)
        setShowAll(false)
        setShow131415(false)
    }
    const show131415Func = ()=>{
        setShow131415(true)
        setShow101112(false)
        setShow789(false)
        setShow456(false)
        setShow123(false)
        setShowAll(false)
    }



  return (
    <div className='SectionThree'>
        <h2>Popular dishes</h2>
        <div className='SectionThreeBtns'>
            <button id={showAll ? 'all' : ''} onClick={showAllFunc}>ALL CATERGORIES</button>
            <button id={show123 ? 'all' : ''} onClick={show123Func}>PIZZA</button>
            <button id={show456 ? 'all' : ''} onClick={show456Func}>BURGER</button>
            <button id={show789 ? 'all' : ''} onClick={show789Func}>ICE CREAM</button>
            <button id={show101112 ? 'all' : ''} onClick={show101112Func}>BLUEBERRY SHAKE</button>
            <button id={show131415 ? 'all' : ''}  onClick={show131415Func}>DRINK</button>
        </div>

      
        {
            showAll &&
            <div className='SectionThreecard'>
            <div className='SectionThreecarddiv' data-aos="flip-up" data-aos-duration="2000">



                <div className='topicons'>
                    <p><FaShoppingBasket /></p>
                    <p><CiHeart /></p>
                    <p><FaEye /></p>

                </div>



                <Image
                src={food1}
                width={200}
                height={150}
                alt=''
                className='imagehover' />

                <div>
                    <p>PIZZA <FaStar style={{color: 'orange'}} /> <FaStar  style={{color: 'orange'}}  /> <FaStar  style={{color: 'orange'}}  /></p>
                    <h3>UNLIMITED CHICKEN FRY</h3>
                    <p>PRICE -$53.00 $75.00</p>
                </div>


                

            </div>

            <div className='SectionThreecarddiv'data-aos="flip-up" data-aos-duration="2000">

            <div className='topicons'>
                    <p><FaShoppingBasket /></p>
                    <p><CiHeart /></p>
                    <p><FaEye /></p>

                </div>


                <Image
                src={food2}
                width={200}
                height={150}
                alt=''
                className='imagehover' />

                <div>
                    <p>PIZZA <FaStar style={{color: 'orange'}} /> <FaStar  style={{color: 'orange'}}  /> <FaStar  style={{color: 'orange'}}  /></p>
                    <h3>UNLIMITED CHICKEN FRY</h3>
                    <p>PRICE -$53.00 $75.00</p>
                </div>

            </div>

            <div className='SectionThreecarddiv'data-aos="flip-up" data-aos-duration="2000">
            <div className='topicons'>
                    <p><FaShoppingBasket /></p>
                    <p><CiHeart /></p>
                    <p><FaEye /></p>

                </div>


                <Image
                src={food3}
                width={200}
                height={150}
                alt=''
                className='imagehover' />

                <div>
                    <p>PIZZA <FaStar style={{color: 'orange'}} /> <FaStar  style={{color: 'orange'}}  /> <FaStar  style={{color: 'orange'}}  /></p>
                    <h3>UNLIMITED CHICKEN FRY</h3>
                    <p>PRICE -$53.00 $75.00</p>
                </div>

            </div>

            <div className='SectionThreecarddiv'data-aos="flip-up"data-aos-duration="2000">
            <div className='topicons'>
                    <p><FaShoppingBasket /></p>
                    <p><CiHeart /></p>
                    <p><FaEye /></p>

                </div>


                <Image
                src={food4}
                width={200}
                height={150}
                alt='' 
                className='imagehover'/>

                <div>
                    <p>PIZZA <FaStar style={{color: 'orange'}} /> <FaStar  style={{color: 'orange'}}  /> <FaStar  style={{color: 'orange'}}  /></p>
                    <h3>UNLIMITED CHICKEN FRY</h3>
                    <p>PRICE -$53.00 $75.00</p>
                </div>

            </div>

            <div className='SectionThreecarddiv'data-aos="flip-up" data-aos-duration="2000">
            <div className='topicons'>
                    <p><FaShoppingBasket /></p>
                    <p><CiHeart /></p>
                    <p><FaEye /></p>

                </div>


                <Image
                src={food5}
                width={200}
                height={150}
                alt=''
                className='imagehover'/>

                <div>
                    <p>PIZZA <FaStar style={{color: 'orange'}} /> <FaStar  style={{color: 'orange'}}  /> <FaStar  style={{color: 'orange'}}  /></p>
                    <h3>UNLIMITED CHICKEN FRY</h3>
                    <p>PRICE -$53.00 $75.00</p>
                </div>

            </div>

            <div className='SectionThreecarddiv'data-aos="flip-up" data-aos-duration="2000">

            <div className='topicons'>
                    <p><FaShoppingBasket /></p>
                    <p><CiHeart /></p>
                    <p><FaEye /></p>

                </div>


                <Image
                src={food6}
                width={200}
                height={150}
                alt='' 
                className='imagehover'/>

                <div>
                    <p>PIZZA <FaStar style={{color: 'orange'}} /> <FaStar  style={{color: 'orange'}}  /> <FaStar  style={{color: 'orange'}}  /></p>
                    <h3>UNLIMITED CHICKEN FRY</h3>
                    <p>PRICE -$53.00 $75.00</p>
                </div>

            </div>

        </div>
        }
        {
            show123 &&
            <div className='SectionThreecard'>
            <div className='SectionThreecarddiv'>



                <div className='topicons'  data-aos="fade-down" data-aos-easing="linear" data-aos-duration="900">
                    <p><FaShoppingBasket /></p>
                    <p><CiHeart /></p>
                    <p><FaEye /></p>

                </div>



                <Image
                src={food1}
                width={200}
                height={150}
                alt=''
                className='imagehover' />

                <div>
                    <p>PIZZA <FaStar style={{color: 'orange'}} /> <FaStar  style={{color: 'orange'}}  /> <FaStar  style={{color: 'orange'}}  /></p>
                    <h3>UNLIMITED CHICKEN FRY</h3>
                    <p>PRICE -$53.00 $75.00</p>
                </div>


                

            </div>

            

            <div className='SectionThreecarddiv'data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
            <div className='topicons'>
                    <p><FaShoppingBasket /></p>
                    <p><CiHeart /></p>
                    <p><FaEye /></p>

                </div>


                <Image
                src={food3}
                width={200}
                height={150}
                alt=''
                className='imagehover' />

                <div>
                    <p>PIZZA <FaStar style={{color: 'orange'}} /> <FaStar  style={{color: 'orange'}}  /> <FaStar  style={{color: 'orange'}}  /></p>
                    <h3>UNLIMITED CHICKEN FRY</h3>
                    <p>PRICE -$53.00 $75.00</p>
                </div>

            </div>

            <div className='SectionThreecarddiv'data-aos="fade-up" data-aos-duration="2000">
            <div className='topicons'>
                    <p><FaShoppingBasket /></p>
                    <p><CiHeart /></p>
                    <p><FaEye /></p>

                </div>


                <Image
                src={food4}
                width={200}
                height={150}
                alt='' 
                className='imagehover'/>

                <div>
                    <p>PIZZA <FaStar style={{color: 'orange'}} /> <FaStar  style={{color: 'orange'}}  /> <FaStar  style={{color: 'orange'}}  /></p>
                    <h3>UNLIMITED CHICKEN FRY</h3>
                    <p>PRICE -$53.00 $75.00</p>
                </div>

            </div>

            

        </div>
        }
        {
            show456 &&
            <div className='SectionThreecard'>
            <div className='SectionThreecarddiv'data-aos="fade-right"  data-aos-offset="300"
     data-aos-easing="ease-in-sine">
            <div className='topicons'>
                    <p><FaShoppingBasket /></p>
                    <p><CiHeart /></p>
                    <p><FaEye /></p>

                </div>


                <Image
                src={food3}
                width={200}
                height={150}
                alt=''
                className='imagehover' />

                <div>
                    <p>PIZZA <FaStar style={{color: 'orange'}} /> <FaStar  style={{color: 'orange'}}  /> <FaStar  style={{color: 'orange'}}  /></p>
                    <h3>UNLIMITED CHICKEN FRY</h3>
                    <p>PRICE -$53.00 $75.00</p>
                </div>

            </div>


            <div className='SectionThreecarddiv'data-aos="zoom-in" data-aos-duration="2000">

<div className='topicons'>
        <p><FaShoppingBasket /></p>
        <p><CiHeart /></p>
        <p><FaEye /></p>

    </div>


    <Image
    src={food2}
    width={200}
    height={150}
    alt=''
    className='imagehover' />

    <div>
        <p>PIZZA <FaStar style={{color: 'orange'}} /> <FaStar  style={{color: 'orange'}}  /> <FaStar  style={{color: 'orange'}}  /></p>
        <h3>UNLIMITED CHICKEN FRY</h3>
        <p>PRICE -$53.00 $75.00</p>
    </div>

            </div>

            <div className='SectionThreecarddiv'data-aos="fade-right"  data-aos-offset="300">
            <div className='topicons'>
                    <p><FaShoppingBasket /></p>
                    <p><CiHeart /></p>
                    <p><FaEye /></p>

                </div>


                <Image
                src={food4}
                width={200}
                height={150}
                alt='' 
                className='imagehover'/>

                <div>
                    <p>PIZZA <FaStar style={{color: 'orange'}} /> <FaStar  style={{color: 'orange'}}  /> <FaStar  style={{color: 'orange'}}  /></p>
                    <h3>UNLIMITED CHICKEN FRY</h3>
                    <p>PRICE -$53.00 $75.00</p>
                </div>

            </div>

            

        </div>
        }
        {
            show789 &&
            <div className='SectionThreecard'>
            <div className='SectionThreecarddiv'data-aos="zoom-in" data-aos-duration="2000"
     data-aos-easing="ease-in-sine">
            <div className='topicons'>
                    <p><FaShoppingBasket /></p>
                    <p><CiHeart /></p>
                    <p><FaEye /></p>

                </div>


                <Image
                src={food1}
                width={200}
                height={150}
                alt=''
                className='imagehover' />

                <div>
                    <p>PIZZA <FaStar style={{color: 'orange'}} /> <FaStar  style={{color: 'orange'}}  /> <FaStar  style={{color: 'orange'}}  /></p>
                    <h3>UNLIMITED CHICKEN FRY</h3>
                    <p>PRICE -$53.00 $75.00</p>
                </div>

            </div>


            <div className='SectionThreecarddiv'data-aos="zoom-in" data-aos-duration="2000">

    <div className='topicons'>
            <p><FaShoppingBasket /></p>
            <p><CiHeart /></p>
            <p><FaEye /></p>

        </div>


        <Image
        src={food3}
        width={200}
        height={150}
        alt=''
        className='imagehover' />

        <div>
            <p>PIZZA <FaStar style={{color: 'orange'}} /> <FaStar  style={{color: 'orange'}}  /> <FaStar  style={{color: 'orange'}}  /></p>
            <h3>UNLIMITED CHICKEN FRY</h3>
            <p>PRICE -$53.00 $75.00</p>
        </div>

                </div>

                <div className='SectionThreecarddiv'data-aos="fade-up" data-aos-duration="2000">
                <div className='topicons'>
                        <p><FaShoppingBasket /></p>
                        <p><CiHeart /></p>
                        <p><FaEye /></p>

                    </div>


                    <Image
                    src={food4}
                    width={200}
                    height={150}
                    alt='' 
                    className='imagehover'/>

                    <div>
                        <p>PIZZA <FaStar style={{color: 'orange'}} /> <FaStar  style={{color: 'orange'}}  /> <FaStar  style={{color: 'orange'}}  /></p>
                        <h3>UNLIMITED CHICKEN FRY</h3>
                        <p>PRICE -$53.00 $75.00</p>
                    </div>

                </div>

                

            </div>
        }
        {
            show101112 &&
            <div className='SectionThreecard'>
            <div className='SectionThreecarddiv'data-aos="fade-up" data-aos-duration="2000"
     data-aos-easing="ease-in-sine">
            <div className='topicons'>
                    <p><FaShoppingBasket /></p>
                    <p><CiHeart /></p>
                    <p><FaEye /></p>

                </div>


                <Image
                src={food5}
                width={200}
                height={150}
                alt=''
                className='imagehover' />

                <div>
                    <p>PIZZA <FaStar style={{color: 'orange'}} /> <FaStar  style={{color: 'orange'}}  /> <FaStar  style={{color: 'orange'}}  /></p>
                    <h3>UNLIMITED CHICKEN FRY</h3>
                    <p>PRICE -$53.00 $75.00</p>
                </div>

            </div>


            <div className='SectionThreecarddiv'data-aos="zoom-in" data-aos-duration="2000">

<div className='topicons'>
        <p><FaShoppingBasket /></p>
        <p><CiHeart /></p>
        <p><FaEye /></p>

    </div>


    <Image
    src={food2}
    width={200}
    height={150}
    alt=''
    className='imagehover' />

    <div>
        <p>PIZZA <FaStar style={{color: 'orange'}} /> <FaStar  style={{color: 'orange'}}  /> <FaStar  style={{color: 'orange'}}  /></p>
        <h3>UNLIMITED CHICKEN FRY</h3>
        <p>PRICE -$53.00 $75.00</p>
    </div>

            </div>

            <div className='SectionThreecarddiv'data-aos="fade-up" data-aos-duration="2000">
            <div className='topicons'>
                    <p><FaShoppingBasket /></p>
                    <p><CiHeart /></p>
                    <p><FaEye /></p>

                </div>


                <Image
                src={food4}
                width={200}
                height={150}
                alt='' 
                className='imagehover'/>

                <div>
                    <p>PIZZA <FaStar style={{color: 'orange'}} /> <FaStar  style={{color: 'orange'}}  /> <FaStar  style={{color: 'orange'}}  /></p>
                    <h3>UNLIMITED CHICKEN FRY</h3>
                    <p>PRICE -$53.00 $75.00</p>
                </div>

            </div>

            

        </div>
        }
        {
            show131415 &&
            <div className='SectionThreecard'>
            <div className='SectionThreecarddiv'data-aos="zoom-in"  data-aos-duration="2000"
     data-aos-easing="ease-in-sine">
            <div className='topicons'>
                    <p><FaShoppingBasket /></p>
                    <p><CiHeart /></p>
                    <p><FaEye /></p>

                </div>


                <Image
                src={food1}
                width={200}
                height={150}
                alt=''
                className='imagehover' />

                <div>
                    <p>PIZZA <FaStar style={{color: 'orange'}} /> <FaStar  style={{color: 'orange'}}  /> <FaStar  style={{color: 'orange'}}  /></p>
                    <h3>UNLIMITED CHICKEN FRY</h3>
                    <p>PRICE -$53.00 $75.00</p>
                </div>

            </div>


            <div className='SectionThreecarddiv'data-aos="fade-up" data-aos-duration="2000">

<div className='topicons'>
        <p><FaShoppingBasket /></p>
        <p><CiHeart /></p>
        <p><FaEye /></p>

    </div>


    <Image
    src={food4}
    width={200}
    height={150}
    alt=''
    className='imagehover' />

    <div>
        <p>PIZZA <FaStar style={{color: 'orange'}} /> <FaStar  style={{color: 'orange'}}  /> <FaStar  style={{color: 'orange'}}  /></p>
        <h3>UNLIMITED CHICKEN FRY</h3>
        <p>PRICE -$53.00 $75.00</p>
    </div>

            </div>

            <div className='SectionThreecarddiv'data-aos="zoom-in" data-aos-duration="2000">
            <div className='topicons'>
                    <p><FaShoppingBasket /></p>
                    <p><CiHeart /></p>
                    <p><FaEye /></p>

                </div>


                <Image
                src={food6}
                width={200}
                height={150}
                alt='' 
                className='imagehover'/>

                <div>
                    <p>PIZZA <FaStar style={{color: 'orange'}} /> <FaStar  style={{color: 'orange'}}  /> <FaStar  style={{color: 'orange'}}  /></p>
                    <h3>UNLIMITED CHICKEN FRY</h3>
                    <p>PRICE -$53.00 $75.00</p>
                </div>

            </div>

            

        </div>
        }

    </div>
  )
}

export default SectionThree