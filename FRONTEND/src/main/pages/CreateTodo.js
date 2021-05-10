import React from 'react';

import UsrInput from '../component/UsrInput'

const CreateTodo = (props) => {

  const addItemHandler = (item) => {
    props.onAddTodoItem(item)
  }

  return (
    <UsrInput onAddItem={addItemHandler} />
  );
}

export default CreateTodo;