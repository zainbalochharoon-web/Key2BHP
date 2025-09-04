import React from 'react';

export default function SecuritySystemsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Security Systems Installation</h1>
      <p className="text-lg mb-4">
        Advanced security system installation and maintenance services.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">CCTV Systems</h2>
          <p>Professional installation of surveillance and monitoring systems.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Alarm Systems</h2>
          <p>Comprehensive alarm system installation and monitoring.</p>
        </div>
      </div>
    </div>
  );
}
