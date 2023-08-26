import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ".//modalmovies.scss";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import MovieFavCard from "../Movie/movieFav";
function MovieShowFavDetails({ show, handleClose, Movie }) {
  // functions to change the button's Color&Text when pressed On
  const [variant, setVariant] = useState("success");
  const [FavTxt, setFavTxt] = useState("Add To Favorite");
  const [render, isRender] = useState(false);
  function setTimer() {
    setVariant("success");
    setFavTxt("Add To Favorite");
  }
  const changeButton = () => {
    setVariant("danger");
    setFavTxt("Already In Favorite");
    setTimeout(setTimer, 1000);
    setTimeout(handleClose, 1200);
  };

  const obj = {
    movie_id: Movie.movie_id,
    movie_title: Movie.movie_title,
    movie_release_date: Movie.movie_release_date || "UnOffical yet",
    movie_poster_path: Movie.movie_poster_path || "UnOffical yet",
    movie_overview: Movie.movie_overview || "No overview available Yet",
    movie_popularity: Movie.movie_popularity || "Uncount Yet",
    movie_vote_count: Movie.movie_vote_count || "Uncount Yet",
  };
  // For Delete from favorite button
  const favoriteDeletion = () => {
    axios
      .delete(`${process.env.REACT_APP_HOST}/getmovies/${obj.movie_id}`, obj)
      .then((data) => {})
      .catch((err) => console.log(err));

    handleClose();

  };

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{Movie.movie_title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <article>{Movie.movie_overview}</article>
        </Modal.Body>
        <Modal.Footer className="rates">
          <p>Release Date :{Movie.movie_release_date || "UnOfficial Yet"}</p>

          <p>Votes : {Movie.movie_vote_count || "UnOfficial Yet"}</p>
          <p>Popularity : {Movie.movie_popularity || "UnOfficial Yet"}</p>
          <Modal.Footer>Your Comment : {Movie.comment}</Modal.Footer>
        </Modal.Footer>
        <Modal.Footer className="buttons">
          <Button variant="danger" onClick={favoriteDeletion}>
            Delete From Favorite
          </Button>
          <Button variant={variant} onClick={changeButton}>
            {FavTxt}
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  );
}

export default MovieShowFavDetails;
