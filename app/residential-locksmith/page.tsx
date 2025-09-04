import React from 'react';

export default function ResidentialLocksmithPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Residential Locksmith Services</h1>
      <p className="text-lg mb-4">
        Professional residential locksmith services for your home security needs.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Home Lock Installation</h2>
          <p>Expert installation of high-security locks for your home.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Lock Replacement</h2>
          <p>Replace old or damaged locks with modern security solutions.</p>
        </div>
      </div>
    </div>
  );
}
