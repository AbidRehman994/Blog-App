const express = require('express');
const {
    createBlog,
    getBlogs,
    getBlog,
    deleteBlog,
    updateBlog


} = require('../controllers/blogController')

const requireAuth = require("../middleware/requireAuth");

const router = express.Router()

router.get('/',getBlogs)

//Single blog
router.get ('/:id',getBlog)

//POST a new blog
router.post('/', requireAuth, createBlog)

//Delete a blog
router.delete('/:id',requireAuth, deleteBlog)

//UPDATE a blog
// router.patch('/:id',updateBlog)

module.exports = router;