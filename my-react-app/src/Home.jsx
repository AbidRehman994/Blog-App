import {useEffect, useState} from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';
import { useAuthContext } from './hooks/useAuthContext';

//Home function declaration
const Home=()=>{
  const { user } = useAuthContext();
const {data: blogs,isPending,error}=useFetch("https://abid-blog-api.bonto.run/api/blogs");


  return(
    <div className="home">
      {error && <div>{error}</div>}
      {/* conditional loading */}
      {isPending && <div>Loading...</div>}
   {blogs && <BlogList blogs={blogs} title="All Blogs" />}   
    {/*filtering your's blogs*/}
   {blogs && user && <BlogList blogs={blogs.filter((blog)=>blog.author===user.email)} title="Your Blogs"/>}

    </div>
  )
}
export default Home;


