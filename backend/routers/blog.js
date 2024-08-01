import express from "express";
import { Blogs, validationBlog } from "../schema/blogSchema.js";
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const { limit = 3 } = req.query;
        const { skip = 1 } = req.query;

        const blogs = await Blogs.find()
            .select("-password")
            .limit(limit)
            .skip((skip - 1) * limit);
        if (!blogs.length) {
            return res.status(400).json({
                msg: "Blog is not defined",
                variant: "warning",
                payload: null,
            });
        }
        const total = await Blogs.countDocuments();
        res.status(200).json({
            msg: "All blogs",
            variant: "success",
            payload: blogs,
            total,
        });
    } catch {
        res.status(500).json({
            msg: "Server error",
            variant: "error",
            payload: null,
        });
    }
});

router.post("/", async (req, res) => {
    try {
        let { error } = validationBlog(req.body);

        if (error) {
            return res.status(400).json({
                msg: error.details[0].message,
                variant: "error",
                payload: null,
            });
        }

        const existBlog = await Blogs.exists({ username: req.body.username });
        if (existBlog) {
            return res.status(400).json({
                msg: "Foydalanuvchi oldin yaratilgan",
                variant: "warning",
                payload: null,
            });
        }
        const blog = await Blogs.create(req.body);

        res.status(201).json({
            msg: "Blog is created",
            variant: "success",
            payload: blog,
        });
    } catch {
        res.status(500).json({
            msg: "Server error",
            variant: "error",
            payload: null,
        });
    }
});
router.delete("/:id", async (req, res) => {
    try {
        let { id } = req.params;
        await Blogs.findByIdAndDelete(id);
        res.status(200).json({
            msg: "Blog is deleted",
            variant: "success",
            payload: null,
        });
    } catch {
        res.status(500).json({
            msg: "Server error",
            variant: "error",
            payload: null,
        });
    }
});
router.put("/:id", async (req, res) => {
    try {
        let { id } = req.params;
        await Blogs.findByIdAndUpdate(id, req.body);
        res.status(200).json({
            msg: "Blog is updated",
            variant: "success",
            payload: null,
        });
    } catch {
        res.status(500).json({
            msg: "Server error",
            variant: "error",
            payload: null,
        });
    }
});

export default router;
