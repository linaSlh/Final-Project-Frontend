

// export default AddPost;
import { useState, useEffect } from "react";
// import axios from "axios";
import postsService from "../services/posts.service";

function AddPost(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [region, setRegion]  = useState("");
  const [user, setUser] = useState(null); // Define user state

  // Assuming getCurrentUser is a function to fetch the current user
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    setUser(currentUser); // Set the current user
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = { title, content, region };
     // Get the token from the localStorage
  // const storedToken = localStorage.getItem('authToken');

    // axios
    //   .post(`${API_URL}/api/posts`, requestBody, { headers: { Authorization: `Bearer ${storedToken}` } })
    postsService.createPost(requestBody)  
    .then(() => {
        // Reset the state
        setTitle("");
        setContent("");
        setRegion("");
        props.refreshPosts();
      })
      .catch((error) => console.log(error));
  };


  return (
    <div className="AddPost">
      {/* <h3>Add Post</h3> */}

      <form onSubmit={handleSubmit} className="login-form">
      <div className="form-group">
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        </div>
        <div className="form-group">
        <label>Region:</label>
        <input
          type="text"
          name="region"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
        />
        </div>
        <div className="form-group">
        <label>Content:</label>
        <textarea
          type="text"
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        </div>
        <button type="submit">Add Post</button>
      </form>
      {user && (
        <p>Posted by: {user.name}</p>
      )}
    </div>
  );
}

export default AddPost;