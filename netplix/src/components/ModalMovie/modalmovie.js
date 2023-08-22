import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ".//modalmovies.scss";
import { useState } from "react";
function MovieShowDetails({ show, handleClose, Movie }) {
  const [Read, setRead] = useState(false);
  function ShowMoreLess() {
    setRead(!Read);
  }
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
          <p>Release Date :{Movie.Release_Date}</p>
          
          <p>Votes : {Movie.vote_count}</p>
          <p>Popularity : {Movie.popularity}</p>
        </Modal.Footer>
        <Modal.Footer className="buttons">
          <Button variant="secondary" onClick={handleClose}>
            Exit
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Add To Favorite
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default MovieShowDetails;
