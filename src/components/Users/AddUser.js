import React from "react";
import Card from "../UI/Card";
import classes from './AddUser.module.css';

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Card cssClass = {classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">User Name</label>
        <input type={Text} id="username" />
        <label htmlFor="age">age</label>
        <input type={Number} id="age" />
        <input type={"submit"} value="Add User" />
      </form>
    </Card>
  );
};

export default AddUser;
