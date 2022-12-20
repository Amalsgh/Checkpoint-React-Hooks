import React from 'react'
import './Movie.css'

import { Button, Card } from 'react-bootstrap'
import ReactStars from 'react-stars'

const MovieCard = ({movie}) => {
  return (
    <div>
      <Card border="dark" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movie.posterUrl} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>
          <ReactStars
          count={5}
          value={movie.rate}
          size={24}
          color2={'#ffd700'} />
          </Card.Text>
          <div className='btn'>
            <Button variant="dark"><a href={movie.trailer} target={"blank"}>Watch Trailer</a></Button>
            <Button  variant="dark"><a href={movie.description}>Description</a></Button>
          </div>
          
        </Card.Body>
      </Card>
    </div>
  )
}

export default MovieCard