import React from "react";
import MovieShowDetails from "../ModalMovie/modalFavMovie";
import { useState } from "react";
import MovieFavCard from "../Movie/movieFav";
import { Row } from "react-bootstrap";
import axios from "axios";
import { useEffect } from "react";
import { CardGroup } from "react-bootstrap";
import "./movielist.scss";
import ColorSchemesExample from "../NavBar/navbar";
// this is the favorite page cards listing 
export default function Favorite() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [Movies, setMovies] = useState([]);
  const [OneMovie, setOneMovie] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_HOST}/getmovies`);

setMovies(res.data.movie)
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (

    <div className="Row"> 
    <ColorSchemesExample/>
      <CardGroup>
        {Movies.length &&
          Movies.map((movie) => (
            <MovieFavCard
              handleShow={handleShow}
              movieData={movie}
              setMovie={setOneMovie}
            />
          ))}
      </CardGroup>
      {
        <MovieShowDetails
          show={show}
          handleClose={handleClose}
          Movie={OneMovie}
        />
      }
    </div>
  );
}
