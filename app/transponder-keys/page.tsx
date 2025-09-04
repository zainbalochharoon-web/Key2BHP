import React from 'react';

export default function TransponderKeysPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Transponder Key Services</h1>
      <p className="text-lg mb-4">
        Professional transponder key programming and replacement services.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Key Programming</h2>
          <p>Expert programming of transponder keys for all vehicle makes.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Key Replacement</h2>
          <p>Complete transponder key replacement and duplication.</p>
        </div>
      </div>
    </div>
  );
}
