var express = require('express');
var router = express.Router();
const UserController = require('../controller/User');
const ContactController = require('../controller/Contact');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// ---------------------------------- USER API ----------------------------------------

router.post('/user/add', UserController.AddUser);

router.get('/user/show', UserController.ShowUser);

router.patch('/user/update', UserController.UpdateUser);

router.delete('/user/delete', UserController.DeleteUser);

// ---------------------------------- CONTACT API ----------------------------------------

router.post('/contact/add', ContactController.AddContact);

router.get('/contact/show', ContactController.ShowContact);

router.patch('/contact/update/:id', ContactController.UpdateContact);

router.delete('/contact/delete', ContactController.DeleteContact);

module.exports = router;

