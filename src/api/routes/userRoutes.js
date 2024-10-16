// userRoutes.js

const express = require('express');
const userRoutes = express.Router();
const userController = require('../controllers/userController');
const  checkPermission = require('../middlewares/checkPermison');


//get all user
userRoutes.get('/all', userController.getAllUser);

userRoutes.get('/', userController.getUserByToken);
//get by id user
userRoutes.get('/:id',  userController.getUserById);

//update user by id
userRoutes.put('/:id', checkPermission,  userController.updateUserById);
//delete user by id
userRoutes.delete('/:id', checkPermission,  userController.deleteUserById);

module.exports = userRoutes;
