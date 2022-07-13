import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
function App() {
    const [enteredUserList, setUserList] =  useState([]);
    // const adduserHandler = (data)=>{
    //     console.log (data);
    //     setUserList =((prevUserList) =>{
    //         return [...prevUserList, {name :data.name, age : data.age }];
    //     });
    //     console.log (enteredUserList);
    // }
    const adduserHandler = (data) =>{
        setUserList((prevList) =>{
            return [...prevList, data]
        })
    }
  return (
    <React.Fragment>
      <AddUser onAddUser={adduserHandler}></AddUser>
      <UsersList users={enteredUserList}></UsersList>
    </React.Fragment>
  );
}

export default App;
