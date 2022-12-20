import React from 'react'
import { Route, Routes} from 'react-router-dom';

import Eror from './Pages/Eror';
import Moremovies from './Pages/Moremovies';
import App from './App';
import Navigation from './Components/Navigation';
import AboutUs from './Pages/AboutUs';



const Movieapp = () => {
    
return (
    <div>
        <Navigation/>
        <Routes>
            <Route exact path='/' element={<App/>}/>
            <Route exact path='/moremovies' element={<Moremovies/>}/>
            <Route exact path='/*' element={<Eror/>}/>
            <Route  path='/AboutUs' element = {<AboutUs/>}/>
        </Routes>
    </div>
)
}

export default Movieapp