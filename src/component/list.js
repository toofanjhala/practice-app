import React from "react";
import NewCard from "./newcard";
import "./newcard.css"
function List(props) {
 
  return (
    
    
    <NewCard>
    <ul className="users">
      {props.user.map((item) =>
        <li className="users"
        key={item.id}>
          {item.name}  ({item.age}years old )  college name is {item.college}
        </li>)}
    </ul>
  </NewCard>
  )

}
export default List