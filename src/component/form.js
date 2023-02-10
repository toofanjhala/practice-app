import React, { useState ,useRef } from "react";
import "./card.css"
import Card from "./card";
import Button from "./button";
import Errormodal from "./errormodal";
import Wrapper from "./helper/wrapper";


function Form(props) {
    const [error,seterror]=useState()
   const nameref=useRef()
   const ageref=useRef()
   const collegeref=useRef()

    function inputHandler(event) {
        event.preventDefault();
        const name=nameref.current.value
        const age=ageref.current.value
        const college=collegeref.current.value
        
       
        if(name.trim().length ===0 || age.trim().length===0){
           seterror({title:"INPUT FIELD IS EMPTY", message:" Invalid input !! please fill up all input fields "})
            return
        }if(+age<1){
            seterror({title:"AGE IS INCORRECT", message:" invalid age input , please enter AGE correctly "})
            return
        }
          props.onAdduser(name,age,college)
         
          nameref.current.value=""
          ageref.current.value=""
          collegeref.current.value=""
        }
       
    
   

    function errorHandler(){
        seterror(null)
    }

    return (
        <Wrapper>
         {error && <Errormodal title={error.title} message={error.message} onChange={errorHandler}></Errormodal>}
        <Card>
            <form onSubmit={inputHandler}>
                <label htmlFor="text" >ADD USERNAME</label>
                <input type="text" id="text" className="input"  ref={nameref}></input>
                <label htmlFor="number" >AGE(YEAR)</label>
                <input type="number" id="number" className="input"  ref={ageref}></input>
                <label htmlFor="college" >ADD College Name</label>
                <input type="text" id="college" className="input"  ref={collegeref}></input>
                <Button type="submit">Add User</Button>

            </form>
        </Card>
        </Wrapper>
    )
}

export default Form