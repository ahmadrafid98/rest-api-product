const express = require("express");
const WebResponse = require("../models/webResponse");
const { productTransactionService } = require("../services");

function getProductTypeRoutes() {
  const router = express.Router();
  router.get("/", getAll);
  return router;
}

async function getAll(req, res, next) {
  let response = {};
  try {
    const startDate = req.query.start || "";
    const endDate = req.query.end || "";
    const sort = req.query.sort || "";

    const productTypes =
      await productTransactionService.getAllByDateRangeSorted(
        startDate,
        endDate,
        sort
      );
    response = new WebResponse(200, "Ok", [...productTypes]);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getProductTypeRoutes,
};
