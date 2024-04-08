

import { Link } from "react-router-dom";
//added//
import { useState, useEffect } from "react";
import axios from "axios";

// We are deconstructing props object directly in the parentheses of the function
function PostCard ( { title, content, _id , author } ) {
const [authorName, setAuthorName] = useState("");
useEffect(() => {
  const fetchAuthor = async () => {
    try {
      const response = await axios.get(`/api/users/${author}`);
      setAuthorName(response.data.username);
    } catch (error) {
      console.error("Error fetching author:", error);
    }
  };

  fetchAuthor();
}, [author]);
 //end//
  return (
    <div className="PostCard">
      <Link to={`/posts/${_id}`}>
        <h3>{title}</h3>
      </Link>
      <p style={{ maxWidth: "400px" }}>{content} </p>
      <p>by : {author}</p>
    </div>
  );
}

export default PostCard;