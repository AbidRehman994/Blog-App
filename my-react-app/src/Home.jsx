import {useEffect, useState} from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

//Home function declaration
const Home=()=>{
const {data: blogs,isPending,Error}=useFetch("http://localhost:8000/blogs");

  return(
    <div className="home">
      {Error && <div>{Error}</div>}
      {isPending && <div>Loading...</div>}
   {blogs && <BlogList blogs={blogs} title="All Blogs" />}   
    {/*filtering Abid's blogs*/}
    {blogs && <BlogList blogs={blogs.filter((blog)=>blog.author==='Abid')} title="Abid's blogs"/>  }   

    </div>
  )
}
export default Home;


