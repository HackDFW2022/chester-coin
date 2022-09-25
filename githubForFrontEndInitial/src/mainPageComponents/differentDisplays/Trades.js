import React from "react";
export default function MyEvents(input){
    return(
        <div>
            <div className="titleText">
                Make a trade:
                <div className="contentText">
                </div>
            </div>

            <div className="prizeTable center">
                <table>
                    <tr>
                        <th>Prize</th>
                        <th>Item</th>
                        <th>Chester Coins</th>
                    </tr>
                    <tr>
                        <td>picture</td>
                        <td>iPad Mini</td>
                        <td>500</td>
                    </tr>
                    <tr>
                        <td>picture</td>
                        <td>Gaming Laptop</td>
                        <td>1000</td>
                    </tr>
                    <tr>
                        <td>picture</td>
                        <td>TV</td>
                        <td>5000</td>
                    </tr>
                </table> 
            </div>
        </div>
    )
}