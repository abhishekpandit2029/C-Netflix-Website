import React from "react";
import "./BottomSignUp.css"

function BottomSignUp() {
  return (
    <div>
      <div className="signup_btm">
        <p className="text_btm">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="signup_secondLine_btm">
          <input
            className="signup_input_btm"
            type="Email"
            placeholder="Email address"
          />
          <button className="signup_btn_btm">Get Started {">"} </button>
        </div>
      </div>
    </div>
  );
}

export default BottomSignUp;
