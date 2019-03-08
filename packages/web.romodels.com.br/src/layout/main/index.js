import React from 'react';

export default function Main({ children }) {
  return (
    <main role='main' className='rounded'>
      {children}
    </main>
  );
}
