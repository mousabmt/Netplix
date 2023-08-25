import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./movie.scss";
import { useEffect, useState } from "react";
import MovieShowFavDetails from "../ModalMovie/modalFavMovie";
export default function MovieFavCard({
  handleShow,
  movieData,
  setMovie,
}) {

  // const [render,setRender]=useState()
  const handleClick = () => {
    setMovie(movieData);
    handleShow();
  };

 

  return (
    <div className="movieCards" key={movieData.movie_id}>
      <>
        <table className="custom-carousel cardsMovies">
          <span>
            <thead>
              <tr></tr>
            </thead>
          </span>
          <tbody className="movie-card ">
            <a onClick={handleClick} className="image-container">
              <img
                src={`https://image.tmdb.org/t/p/w500/${movieData.movie_poster_path}`}
              />
              <div className="overlay">
                <p>Rate : {movieData.vote_average}</p>
              </div>
            </a>
          </tbody>
          <tfoot>
            <tr>
              <td className="Title">
                <div className="movie-title">{movieData.movie_title}</div>
              </td>
            </tr>
          </tfoot>
        </table>
      </>
    
  
    </div>
  );
}
