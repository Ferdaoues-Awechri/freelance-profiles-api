const User = require('../models/User');

module.exports = {
  Query: {
    getUser: async (_, { id }) => await User.findById(id),
    listUsers: async () => await User.find(),
    searchUsersBySkill: async (_, { skillName }) =>
      await User.find({ 'skills.name': skillName }),
    getUserByName: async (_, { name }) =>
      await User.findOne({ name: { $regex: name, $options: 'i' } }),
  },


}