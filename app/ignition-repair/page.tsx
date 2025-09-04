import React from 'react';

export default function IgnitionRepairPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Ignition Repair Services</h1>
      <p className="text-lg mb-4">
        Professional ignition repair and replacement for all vehicle types.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Ignition Cylinder</h2>
          <p>Expert repair and replacement of ignition cylinders.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Key Extraction</h2>
          <p>Safe extraction of broken keys from ignition.</p>
        </div>
      </div>
    </div>
  );
}
