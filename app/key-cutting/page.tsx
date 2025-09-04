import React from 'react';

export default function KeyCuttingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Key Cutting Services</h1>
      <p className="text-lg mb-4">
        Professional key cutting services for all types of keys and locks.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">House Keys</h2>
          <p>Precise cutting of house keys for all lock types.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Car Keys</h2>
          <p>Specialized automotive key cutting and duplication.</p>
        </div>
      </div>
    </div>
  );
}
