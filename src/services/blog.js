const { blog } = require("../models");

const createrBlog = async (reqBody) => {
    return blog.create(reqBody);
};
const blogList = async (req, res) => {
    return blog.find();
};
const deleteRecode = async (blogId) => {
    return blog.findByIdAndDelete(blogId);
};
const updateRecode = async (blogId, updateBody) => {
    return blog.findByIdAndUpdate(blogId, { $set: updateBody });
};
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