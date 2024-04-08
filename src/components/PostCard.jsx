
import { Link } from "react-router-dom";

// We are deconstructing props object directly in the parentheses of the function
function PostCard ( { title, content, _id , author } ) {
  
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