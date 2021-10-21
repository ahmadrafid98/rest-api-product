"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      this.hasMany(models.Transaction);
    }
  }
  Product.init(
    {
      id: DataTypes.UUID,
      name: DataTypes.STRING,
      type: DataTypes.STRING,
      stock: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
