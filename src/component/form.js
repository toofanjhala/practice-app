import React, { useState } from "react";
import "./card.css"
import Card from "./card";
import Button from "./button";
import Errormodal from "./errormodal";

//import List from "./list";
function Form(props) {
    const [error,seterror]=useState()
    const [value, setvalue] = useState("")
    const [age, setage] = useState("")

    function inputHandler(event) {
        event.preventDefault();
        
       
        if(value.trim().length ===0 || age.trim().length===0){
           seterror({title:"INPUT FIELD IS EMPTY", message:" Invalid input !! please fill up all input fields "})
            return
        }if(+age<1){
            seterror({title:"AGE IS INCORRECT", message:" invalid age input , please enter AGE correctly "})
            return
        }
          props.onAdduser(value,age)
         
          setvalue("")
          setage("")
        }
       
    
    
    function inputtexthandler(event) {
        setvalue(event.target.value)
    }
    function inputnumberhandler(event) {
        setage(event.target.value)
    }

    function errorHandler(){
        seterror(null)
    }

    return (
        <div>
         {error && <Errormodal title={error.title} message={error.message} onChange={errorHandler}></Errormodal>}
        <Card>
            <form onSubmit={inputHandler}>
                <label htmlFor="text" >ADD USERNAME</label>
                <input type="text" id="text" className="input" onChange={inputtexthandler} value={value}></input>
                <label htmlFor="number" >AGE(YEAR)</label>
                <input type="number" id="number" className="input" onChange={inputnumberhandler} value={age}></input>
                <Button type="submit">Add User</Button>

            </form>
        </Card>
        </div>
    )
}

export default Form