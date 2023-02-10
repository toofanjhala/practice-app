import React ,{useState} from 'react';
import Form from './component/form';
import List from './component/list';

function App() {
  const [userlist,setuserlist]=useState([])

  function userHandler(value,Age,College){
    setuserlist((prevstat)=>{
      return [...prevstat,{name:value,age:Age, college:College,id:Math.random().toString()}]
    })
  }
  return (
    <React.Fragment>
      <Form onAdduser={userHandler}/>
      <List user={userlist}/>
      
    </React.Fragment>
  );
}

export default App;
