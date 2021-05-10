import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Todos from './main/pages/Todos'
import CreateTodo from './main/pages/CreateTodo'
import EditTodo from './main/pages/EditTodo'

import './App.css';

function App() {

  const [todoList, setTodoList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch('http://localhost:5000/todo');
      const responseData = await response.json();
      setTodoList(responseData.todos);
    };
    fetchTodos();
  }, [loading]);

  const addTodoItemHandler = async (newTodoItem) => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:5000/todo', {
        method: 'POST',
        body: JSON.stringify(newTodoItem),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        setLoading(false);
      }

    } catch (err) {
      alert(err.message || 'Something went right!')
    }
  }

  const editTodoItemHandler = async (_id, edittedContent) => {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:5000/todo/${_id}`, {
        method: 'PATCH',
        body: JSON.stringify({ description: edittedContent }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        setLoading(false)
      }

    } catch (err) {
      alert(err.message || 'Something went right!')
    }
  }

  const removeTodoItemHandler = async (_id) => {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:5000/todo/${_id}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        setLoading(false);
      }

    } catch (err) {
      alert(err.message || 'Something went right!')
    }
  }

  return (
    <Router>
      {loading && <h3>Loading ... </h3>}
      {!loading &&
        <main>
          <Switch>
            <Route path="/todo" exact>
              <Todos
                todoList={todoList}
                onRemoveTodoItem={removeTodoItemHandler}
              />
            </Route>
            <Route path="/create" exact>
              <CreateTodo
                todoList={todoList}
                onAddTodoItem={addTodoItemHandler}
              />
            </Route>
            <Route path="/edit/:_id" exact>
              <EditTodo
                todoList={todoList}
                onEditTodoItem={editTodoItemHandler}
              />
            </Route>
            <Redirect to="/todo" />
          </Switch>
        </main>
      }

    </Router>
  );
}

export default App;
