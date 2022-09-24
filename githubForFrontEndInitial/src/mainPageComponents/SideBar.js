import React from "react";
import Tab from "./Tab";
import homeIcon from "../images/homeIcon.png"
import tradesIcon from "../images/tradesIcon.png"
import redeemIcon from "../images/redeemIcon.png"


export default function SideBar(input){
    
    return(
        <>
            <div className="sideBar">
                <div onClick={() => input.setState("Home")}>
                <Tab tabName="Home" tabIcon={homeIcon}/>
                </div>
                <div onClick={() => input.setState("Redeem")}>
                <Tab tabName="Redeem" tabIcon={redeemIcon}/>
                </div>
                <div onClick={() => input.setState("Trades")}>
                <Tab tabName="Trades" tabIcon={tradesIcon}/>
                </div>
            </div>
        </>
    )
}