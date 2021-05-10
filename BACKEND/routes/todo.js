const express = require('express');
const { json } = require('body-parser');
const router = express.Router();
const Todo = require('../models/Todo');


//GET ALL THE TODO
router.get('/', async (req, res) => {
  try {
    const todoList = await Todo.find();
    res.json({ todos: todoList })
  } catch (err) {
    res.json({ message: err })
  }
});

//SUBMIT A TODO
router.post('/', async (req, res) => {
  const todo = new Todo({
    description: req.body.description
  });

  try {
    const saveTodo = await todo.save()
    res.json({ todo: saveTodo });
  } catch (err) {
    res.json({ message: err });
  }
})

//GET SPECIFIC TODO
router.get('/:tid', async (req, res) => {
  try {
    const getTid = await Todo.findById(req.params.tid);
    res.json(getTid)
  } catch (err) {
    res.json({ message: err })
  }
})

//DELETE SPECIFIC TODO
router.delete('/:tid', async (req, res) => {
  try {
    const deleteTodo = await Todo.deleteOne({ _id: req.params.tid });
    res.json({ todo: deleteTodo })
  } catch (err) {
    json.res({ message: err })
  }
})

//UPDATE A TODO
router.patch('/:tid', async (req, res) => {
  try {
    const updateTodo = await Todo.updateOne(
      { _id: req.params.tid },
      { $set: { description: req.body.description } })
    res.json({ todo: updateTodo });
  } catch (err) {
    res.json({ message: err });
  }
})

module.exports = router;