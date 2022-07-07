import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
    const [entereduserName, setEnteredUserName] = useState("");
    const [entereduserAge, setEntereduserAge] = useState("");
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();

        if (
            entereduserName.trim().length === 0 ||
            entereduserAge.trim().length === 0
        ) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).',
            });
            return false;
        }

        if (+entereduserAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0).',
            });
            return false;
        }
        let inputObj = new Object();
        inputObj = {
            key: new Date().getTime(),
            name: entereduserName,
            age: entereduserAge
        };
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

    const confirmHandler = ()=>{
        setError(null);
    };

    return (
        <div>
            {error && (
                <ErrorModal
                    title={error.title}
                    message={error.message}
                    onConfirm = {confirmHandler}
                />
            )}
            <Card cssClass={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">User Name</label>
                    <input
                        type="text"
                        value={entereduserName}
                        onChange={userNameChangeHandler}
                        id="username" />

                    <label htmlFor="age">age</label>
                    <input
                        type="number"
                        value={entereduserAge}
                        onChange={userAgeChangeHandler}
                        id="age" />

                    <Button
                        type="submit">
                        Add User
                    </Button>
                </form>
            </Card>
        </div>
    );
};

export default AddUser;
