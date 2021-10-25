const { productService } = require("../services");
const express = require("express");
const WebResponse = require("../models/webResponse");

function getProductRoutes() {
  const router = express.Router();
  router.get("/", getAll);
  router.get("/:id", getOne);
  router.post("/", create);
  router.put("/:id", update);
  router.delete("/:id", remove);
  return router;
}

async function getAll(req, res, next) {
  let response = {};
  try {
    const products = await productService.getAll();
    response = new WebResponse(200, "Ok", [...products]);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
}

async function getOne(req, res, next) {
  try {
    const id = req.params.id;
    const product = await productService.getOne(id);
    response = new WebResponse(200, "Ok", [product]);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
}

async function create(req, res, next) {
  try {
    const createdData = req.body;
    const product = await productService.create(createdData);
    response = new WebResponse(200, "Ok", [product]);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
}

async function remove(req, res, next) {
  try {
    const id = req.params.id;
    const message = await productService.remove(id);
    response = new WebResponse(200, "Ok", [message]);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
}

async function update(req, res, next) {
  let response = {};
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const product = await productService.update(updatedData, id);
    response = new WebResponse(200, "Ok", [product]);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getProductRoutes,
};
