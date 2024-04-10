
// We are deconstructing props object directly in the parentheses of the function
function CommentCard(props) {const{yourcomment, author} = props;
  
  return (
    <div className="CommentCard card">
     
      <p style={{ maxWidth: "400px" }}>{yourcomment}</p>
      <p>By: {author}</p>
    </div>
  );
}

export default CommentCard;