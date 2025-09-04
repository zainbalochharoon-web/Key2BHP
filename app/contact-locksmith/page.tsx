import React from 'react';

export default function ContactLocksmithPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Contact Your Locksmith</h1>
      <p className="text-lg mb-4">
        Get in touch with professional locksmith services today.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Phone Support</h2>
          <p>Call us for immediate locksmith assistance.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Online Contact</h2>
          <p>Contact us online for quotes and information.</p>
        </div>
      </div>
    </div>
  );
}
