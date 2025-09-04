import React from 'react';

export default function LockoutServicePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Lockout Service</h1>
      <p className="text-lg mb-4">
        Fast and reliable lockout services for homes, cars, and businesses.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Home Lockouts</h2>
          <p>Quick response to home lockout emergencies.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Car Lockouts</h2>
          <p>Professional car unlock services without damage.</p>
        </div>
      </div>
    </div>
  );
}
