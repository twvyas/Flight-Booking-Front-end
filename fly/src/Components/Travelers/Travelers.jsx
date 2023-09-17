import React, {useEffect} from 'react'

//imported destination images
import paris from '../../assets/paris.jpg'
import dubai from '../../assets/dubai.jpg'
import newYork from '../../assets/newYork.jpg'

//imported travelers image
import traveler1 from '../../assets/traveler1.png'
import traveler4 from '../../assets/traveler4.png'
import traveler3 from '../../assets/traveler3.png'

import Aos from 'aos'
import 'aos/dist/aos.css'

//high order array method called Map to display all the data
const  travelers=[
  {
    id:1,
    destinationImage:paris,
    travelerImage:traveler1,
    travelerName:'Mr. Gomez'
    
  },
  {
  id:2,
  destinationImage:dubai,
  travelerImage:traveler4,
  travelerName:'Louis'
  
},
{
  id:3,
  destinationImage:newYork,
  travelerImage:traveler3,
  travelerName:'Flints'
  
}
]

const Travelers = () => {

//UseEffect to set animation duration
useEffect(()=>{
  Aos.init({duration:2000})
}, [])


  return (
    <div className='travelers container section'>
      <div className="sectionContainer">'
      <h2 data-aos='fade-down' data-aos-duration='2500'>Top travelers of this month!</h2>
      
      <div className="travelersContainer grid">

        {
          travelers.map(({id,destinationImage,travelerImage,travelerName})=>{
            return(
               // {/*Single Passenger card*/}
              <div data-aos='fade-up' data-aos-duration='2500' key={id}  className="singleTraveler">
              <img src={destinationImage} className="destinationImage" />
    
              <div className="travelDetails">
                <div className="travelPicture">
                  <img src={travelerImage} className="travelerImage" />
                </div>
                <div className="travelerName">
                  <span>{travelerName}</span>
                </div>
              </div>
    
            </div>
            )
          })
        }


     
      </div>
    </div> 
  </div>
  )
}

export default Travelers
