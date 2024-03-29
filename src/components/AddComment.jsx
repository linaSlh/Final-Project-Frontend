import { useState } from "react";
import commentsService from "../services/comment.service"; // Import the comments service

function AddComment(props) {
  const [yourcomment, setYourcomment] = useState("");

  const handleAddComment = () => {
    const requestBody = {yourcomment};

    commentsService.createComment(requestBody)
      .then(() => {
        // Reset the state after successful comment creation
        setYourcomment("");
        props.refreshComments();
        
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="AddComment">
      <h3>Add your Comment</h3>

      <label> Your Comment </label>
      <textarea
        type="text"
        name="yourcomment"
        value={yourcomment}
        onChange={(e) => setYourcomment(e.target.value)}
      />

      {/* Use a button click handler to add the comment */}
      <button onClick={handleAddComment}>Add Comment</button>
    </div>
  );
}

export default AddComment;
