"use strict";

const { v4: uuidv4 } = require("uuid");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Products", [
      {
        id: "21282a9d-f5e9-4c5c-b611-1d61bac1eb4b",
        name: "Kopi",
        type: "Konsumsi",
        stock: 75,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "52dade48-f969-4081-b21a-8790cc8e40eb",
        name: "Teh",
        type: "Konsumsi",
        stock: 76,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "635cc141-22c2-49ad-8738-05240dfba514",
        name: "Pasta Gigi",
        type: "Pembersih",
        stock: 80,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "25a9b920-f2df-4911-85b7-779bda242a1b",
        name: "Sabun mandi",
        type: "Pembersih",
        stock: 70,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "d2038995-627f-4440-babd-2c9fbf4e5a5d",
        name: "Shampo",
        type: "Pembersih",
        stock: 75,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Products", null, {});
  },
};
