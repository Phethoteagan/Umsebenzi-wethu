
import { useState } from "react";
import Logo from './logo.jpg';

const Signin= () => {
    const [reg, setReg] = useState ('');

    const success = () =>{
        setReg('You have successfully registered');
    }

   
    return (
        <div className="sigin">
             
          <h1 className="head">Signin</h1>

            <div className="umseLogo">
            <img src={Logo}/>
            </div>
         
          <form className="form">
          <p>Email: <br/> <input className="email"
            type="email"
          /></p>
         <p>Password: <br/> <input className="password"
            type="password"
          /></p>
           <p>Confirm Password: <br/> <input className="cPassword"
            type="password"
          /></p>
        </form>

        <button onClick={success} className="button">Register</button>

        <div className="feedback">
            {reg}
        </div>
        </div>
        
    );
}
export default Signin;