import React from 'react';

export function CardWrapper({ children, title }) {
  return (
    <div style={{ border: 'solid 1px #444' }} className="card mb-3 h-100">
      {title === undefined ? null : (
        <div
          style={{ borderBottom: 'solid 2px #444' }}
          className="card-header text-white text-center bg-dark"
        >
          {title}
        </div>
      )}
      <div className="card-body flex-fill">{children}</div>
    </div>
  );
}
