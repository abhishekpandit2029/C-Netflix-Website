import React from 'react';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './MoviesComponent/Home_One/Home'
import SignIn from './MoviesComponent/Home_One/SignIn';
import SignUp from './MoviesComponent/Home_One/SignUp';

const App = () => {
  return(
    <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/signIn' element={<SignIn/>}/>
                <Route path='/signUp' element={<SignUp/>}/>
            </Routes>
    </BrowserRouter>
  )
}

export default App 
