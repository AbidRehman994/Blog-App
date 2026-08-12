import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  // const [author, setAuthor] = useState("Abid"); // Fixed
  const [isPending, setIsPending] = useState(false);

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const blog = {
      title,
      body,
      author:"Abid",
    };

    setIsPending(true);

    fetch("http://localhost:5000/api/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blog),
    })
      .then((res) => {
        if (!res.ok) {
          throw Error("Failed to create blog");
        }
        return res.json();
      })
      .then((data) => {
        console.log("New blog added:", data);
        setIsPending(false);
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
        setIsPending(false);
      });
  };

  return (
    <div className="max-w-md mx-auto text-center">
      <h2  className="text-xl text-pink-600 mb-8 font-semibold">Add a New Blog</h2>

      <form onSubmit={handleSubmit}>
        <label className="block text-left font-medium mb-1">Blog title:</label>
        <input
        className="w-full px-3 py-2 my-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label className="block text-left font-medium mb-1">Blog body:</label>
        <textarea
         className="w-full px-3 py-2 my-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>

        {/* <label className="block text-left font-medium mb-1">Blog author:</label>
        <select
        className="w-full px-3 py-2 my-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="Abid">Abid</option>
          <option value="Hamid">Hamid</option>
        </select> */}

        {!isPending && <button  className="bg-pink-600 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-pink-700 transition-colors">Add Blog</button>}
        {isPending && <button disabled 
         className="bg-pink-400 text-white px-4 py-2 rounded-lg cursor-not-allowed">Adding Blog...</button>}
      </form>
    </div>
  );
};

export default Create;