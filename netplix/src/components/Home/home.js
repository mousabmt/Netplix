import React from "react";

import MovieShowDetails from "../ModalMovie/modalmovie";
import { useState } from "react";
import MovieCard from "../Movie/movie";
import { Row } from "react-bootstrap";
import axios from "axios";
import { useEffect } from "react";
import { CardGroup } from "react-bootstrap";
import "./home.scss";
export default function Home() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // console.log(process.env.REACT_APP_HOST);
  // axios.get(`${process.env.REACT_APP_HOST}`).then((data)=>{
  // console.log(data.data.Movies);
  // })

  const [Movies, setMovies] = useState([]);
  const [OneMovie, setOneMovie] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_HOST}/`);
      setMovies(res.data.Movies);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <CardGroup>
        {Movies.length &&
          Movies.map((movie) => (
            <MovieCard
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
