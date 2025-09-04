import React from 'react';

export default function LocksmithNearMePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Locksmith Near Me</h1>
      <p className="text-lg mb-4">
        Find professional locksmith services in your local area.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Local Service</h2>
          <p>Professional locksmith services in your neighborhood.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Quick Response</h2>
          <p>Fast local response to your locksmith needs.</p>
        </div>
      </div>
    </div>
  );
}
