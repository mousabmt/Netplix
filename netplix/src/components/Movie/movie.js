import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './movie.scss'
export default function MovieCard({handleShow,movieData,setMovie}) {
 const handleClick=()=>{
    setMovie(movieData)
    handleShow();
 }
 
    return (
    <div className='movieCards'>
       <>
      {[
    
        'Light',
      ].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem' }}
          className="mb-2"
          border="dark" 
        >
<Card.Header  className='cardHeader'>ID:{movieData.movieId}</Card.Header >
<Card.Body  className='cardBody'>
          <Card.Title >{movieData.movieTitle}</Card.Title>
          <br/>
          <Card.Text className='cardTxt' >Release Date :{movieData.MoviePosterPath}</Card.Text>
        </Card.Body>
        <Card.Footer ><Button onClick={handleClick} className='cardButton'>About</Button> </Card.Footer>
        </Card>
      ))}
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

