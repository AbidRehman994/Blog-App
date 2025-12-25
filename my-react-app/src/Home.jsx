import {useEffect, useState} from 'react';
import BlogList from './BlogList';

//Home function declaration
const Home=()=>{
  const[blogs,setBlogs]=useState(null);
  const[isPending,setisPending]=useState(true);
  const [error,setError]=useState(null);

  const handleDelete=(id)=>{
    const newBlogs=blogs.filter(blog=>blog.id!== id);
    setBlogs(newBlogs);
  }

  useEffect(()=>{
  fetch('http://localhost:8000/blogs')
  .then(res=>{
    if(!res.ok){
      throw Error("couldn't fetch data");
    }
    return res.json()
  })
  .then(data=>{
    console.log(data)
    setBlogs(data)
    setisPending(false);
    setError(null);
  })
  .catch(err=>{
    setError(err.message);
    setisPending(false);
  })
  },[]);

  return(
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
   {blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>}   
    {/*filtering*/}
    {blogs && <BlogList blogs={blogs.filter((blog)=>blog.author==='Abid')} title="Abid's blogs"/>  }   

    </div>
  )
}
export default Home;


