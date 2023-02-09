import React from "react";
import NewCard from "./newcard";
import Button from "./button"
import "./errormodal.css"
function Errormodal(props){
    return(
        <div className="backdrop " onClick={props.onChange}>
        <div className="modal">
        <NewCard >
        <header className="header "> 
        <h2>{props.title}</h2>
        </header>
        <div className="content">
        <p>{props.message}</p>
        </div>
        <footer className="actions">
            <Button  onClick={props.onChange}> Okay</Button>
        </footer>

        </NewCard>
        </div>
        </div>
    )
}

export default Errormodal