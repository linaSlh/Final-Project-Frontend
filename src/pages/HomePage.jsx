function HomePage() {
  return (
    <div className="homepage-container">
   
      <span><h1>Discover, Wander,</h1></span><span className="highlight"><h1>Connect.</h1></span>
      <h2>Where Adventures Meet Memories</h2>
      <div className="card">
       <p>
        <code>{(import.meta.env.VITE_SERVER_URL)}</code>
       </p>
      </div>
    </div>
  );
}

export default HomePage;