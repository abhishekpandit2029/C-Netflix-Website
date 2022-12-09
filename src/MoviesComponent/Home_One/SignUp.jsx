import React from 'react'
import './SignUp.css'
import KeyboardArrowRightTwoToneIcon from '@mui/icons-material/KeyboardArrowRightTwoTone';

import NavbarHome from "./NavbarHome";
 
function SignUp() {
  return (
    <div>
        <div className='bg-img'>
            <NavbarHome /> 
            <div className='signup_container'>
                <div className="signup_firstLine text-light">
                    <p className='signup_p1'>Unlimited movies, TV<br/>shows and more.</p>
                    <p className='signup_p2'>Watch anywhere. Cancel anytime.</p>
                    <p className='signup_p3'>Ready to watch? Enter your email to create or restart your membership.</p>
                </div>

                <div className="signup_secondLine text-light">
                    <input className='signup_input' type='Email' placeholder='Email address'/>
                    <button className='signup_btn'>Get Started <KeyboardArrowRightTwoToneIcon/></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp 