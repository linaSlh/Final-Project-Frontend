// import { useState } from "react";
// import commentsService from "../services/comment.service"; // Import the comments service
// import { useParams } from "react-router-dom";

// function AddComment(props) {
//   const [yourcomment, setYourcomment] = useState("");
//   const {postId} = useParams()
//  console.log(props);
//   const handleAddComment = () => {
//     // const requestBody = {yourcomment};

//     commentsService.createComment(postId, requestBody)
//       .then(() => {
//         // Reset the state after successful comment creation
//         setYourcomment("");
//         props.refreshComments();
        
//       })
//       .catch((error) => console.log(error));
//   };

//   return (
//     <div className="AddComment">
//       <h3>Add your Comment</h3>
//       <div className="form-group">
//       <label> Your Comment </label>
//       <textarea
//         type="text"
//         name="yourcomment"
//         value={yourcomment}
//         onChange={(e) => setYourcomment(e.target.value)}
//       />
//       </div>

//       {/* Use a button click handler to add the comment */}
//       <button onClick={handleAddComment}>Add Comment</button>
//     </div>
//   );
// }

// export default AddComment;


import { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5005";

function AddComment(props) {
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // We need the post id when creating the new comment
    const { postId } = props;
    // Create an object representing the body of the POST request
    const requestBody = { comment };

    axios
      .post(`${API_URL}/api/posts/${postId}/comments`, requestBody)
      .then((response) => {
        // Reset the state to clear the input
        setComment("");
        // Invoke the callback function coming through the props
        // from the PostDetailsPage, to refresh the comments
        props.refreshComments();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="AddComment">
      <h3>Add Your Comment</h3>
      <form onSubmit={handleSubmit}>
        <label>Comment:</label>
        <textarea
          type="text"
          name="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
}

export default AddComment;
