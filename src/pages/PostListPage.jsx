
import { useState, useEffect } from "react";
import axios from "axios";

import PostCard from "../components/PostCard";
import AddPost from "../components/AddPost";


const API_URL = import.meta.env.VITE_SERVER_URL;

function PostListPage() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  const getAllPosts = () => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");
   
    // Send the token through the request "Authorization" Headers
    axios
      .get(
      `${API_URL}/api/posts`,
      { headers: { Authorization: `Bearer ${storedToken}` } }
    )
    //added toget Author username insteadof id //

    .then((response) => {
      console.log(response);
      setPosts(response.data);
      // For each post, fetch the author's username
      // const promises = response.data.map(post => {
      //   return axios
      //     .get(`${API_URL}/api/users/${post.author}`)
      //     .then(userResponse => ({ ...post, author: userResponse.data.username }))
      //     .catch(error => {
      //       console.error(`Error fetching username for post ${post._id}:`, error);
      //       return post; // Fallback to the original post if fetching username fails
      //     });
  });}

      // Wait for all promises to resolve
    //   Promise.all(promises)
    //     .then(postsWithUsername => setPosts(postsWithUsername))
    //     .catch(error => setError("Error fetching usernames:", error));
    // })
//     .catch((error) => setError("Error fetching posts"));
// };



    //end//




  //commented out for same reason
  //   postsService.getAllPosts()
  //     .then((response) => setPosts(response.data))
  //     .catch((error) => console.log(error));
  // };
//end

  // We set this effect will run only once, after the initial render
  // by setting the empty dependency array - []
  

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <div className="PostListPage">
      <AddPost refreshPosts={getAllPosts} />

      {error && <p>{error}</p>}

      {posts.map((post) => (
        <PostCard key={post._id} {...post} />
      ))}
    </div>
  );
}

export default PostListPage;