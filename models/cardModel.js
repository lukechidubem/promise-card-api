const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please tell us your name!'],
    },
    email: {
      type: String,
    },

    cardItems: {
      type: Array,
      require: true,
    },

    color: String,
  },
  {
    timestamps: true,
  }
);

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;
