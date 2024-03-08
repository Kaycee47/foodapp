'use client'
import React from 'react'
import {useState, useEffect }from 'react'
import './FectchData.css'
import Image from "next/image";


const FectchData = () => {
    const [ourData, setOurData]= useState([])
    

    const [isLoading, setIsLoading]= useState(true)

  const url ='https://www.episodate.com/api/most-popular'

  const handlefectch = async()=>{
    try {
      const res = await fetch(url, {
        method: 'GET',
        'Content-Type':'application/json'
      })

      const data= await res.json()
      setOurData(data.tv_shows)
      setIsLoading(false)
      console.log(ourData)
    } catch (error) {
      
    }
  }

  useEffect(()=>{
    handlefectch()
  },[])

  console.log(ourData)
  return (
    <div>
    <div className='fecthdataclass'>
          {ourData.map((myNewData)=>(
              <>
                  <div>
                  <Image
                      src={myNewData.image_thumbnail_path}
                      width={200}
                      height={100} 
                      alt=''
                      className='myimage'/>

                      <p>{myNewData.name}</p>
                      <p>{myNewData.start_date}</p>
                  </div>

              </>
          ))}
      </div> 
   
        {isLoading &&(
            <div className='loaderModal'>
                <p className='loadermodalcontent'>
                    <span class="loader"></span>
                </p>

                
            </div>
        )}
    </div>
   
  )
}

export default FectchData