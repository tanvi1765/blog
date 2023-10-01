const express = require("express");
const blogRouter = require("./blog");


const router = express.Router();
router.use("/blog", blogRouter);

module.exports = router;