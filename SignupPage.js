import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignupPage = () => {
  const [userType, setUserType] = useState('parent');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    alert(`Signup as ${userType} coming soon!`);
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

      {/* Signup Form */}
      <section style={{ padding: '4rem 0', background: '#f8fafc', minHeight: '70vh' }}>
        <div className="container">
          <div style={{ maxWidth: '500px', margin: '0 auto', background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: '#334155' }}>Join Sit Side</h2>
            
            {/* User Type Selection */}
            <div style={{ marginBottom: '2rem', display: 'flex', gap: '1rem' }}>
              <button
                type="button"
                onClick={() => setUserType('parent')}
                style={{
                  flex: 1,
                  padding: '0.75rem',
                  border: userType === 'parent' ? '2px solid #3A76F0' : '2px solid #e5e7eb',
                  borderRadius: '8px',
                  background: userType === 'parent' ? '#3A76F0' : 'white',
                  color: userType === 'parent' ? 'white' : '#334155',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}
              >
                I'm a Parent
              </button>
              <button
                type="button"
                onClick={() => setUserType('student')}
                style={{
                  flex: 1,
                  padding: '0.75rem',
                  border: userType === 'student' ? '2px solid #3A76F0' : '2px solid #e5e7eb',
                  borderRadius: '8px',
                  background: userType === 'student' ? '#3A76F0' : 'white',
                  color: userType === 'student' ? 'white' : '#334155',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}
              >
                I'm a Student
              </button>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#334155' }}>First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
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
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#334155' }}>Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
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
              </div>
              
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#334155' }}>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
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
              
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#334155' }}>Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
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
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#334155' }}>Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
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
                Create Account
              </button>
            </form>
            
            <p style={{ textAlign: 'center', color: '#64748b' }}>
              Already have an account? <Link to="/login" style={{ color: '#3A76F0', textDecoration: 'none' }}>Login here</Link>
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

export default SignupPage;
