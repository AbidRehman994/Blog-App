const express = require('express');

const router = express.Router()

router.get('/',(req,res)=>{
    req.json({msg:'GET all blogs'})
})

//Single blog
router.get('/:id',(req,res)=>{
    res.json({msg:'GET a single blog'})
})

//POST a new blog
router.post('/',(req,res)=>{
    res.json('post a new blog')
})

//Delete a blog
router.delete('/:id',(req,res)=>{
    res.json({msg:'DELETE a blog'})
})

//UPDATE a blog
router.patch('/:id',(req,res)=>{
    res.json({msg:'UPDATE a Blog'})
})

module.exports = router