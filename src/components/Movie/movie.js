
import "./movie.scss";
import React from "react";
export default function MovieCard({ handleShow, movieData, setMovie }) {
  const handleClick = () => {
    setMovie(movieData);
    handleShow();
  };
  return (
    <div className="movieCards " id={movieData.ID}>
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
                src={ movieData.Poster_Path&&`https://image.tmdb.org/t/p/w500/${movieData.Poster_Path}` || `https://thumbs.dreamstime.com/b/movie-icon-film-flap-sticker-dark-background-movie-icon-film-flap-sticker-dark-background-simple-vector-icon-117431578.jpg`}
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
