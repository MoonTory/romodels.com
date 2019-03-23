import React from 'react';

export default function Main({ children }) {
  return (
    <main
      style={{ minHeight: 'calc(100vh - 10px)' }}
      role="main"
      className="rounded"
    >
      {children}
    </main>
  );
}
