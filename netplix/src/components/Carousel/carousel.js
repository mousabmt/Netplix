import Carousel from 'react-bootstrap/Carousel';
import './carousal.scss'
import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
import { Fade } from 'react-bootstrap';
export default function CarouselMovies() {
  
  return (
    <div className='carsoulControl'>



  
    <MDBCarousel showControls showIndicators fade>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='https://image.tmdb.org/t/p/w500//8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg'
        alt='...'
        
      >
 
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='https://image.tmdb.org/t/p/w500/d07phJqCx6z5wILDYqkyraorDPi.jpg'
        alt='...'
        
      >
  
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://image.tmdb.org/t/p/w500/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg'
        alt='...'
      >
        
   
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={4}
        src='https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg'
        alt='...'
      >

      </MDBCarouselItem>
    </MDBCarousel>
    </div>
  );
}
