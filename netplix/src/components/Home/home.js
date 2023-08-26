import React from "react";

import MovieShowDetails from "../ModalMovie/modalmovie";
import { useState } from "react";
import MovieCard from "../Movie/movie";
import { Row } from "react-bootstrap";
import axios from "axios";
import { useEffect } from "react";
import { CardGroup } from "react-bootstrap";
import "./home.scss";
import CarouselMovies from "../Carousel/carousel";
import ColorSchemesExample from "../NavBar/navbar";

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
  // this is the home page cards listing
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
      <ColorSchemesExample />

      <CarouselMovies/>
<h1 className="sign">Most Popular</h1>
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
      setOneMovie &&
        <MovieShowDetails
          show={show}
          handleClose={handleClose}
          Movie={OneMovie}
        />
      }
    </div>
  );
}
