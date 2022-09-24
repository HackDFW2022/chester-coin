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
        </div>
    )
}