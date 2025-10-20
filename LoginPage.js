import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple demo login - in real app, this would connect to backend
    if (email === 'admin@sitside.com' && password === 'Tenacity2301!') {
      alert('Admin login successful!');
    } else {
      alert('Login functionality coming soon!');
    }
  };

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

      {/* Login Form */}
      <section style={{ padding: '4rem 0', background: '#f8fafc', minHeight: '70vh' }}>
        <div className="container">
          <div style={{ maxWidth: '400px', margin: '0 auto', background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: '#334155' }}>Login to Sit Side</h2>
            
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#334155' }}>Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '8px',
                    fontSize: '1rem'
                  }}
                  required
                />
              </div>
              
              <div style={{ marginBottom: '2rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#334155' }}>Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '8px',
                    fontSize: '1rem'
                  }}
                  required
                />
              </div>
              
              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginBottom: '1rem' }}>
                Login
              </button>
            </form>
            
            <p style={{ textAlign: 'center', color: '#64748b' }}>
              Don't have an account? <Link to="/signup" style={{ color: '#3A76F0', textDecoration: 'none' }}>Sign up here</Link>
            </p>
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

export default LoginPage;
