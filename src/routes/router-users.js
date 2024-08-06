const express = require('express');
const router = express.Router();
const usersMiddleware = require("../middlewares/users-middlewares")
const userController = require('../controllers/users-controller');

router.post(
    "/user",
    usersMiddleware.insertUserMiddleware,
    userController.createUser
);


module.exports = router;