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

    const handleShare = (platform) => {
  const url = window.location.href;
  const text = blog.title;

  let shareUrl = "";

  if (platform === "facebook") {
    shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      url
    )}`;
  }

  if (platform === "x") {
    shareUrl = `https://x.com/intent/tweet?text=${encodeURIComponent(
      text
    )}&url=${encodeURIComponent(url)}`;
  }

  window.open(shareUrl, "_blank");
};

    return(
      <div  className="max-w-3xl mx-auto">
       { isPending && <div>Loading...</div> }
       {error && <div>{error}</div>}
       {blog && (
        <article>
          <h2  className="text-xl text-pink-600 mb-2 font-semibold">{blog.title}</h2>
          <p className="text-gray-600">By {blog.author}</p>
          <div className="my-5 leading-7">{blog.body}</div>
          <div className="mt-6 flex gap-2">

  <button
    onClick={() => handleShare("facebook")}
    className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-sm">
    Facebook
  </button>

  <button
    onClick={() => handleShare("twitter")}
    className="bg-black text-white px-3 py-1 rounded hover:bg-gray-800 text-sm">
    X
  </button>

  <button
    onClick={() => {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied!");
    }}
    className="bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300 text-sm">
    Copy Link
  </button>

</div>
<div className="border-t border-gray-200 mt-6 pt-6"></div>
          <button onClick={handleClick}
          className="bg-pink-600 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-pink-700">delete</button>
        </article>
       )}
      </div>
    )
}
export default BlogDetails;