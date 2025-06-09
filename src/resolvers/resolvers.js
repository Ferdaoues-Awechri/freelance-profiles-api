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
  
  Mutation: {
    createUser: async (_, { name, email, bio, skills, links }) =>
      await User.create({ name, email, bio, skills: skills || [], links: links || [] }),

    updateUser: async (_, { id, ...updates }) =>
      await User.findByIdAndUpdate(id, updates, { new: true }),

    deleteUser: async (_, { id }) => {
      await User.findByIdAndDelete(id);
      return true;
    },

    addSkill: async (_, { userId, skill }) =>
      await User.findByIdAndUpdate(
        userId,
        { $push: { skills: skill } },
        { new: true }
      ),

    deleteSkill: async (_, { userId, skillName }) =>
      await User.findByIdAndUpdate(
        userId,
        { $pull: { skills: { name: skillName } } },
        { new: true }
      ),

    addLink: async (_, { userId, link }) =>
      await User.findByIdAndUpdate(
        userId,
        { $push: { links: link } },
        { new: true }
      ),

    deleteLink: async (_, { userId, url }) =>
      await User.findByIdAndUpdate(
        userId,
        { $pull: { links: { url } } },
        { new: true }
      ),
  },


}