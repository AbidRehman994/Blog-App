import {useEffect, useState} from 'react';
import BlogList from './BlogList';
//Home function declaration
const Home=()=>{
  const[blogs,setBlogs]=useState([
    {title:'Co-existence in existential crises',body:'the time we started',author:'Abid',id:1},
    {title:'From neanderthals to homo-sapiens',body:'foragers were made',author:'Yuval Harrari',id:2},
    {title:'Thinking big in modern world',body:'the human machine,brains',author:'Abid',id:3},
  ]);
  const handleDelete=(id)=>{
    const newBlogs=blogs.filter(blog=>blog.id!== id);
    setBlogs(newBlogs);
  }
  useEffect(()=>{
  console.log("running")
  },[]);
  return(
    <div className="home">
    <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>   
    {/*filtering*/}
    <BlogList blogs={blogs.filter((blog)=>blog.author==='Abid')} title="Abid's blogs"/>     

    </div>
  )
}
export default Home;


