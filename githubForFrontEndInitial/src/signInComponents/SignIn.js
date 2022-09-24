import React from "react";
import axios from 'axios';

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
        <div className="signInPage">
            <div>Enter UserName: </div>
            <input type="username" id="username" maxLength="32" autoComplete="off">                
            </input>
            <div>Enter Password: </div>
            <input type="password" id="password" maxLength="32" autoComplete="off">                
            </input>
            <br />
            <button onClick={() => validateSignIn()}>Click to sign in</button>
        </div>
    )
}