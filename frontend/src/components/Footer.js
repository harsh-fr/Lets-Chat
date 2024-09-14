import React from 'react';

const Footer = () => {
  const footerStyle = {
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '25px', 
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '14px',
    textAlign: 'center',
  };

  let year = new Date().getFullYear();
  return (
    <footer style={footerStyle}>
      © {year} Lets-Chat. All Rights Reserved.
    </footer>
  );
};

export default Footer;
