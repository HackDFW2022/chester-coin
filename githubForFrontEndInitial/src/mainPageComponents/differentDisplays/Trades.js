import React from "react";
export default function MyEvents(input){

    function printEvents(eventArray){
        return eventArray.map(({dates, eventNames}) => <tr><td>{eventNames}</td> <td>{dates}</td></tr>)
    }

    function getEvents(eventArray){
        if(!eventArray)
            return "gotta make this a form to communicate to back end"
        else {
            return (<table><tr> <th>Event Names</th> <th>Date</th> </tr> {printEvents(eventArray)}</table>)
        }
    }

    return(
        <div>
            <div className="titleText">
                Make a trade:
                <div className="contentText">
                    {getEvents(input.userinfo.events)}
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