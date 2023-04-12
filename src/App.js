import React from 'react';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/FirstPage/SignUp';
import SignUpSec from './Components/SignUp/SecondPage/SignUpSec';
import SignUpThrd from './Components/SignUp/ThirdPage/SignUpThrd';
import SignUpFrth from './Components/SignUp/ForthPage/SignUpFrth';

const App = () => {
  return(
    <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/signIn' element={<SignIn/>}/>
                <Route path='/signUp' element={<SignUp/>}/>
                <Route path='/signUpSec' element={<SignUpSec/>}/>
                <Route path='/signUpThrd' element={<SignUpThrd/>}/>
                <Route path='/signUpFrth' element={<SignUpFrth/>}/>
            </Routes>
    </BrowserRouter>
  )
}

export default App 
