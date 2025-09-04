import React from 'react';

export default function CommercialLocksmithPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Commercial Locksmith Services</h1>
      <p className="text-lg mb-4">
        Comprehensive security solutions for businesses and commercial properties.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Access Control Systems</h2>
          <p>Install and maintain advanced access control for your business.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Master Key Systems</h2>
          <p>Efficient key management solutions for commercial properties.</p>
        </div>
      </div>
    </div>
  );
}
