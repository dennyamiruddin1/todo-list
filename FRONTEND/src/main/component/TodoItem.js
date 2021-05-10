import React from 'react';

const TodoItem = (props) => {
  return (
    <li>
      {props.desc}
    </li>
  );
}

export default TodoItem;