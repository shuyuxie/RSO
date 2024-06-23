import React from 'react';

const ErrorPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-red-600 mb-4">Something went wrong.</h1>
      <p className="text-xl text-gray-800">Please try again later.</p>
    </div>
  );
};

export default ErrorPage;