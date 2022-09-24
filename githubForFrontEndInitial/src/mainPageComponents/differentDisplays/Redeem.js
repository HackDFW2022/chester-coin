import React from "react";
import axios from 'axios';

let api = axios.create({
    baseURL: "http://localhost:5000/redeem",
  })
  
  let config = {
      headers: {
         'Content-Type': 'application/json',
      } 
  }
export default function Redeem(input){
    async function postCredentials(code){
        // let getResponse = setTimeout(()=>api.post('/', {redeemCode: code, username:input.userinfo.cryptoaccount}, config), 1000)
        let getResponse = await api.post('/', {redeemCode: code, username:input.userinfo.cryptoaccount}, config)
        .then(Response=>Response.data)
        .catch()
        //(console.log("Error, no backend server response, either backend not turned on or connection bad for some reason"))
        return getResponse
      }

    async function validateCode(){
        let redeemCode = document.getElementById("redeemCode").value
        console.log(redeemCode)
        // let success = await(postCredentials(redeemCode).value)
        // let success = setTimeout(()=>postCredentials(redeemCode).value, 1000)
        let success = await(postCredentials(redeemCode).value)
        console.log("Success: ")
        console.log(success)
        if(success){
            alert("Successfully redeemed")
        }
        else{
            alert("Invalid redeem code, make sure everything was typed out correctly")
        }
    }
    return(
        <div>
            <div className="titleText">
                Type In your Redeem Code, then hit redeem:
            </div>
            <input type="username" id="redeemCode" maxLength="32" autoComplete="off" />
            <button onClick={() => validateCode()}>Click to send Code</button>
        </div>
    )
}