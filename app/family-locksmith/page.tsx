import React from 'react';

export default function FamilyLocksmithPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Family Locksmith Business</h1>
      <p className="text-lg mb-4">
        Trusted family-owned locksmith services for generations.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Family Values</h2>
          <p>Built on trust, reliability, and family values.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Local Community</h2>
          <p>Serving our local community with pride.</p>
        </div>
      </div>
    </div>
  );
}
