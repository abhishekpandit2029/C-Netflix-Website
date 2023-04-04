import React from 'react';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';

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
