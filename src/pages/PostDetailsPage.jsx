

// export default PostDetailsPage;
import { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom';
import axios from "axios";
import AddComment from "../components/AddComment";
import CommentCard from "../components/CommentCard";


const API_URL = import.meta.env.VITE_SERVER_URL;

function PostDetailsPage (props) {
  const [post, setPost] = useState(null);
  const { postId } = useParams();

  const getPost = () => {
    // Retrieve the JWT token from the local storage
    const storedToken = localStorage.getItem('authToken');

    axios
      .get(`${API_URL}/api/posts/${postId}`, {
        headers: {
          Authorization: `Bearer ${storedToken}` // Include the authorization token in the request headers
        }
      })
      .then((response) => {
        const onePost = response.data;
        setPost(onePost);
      })
      .catch((error) => console.log(error));
  };

  useEffect(()=> {
    getPost();
  }, [] );

  return (
    <div className="PostDetails">
      {post && (
        <>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
        </>
      )}
       <AddComment refreshPost={getPost} postId={postId} />          

      { post && post.comments && post.comments.map((comment) => <CommentCard key={comment._id} {...comment} /> )}  
     
     
      <div>
        <h1>More details about the trip</h1>
      </div>
      <Link to={`/posts/${postId}/comments`}>
      <button>Add comment</button>
      </Link>
      <Link to="/posts">
        <button>Back to posts</button>
      </Link>
          
      <Link to={`/posts/edit/${postId}`}>
        <button>Edit Post</button>
      </Link>

    </div>
  );
}

export default PostDetailsPage;