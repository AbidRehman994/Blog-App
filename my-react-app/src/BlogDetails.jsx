import { useParams } from "react-router-dom";
import useFetch from './useFetch'
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const BlogDetails=()=>{
    const {id}=useParams();
    const {data :blog,error,isPending}=useFetch("http://localhost:5000/api/blogs/" + id);
    const history = useHistory();

    const handleClick=()=>{
      fetch("http://localhost:5000/api/blogs/" + blog._id,{
        method: "DELETE"
    }).then(()=>{
         history.push('/');
    })
    }

    return(
      <div  className="max-w-3xl mx-auto">
       { isPending && <div>Loading...</div> }
       {error && <div>{error}</div>}
       {blog && (
        <article>
          <h2  className="text-xl text-pink-600 mb-2 font-semibold">{blog.title}</h2>
          <p className="text-gray-600">By {blog.author}</p>
          <div className="my-5 leading-7">{blog.body}</div>
          <button onClick={handleClick}
          className="bg-pink-600 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-pink-700">delete</button>
        </article>
       )}
      </div>
    )
}
export default BlogDetails;