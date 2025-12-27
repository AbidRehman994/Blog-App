import { useState } from "react";

const Create=()=>{
    const [title,setTitle]=useState('');
    const [body,setBody]=useState('');
    const [author,setAuthor]=useState('');
    return(
        <div className="create">
        <h2>Add a New Blog</h2>
        <form>
            <label>Blog title</label>
            <input type="text" required />

             <label>Blog body</label>
            <textarea>
                required
            </textarea>
            <label>Blog author:</label>
            <select>
                <option value="Abid">Abid</option>
                <option value="Hamid">Hamid</option>
            </select>
            <button>Add Blog</button>
        </form>
        </div>
    )
}
export default Create;