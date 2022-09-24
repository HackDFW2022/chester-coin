import React from "react";
import Tab from "./Tab";
import goalsIcon from "../images/goalsIcon.png"
import homeIcon from "../images/homeIcon.png"
import teamsIcon from "../images/teamsIcon.png"


export default function SideBar(input){
    
    return(
        <>
            <div className="sideBar">
                <div onClick={() => input.setState("Home")}>
                <Tab tabName="Home" tabIcon={homeIcon}/>
                </div>
                <div onClick={() => input.setState("Redeem")}>
                <Tab tabName="Redeem" tabIcon={goalsIcon}/>
                </div>
                <div onClick={() => input.setState("Trades")}>
                <Tab tabName="Trades" tabIcon={teamsIcon}/>
                </div>
            </div>
        </>
    )
}