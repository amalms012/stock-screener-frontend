import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Logo from '../../assets/images/qartelz-logo-2.png'
import "./LoginPage.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();

    console.log(`Username: ${username}, Password: ${password}`);

    setUsername("");
    setPassword("");
  };

  return (
    <div className="login-container">
        
      <form className="px-10  shad" onSubmit={handleLogin}>

        <img className=" mt-[-50px] w-64 " src={Logo}/>
        <div className="input-group px-4 ">
          <FontAwesomeIcon className="text-black" icon={faUser} />
          <input
            className="text-black input-field   "
            type="text"
            placeholder="Username / Email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-group px-4 ">
          <FontAwesomeIcon className="text-black" icon={faLock} />

          <input
            className="text-black input-field"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="flex mt-3 justify-center mx-24 h-8 rounded-3xl gap-1 but items-center  ">
          <button  type="submit">Login</button>

          <FontAwesomeIcon className='mt-[3px]' icon={faAngleRight} />
        </div>
      <Link className="text-indigo-400 font-bold mt-10" to="/">Forgot Password?</Link>
        <p className="mt-2" >Don't have an account? <Link className="text-yellow-600 font-bold" to="/signup">Sign Up</Link></p>
      </form>

     
    </div>
  );
};

export default LoginPage;
