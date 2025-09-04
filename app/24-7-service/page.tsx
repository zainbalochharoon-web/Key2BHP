import React from 'react';

export default function TwentyFourSevenServicePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">24/7 Emergency Service</h1>
      <p className="text-lg mb-4">
        Round-the-clock locksmith services available whenever you need us.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Emergency Response</h2>
          <p>Fast emergency response to lockout situations.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Always Available</h2>
          <p>Professional locksmith services available 24/7.</p>
        </div>
      </div>
    </div>
  );
}
