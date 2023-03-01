const express = require('express');
const userController = require('./../controllers/userController');
const cardController = require('./../controllers/cardController');

const router = express.Router();

router.post('/', userController.userInfo);
router.get('/find/:userId', userController.findUserInfo);

router.post('/create-card', cardController.createCard);
router.get('/get-card/:cardId', cardController.findCard);

module.exports = router;
