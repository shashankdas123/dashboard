import React from "react";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Homepage = () => {
    const navigate = useNavigate();
    const [cookies, removeCookie] = useCookies([]);
    const [username, setUsername] = useState("");
    useEffect(() => {
      const verifyCookie = async () => {
          
  
        if (!cookies.token) {
  
          navigate("/");
        }
        else{}
        const { data } = await axios.post(
          "https://zerodha-backend-hxlx.onrender.com",
          {},
          { withCredentials: true }
        );
        const { status, user } = data;
        setUsername(user);
        
        return status
          ? toast(`Hello  ${user}....  .For Logout please Scroll down `, {
              position: "top-right",
            })
          : (removeCookie("token"), navigate("/login"));
      };
      verifyCookie();
    }, [cookies, navigate, removeCookie]);
  
  
    const Logout = () => {
      removeCookie("token");
      navigate("/signup");
    };
    
  
  
  return (
    <>
    
    <div >
        
        
        <TopBar name={username}/>
        <Dashboard />
        {/* <button style={{position:"relative",left:"40%"}} onClick={Logout}>LOGOUT</button> */}
        
        
        
      </div>
      <button type="button" class="btn btn-secondary btn-lg btn-block" style={{position:"relative",left:"50%",width:"20vw"

      }} onClick={Logout}>LOGOUT</button>
      <ToastContainer />
      




    </>
  );
};

export default Homepage;




// const Homepage = () => {

//   return (
//     <>
    
//     </>
//   );
// };

// export default Homepage;