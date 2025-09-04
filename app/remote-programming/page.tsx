import React from 'react';

export default function RemoteProgrammingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Remote Programming Services</h1>
      <p className="text-lg mb-4">
        Professional remote key fob programming and replacement services.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Key Fob Programming</h2>
          <p>Expert programming of remote key fobs for all vehicles.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Remote Replacement</h2>
          <p>Complete remote key fob replacement and duplication.</p>
        </div>
      </div>
    </div>
  );
}
