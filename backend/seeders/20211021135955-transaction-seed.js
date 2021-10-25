"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Transactions", [
      {
        uuid: "60e63434-4d3f-48e8-ad90-ba4dd9f48288",
        date: new Date("2021-05-01"),
        amountSold: 10,
        previousStockQuantity: 100,
        productId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        uuid: "c8752acc-5009-427c-bb44-221590d2070f",
        date: new Date("2021-05-10"),
        amountSold: 15,
        previousStockQuantity: 90,
        productId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        uuid: "5ecada96-bc75-448c-b520-0703c3a65a45",
        date: new Date("2021-05-05"),
        amountSold: 19,
        previousStockQuantity: 100,
        productId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        uuid: "410c92e9-c108-468a-9088-65c8cadcd50b",
        date: new Date("2021-05-12"),
        amountSold: 5,
        previousStockQuantity: 81,
        productId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        uuid: "496deee7-f81e-49c0-a538-c691f4d508fc",
        date: new Date("2021-05-11"),
        amountSold: 20,
        previousStockQuantity: 100,
        productId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        uuid: "ee5175ca-1a34-4c0f-a1f7-9e0beb284ffc",
        date: new Date("2021-05-11"),
        amountSold: 30,
        previousStockQuantity: 100,
        productId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        uuid: "9de06f55-6388-4318-b54b-65b446ec9737",
        date: new Date("2021-05-12"),
        amountSold: 25,
        previousStockQuantity: 100,
        productId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Transactions", null, {});
  },
};
