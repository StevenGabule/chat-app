"use strict";

const models = require("../../models");
const User = models.User;
const Chat = models.Chat;
const ChatUser = models.ChatUser;
const Message = models.Message;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    const users = await User.findAll({ limit: 2 });
    const chat = await Chat.create();

    await ChatUser.bulkCreate([
      {
        chatId: 19,
        userId: users[0].id,
      },
      {
        chatId: 19,
        userId: users[1].id,
      },
    ]);

    await Message.bulkCreate([
      {
        message: "awesome here!",
        chatId: 19,
        fromUserId: users[0].id,
      },
      {
        message: "awesome here 2!",
        chatId: 19,
        fromUserId: users[1].id,
      },
      {
        message: "awesome here! 3",
        chatId: 19,
        fromUserId: users[1].id,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
