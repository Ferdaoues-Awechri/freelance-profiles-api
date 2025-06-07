const User = require('../models/User');

module.exports = {
  Query: {
    getUser: async (_, { id }) => await User.findById(id),
    listUsers: async () => await User.find()
  },


}