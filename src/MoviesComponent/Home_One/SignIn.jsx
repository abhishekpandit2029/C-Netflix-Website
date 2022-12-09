import React from 'react'
import './SignIn.css'
import netflix_PNG from '../All_Images/netflix_PNG.png';
import { Link } from 'react-router-dom';

<Link to='/signIn' class="btn navbtn">Sign IN</Link>

function SignIn() {
  return (
    <div>
        <div className='bg-img'>
            <Link to='/'>
                <img src={netflix_PNG} alt='nlogo' className='signinlogo'/>
            </Link>
            <form className='container'>
                <h1 className='text-light'>Sign In</h1><br></br>
                <input className='signininput' type='text' placeholder='Email or phone number' required/>
                <input className='signininput' type='password' placeholder='Password' required/>
                <input type="button" className='signinbtn' value='Sign In'/>
                
                <div className="firstLine">
                    <div><input value="true" type="checkbox"/><label className='text-light firstLineL'>Remember me</label></div>                   
                    <a href="https://www.w3.org/Provider/Style/dummy.html" className='text-light firstLineA'>Need Help ?</a>
                </div>

                <div className="fcbk">
                    <a href="https://www.w3.org/Provider/Style/dummy.html"><img src="https://i.ibb.co/LrVMXNR/social-fb.png" alt="Facebook"/></a>
                    <p className='text-light'>Login with Facebook</p>
                </div>

                <div className="signup">
                    <p className='text-light'>New to Netflix ?</p>
                    <Link to='/signUp'>
                        <a href="https://www.w3.org/Provider/Style/dummy.html" className='text-light signupa'>Sign up now</a>
                    </Link>
                </div>

                <div className="more">
                    <p className='text-light'>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="https://www.w3.org/Provider/Style/dummy.html" className='morea'>Learn more.</a> </p>
                </div>
            </form>
        </div>
    </div>
  ) 
}

export default SignIn 