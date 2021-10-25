const { productTransactionService } = require("../services");
const WebResponse = require("../models/webResponse");

const express = require("express");
const e = require("express");

function getProductTransactionRoutes() {
  const router = express.Router();
  router.get("/", getAll);
  router.get("/:id", getOne);
  router.post("/", create);
  router.put("/:id", update);
  router.delete("/:id", remove);
  return router;
}

async function getOne(req, res, next) {
  try {
    const id = req.params.id;

    const productTransaction = await productTransactionService.getOne(id);

    const response = new WebResponse(200, "Ok", [productTransaction]);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
}

async function getAll(req, res, next) {
  try {
    const startDate = req.query.start || "";
    const endDate = req.query.end || "";
    const sort = req.query.sort || "";

    let productTransactions = {};

    if (startDate !== "" && endDate !== "" && sort !== "") {
      productTransactions =
        await productTransactionService.getAllByDateRangeSorted(
          startDate,
          endDate,
          sort
        );
    } else {
      productTransactions = await productTransactionService.getAll();
    }

    const response = new WebResponse(200, "Ok", [...productTransactions]);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
}

async function update(req, res, next) {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const transaction = await productTransactionService.update(updatedData, id);

    const response = new WebResponse(200, "Ok", [transaction]);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
}

async function create(req, res, next) {
  try {
    const createdData = req.body;
    const transaction = await productTransactionService.create(createdData);

    const response = new WebResponse(200, "Ok", [transaction]);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
}

async function remove(req, res, next) {
  try {
    const id = req.params.id;
    const message = await productTransactionService.remove(id);

    const response = new WebResponse(200, "Ok", [message]);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getProductTransactionRoutes,
};
