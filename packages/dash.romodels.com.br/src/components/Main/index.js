import React from 'react';

export function Main({ children }) {
  return (
    <main style={{ minHeight: 'calc(100vh - 10px)' }} role='main' className='rounded'>
      {children}
    </main>
  );
}
