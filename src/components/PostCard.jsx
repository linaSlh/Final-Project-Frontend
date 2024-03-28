import { Link } from "react-router-dom";

// We are deconstructing props object directly in the parentheses of the function
function PostCard ( { title, context, _id } ) {
  
  return (
    <div className="PostCard card">
      <Link to={`/posts/${_id}`}>
        <h3>{title}</h3>
      </Link>
      <p style={{ maxWidth: "400px" }}>{context} </p>
    </div>
  );
}

export default PostCard;