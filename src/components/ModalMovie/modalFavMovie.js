import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./modalmovies.scss";
import { useState } from "react";
import axios from "axios";
import Watchtrailer from "../Carousel/trailer";
function MovieShowFavDetails({ show, handleClose, Movie, setCounter, Movies, setMovies }) {
  const [isupdate, setIsUpdate] = useState(true);
  const [comment, setComment] = useState("");
  const [trailer, setTrailer] = useState(false);

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const obj = {
    movie_id: Movie.movie_id,
    movie_title: Movie.movie_title,
    movie_release_date: Movie.movie_release_date || "UnOffical yet",
    movie_poster_path: Movie.movie_poster_path || "UnOffical yet",
    movie_overview: Movie.movie_overview || "No overview available Yet",
    movie_popularity: Movie.movie_popularity || "Uncount Yet",
    movie_vote_count: Movie.movie_vote_count || "Uncount Yet",
    comment: comment || "No comment",
  };

  const favoriteDeletion = () => {

    axios
      .delete(`${process.env.REACT_APP_HOST}/getmovies/${obj.movie_id}`, obj)
      .then((data) => {
        console.log('id :', obj.movie_id, " Deleted !");
      })
      .catch((err) => console.log(err));
    const newArray = Movies.filter(movie => movie.movie_id !== obj.movie_id)
    setMovies(newArray)
    handleClose();
  };

  const updateComment = () => {
    setIsUpdate(false);
  };

  const handleCloseFun = () => {
    handleClose();
    setComment('');
    setIsUpdate(true);
    setTrailer(false)
  };

  const favCommentEdit = () => {
    axios
      .put(`${process.env.REACT_APP_HOST}/getmovies/${obj.movie_id}`, obj)
      .then((data) => { setCounter(prev => prev + 1); })
      .catch((err) => console.log(err));

    setIsUpdate(true);
  };
  const handleShowTrailer = () => {
    console.log('entered Show trailer '+Movie.movie_title);
    setTrailer(true)
  }
  return (
    <div id={obj.movie_id}>
      <Modal show={show} onHide={handleCloseFun}>
        <Modal.Header closeButton>
          <Modal.Title>{Movie.movie_title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <article>{Movie.movie_overview}</article>
        </Modal.Body>

        <Modal.Footer className="rates">
          <p>Release Date: {Movie.movie_release_date || "UnOfficial Yet"}</p>
          <p>Votes: {Movie.movie_vote_count || "UnOfficial Yet"}</p>
          <p>Popularity: {Movie.movie_popularity || "UnOfficial Yet"}</p>
        </Modal.Footer>

        {isupdate && (
          <Modal.Footer className="rates">Your Comment: {Movie.comment}</Modal.Footer>
        )}
        {!isupdate && (
          <form>
            <div className="input-container">
              <input
                type="text"
                id="commentInput"
                className="input-field"
                value={comment}
                onChange={handleCommentChange}
              />
              <label htmlFor="commentInput" className="input-label">
                Edit Comment
              </label>
            </div>
          </form>
        )}

        <Modal.Footer className="ButtonsFun">
          {isupdate ? (
            <Button className="UpdateBtn" onClick={updateComment} block>
              Update Comment
            </Button>
          ) : (
            <Button className="UpdateBtn" onClick={favCommentEdit} block>
              Save Changes
            </Button>
          )}
        </Modal.Footer>

        <Modal.Footer className="buttons">
          <Button variant="danger" onClick={favoriteDeletion} style={{ width: '50%' }}>
            Delete From Favorite
          </Button>

          <Button
            variant="primary"
            onClick={handleShowTrailer}
            style={{ width: '50%' }}
          >
            Watch Trailer
          </Button>
          {
            trailer && <Watchtrailer linkProvied={Movie.Title} />
          }
        </Modal.Footer>
      </Modal>
    </div>


  );
}

export default MovieShowFavDetails;
