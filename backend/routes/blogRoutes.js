const express = require('express');
const blog = require('../models/blog');

const router = express.Router()

router.get('/',(req,res)=>{
    res.json({msg:'GET all blogs'})
})

//Single blog
router.get ('/:id',(req,res)=>{
    res.json({msg:'GET a single blog'})
})

//POST a new blog
router.post('/',async (req,res)=>{
    const {title,body,author} = req.body
    try{
        const newBlog = await blog.create({title,body,author})
        res.status(200).json(newBlog)

    }catch(error){
     res.status(400).json({error: error.message})
    }
})

//Delete a blog
router.delete('/:id',(req,res)=>{
    res.json({msg:'DELETE a blog'})
})

//UPDATE a blog
router.patch('/:id',(req,res)=>{
    res.json({msg:'UPDATE a Blog'})
})

module.exports = router;