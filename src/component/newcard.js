import React from "react";
import "./newcard.css"

function NewCard(props){
    return(
        <div className="cards" >
        <div className="users">{props.children}</div>
        
        </div>
    )
}
export default NewCard;