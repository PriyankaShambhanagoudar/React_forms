import React, { useState, useRef } from "react";

import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  const nameInpurRef = useRef();
  const ageInpurRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInpurRef.current.value;
    const enteredUserAge = ageInpurRef.current.value;

    /* trim will remove white space */
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: " Please enter a valid name & age (non-empty values).",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid age",
        message: " Please enter a valid age (> 0).",
      });
      return;
    }

    props.onAdduser(enteredName, enteredUserAge);
    nameInpurRef.current.value = '';
    ageInpurRef.current.value = '';
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          {/* htmlFor = assigning props to html attributes */}
          <label htmlFor="username"> UserName</label>
          <input id="username" type="text" ref={nameInpurRef} />
          <label htmlFor="age"> Age (Years)</label>
          <input id="age" type="number" ref={ageInpurRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};
export default AddUser;
