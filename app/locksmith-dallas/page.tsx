import React from 'react';

export default function LocksmithDallasPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Dallas Locksmith Services</h1>
      <p className="text-lg mb-4">
        Professional locksmith services throughout Dallas-Fort Worth metroplex.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Downtown Dallas</h2>
          <p>Locksmith services in downtown Dallas area.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">DFW Metroplex</h2>
          <p>Professional locksmith services in Dallas-Fort Worth metroplex.</p>
        </div>
      </div>
    </div>
  );
}
