const Card = require('../models/cardModel');
const User = require('../models/userModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');

// Creat card
exports.createCard = catchAsync(async (req, res) => {
  const { email, name, color, cardItems } = req.body;

  const infoExist = await User.findOne({ email: email });

  if (infoExist) {
    const newCard = await Card.create({
      cardItems: [...cardItems],
      color,
      name,
      email: infoExist.email,
    });

    return res.status(200).json({ card: newCard });
  }

  const newCard = await Card.create({
    cardItems: [...cardItems],
    color,
    name,
    email,
  });

  await User.create({
    name,
    email,
  });

  res.status(200).json({ card: newCard });
});

// find  card
exports.findCard = catchAsync(async (req, res, next) => {
  const { cardId } = req.params;

  const card = await Card.findById(cardId);

  if (!card) return next(new AppError('Card does not exist', 401));

  res.status(200).json(card);
});
