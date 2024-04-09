// function HomePage() {
//   return (
//     <div className="homepage-container">
   
//       <span><h1>Discover, Wander,</h1></span><span className="highlight"><h1>Connect.</h1></span>
//       <h2>Where Adventures Meet Memories</h2>

//     </div>
//   );
// }

// export default HomePage;
function HomePage() {
  return (
    <div className="homepage-container">
      <h1>Discover, Wander,<span className="highlight">Connect.</span></h1>
      <h2>Where Adventures Meet Memories</h2>
      
      <div className="gallery">
        <div className="gallery-item">
          <img src="/assets/greece.jpg" alt="greece" />
          <p>Small text under Image 1</p>
        </div>
        <div className="gallery-item">
          <img src="/assets/machu-picchu.jpg" alt="machu picchu" />
          <p>Small text under Image 2</p>
        </div>
        <div className="gallery-item">
          <img src="/assets/kimono.jpg" alt="Japan" />
          <p>Small text under Image 2</p>
        </div>
        <div className="gallery-item">
          <img src="/assets/marrakech.jpg" alt="marrakech" />
          <p>Small text under Image 2</p>
        </div>
        <div className="gallery-item">
          <img src="/assets/mountains.jpg" alt="mountains" />
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
