import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ".//modalmovies.scss";
import { useState } from "react";
import axios from "axios";
function MovieShowFavDetails({ show, handleClose, Movie }) {
  const [Read, setRead] = useState(false);
  function ShowMoreLess() {
    setRead(!Read);
  }
  const obj={
    movie_id:Movie.ID,
    movie_title:Movie.Title,
    movie_release_date:Movie.Release_Date||"UnOffical yet",
    movie_poster_path:Movie.Poster_Path||"UnOffical yet",
    movie_overview:Movie.Overview,
    movie_popularity:Movie.popularity||"Uncount Yet",
    movie_vote_count:Movie.vote_count||"No overview available Yet"
  }
  
const [variant,setVariant]=useState('success')
const [FavTxt,setFavTxt]=useState('Add To Favorite')
function setTimer(){
    setVariant('success')
    setFavTxt('Add To Favorite')
}
  // console.log("THE MOVIE",Movie);
  const changeButton = () => {
 setVariant('danger');
 setFavTxt('Already In Favorite')
 setInterval(setTimer,2400)
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
          <p>Release Date :{Movie.movie_release_date||"UnOfficial Yet"}</p>

          <p>Votes : {Movie.movie_vote_count||"UnOfficial Yet"}</p>
          <p>Popularity : {Movie.movie_popularity||"UnOfficial Yet"}</p>
        </Modal.Footer>
        <Modal.Footer className="buttons">
          <Button variant="danger" onClick={handleClose}>
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
