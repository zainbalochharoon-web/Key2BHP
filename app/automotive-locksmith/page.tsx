import React from 'react';

export default function AutomotiveLocksmithPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Automotive Locksmith Services</h1>
      <p className="text-lg mb-4">
        Professional automotive locksmith services for all vehicle types.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Car Key Programming</h2>
          <p>Expert programming of transponder keys and remote fobs.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Emergency Unlock</h2>
          <p>24/7 emergency car unlock services when you're locked out.</p>
        </div>
      </div>
    </div>
  );
}
