import React, { useState, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';

const UsrInput = (props) => {

  const [descInput, setDescInput] = useState("");

  const history = useHistory();
  const back = useCallback(() => history.push('/'), [history])

  const descInputHandler = (e) => {
    setDescInput(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();

    const todoData = {
      description: descInput
    }

    props.onAddItem(todoData)
    setDescInput("");
    back();
  }

  return (
    <React.Fragment>
      <form onSubmit={submitHandler}>
        <label>
          Create new todo
        </label>
        <input type="text" onChange={descInputHandler} value={descInput}></input>
        <button>
          Submit
        </button>
      </form>
      <Link to={"/todo"}>
        <button>Back</button>
      </Link>
    </React.Fragment>


  );
}

export default UsrInput;