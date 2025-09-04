import React from 'react';

export default function SecurityUpgradePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Security Upgrade Services</h1>
      <p className="text-lg mb-4">
        Upgrade your security with modern locks and advanced systems.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Smart Locks</h2>
          <p>Installation of smart lock systems for enhanced security.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">High-Security Locks</h2>
          <p>Upgrade to high-security locks for maximum protection.</p>
        </div>
      </div>
    </div>
  );
}
