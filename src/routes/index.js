const express = require('express');
const router = express.Router();

const TodoList = require('../models/TodoList')

const todo = new TodoList();

// all todos
router.get('/', todo.index)
router.post('/create', todo.create)
router.put('/update/:id', todo.update)
router.get('/:id', todo.findOne)
router.delete('/delete/:id', todo.delete)

module.exports = router