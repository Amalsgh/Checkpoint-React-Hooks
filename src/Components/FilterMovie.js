import React from 'react'
import { Form } from 'react-bootstrap'
import ReactStars from 'react-stars'


const FilterMovie = ({inputSearch, setInputSearch,inputRate,setInputRate}) => {
  return (
    <div>
      <Form.Control type="Search" placeholder="Movie's Title" 
      onChange ={(e)=> setInputSearch(e.target.value)}
      /> 
      <ReactStars className='stars'
        count={5}
        onChange={setInputRate}
        size={24}
        color2={'#ffd700'} />
      
    </div>
  )
}

export default FilterMovie