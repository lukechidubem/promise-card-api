const catchAsync = require('./../utils/catchAsync');
const User = require('../models/userModel');

exports.userInfo = catchAsync(async (req, res, next) => {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
  });

  res.status(200).json({ user: newUser });
});

exports.findUserInfo = catchAsync(async (req, res) => {
  const { userId } = req.params;

  const user = await User.findById(userId);

  if (!user) return next(new AppError('user does not exist', 401));

  res.status(200).json(user);
});
