
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// import { AuthContext } from "../context/auth.context";
// import authService from "../services/auth.service";
 const API_URL = "http://localhost:5005";
 
function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
 
  const navigate = useNavigate();
//   const { storeToken, authenticateUser } = useContext(AuthContext);
  
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleName = (e) => setName(e.target.value);
 
  
  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Create an object representing the request body
    const requestBody = { email, password, username:name };
 
    // Make an axios request to the API
    // If the POST request is a successful redirect to the login page
    // If the request resolves with an error, set the error message in the state
    axios.post(`${API_URL}/auth/signup`, requestBody)
    // authService.signup(requestBody)  
    .then(() => {
        navigate('/login');
        // 1. store the token to the localStorage
        // storeToken(response.data.authToken)
        // 2. verify the token 
        // authenticateUser()
      })
    //   .then(()=>{
    //     navigate('/');
    //   })
      .catch((error) => {
        const errorDescription = error.response;
        setErrorMessage(errorDescription);
      })
  };
 
  
  return (
    <div className="SignupPage"> 
      <h1>Sign Up</h1>
 
      <form onSubmit={handleSignupSubmit}className="login-form" >
      <div className="form-group">
        <label>Email:</label>
        <input 
          type="email"
          name="email"
          value={email}
          onChange={handleEmail}
        />
      </div>

      <div className="form-group">
        <label>Password:</label>
        <input 
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />
      </div>
      <div className="form-group">
        <label>Name:</label>
        <input 
          type="text"
          name="name"
          value={name}
          onChange={handleName}
        />
        </div>
 
        <button type="submit">Sign Up</button>
      </form>
 
      { errorMessage && <p className="error-message">{errorMessage}</p> }
 
      <p>Already have account?</p>
      <Link to={"/login"}> Login</Link>
    </div>
  )
}
 
export default SignupPage;