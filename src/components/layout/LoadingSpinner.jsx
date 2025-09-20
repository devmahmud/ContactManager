import React from 'react';

const LoadingSpinner = ({ size = 'md', text = 'Loading...' }) => {
  const sizeClasses = {
    sm: 'spinner-border-sm',
    md: '',
    lg: 'spinner-border-lg',
  };

  return (
    <div className="d-flex align-items-center justify-content-center">
      <div className={`spinner-border text-primary ${sizeClasses[size]}`} role="status">
        <span className="visually-hidden">{text}</span>
      </div>
      {text && <span className="ms-2">{text}</span>}
    </div>
  );
};

export default LoadingSpinner;
