import React from 'react';

export default function LockRepairPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Lock Repair Services</h1>
      <p className="text-lg mb-4">
        Expert repair services for all types of locks and security systems.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Lock Maintenance</h2>
          <p>Regular maintenance to keep your locks functioning properly.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Lock Troubleshooting</h2>
          <p>Diagnose and fix common lock problems quickly.</p>
        </div>
      </div>
    </div>
  );
}
