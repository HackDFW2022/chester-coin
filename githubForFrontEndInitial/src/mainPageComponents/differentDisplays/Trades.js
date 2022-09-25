import ipadMini from "./ipadMini.png";
import laptop from "./laptop.png";
import tv from "./tv.jpg";
import React from "react";
import logo from "./logo.png"
import axios from 'axios';
let api = axios.create({
    baseURL: "http://localhost:5000/trade",
})
  
let config = {
    headers: {
        'Content-Type': 'application/json',
    } 
}
/*
export const posttrade = asyncHandler(async (req, res) => { 
    loginMessage.findOneAndUpdate({"cryptoaccount": req.body.username}, {$inc : {'cryptoamount' : req.body.cost}}, {new:true}).exec()
})
*/
export default function MyTrades(input){
    async function buyItem(number){
        console.log(number)
        console.log(input.userinfo.cryptoamount)
        if (number>input.userinfo.cryptoamount){
            alert("Unable to afford item")
        }
        else{
            input.userinfo.cryptoamount-=number;
            
            alert("Item bought, will be sent to you");
            number *=-1
            await api.post('/', {cost: number, username:input.userinfo.cryptoaccount}, config)
        }
    }
    return(
        <div>
            <div className="titleText">
                <b>Trade for some CHEDDAR</b>
                <div className="contentText">
                </div>
            </div>
            <div className="titleText">
                Current Balance: {input.userinfo.cryptoamount} Chester Coins 
                <img src={logo} height={30} alt="logo" className="coin"/>
            </div>
            <div className="prizeTable center">
                <table>
                    <tr>
                        <th>Prize</th>
                        <th>Item</th>
                        <th>Chester Coins</th>
                        <th> Buy? </th>
                    </tr>
                    <tr>
                        <td><img src={ipadMini} className="prizeImages" /></td>
                        <td>iPad Mini</td>
                        <td>500</td>
                        <td> <button onClick={() => buyItem(500)}><b> Buy </b></button> </td>
                    </tr> 
                    <tr>
                        <td><img src={laptop} className="prizeImages" /></td>
                        <td>Acer Gaming Laptop</td>
                        <td>1000</td>
                        <td> <button onClick={() => buyItem(1000)}><b> Buy </b></button> </td>
                    </tr>
                    <tr>
                        <td><img src={tv} className="prizeImages" /></td>
                        <td>60" 4K UHD TV</td>
                        <td>5000</td>
                        <td> <button onClick={() => buyItem(5000)}><b> Buy </b></button> </td>
                    </tr>
                </table> 
            </div>
        </div>
    )
}