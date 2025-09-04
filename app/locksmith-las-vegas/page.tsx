import React from 'react';

export default function LocksmithLasVegasPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Las Vegas Locksmith Services</h1>
      <p className="text-lg mb-4">
        Professional locksmith services throughout Las Vegas metro area.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">The Strip</h2>
          <p>Locksmith services on the Las Vegas Strip.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Las Vegas Metro</h2>
          <p>Professional locksmith services in Las Vegas metro area.</p>
        </div>
      </div>
    </div>
  );
}
