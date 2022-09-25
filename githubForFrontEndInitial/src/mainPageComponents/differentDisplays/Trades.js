import React from "react";
import logo from "./logo.png"

export default function MyTrades(input){
    return(
        <div>
            <div className="titleText">
                <u> <b>Trade for Some CHEDDAR</b> </u>
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
                        <td>picture</td>
                        <td>iPad Mini</td>
                        <td>500</td>
                        <td> <button> Buy </button> </td>
                    </tr>
                    <tr>
                        <td>picture</td>
                        <td>Gaming Laptop</td>
                        <td>1000</td>
                        <td> <button> Buy </button> </td>
                    </tr>
                    <tr>
                        <td>picture</td>
                        <td>TV</td>
                        <td>5000</td>
                        <td> <button> Buy </button> </td>
                    </tr>
                </table> 
            </div>
        </div>
    )
}