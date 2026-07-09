import {useEffect, useState} from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

//Home function declaration
const Home=()=>{
const {data: blogs,isPending,error}=useFetch("http://localhost:5000/api/blogs");

  return(
    <div className="home">
      {error && <div>{error}</div>}
      {/* conditional loading */}
      {isPending && <div>Loading...</div>}
   {blogs && <BlogList blogs={blogs} title="All Blogs" />}   
    {/*filtering Abid's blogs*/}
    {blogs && <BlogList blogs={blogs.filter((blog)=>blog.author==='Abid')} title="Abid's blogs"/>  }   

    </div>
  )
}
export default Home;


