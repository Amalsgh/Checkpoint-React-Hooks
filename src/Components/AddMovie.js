import React, { useState } from 'react'
import { Button, Form, Modal,  } from 'react-bootstrap'

const AddMovie = ({add}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rate, setRate] = useState(1);
  const [posterUrl, setPosterUrl] = useState("");

  const HandleTitle = (e) => {
    setTitle (e.target.value)
  }
  const HandleDescription = (e) => {
    setDescription (e.target.value)
  }
  const HandleRate = (e) => {
    setRate (e.target.value)
  }
  const HandlePosterUrl = (e) => {
    setPosterUrl (e.target.value)
  }
  const HandleAdd = () => {
    let newMovie ={title,description,rate,posterUrl}
    add (newMovie)
  }


  return (
    <div>
      <Button className='bouton' variant="primary" onClick={handleShow}>
        Add Movie
      </Button>
      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <p>Title</p>
      <Form.Control type="text" placeholder="Title" onChange={(e)=> HandleTitle(e)} />
      <p>Rate</p>
      <Form.Control type="number" placeholder="Rate" onChange={(e)=> HandleRate(e)} />
      <p>Description</p>
      <Form.Control type="text" placeholder="Description" onChange={(e)=> HandleDescription(e)} />
      <p>PosterUrl</p>
      <Form.Control type="url" placeholder="PosterUrl" onChange={(e)=> HandlePosterUrl(e)} />
        
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>HandleAdd()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddMovie