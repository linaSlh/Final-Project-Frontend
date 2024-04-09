import greeceimg from "../assets/greece.jpg"
import machupiccuimg from "../assets/machu-picchu.jpg"
import japanimg from "../assets/kimono.jpg"
import marrakechimg from "../assets/marrakech.jpg"
import mountainimg from "../assets/mountains.jpg"
function HomePage() {
  return (
    <div className="homepage-container">
      <h1>Discover, Wander,<span className="highlight">Connect.</span></h1>
      <h2>Where Adventures Meet Memories</h2>
      
      <div className="gallery">
        <div className="gallery-item">
        <img src={greeceimg} alt="greece" />
          <p>Small text under Image 1</p>
        </div>
        <div className="gallery-item">
        <img src={machupiccuimg} alt="machupicchu" />
          <p>Small text under Image 2</p>
        </div>
        <div className="gallery-item">
        <img src={japanimg} alt="japan" />
          <p>Small text under Image 2</p>
        </div>
        <div className="gallery-item">
        <img src={marrakechimg} alt="marrakech" />
          <p>Small text under Image 2</p>
        </div>
        <div className="gallery-item">
        <img src={mountainimg} alt="mountains" />
          <p>Small text under Image 2</p>
        </div>
        
      </div>
      
      <div className="social-icons">
        {/* Add social media icons here */}
      </div>
      
      <div className="copyright">
        {/* Add copyright text here */}
      </div>
    </div>
  );
}

export default HomePage;
