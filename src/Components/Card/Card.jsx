import React from 'react'
import './Card.css'
import dp_image from '../Assets/dp_image.jpg'
export const Card = () => {
  return (
    <div className='upc'>
        <div className='gradient'></div>
        <div className="profile-down">
            <img src={dp_image} alt="" />
            <div className='profile-title'>AADITHYA</div>
            <div className="profile-description">
                I am Aadithya. I have completed  my Bachelor's in  Computer Application in Guru Nanak College, Chennai.            
</div>
            <div className="profile-button"><a href="mailto:aadithya00018@gmail.com">contact me</a></div>
        </div>
    </div>
  )
}

