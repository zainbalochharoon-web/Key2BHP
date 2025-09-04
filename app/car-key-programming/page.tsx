import React from 'react';

export default function CarKeyProgrammingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Car Key Programming Services</h1>
      <p className="text-lg mb-4">
        Professional car key programming for all makes and models.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Transponder Keys</h2>
          <p>Expert programming of transponder keys for security.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Remote Keys</h2>
          <p>Programming of remote key fobs and smart keys.</p>
        </div>
      </div>
    </div>
  );
}
