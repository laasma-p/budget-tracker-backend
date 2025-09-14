const express = require("express");

const router = express.Router();

router.get("/:id", (req, res, next) => {
  // getting an user
});

router.put("/:id", (req, res, next) => {
  // updating an user
});

router.delete("/:id", (req, res, next) => {
  // deleting an user
});

module.exports = router;
