const express = require("express");
const { blogValidation } = require("../validations");
const { blogController } = require("../controllers");
const validate = require("../middlewares/validate");


const router = express.Router();

/*creat route */
router.post(
    "/create-blog",
    validate(blogValidation.createrBlog),
    blogController.createrBlog
);

/*list route */
router.get(
    "list",
    blogController.blogList
);

/*update route */
router.put(
    "update-blog:blogId",
    blogController.updateRecode
);

/*delete route */
router.delete(
    "/delete-blog:blogId",
    blogController.deleteRecode
);


module.exports = router;