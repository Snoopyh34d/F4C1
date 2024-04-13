import React, { useState } from 'react';
import "./Css/app.css"

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const handleEmailChange = (e) => {
    const { value } = e.target;
    setEmail(value);
    
    // Email validation
    if (!value || !value.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };
  
  const handlePasswordChange = (e) => {
    const { value } = e.target;
    setPassword(value);
    
    // Password validation
    if (!value || value.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
    } else {
      setPasswordError('');
    }
    
    // Confirm password validation
    if (confirmPassword && value !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
    } else {
      setConfirmPasswordError('');
    }
  };
  
  const handleConfirmPasswordChange = (e) => {
    const { value } = e.target;
    setConfirmPassword(value);
    
    // Confirm password validation
    if (!value || (password && value !== password)) {
      setConfirmPasswordError('Passwords do not match');
    } else {
      setConfirmPasswordError('');
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();

    let formValid = true;

    // Email validation
    if (!email || !email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
      setEmailError('Please enter a valid email address');
      formValid = false;
    }

    // Password validation
    if (!password || password.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
      formValid = false;
    }

    // Confirm password validation
    if (!confirmPassword || (password && confirmPassword !== password)) {
      setConfirmPasswordError('Passwords do not match');
      formValid = false;
    }

    if (formValid) {
      alert('Form submitted successfully');
    } else {
      alert('Can\'t submit the form');
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            className={emailError ? 'invalid' : ''}
          />
          {emailError && <div className="error">{emailError}</div>}
        </div>
        
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            className={passwordError ? 'invalid' : ''}
          />
          {passwordError && <div className="error">{passwordError}</div>}
        </div>
        
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            className={confirmPasswordError ? 'invalid' : ''}
          />
          {confirmPasswordError && <div className="error">{confirmPasswordError}</div>}
        </div>
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
