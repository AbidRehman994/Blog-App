import { Link } from "react-router-dom/cjs/react-router-dom.min";
const BlogList=({blogs,title,})=>{

    return(
        <div className="blog-list">
            <h2 className="text-2xl font-semibold mb-5">{title}</h2>
                   
            {blogs.map((blog) => (
            <div className="py-2.5 px-4 my-5 border-b border-gray-100 hover:shadow-md transition-shadow duration-200" key={blog._id}>  
            
                <Link to={`/blogs/${blog._id}`}
                className="no-underline">
               <h2 className="text-xl text-pink-600 mb-2">{blog.title}</h2>
              <p>By {blog.author}</p>
                </Link>

              </div>
))}
     </div>
    );
}
export default BlogList;