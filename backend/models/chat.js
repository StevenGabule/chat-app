'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Chat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User, ChatUser, Message}) {
      // define association here
      this.belongsToMany(User, {through: 'ChatUser', foreignKey: 'chatId'});
      this.hasMany(ChatUser, {foreignKey: 'chatId'})
      this.hasMany(Message, {foreignKey: 'chatId'})
    }
  };
  Chat.init({
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Chat',
  });
  return Chat;
};
