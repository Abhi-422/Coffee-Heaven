// src/App.js
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navbar Section */}
      <header className="navbar">
        <div className="logo">☕ Coffee Heaven</div>
        <nav>
          <ul className="nav-links">
            <li><a href="#menu">Menu</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to Coffee Heaven</h1>
        <p>Your daily dose of caffeine and comfort</p>
      </section>
    </div>
  );
}

export default App;
