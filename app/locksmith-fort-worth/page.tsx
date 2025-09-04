import React from 'react';

export default function LocksmithFortWorthPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Fort Worth Locksmith Services</h1>
      <p className="text-lg mb-4">
        Professional locksmith services throughout Fort Worth metro area.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Downtown Fort Worth</h2>
          <p>Locksmith services in downtown Fort Worth area.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Fort Worth Metro</h2>
          <p>Professional locksmith services in Fort Worth metro area.</p>
        </div>
      </div>
    </div>
  );
}
