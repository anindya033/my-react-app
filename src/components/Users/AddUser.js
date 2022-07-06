import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [entereduserName, setEnteredUserName] = useState("");
  const [entereduserAge, setEntereduserAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();

    if (
      entereduserName.trim().length === 0 ||
      entereduserAge.trim().length === 0
    ) {
      return false;
    }

    if (+entereduserAge < 1) {
      return false;
    }
    let inputObj = new Object();
    inputObj = {
        key : new Date().getTime(),
        name : entereduserName,
        age : entereduserAge
    }
    props.onAddUser(inputObj);
    setEnteredUserName('');
    setEntereduserAge('');
  };

  const userNameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const userAgeChangeHandler = (event) => {
    setEntereduserAge(event.target.value);
  };

  return (
    <Card cssClass={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">User Name</label>
        <input type="text" onChange={userNameChangeHandler} id="username" />
        <label htmlFor="age">age</label>
        <input type="number" onChange={userAgeChangeHandler} id="age" />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
