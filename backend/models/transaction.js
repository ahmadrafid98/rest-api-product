"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    static associate(models) {
      this.belongsTo(models.Product, {
        foreignKey: "productId",
        as: "product",
      });
    }

    toJSON() {
      return {
        ...this.get(),
        productId: undefined,
        id: undefined,
        createdAt: undefined,
        updatedAt: undefined,
      };
    }
  }
  Transaction.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      date: DataTypes.DATE,
      amountSold: DataTypes.INTEGER,
      previousStockQuantity: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Transaction",
    }
  );
  return Transaction;
};
