const Blog = require('../models/blogModel');
const mongoose = require('mongoose')

//get all blogs
const getBlogs = async (req,res)=>{
    const blogs = await Blog.find({}).sort({createdAt: -1})
    res.status(200).json(blogs)
}

//get a single blog
const getBlog=async (req,res)=>{
    const {id} =req.params
    const blog = await Blog.findById(id)
    if(!blog){
        return res.status(404).json({error:'No such blog'})
    }
    res.status(200).json(blog)
}

//create new blog
const createBlog=async(req,res)=>{
    const { title, body } = req.body;
    const author = req.user.email;
    const user_id = req.user._id;

     //add doc to db
    try{
        const newBlog = await Blog.create({
           title,
            body,
            author,
            user_id,
           });
        res.status(200).json(newBlog)

    }catch(error){
     res.status(400).json({error: error.message})
    }
}

//delete a blog
const deleteBlog = async (req, res) => {
  const { id } = req.params;

  const blog = await Blog.findById(id);

  if (!blog) {
    return res.status(404).json({ error: "No such blog" });
  }

  if (blog.user_id !== req.user._id.toString()) {
    return res.status(403).json({
      error: "You are not authorized to delete this blog",
    });
  }

  await Blog.findByIdAndDelete(id);

  res.status(200).json(blog);
};

//update a blog

const updateBlog = async (req,res) =>{
    const {id} =req.params
    
    const blog = await Blog.findOneAndUpdate({_id:id},{
        ...req.body
    })
    if(!blog){
        return res.status(404).json({error:'No such blog'})
    }
    res.status(200).json(blog)
}

module.exports={
    getBlogs,
    getBlog,
    createBlog,
    deleteBlog,
    updateBlog
}