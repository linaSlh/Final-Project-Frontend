
// We are deconstructing props object directly in the parentheses of the function
function CommentCard ( { yourcomment} ) {
  
  return (
    <div className="CommentCard card">
      
        <h3>{yourcomment}</h3>
     
      <p style={{ maxWidth: "400px" }}>{yourcomment} </p>
    </div>
  );
}

export default CommentCard;