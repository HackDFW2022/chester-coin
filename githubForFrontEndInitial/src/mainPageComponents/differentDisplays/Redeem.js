import React from "react";
export default function Goals(input){
    function getGoals(goalsArray){
        if(!goalsArray || !goalsArray.length)
            return "No Goals Found"
        else{
            return goalsArray.map(goal => <div>{goal}</div>)
        }
    }
    return(
        <div>
            <div className="titleText">
                My Goals:
                {input.userinfo.cryptoaccount}
                {input.userinfo.cryptoamount}
            </div>
            <div className="contentText">
                {getGoals(input.userinfo.goals)}
            </div>
        </div>
    )
}