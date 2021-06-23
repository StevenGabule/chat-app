"use strict";

const { appUrl, appPort } = require("../config/app");

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    static associate(models) {
      this.belongsTo(models.Chat, { foreignKey: "chatId" });
    }
  }
  Message.init(
    {
      type: DataTypes.STRING,
      message: {
        type: DataTypes.TEXT,
        get() {
          const type = this.getDataValue("type");
          const id = this.getDataValue("chatId");
          const content = this.getDataValue("message");
          return type === "text"
            ? content
            : `${appUrl}:${appPort}/chat/${id}/${content}`;
        },
      },
      chatId: DataTypes.INTEGER,
      fromUserId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Message",
    }
  );
  return Message;
};
