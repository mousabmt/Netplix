import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ".//modalmovies.scss";
import { useState } from "react";
import axios from "axios";

function MovieShowDetails({ show, handleClose, Movie, Movies }) {
  const [comment, setComment] = useState("");
  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };
  const obj = {
    movie_id: Movie.ID,
    movie_title: Movie.Title,
    movie_release_date: Movie.Release_Date || "UnOffical yet",
    movie_poster_path: Movie.Poster_Path || "UnOffical yet",
    movie_overview: Movie.Overview!=""&&Movie.Overview || "No overview available Yet",
    movie_popularity: Movie.popularity || "Uncount Yet",
    movie_vote_count: Movie.vote_count || "No overview available Yet",
    vote_average: Movie.vote_average || "No overview available Yet",
    comment: comment || "No comment",
  };
  const [variant, setVariant] = useState("primary");
  const [FavTxt, setFavTxt] = useState("Add To Favorite");

  function setTimer() {
    setVariant("primary");
    setFavTxt("Add To Favorite");
  }

  const addToFav = async () => {
    const checking = await axios.get(
      `${process.env.REACT_APP_HOST}/getmovies/${Movie.ID}`
    );
    console.log(checking,'sdfdsfds');
    if (checking.data.length) {
      setVariant("danger");
      setFavTxt("The Movie Is Already In Favorite!");

      setTimeout(setTimer, 900);
      setTimeout(handleClose, 1000);
      return 0;
    } else {
      axios
        .post(`${process.env.REACT_APP_HOST}/addMovie`, obj)
        .then((data) => {})
        .catch((err) => console.log(err));
      setVariant("success");
      setFavTxt("Successfully Added To Favorite");

      setTimeout(setTimer, 900);
      setTimeout(closingStuff, 800);
    }
  };
  // to close after entering the comment

function closingStuff(){
  setComment('')
  handleClose()
}
  return (
    <div id={obj.movie_id}>
      <Modal show={show} onHide={closingStuff}>
        <Modal.Header closeButton>
          <Modal.Title>{Movie.Title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <article>{Movie.Overview}</article>
        </Modal.Body>
        <div className="ratesNcomments">
          <Modal.Footer className="rates">
            <Modal.Footer>
              Release Date :{Movie.Release_Date || "UnOfficial Yet"}
            </Modal.Footer>

            <Modal.Footer>
              Votes : {Movie.vote_count || "UnOfficial Yet"}
            </Modal.Footer>
            <Modal.Footer>
              Popularity : {Movie.popularity || "UnOfficial Yet"}
            </Modal.Footer>
          </Modal.Footer>
          <form>
            <div className="input-container">
              <textarea
                type="text"
                id="commentInput"
                className="input-field"
                value={comment}
                onChange={handleCommentChange}
              />
              <label htmlFor="commentInput" className="input-label">
                Your Comment
              </label>
            </div>
            <Modal.Footer className="buttons">
              <Button variant="secondary" onClick={handleClose}>
                Exit
              </Button>
              { 
                <Button variant={variant} onClick={addToFav} type="button">
                  {FavTxt}
                </Button>
              }
            </Modal.Footer>
          </form>
        </div>
      </Modal>
    </div>
  );
}
export default MovieShowDetails;
