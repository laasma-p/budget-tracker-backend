const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  // getting all transactions
});

router.post("/", (req, res, next) => {
  // adding a transaction
});

router.get("/:id", (req, res, next) => {
  // getting a specific transaction
});

router.put("/:id", (req, res, next) => {
  // updating a transaction
});

router.delete("/:id", (req, res, next) => {
  // deleting a transaction
});

module.exports = router;
