var express = require('express');
var router = express.Router();
var User = require('../models/User');
var Todo = require('../models/Todo');

const isAuth = (req, res, next) => {
  if (!req.isAuthenticated()) {
    res.redirect('/login')
  } else {
    next();
  }
};

/* GET home page. */
router.get('/', isAuth, async (req, res, next) => {
  const todos = await Todo.findAll({ where: { userId: req.user.id }});
  res.render('index', { user: { name: req.user.name }, todos });
});

router.post('/', async (req, res, next) => {
  const todoNb = await Todo.count();
  await Todo.create({ id: `${todoNb}`, userId: req.user.id, description: req.body.todo, checked: false });
  res.redirect('/')
});

router.get('/toggle/:id', async (req, res, next) => {
  const todo = await Todo.findByPk(req.params.id);
  if (todo) {
    await todo.update({ checked: !todo.checked });
  }
  res.redirect('/')
});

router.get('/delete/:id', async (req, res, next) => {
  await Todo.destroy({ where: { id: req.params.id}});
  res.redirect('/')
});

module.exports = router;
