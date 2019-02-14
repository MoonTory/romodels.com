import React from 'react';

export default function Main({ children }) {
  return (
    <main role='main' className='bg-light rounded'>
      {children}
    </main>
  );
}
