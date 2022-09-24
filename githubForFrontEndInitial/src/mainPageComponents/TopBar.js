import React from "react";
import logo from "../images/chesterCheetoFullLogo.png"
export default function TopBar(){
    return(
        <div className="bar">
            <img src={logo} className="barImage" alt="logo" height={100}/>
        </div>
    )
}