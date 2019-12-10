import React from 'react';
import {
  Link
} from "react-router-dom";

function Login() {
    return (
      <>
        <div className="Login">Login</div>
        <Link to="/register">Register</Link>
      </>
      
    );
}

export default Login;