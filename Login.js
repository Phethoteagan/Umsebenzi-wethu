import React from "react";
import Logo from './logo.jpg';
import fingerPrint from './FPrint.jpg';

const Login = () => {
   
    return (
        <div className="login">
             
          <h1 className="head">Login</h1>

          <div className="umseLogo">
          <img src={Logo}/>
          </div>

          <form className="form">
          <p>Email:<br/>
           <input className="email"
            type="email"
            required
          /></p>
         <p>Password:<br/> 
         <input className="password"
            type="password"
            required
          /></p>
        </form>

        <div className="loginPop"> Login </div>
          <img src ={fingerPrint} className="popup"/>
        
        
        <p>Dont have an account? Click <a href="./Signin">Here</a> </p>

        </div>
        
    );
}
export default Login;
