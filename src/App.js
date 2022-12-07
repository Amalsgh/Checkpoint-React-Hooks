import React from 'react';
import { useState } from 'react';
import './App.css';
import { moviesData } from './Components/Data';
import FilterMovie from './Components/FilterMovie';
import MovieList from './Components/MovieList';
import Navigation from './Components/Navigation';
import AddMovie from './Components/AddMovie'

function App() {
  const [movies , setMovies] = useState(moviesData)
  const add =(newMovie) => {
    setMovies ([...movies,newMovie])
  }
  const [inputSearch, setInputSearch] = useState("")
  const [inputRate, setInputRate] = useState(0)


  return (
    <div className="App">
    <Navigation/>
    <FilterMovie inputSearch={inputSearch} setInputSearch={setInputSearch} inputRate={inputRate} setInputRate={setInputRate}  />
    <MovieList movies={movies}  inputSearch ={inputSearch} inputRate={inputRate} />
    <AddMovie add={add}/>
    </div>
  );
}

export default App ;
