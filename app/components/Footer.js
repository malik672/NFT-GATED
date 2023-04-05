import React from 'react';

const Footer = () => {
  return (
    <div style={{ 
      backgroundColor: 'black', 
      color: 'white', 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: 'px',
      width:"100%",
      marginTop:"24px",
    }}>
      <div style={{ textAlign: 'left' }}>
        <h4 style={{ marginBottom: '10px' }}>Sponsored by:</h4>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          <li style={{ marginBottom: '5px' }}>Fiction Bookstore</li>
          <li style={{ marginBottom: '5px' }}>Black Dragon Publishing</li>
          <li style={{ marginBottom: '5px' }}>Midnight Coffee Co.</li>
        </ul>
      </div>
      <div style={{ textAlign: 'right' }}>
        <h4 style={{ marginBottom: '10px' }}>Book Launch Info:</h4>
        <p style={{ margin: 0 }}>Date: August 31, 2023</p>
        <p style={{ margin: 0 }}>Location: Virtual Event</p>
        <p style={{ margin: 0 }}>Time: 7:00 PM EST</p>
        <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
          <span style={{ fontSize: '24px', marginRight: '10px' }}>&#64;</span>
          <span style={{ fontSize: '18px', marginRight: '10px' }}>booklaunch</span>
          <a href="https://www.instagram.com/booklaunch" target="_blank" rel="noopener noreferrer">
            <img src="/instagram-icon.png" alt="Instagram" style={{ width: '24px', height: '24px' }} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
