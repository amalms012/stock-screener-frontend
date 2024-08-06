import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/images/qartelz-logo-2.png";
import "./Loading.css";

const Loading = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login");
    }, 10000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div>
      <div className="flex justify-center items-center h-screen gap-0">
        <img src={Logo} className="animate-bounce-custom-size h-44 w-auto" />
        <div className="">
        <div className="ml-[-50px ] loader ">
     
     </div>
 
    </div>

        
      </div> 
      <div className="flex justify-center items-center mt-[-350px]">
      

        </div>
    </div>
  );
};

export default Loading;
