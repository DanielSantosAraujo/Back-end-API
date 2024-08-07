const express = require('express');
const router = express.Router();
const usersMiddleware = require("../middlewares/users-middlewares")
const userController = require('../controllers/users-controller');

router.post(
    "/user",
    usersMiddleware.insertUserMiddleware,
    userController.createUser
);

router.get("/user/:id",
usersMiddleware.middlewareGetUserById,
userController.getUserById);

router.delete("/user/:id",
usersMiddleware.middlewareDeleteUser,
userController.deleteUser);


module.exports = router;