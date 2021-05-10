import React from 'react';
import { Link } from 'react-router-dom'

import TodoItem from './TodoItem'

const TodoItemList = (props) => {

  const removeHandler = (e) => {
    props.onRemove(e.target.value);
  }

  return (
    <ul>
      {props.items.map(todo =>
        <React.Fragment key={todo._id}>
          <TodoItem
            desc={todo.description}
          />
          <Link to={`/edit/${todo._id}`}><button>Edit</button></Link>
          <button onClick={removeHandler} value={todo._id}>Remove</button>
        </React.Fragment>
      )
      }
    </ul >
  )
}

export default TodoItemList;