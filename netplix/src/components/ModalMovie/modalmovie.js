import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './/modalmovies.scss'

function MovieShowDetails({show,handleClose,Movie}) {
  return (
    <div>
    <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>{Movie.movieTitle}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
         
          <p>{Movie.movieOverview}</p>
        </Modal.Body>
<Modal.Footer>
  
</Modal.Footer>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Exit</Button>
          <Button variant="primary" onClick={handleClose}>Add To Favorite</Button>
        </Modal.Footer>
      </Modal>
  </div>
  );
}

export default MovieShowDetails;