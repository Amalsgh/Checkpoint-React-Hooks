import React from 'react'
import './Movie.css'
import MovieCard from './MovieCard'

const MovieList = ({movies, inputSearch,inputRate}) => {
  return (
    <div className='movieList'>
      {(inputRate>0) ? movies.filter(movie => movie.title.toUpperCase().includes(inputSearch.toUpperCase().trim()) && movie.rate === (inputRate))     
        .map(movie =>( <MovieCard movie={movie} key={movie.id} />)) 
          :movies.filter(movie => movie.title.toUpperCase().includes(inputSearch.toUpperCase().trim())).map((movie)=>( <MovieCard movie={movie} key={movie.id} />))}
    </div>
  )
}

export default MovieList