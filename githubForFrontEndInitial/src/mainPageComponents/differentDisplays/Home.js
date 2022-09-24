import React from "react";
import Chester from "./chesterShrug.png"

export default function Home(input){
    
    return(
        <div>
            <div className="titleText">
                <b>Welcome, {input.userinfo.name}</b>
            </div>
            <div className="titleText">
                Current Balance: {input.userinfo.cryptoamount} Chester Coins 
                <img src="logo.png" height={30} alt="logo" className="coin"/>
            </div>
            <div className="mascot">
                <img src={Chester} />
            </div>
        </div>
    )
}