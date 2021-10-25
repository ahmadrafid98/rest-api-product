const { Product, Transaction, Sequelize, sequelize } = require("../models");

const getAll = () => {
  return Transaction.findAll({ include: "product" });
};

const getOne = (id) => {
  return Transaction.findOne({
    include: "product",
    where: {
      uuid: id,
    },
  });
};

const getAllByProductName = (name) => {
  return Transaction.findAll({
    include: "product",
    where: {
      "$product.name$": {
        [Sequelize.Op.like]: `%${name}%`,
      },
    },
  });
};

const getAllByDate = (date) => {
  return Transaction.findAll({
    include: "product",
    where: {
      date: {
        [Sequelize.Op.eq]: new Date(date),
      },
    },
  });
};

const getAllByDateRangeSorted = (startDate, endDate, sort) => {
  return sequelize.query(
    `select p.type, sum(t.amountSold) as totalSold from Products as p INNER JOIN Transactions as t ON p.id = t.productId where t.date BETWEEN '${startDate}' AND '${endDate}' group by p.type order by totalSold ${sort}`,
    {
      type: Sequelize.QueryTypes.SELECT,
    }
  );
};

const update = async (updatedData, id) => {
  const { date, amountSold, previousStockQuantity, productId } = updatedData;
  const product = await Product.findOne({ where: { uuid: productId } });
  const transaction = await Transaction.findOne({ where: { uuid: id } });

  transaction.productId = product.id;
  transaction.date = date;
  transaction.amountSold = amountSold;
  transaction.previousStockQuantity = previousStockQuantity;
  await transaction.save();

  return transaction;
};

const create = async (createdData) => {
  const { productId, date, amountSold } = createdData;
  const product = await Product.findOne({ where: { uuid: productId } });

  if (product.stock < amountSold) {
    throw new Error("product stock not enough");
  }
  const prevStock = product.stock;
  product.stock = product.stock - amountSold;
  await product.save();

  return Transaction.create({
    productId: product.id,
    date: date,
    amountSold: amountSold,
    previousStockQuantity: prevStock,
  });
};

const remove = async (id) => {
  const transaction = await Transaction.findOne({ where: { uuid: id } });
  await transaction.destroy();

  return { message: "transaction deleted!" };
};

const productTransactionService = {
  getOne,
  getAll,
  getAllByDate,
  getAllByProductName,
  getAllByDateRangeSorted,
  remove,
  update,
  create,
};

module.exports = productTransactionService;
