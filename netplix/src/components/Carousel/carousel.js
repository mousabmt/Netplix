import Carousel from 'react-bootstrap/Carousel';
import './carousal.scss'
export default function CarouselMovies({movieData}) {
    console.log(movieData);
  return (
    <div className='section'>
    <Carousel>
  <Carousel.Item>
              <img
                className="img"
                src={`https://image.tmdb.org/t/p/w500//8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg`}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="img"
                src={`https://image.tmdb.org/t/p/w500/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg`}
                alt="Second slide"
              />
      
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="img"
                src={`https://image.tmdb.org/t/p/w500/d07phJqCx6z5wILDYqkyraorDPi.jpg`}
                alt="Third slide"
              />
            </Carousel.Item>
     
    </Carousel>
    </div>
  );
}
