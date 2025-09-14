const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  // getting all budgets
});

router.post("/", (req, res, next) => {
  // adding a budget
});

router.get("/:id", (req, res, next) => {
  // getting a specific budget
});

router.put("/:id", (req, res, next) => {
  // updating a budget
});

router.delete("/:id", (req, res, next) => {
  // deleting a budget
});

module.exports = router;
