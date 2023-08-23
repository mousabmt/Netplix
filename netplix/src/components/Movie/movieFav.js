import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./movie.scss";
export default function MovieFavCard({ handleShow, movieData, setMovie}) {
  const handleClick = () => {
    setMovie(movieData);
    handleShow();
  };

  return (
    <div className="movieCards" key={movieData.movie_id}>
  <>
        {/* {["Light"].map((variant) => (
          <Card
            bg={variant.toLowerCase()}
            key={movieData.ID}
            text={variant.toLowerCase() === "light" ? "dark" : "white"}
            style={{ width: "18rem" }}
            className="mb-2"
            border="dark"
          >
            <Card.Header className="cardHeader">ID:{movieData.ID} </Card.Header>
            <Card.Text>Title :{movieData.Title||"UnOfficial Yet"}</Card.Text>
            <Card.Body className="cardBody">
              <img src={`https://image.tmdb.org/t/p/w500/${movieData.Poster_Path}`} />
              <Card.Text className="cardTxt">
              
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button onClick={handleClick} className="cardButton">
                Description
              </Button>
  
            </Card.Footer>
          </Card>
        ))} */}
        <table className="card">
          <span>


          <thead>
            <tr>
              <td className="Id">ID: {movieData.movie_id}</td>
            </tr>
      
          </thead>
          </span>
          <tbody className="card-image">
            <a onClick={handleClick}>

            <img
              src={`https://image.tmdb.org/t/p/w500/${movieData.movie_poster_path}`}
              />
              </a>
          </tbody>
          <tfoot>
            <tr>
            
            </tr>
          </tfoot>
        </table>
      </>
      {/* <Card border="dark" style={{width: '18rem'}} className='card'>
        <Card.Header  className='cardHeader'>Header</Card.Header >
        <Card.Body>
          <Card.Title  className='cardTitle'>{movieData.movieTitle}</Card.Title>
          <Card.Text  className='cardTxt'>Release Date :{movieData.MoviePosterPath}</Card.Text>
        </Card.Body>
        <Card.Footer ><Button onClick={handleShow} className='cardButton'>About</Button> </Card.Footer>
      </Card>
      <br /> */}
    </div>
  );
}
