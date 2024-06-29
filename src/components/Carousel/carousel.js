
import './carousal.scss'
import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

export default function CarouselMovies({movie}) {
  return (
    <div className="carouselControl">
    <MDBCarousel showControls showIndicators fade>
      {movie.slice(1, 10).map((movie, i) => (
        <MDBCarouselItem
          key={i}
          className="w-100 d-block"
          itemId={i + 1}
          src={`https://image.tmdb.org/t/p/w500/${movie.Poster_Path}`}
          alt="..."
        />
      ))}
    </MDBCarousel>
  </div>
  );
}
