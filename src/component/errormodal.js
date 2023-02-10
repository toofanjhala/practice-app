import React from "react";
import ReactDom from "react-dom"
import NewCard from "./newcard";
import Button from "./button"
import "./errormodal.css"
function Errormodal(props) {


    function Backdrop(props) {
        return <div className="backdrop " onClick={props.onChange}></div>
    }

    function Overlay(props) {
        return (
            <div className="modal">
                <NewCard >
                    <header className="header ">
                        <h2>{props.title}</h2>
                    </header>
                    <div className="content">
                        <p>{props.message}</p>
                    </div>
                    <footer className="actions">
                        <Button onClick={props.onChange}> Okay</Button>
                    </footer>

                </NewCard>
            </div>
        )
    }
    return (
    <React.Fragment>
        {ReactDom.createPortal(<Backdrop onChange={props.onChange} />, document.getElementById("backdrop-root"))}
        {
            ReactDom.createPortal(<Overlay title={props.title} message={props.message} onChange={props.onChange} />,
                document.getElementById("overlay-root"))
        }
    </React.Fragment>)
}


    export default Errormodal