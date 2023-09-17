import React, {useEffect} from 'react'
import video from '../../assets/video.mp4'
import aeroplane from '../../assets/plane1.png'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
//UseEffect to set animation duration
useEffect(()=>{
  Aos.init({duration:2000})
}, [])

  return (
    <div className='home flex container'>
      <div className="mainText">
        <h1 data-aos='fade-up' data-aos-duration='2500'>Create Ever-lasting memories with Us</h1>
      </div>

      <div data-aos='fade-down' data-aos-duration='2500' className="homeImages flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop className='video'></video>
          
        </div>
        <img src={aeroplane} className='plane' />
       
      </div>
    </div>
  )
}

export default Home
