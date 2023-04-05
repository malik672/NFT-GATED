import React from 'react';


const Popup = ({ onClose, title }) => {
  const popupStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    zIndex: 9999,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backdropFilter: 'blur(3px)',
    WebkitBackdropFilter: 'blur(3px)',
    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.3)',
  };

  const boxStyle = {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    width: '300px',
    height: 'auto',
    padding: '20px',
    textAlign: 'center',
  };

  const titleStyle = {
    fontFamily: 'Arial, sans-serif',
    fontWeight: 'bold',
    fontSize: '20px',
    margin: '10px',
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: '#fff',
    fontFamily: 'Arial, sans-serif',
    fontSize: '16px',
    fontWeight: 'bold',
    padding: '10px 30px',
    borderRadius: '8px',
    border: 'none',
    margin: '10px',
    cursor: 'pointer',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  };

  const textStyle = {
    fontFamily: 'Arial, sans-serif',
    fontSize: '16px',
    margin: '10px',
  };

  return (
    <div style={popupStyle}>
      <div style={boxStyle}>
        <p style={textStyle}>You are about to buy {title} for 10 USDT</p>
        <button style={buttonStyle} onClick={() => console.log('Mint button clicked')}>
          Mint
        </button>
        <button style={{ color: 'red' }} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;


