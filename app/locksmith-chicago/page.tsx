import React from 'react';

export default function LocksmithChicagoPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Chicago Locksmith Services</h1>
      <p className="text-lg mb-4">
        Professional locksmith services throughout Chicago and suburbs.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Downtown Chicago</h2>
          <p>Locksmith services in downtown Chicago area.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Chicago Suburbs</h2>
          <p>Professional locksmith services in Chicago suburbs.</p>
        </div>
      </div>
    </div>
  );
}
