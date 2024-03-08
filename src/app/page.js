'use client'
import React from 'react'
import SectionOne from './Components/SectionOne'
import SectionTwo from './Components/SectionTwo'
import Head from 'next/head'
import SectionThree from './Components/SectionThree'
import Sectionfour from './Components/Sectionfour'
import SectionFive from './Components/SectionFive'
import Sectionsix from './Components/Sectionsix'
import AOS from 'aos';
import 'aos/dist/aos.css';

const page = () => {
  AOS.init()
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"    crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Lilita+One&display=swap" rel="stylesheet"/>

          <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Lilita+One&display=swap" rel="stylesheet" />



  <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Lilita+One&display=swap" rel="stylesheet"/>
      </Head>
     <SectionOne />
     <SectionTwo />
     <SectionThree />
     <Sectionfour />
     <SectionFive />
     <Sectionsix />
  
    </div>
  )
}

export default page