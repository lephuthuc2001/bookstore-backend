var express = require("express");
var router = express.Router();

const bookRouter = require("./book.api.js");

/* GET home page. */
router.use("/books", bookRouter);

module.exports = router;
