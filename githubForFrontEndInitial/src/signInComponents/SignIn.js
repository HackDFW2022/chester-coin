import React from "react";
import axios from 'axios';
import steps from "../images/homePageSteps.png";
import signIn from "../images/signInBox.png";
import signUp from "../images/signUpBox.png";

let api = axios.create({
  baseURL: "http://localhost:5000/validateSignIn",
})

let config = {
    headers: {
       'Content-Type': 'application/json',
    } 
}

export default function TopBar(input){

    async function postCredentials(un, pw){
        let getResponse = await api.post('/', {username: un, password: pw}, config)
        .then(Response=>Response.data)
        .catch()
        //(console.log("Error, no backend server response, either backend not turned on or connection bad for some reason"))
        return getResponse
      }

    async function validateSignIn(){
        let user = document.getElementById("username").value
        let success = await(postCredentials(user, document.getElementById("password").value))
        if(success){
            input.setUserInfo({"username":user})
            return input.setSignedIn(true);
        }
        else{
            console.log("invalid login attempt")
        }
    }
    return(
        <div>
            <div className="center titleText"><b>Chester Portal</b></div>
            <div className="signInPage float-parent center">
                <div className="float-child centerText">
                    <b>Chester Rewards</b>
                    <br />
                    To become a Chester rewards member and start collecting Chester Coins, create or login to your 
                    account! You'll earn coins every time you make a Cheetos purchase - your 
                    coins can be saved up or redeemed for Chester approved prizes!
                </div>
                <div className="float-child centerText">
                    <div>Enter Username:</div>
                    <input type="username" id="username" maxLength="32" autoComplete="off" />
                    <div>Enter Password: </div>
                    <input type="password" id="password" maxLength="32" autoComplete="off" />                
                    <br />
                    <button> <img src={signIn} onClick={() => validateSignIn()}/></button>
                    <br />
                    <button> <img src={signUp}/></button>
                </div>
            </div>
            <div>
                <img src={steps} className="center picture"/>
            </div>
        </div>
    )
}