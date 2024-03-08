import React from 'react'
import './SectionFive.css'
import Image from 'next/image'
import map2 from '../assets/map2.png'
import profile from '../assets/profile.png'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const SectionFive = () => {


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
  return (
    <div className='Sectionfive'>
        <div>
            <Image
            src={map2}
            width={500}
            height={450}
            alt='' />
        </div>

        <Carousel
  swipeable={true}
  draggable={true}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={4000}
  keyBoardControl={true}
  customTransition="all ease 0.5s"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["mobile"]}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>

<div className='Sectionfiveright'>

<div className='Sectionfiverightdiv'>
  <p id='customer'>Customer Feedback</p>
  <h2>WHAT  OUR CLIENT SAY</h2>
  <p id='lorem'>Lorem, ipsum dolor sit amet consectetur <br></br>adipisicing elit. Maiores odit adipisci iste <br></br>perferendis esse labore harum sint in inventore aliquam?</p>
</div>
<div>
 <Image
 src={profile}
 height={70}
 width={70} />
 <p>Anderson James</p>
 <p>Co Vision Trust</p>

</div>
</div>
<div className='Sectionfiveright'>

<div className='Sectionfiverightdiv'>
  <p id='customer'>Customer Feedback</p>
  <h2>WHAT  OUR CLIENT ARE SAYING</h2>
  <p id='lorem'>Lorem, ipsum dolor sit amet consectetur <br></br>adipisicing elit. Maiores odit adipisci iste <br></br>perferendis esse labore harum sint in inventore aliquam?</p>
</div>
<div>
 <Image
 src={map2}
 height={70}
 width={70} />
 <p>Anderson James</p>
 <p>Co Vision Trust</p>

</div>
</div>
<div className='Sectionfiveright'>

<div className='Sectionfiverightdiv'>
  <p id='customer'>Customer Feedback</p>
  <h2>WHAT  OUR CLIENT ARE SAYING</h2>
  <p id='lorem'>Lorem, ipsum dolor sit amet consectetur <br></br>adipisicing elit. Maiores odit adipisci iste <br></br>perferendis esse labore harum sint in inventore aliquam?</p>
</div>
<div>
 <Image
 src={map2}
 height={70}
 width={70} />
 <p>Anderson James</p>
 <p>Co Vision Trust</p>

</div>
</div>
  
</Carousel>;

    
    </div>
  )
}

export default SectionFive