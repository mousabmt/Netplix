import React from "react";
import MovieShowFavDetails from "../ModalMovie/modalFavMovie";
import { useState, useEffect } from "react";
import MovieFavCard from "../Movie/movieFav";
import { Row, CardGroup } from "react-bootstrap";
import axios from "axios";
import ColorSchemesExample from "../NavBar/navbar";
import "./movielist.scss";
import { Spinner } from "react-bootstrap";
// this is the favorite page cards listing 
export default function Favorite() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [Movies, setMovies] = useState([]);
  const [OneMovie, setOneMovie] = useState([]);
  const [count, setCounter] = useState(0)
  const [fetch, setFetch] = useState(true)

  const fetchData = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_HOST}/getmovies`);
      setMovies(res.data.movie);
      console.log(Movies);
      setFetch(false)
    } catch (err) {
      console.log(err);

    }
  };

  console.log(count);
  useEffect(() => {
    fetchData();
  }, [count]);

  return (<>
    <ColorSchemesExample />
    {fetch ? (
      <div className="spinner-container">
        <Spinner animation="border" variant="secondary" />
      </div>
    ) : Movies.length === 0 ? (
      <div className="Empty">
        <i className="fas fa-film"></i>
        <p>You Don't Have Any Movie/Series Added Yet!</p>
      </div>
    ) : (
      <div className="positions">
        <CardGroup>
          {Movies.map((movie) => (
            <MovieFavCard
              key={movie.id}
              handleShow={handleShow}
              movieData={movie}
              setMovie={setOneMovie}
            />
          ))}
        </CardGroup>
        {Movies && (
          <MovieShowFavDetails
            show={show}
            handleClose={handleClose}
            Movie={OneMovie}
            setCounter={setCounter}
            Movies={Movies}
            setMovies={setMovies}
          />
        )}
      </div>
    )}


  </>

  );
}
