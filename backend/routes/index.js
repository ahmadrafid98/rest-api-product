const express = require("express");
const { getProductRoutes } = require("./product");
const { getProductTransactionRoutes } = require("./productTransaction");
const { getProductTypeRoutes } = require("./productType");

const getRoutes = () => {
  const routes = express.Router();

  routes.use("/product-transactions", getProductTransactionRoutes());
  routes.use("/products", getProductRoutes());
  routes.use("/product-types", getProductTypeRoutes());
  return routes;
};

module.exports = getRoutes;
