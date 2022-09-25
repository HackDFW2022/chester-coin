import React from "react";
import logo from "./logo.png";
import ipadMini from "./ipadMini.png";
import laptop from "./laptop.png";
import tv from "./tv.jpg";

export default function MyTrades(input){
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
                        <td> <button> Buy </button> </td>
                    </tr>
                    <tr>
                        <td><img src={laptop} className="prizeImages" /></td>
                        <td>Acer Gaming Laptop</td>
                        <td>1500</td>
                        <td> <button> Buy </button> </td>
                    </tr>
                    <tr>
                        <td><img src={tv} className="prizeImages" /></td>
                        <td>60" 4K UHD TV</td>
                        <td>3000</td>
                        <td> <button> Buy </button> </td>
                    </tr>
                </table> 
            </div>
        </div>
    )
}