import { Link } from "react-router-dom";
import { useContext } from "react";                     // <== IMPORT 
import { AuthContext } from "../context/auth.context"; 
import logoImage from "../assets/Logo1.png"

function Navbar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext); 

  return (
    <nav className="navbar">
    <div className="logo">
    <img src={logoImage} alt="Logo"/></div>

    <div className="nav-links">
      <Link to="/">
        <button>Home</button>
      </Link>

      {isLoggedIn && (
        <>
          <span className="navtext">
          <p> hi there !</p>
          </span>
          <Link to="/posts">
            <button>Share your expreience</button>
          </Link>        
          <button onClick={logOutUser}>Logout</button>
        </>
      )}

        {!isLoggedIn && (
              <>
                <Link to="/signup"> <button>Sign Up</button> </Link>
                <Link to="/login"> <button>Login</button> </Link>
              </>
            )}
            </div>
    </nav>
  );
}

export default Navbar;