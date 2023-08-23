import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ".//modalmovies.scss";
import { useState } from "react";
import axios from "axios";

function MovieShowDetails({ show, handleClose, Movie }) {
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

  // console.log("THE MOVIE",Movie);
  const [variant,setVariant]=useState('primary')
const [FavTxt,setFavTxt]=useState('Add To Favorite')
  function setTimer(){
    setVariant('primary')
    setFavTxt('Add To Favorite')
}
  const addToFav = () => {
    axios
      .post(`${process.env.REACT_APP_HOST}/addMovie`, obj).then((data) => {
   
      })
      .catch((err) => console.log(err));

      setVariant('success');
      setFavTxt('Successfully Added To Favorite')
      setInterval(setTimer,2400)
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{Movie.Title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <article>{Movie.Overview}</article>
        </Modal.Body>
        <Modal.Footer className="rates">
          <p>Release Date :{Movie.Release_Date||"UnOfficial Yet"}</p>

          <p>Votes : {Movie.vote_count||"UnOfficial Yet"}</p>
          <p>Popularity : {Movie.popularity||"UnOfficial Yet"}</p>
        </Modal.Footer>
        <Modal.Footer className="buttons">
          <Button variant="secondary" onClick={handleClose}>
            Exit
          </Button>
          <Button variant={variant} onClick={addToFav}>
           {FavTxt}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default MovieShowDetails;