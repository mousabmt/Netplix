import React from "react";
import MovieShowDetails from "../ModalMovie/modalmovie";
import { useState } from "react";
import MovieCard from "../Movie/movie";
import axios from "axios";
import { useEffect } from "react";
import { CardGroup } from "react-bootstrap";
import "./home.scss";
import CarouselMovies from "../Carousel/carousel";
import ColorSchemesExample from "../NavBar/navbar";
import Pages from "../pages/pages";
export default function Home() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(500);
  const [Movies, setMovies] = useState([]);
  const [OneMovie, setOneMovie] = useState([]);
  // this is the home page cards listing
  const fetchData = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_HOST}/home/${page}`);
      setMovies(res.data.Movies);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, [page]);
  const changePage = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage);
    }
  };
  return (
    <div>
      <ColorSchemesExample />

      {
        Movies.length &&
        <CarouselMovies movie={Movies} />

      }
      <h1 className="sign">Most Popular</h1>
      <div className="positions">


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

      </div>
      {
        setOneMovie &&
        <MovieShowDetails
          show={show}
          handleClose={handleClose}
          Movie={OneMovie}
          allMovies={Movies}

        />
      }
      <footer>
        <Pages page={page}
          totalPages={totalPages}
          changePage={changePage}
        />
      </footer>
    </div>
  );
}
