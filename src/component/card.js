import React from "react";
import "./card.css"

function Card(props){
    return(
        <div className="card">
        <div className="input">{props.children}</div>
        </div>
    )
}
export default Card;