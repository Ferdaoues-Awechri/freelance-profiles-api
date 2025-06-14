const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  bio: { type: String },
  skills: [
    {
      name: { type: String, required: true },
      level: { type: String },
    },
  ],
  links: [
    {
      type: { type: String, required: true },
      url: { type: String, required: true },
    },
  ],
});

module.exports = mongoose.model('User', userSchema);