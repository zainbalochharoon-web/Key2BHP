import React from 'react';

export default function EmergencyLocksmithPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Emergency Locksmith Services</h1>
      <p className="text-lg mb-4">
        24/7 emergency locksmith services available when you need them most.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Lockout Services</h2>
          <p>Fast response to home, car, and business lockout emergencies.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Break-in Repairs</h2>
          <p>Immediate security repairs after break-ins or damage.</p>
        </div>
      </div>
    </div>
  );
}
