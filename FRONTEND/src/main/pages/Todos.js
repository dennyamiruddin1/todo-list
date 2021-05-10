import React from 'react';
import { Link } from 'react-router-dom';

import TodoItemList from '../component/TodoItemList'

const Todos = (props) => {

  const removeItemHandler = (id) => {
    props.onRemoveTodoItem(id);
  }

  return (
    <React.Fragment>
      <Link to={"/create"}>
        <button>Create new task</button>
      </Link>
      <TodoItemList
        items={props.todoList}
        onRemove={removeItemHandler}
      />
    </React.Fragment>
  );
}

export default Todos;