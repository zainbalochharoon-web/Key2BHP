import React from 'react';

export default function MobileLocksmithPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Mobile Locksmith Services</h1>
      <p className="text-lg mb-4">
        Professional mobile locksmith services that come to your location.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">On-Site Service</h2>
          <p>We come to you for all your locksmith needs.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Fast Response</h2>
          <p>Quick response times to your location.</p>
        </div>
      </div>
    </div>
  );
}
