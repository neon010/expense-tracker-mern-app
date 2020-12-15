const express = require("express");

const router = express.Router();

const {getTransaction, addTransaction, deleteTransaction} = require("../controllers/transaction");

router
  .route('/')
  .get(getTransaction);


router
  .route('/')
  .post(addTransaction);

router
  .route('/:id')
  .delete(deleteTransaction);

module.exports = router;