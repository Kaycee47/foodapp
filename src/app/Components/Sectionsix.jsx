import React from 'react'
import './Sectionsix.css'
import Image from 'next/image'
import profile from '../assets/profile.png'
import blog_04 from '../assets/blog_04.jpg'

const Sectionsix = () => {
  return (
    <div className='sectionsix'>
        <div className='sectionsixleft'>
        <div className='button1'>
                <button>BURGER</button>
                <p>02 January 2021</p>
                </div>

            <div className='leftone'>
            <div className='burger'>
            <h3>Best Burger and Pizza <br /> In Your ...</h3>
            <div className='burgerlorem'>
            <p>Rorem ipsum dolor sit amet,<br /> consectetur eye adipisicing elit,  sed do <br /> eiusmagna aliqua. enim <br /> ad minim veniam, quis nostrud</p><br />

            <hr style={{width: '80%', top: '0'}}></hr>
            </div>
          
            </div>
            

            <Image
            src={blog_04}
            height={230}
            width={250}
            alt='' />

            </div>
           
            

            <div className='secsiximg'>
            <Image
            src={profile}
            alt=''
            height={40}
            width={40} 
            />

            <p>RASALINA WIL.</p>

            </div>
        </div>

          <div className='sectionsixright'>
          <div className='button1'>
                  <button>BURGER</button>
                  <p>02 January 2021</p>
                  </div>

                  <div className='leftone'>
              <div className='burger'>
              <h3>Best Burger and Pizza <br /> In Your ...</h3>
              <div className='burgerlorem'>
              <p>Rorem ipsum dolor sit amet,<br /> consectetur eye adipisicing elit,  sed do <br /> eiusmagna aliqua. enim <br /> ad minim veniam, quis nostrud</p><br />

              <hr style={{width: '80%'}}></hr>
              </div>
            
              </div>

              <Image
              src={blog_04}
              height={230}
              width={250}
              alt='' />

              </div>

            
            
            <div className='secsiximg'>
            <Image
            src={profile}
            alt=''
            height={40}
            width={40}
            />

            <p>RASALINA WIL.</p>

            </div>

          </div>
    </div>
  )
}

export default Sectionsix