const mongoose = require("mongoose");

const imagesSchema = new mongoose.Schema(
    {
        images_name: {
            type: String,
            trim: true,
        },
        images_description: {
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

const images = mongoose.model("images", imagesSchema);
module.exports = images;