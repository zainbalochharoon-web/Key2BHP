import React from 'react';

export default function SafeInstallationPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Safe Installation Services</h1>
      <p className="text-lg mb-4">
        Professional safe installation and maintenance for your valuables.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Home Safes</h2>
          <p>Secure installation of home safes and vaults.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Business Safes</h2>
          <p>Commercial safe installation for businesses and offices.</p>
        </div>
      </div>
    </div>
  );
}
