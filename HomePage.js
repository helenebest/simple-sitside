import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="logo">Sit Side</Link>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Reliable childcare from responsible students</h1>
          <p>Sit Side connects families with trusted high school sitters. Flexible schedules, transparent rates, and simple booking.</p>
          <div className="hero-buttons">
            <Link to="/signup" className="btn btn-primary">Find a Sitter</Link>
            <Link to="/signup" className="btn btn-secondary">Become a Sitter</Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2>Why Choose Sit Side?</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <h3>Verified Students</h3>
              <p>All our sitters are verified high school students with references and background checks.</p>
            </div>
            <div className="feature-card">
              <h3>Safe & Secure</h3>
              <p>Secure payments, transparent pricing, and 24/7 support for peace of mind.</p>
            </div>
            <div className="feature-card">
              <h3>Easy Booking</h3>
              <p>Simple booking process with real-time availability and instant confirmations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <div className="container">
          <h2>How It Works</h2>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Create Your Account</h3>
              <p>Sign up as a parent or student and complete your profile.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Find & Connect</h3>
              <p>Browse available sitters or set your availability as a student.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Book & Pay</h3>
              <p>Book your sitter and pay securely through our platform.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Sit Side. All rights reserved. | SitSide is not affiliated with any school or district.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
