import React from "react";
import axios from 'axios';
import logo from "./logo.png";
import cheetoBag from "./cheetoBag.png";

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
        let getResponse = await api.post('/', {redeemCode: code, username:input.userinfo.cryptoaccount}, config)
        .then(Response=>Response.data)
        .catch()
        return getResponse
      }

    async function validateCode(){
        let redeemCode = document.getElementById("redeemCode").value
        let success = setTimeout(()=>postCredentials(redeemCode).value, 1000)
        if(success){
            alert("Coins may or may not have been redeemed, refresh and log in to find out!")
        }
        else{
            alert("Invalid redeem code, make sure everything was typed out correctly")
        }
    }
    return(
        <div>
            <div className="titleText">
                <b>Redeem your Chester Coins!</b>
            </div>
            <div className="titleText">
                Current Balance: {input.userinfo.cryptoamount} Chester Coins 
                <img src={logo} height={30} alt="logo" className="coin"/>
            </div>
            <div className="center">
                <input type="code" id="redeemCode" maxLength="32" autoComplete="off" />
                <button onClick={() => validateCode()}><b>Redeem!</b></button>
            </div>
            <div className="center">
                <img src={cheetoBag}/>
            </div>
            
        </div>
    )
}