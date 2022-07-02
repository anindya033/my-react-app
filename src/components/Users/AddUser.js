import React from "react";

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={addUserHandler}>
      <label htmlFor="username">User Name</label>
      <input type={Text} id="username" />
      <label htmlFor="age">age</label>
      <input type={Number} id="age" />
      <input type={"submit"} value="Add User" />
    </form>
  );
};

export default AddUser;
