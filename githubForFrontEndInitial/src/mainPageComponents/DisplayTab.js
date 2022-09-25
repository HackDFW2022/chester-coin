import React from "react";
import Home from "./differentDisplays/Home"
import Redeem from "./differentDisplays/Redeem"
import Trades from "./differentDisplays/Trades"


export default function DisplayTab(currTab){
    // delegate display to show
    // make css, such as the content tab's css, and css for individual tabs
    function show (currState){
        switch(currState){
            case "Home": 
                return <Home userinfo={currTab.userInfo} setUserInfo={currTab.setUserInfo}/>
            case "Redeem": 
                return <Redeem userinfo={currTab.userInfo} setUserInfo={currTab.setUserInfo}/>
            case "Trades": 
                return <Trades userinfo={currTab.userInfo} setUserInfo={currTab.setUserInfo}/>
            default: return "Error in displaying tab"
        }
    }
    return(
        <div className="mainDisplay"> 
            {show(currTab.currState)}
        </div>
    )
}