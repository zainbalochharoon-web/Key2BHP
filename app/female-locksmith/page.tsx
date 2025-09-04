import React from 'react';

export default function FemaleLocksmithPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Female Locksmith Services</h1>
      <p className="text-lg mb-4">
        Professional locksmith services provided by skilled female technicians.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Skilled Technicians</h2>
          <p>Experienced female locksmiths providing quality service.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Professional Service</h2>
          <p>Same professional quality with a different perspective.</p>
        </div>
      </div>
    </div>
  );
}
