const { blog } = require("../model");
/* create blog */
const createrBlog = async (reqBody) => {
    return blog.create(reqBody);
};
/* create  blog list */
const blogList = async (req, res) => {
    return blog.find();
};
/* delete recode */
const deleteRecode = async (blogId) => {
    return blog.findByIdAndDelete(blogId);
};
/* update recode*/
const updateRecode = async (blogId, updateBody) => {
    return blog.findByIdAndUpdate(blogId, { $set: updateBody });
};
/*  get blog by id*/
const getBlogById = async (blogId) => {
    return blog.findById(blogId);
};
module.exports = {
    createrBlog,
    blogList,
    deleteRecode,
    updateRecode,
    getBlogById
};