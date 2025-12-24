import {useEffect, useState} from 'react';
import BlogList from './BlogList';

//Home function declaration
const Home=()=>{
  const[blogs,setBlogs]=useState(null);
  const[isPending,setisPending]=useState(true);

  const handleDelete=(id)=>{
    const newBlogs=blogs.filter(blog=>blog.id!== id);
    setBlogs(newBlogs);
  }

  useEffect(()=>{
  fetch('http://localhost:8000/blogs')
  .then(res=>{
    return res.json()
  })
  .then(data=>{
    console.log(data)
    setBlogs(data)
    setisPending(false);
  })
  },[]);

  return(
    <div className="home">
      {isPending && <div>Loading...</div>}
   {blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>}   
    {/*filtering*/}
    {blogs && <BlogList blogs={blogs.filter((blog)=>blog.author==='Abid')} title="Abid's blogs"/>  }   

    </div>
  )
}
export default Home;


