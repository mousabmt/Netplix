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
import {Spinner} from "react-bootstrap";
export default function Home() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(500);
  const [Movies, setMovies] = useState([]);
  const [OneMovie, setOneMovie] = useState([]);
  const [fetch, setFetch] = useState(true)
  const [search,setSearch]=useState(true)

  // this is the home page cards listing
  const fetchData = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_HOST}/home/${page}`);
      setMovies(res.data.Movies);
      console.log('ORIGINAL DATA',res.data.Movies);
      setFetch(false)
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
    <>
      {fetch ? (
        <div className="spinner-container">
          <Spinner animation="border" variant="secondary" />
        </div>
      ) : (
        <div>
          <ColorSchemesExample />
         <CarouselMovies movie={Movies} setSearch={setSearch} search={search} setMovies={setMovies}/>
          <div className="positions">
            <CardGroup>
              {Movies.length &&
                Movies.map((movie) => (
                  <MovieCard
                    key={movie.id}
                    handleShow={handleShow}
                    movieData={movie}
                    setMovie={setOneMovie}
                  />
                ))}
            </CardGroup>
          </div>
          {OneMovie && (
            <MovieShowDetails
              show={show}
              handleClose={handleClose}
              Movie={OneMovie}
              allMovies={Movies}
            />
          )}
          <footer>
            <Pages
              page={page}
              totalPages={totalPages}
              changePage={changePage}
            />
          </footer>
        </div>
      )}
    </>

  );
}
