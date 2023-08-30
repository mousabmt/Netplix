import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./movie.scss";
import React from "react";
export default function MovieCard({ handleShow, movieData, setMovie }) {
  const handleClick = () => {
    setMovie(movieData);
    handleShow();
    console.log(setMovie.length)
  };

  return (
    <div className="movieCards " key={movieData.ID}>
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
                src={`https://image.tmdb.org/t/p/w500/${movieData.Poster_Path}`}
              />
              <div className="overlay">
                <p>Rate : {Math.round(movieData.vote_average * 10) / 10}</p>
              </div>
            </a>
          </tbody>
          <tfoot>
            <tr>
              <td className="Title">
                <div className="movie-title">{movieData.Title}</div>
              </td>
            </tr>
          </tfoot>
        </table>
      </>
    </div>
  );
}
