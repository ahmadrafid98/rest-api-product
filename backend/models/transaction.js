"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    static associate(models) {
      this.belongsTo(models.Product);
    }
  }
  Transaction.init(
    {
      id: DataTypes.UUID,
      date: DataTypes.DATE,
      amountSold: DataTypes.INTEGER,
      previousStockQuantity: DataTypes.INTEGER,
      productId: DataTypes.UUID,
    },
    {
      sequelize,
      modelName: "Transaction",
    }
  );
  return Transaction;
};
