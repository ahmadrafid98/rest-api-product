const { Product } = require("../models");

const getOne = (id) => {
  return Product.findOne({ where: { uuid: id } });
};

const getAll = () => {
  return Product.findAll();
};

const update = async (updatedData, id) => {
  const { name, type, stock } = updatedData;

  const product = await Product.findOne({ where: { uuid: id } });
  product.name = name;
  product.type = type;
  product.stock = stock;
  await product.save();

  return product;
};

const create = async (createdData) => {
  const { name, type, stock } = createdData;

  return Product.create({
    name,
    type,
    stock,
  });
};

const remove = async (id) => {
  const product = await Product.findOne({ where: { uuid: id } });
  await product.destroy();

  return { message: "product deleted!" };
};

const productService = { getOne, getAll, update, remove, create };

module.exports = productService;
