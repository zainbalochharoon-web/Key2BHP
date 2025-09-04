import React from 'react';

export default function EmergencyUnlockPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Emergency Unlock Services</h1>
      <p className="text-lg mb-4">
        Fast emergency unlock services for all types of locks and situations.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Urgent Response</h2>
          <p>Immediate response to emergency unlock situations.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">All Lock Types</h2>
          <p>Professional unlock services for any type of lock.</p>
        </div>
      </div>
    </div>
  );
}
