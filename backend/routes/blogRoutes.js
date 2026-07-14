const express = require('express');
const {
    createBlog,
    getBlogs,
    getBlog


} = require('../controllers/blogController')


const router = express.Router()

router.get('/',getBlogs)

//Single blog
router.get ('/:id',getBlog)

//POST a new blog
router.post('/', createBlog)

//Delete a blog
router.delete('/:id',(req,res)=>{
    res.json({msg:'DELETE a blog'})
})

//UPDATE a blog
router.patch('/:id',(req,res)=>{
    res.json({msg:'UPDATE a Blog'})
})

module.exports = router;