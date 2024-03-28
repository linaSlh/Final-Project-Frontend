// import { useState } from "react";
// import axios from "axios";

// const API_URL = "http://localhost:5005";

// function AddPost(props) {
//   const [title, setTitle] = useState("");
//   const [context, setContext] = useState("");


//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const requestBody = { title,context};
    
//     axios
//       .post(`${API_URL}/api/posts`, requestBody)
//       .then((response) => {
//         // Reset the state
//         setTitle("");
//         setContext("");
//         props.refreshPosts();
//       })
//       .catch((error) => console.log(error));
//   };


//   return (
//     <div className="AddPost">
//       <h3>Add Post</h3>

//       <form onSubmit={handleSubmit}>
//         <label>Title:</label>
//         <input
//           type="text"
//           name="title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />

//         <label>Context:</label>
//         <textarea
//           type="text"
//           name="context"
//           value={context}
//           onChange={(e) => setContext(e.target.value)}
//         />

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default AddPost;
import { useState } from "react";
// import axios from "axios";
import postsService from "../services/posts.service";

function AddPost(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [region, setRegion]  = useState("");

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
      <h3>Add Post</h3>

      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        
        <label>Region:</label>
        <input
          type="text"
          name="region"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
        />

        <label>Content:</label>
        <textarea
          type="text"
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddPost;