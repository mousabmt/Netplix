import React from "react";
import { useState, useEffect } from "react";
import { CardGroup } from "react-bootstrap";
import axios from "axios";
import ColorSchemesExample from "../NavBar/navbar";
import "./series.scss";
import MovieShowDetails from "../ModalMovie/modalmovie";
import MovieCard from "../Movie/movie";
import Pages from "../pages/pages";
import { Spinner } from "react-bootstrap";
import CarouselMovies from "../Carousel/carousel";
// this is the favorite page cards listing 
export default function Series(req, res) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [Series, setSeries] = useState([]);
  const [OneSeries, setOneSeries] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(500);
  const [fetch, setFetch] = useState(true)
  const [search,setSearch]=useState(true)
  const fetchData = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_HOST}/series/${page}`);
      setSeries(res.data.Trending);
      setFetch(false);
    } catch (err) {
      console.log(err);
    }
  };
  const changePage = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage);
    }
  };
  useEffect(() => {
    fetchData();
  }, [page]);
  return (
    <>
      {fetch ? (
        <div className="spinner-container">
          <Spinner animation="border" variant="secondary" />
        </div>
      ) : (
        <div>
          <ColorSchemesExample />
          <CarouselMovies movie={Series} setSearch={setSearch} search={search} setMovies={setSeries}/>
          <div className="positions">
            <CardGroup>
              {Series.length &&
                Series.map((series) => (
                  <MovieCard
                    key={series.id}
                    handleShow={handleShow}
                    movieData={series}
                    setMovie={setOneSeries}
                  />
                ))}
            </CardGroup>
          </div>
          {OneSeries && (
            <MovieShowDetails
              show={show}
              handleClose={handleClose}
              Movie={OneSeries}
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


  )
}