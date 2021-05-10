import React, { useState, useCallback } from 'react';

import { Link, useParams, useHistory } from 'react-router-dom'

const EditTodo = (props) => {

  const paramId = useParams()._id;

  const content = props.todoList.find(todo => {
    return todo._id === paramId;
  });

  const [descInput, setDescInput] = useState(content.description);

  const history = useHistory();
  const back = useCallback(() => history.push('/todo'), [history])

  const descInputHandler = (e) => {
    setDescInput(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();

    props.onEditTodoItem(paramId, descInput);
    setDescInput("");
    back();
  }

  return (
    <React.Fragment>
      <form onSubmit={submitHandler}>
        <label>Description: </label>
        <input type="text" value={descInput} onChange={descInputHandler} />
        <button>Edit</button>
      </form>
      <Link to={"/todo"}>
        <button>
          Back
        </button>
      </Link>
    </React.Fragment>

  );
}

export default EditTodo;