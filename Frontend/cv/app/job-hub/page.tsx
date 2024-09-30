import React from 'react';
import Sidebar from '../components/Sidebar'; // Adjust the import path if necessary
import { Home } from 'lucide-react';

export default function JobHub() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar activePage="/job-hub" />
      <main className="flex-1 p-8">
        <h2 className="text-3xl font-semibold text-gray-800">Job Hub</h2>
        <p className="mt-2 text-gray-600">Explore job listings here.</p>
      </main>
    </div>
  );
}