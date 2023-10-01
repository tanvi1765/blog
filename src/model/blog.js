const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
    {
        blog_name: {
            type: String,
            trim: true,
        },
        blog_description: {
            type: String,
            trim: true,
        },
        is_active: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const blog = mongoose.model("blog", blogSchema);
module.exports = blog;