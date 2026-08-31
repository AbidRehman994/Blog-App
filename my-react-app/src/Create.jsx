import { useAuthContext } from "./hooks/useAuthContext";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  // const [author, setAuthor] = useState("Abid"); // Fixed
  const [isPending, setIsPending] = useState(false);
 const { user } = useAuthContext();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const blog = {
      title,
      body,
    };

    setIsPending(true);

    fetch("https://blogappbackend-pp3ndxvj.b4a.run/api/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify(blog),
    })
      .then(async (res) => {
  if (!res.ok) {
    const errorData = await res.json();
    throw Error(errorData.error);
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

        {!isPending && <button  className="bg-pink-600 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-pink-700 transition-colors">Add Blog</button>}
        {isPending && <button disabled 
         className="bg-pink-400 text-white px-4 py-2 rounded-lg cursor-not-allowed">Adding Blog...</button>}
      </form>
    </div>
  );
};

export default Create;