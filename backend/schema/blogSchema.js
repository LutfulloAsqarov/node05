import Joi from "joi";
import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true,
    },
    lname: {
        type: String,
        default: "",
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        default: "",
    },
    url: {
        type: String,
        default: "",
    },
    gender: {
        type: String,
        required: true,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    budget: {
        type: Number,
        required: true,
    },
});
export const Blogs = mongoose.model("blog", blogSchema);

export const validationBlog = (body) => {
    let schema = Joi.object({
        fname: Joi.string().required(),
        lname: Joi.string().allow(""),
        username: Joi.string().required(),
        password: Joi.string().required().min(6).max(32),
        age: Joi.number().allow(""),
        url: Joi.string().allow(""),
        gender: Joi.string().required(),
        isActive: Joi.boolean().allow(""),
        budget: Joi.number().required(),
    });
    return schema.validate(body);
};
