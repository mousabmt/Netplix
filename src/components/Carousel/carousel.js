
import './carousal.scss'
import React, { useState } from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
import axios from 'axios';
import { data } from 'autoprefixer';

export default function CarouselMovies({movie,setSearch,search , setMovies}) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchKeyPress = (e) => {
    if (e.key === 'Enter') {
      searchBar();
    }
  };
  const searchBar = async (e) => {
setSearch(false)
const fetchSearch=await axios.get(`${process.env.REACT_APP_HOST}/search/${searchQuery}`);
setMovies(fetchSearch.data.results)
console.log('SEARCH DATA',fetchSearch,data.results);
  };
  return (
    <>
    
   {
    search&&(
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
    )
   }
  {search && (
            <>
              <div className="sign">
                <h1 id="top">Most Popular</h1>
              </div>
            
            </>
          )}
            <div className="search-container">
            <input
              type="text"
              className="search-input"
              placeholder="Search..."
              autoComplete="on"
              value={searchQuery}
              onChange={handleSearchInputChange}
              onKeyPress={handleSearchKeyPress}
            />
                  <i className="fas fa-search search-icon"></i>
              </div>
    </>
  );
}
