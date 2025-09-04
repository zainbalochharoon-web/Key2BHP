import React from 'react';

export default function MaleLocksmithPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Male Locksmith Services</h1>
      <p className="text-lg mb-4">
        Professional locksmith services provided by experienced male technicians.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Experienced Technicians</h2>
          <p>Skilled male locksmiths with years of experience.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Quality Workmanship</h2>
          <p>Professional locksmith services you can trust.</p>
        </div>
      </div>
    </div>
  );
}
