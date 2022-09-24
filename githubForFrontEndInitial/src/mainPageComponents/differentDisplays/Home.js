import React from "react";
export default function Home(input){
    
    return(
        <div>
            <div className="titleText">
                Welcome {input.userinfo.name}, select the tab to the left if you would like to Redeem your Chester Coins, or Trade it.
            </div>
            <div className="titleText">
                Current Balance:{input.userinfo.cryptoamount}
            </div>
            

        </div>
    )
}