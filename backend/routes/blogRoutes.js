const express = require('express');
const {
    createBlog,
    getBlogs,
    getBlog,
    deleteBlog,
    updateBlog


} = require('../controllers/blogController')


const router = express.Router()

router.get('/',getBlogs)

//Single blog
router.get ('/:id',getBlog)

//POST a new blog
router.post('/', createBlog)

//Delete a blog
router.delete('/:id',deleteBlog)

//UPDATE a blog
router.patch('/:id',updateBlog)

module.exports = router;