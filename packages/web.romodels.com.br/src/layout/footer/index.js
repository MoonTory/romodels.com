import React from 'react';

// const footerStyle = {
//   backgroundColor: 'purple',
//   fontSize: '20px',
//   color: 'white',
//   borderTop: '1px solid #E7E7E7',
//   textAlign: 'center',
//   padding: '20px',
//   position: 'fixed',
//   left: '0',
//   bottom: '0',
//   height: '60px',
//   width: '100%'
// };

// const phantomStyle = {
//   display: 'block',
//   padding: '20px',
//   height: '60px',
//   width: '100%'
// };

// <Fragment>
//   <nav className='navbar navbar-expand-lg navbar-dark bg-primary' style={footerStyle}>
//     {children}
//   </nav>
// </Fragment>
export function Footer({ children }) {
  return (
    <footer className='py-5 bg-dark'>
      <div className='container'>
        <p className='m-0 text-center text-white'>Copyright &copy; Ronaldo Oliveira Models, School & Production 2019</p>
      </div>
    </footer>
  );
}
