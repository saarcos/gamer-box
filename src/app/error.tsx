'use client';

import { AlertTriangle, RotateCcw } from 'lucide-react';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex items-center justify-center h-screen bg-[#16181d]/90 text-white px-4">
      <div className="max-w-md w-full bg-gradient-to-b from-[#1A102B]/80 to-[#0A0015]/90 border border-indigo-500/20 shadow-2xl rounded-2xl p-8 space-y-6 text-center">
        <div className="flex justify-center">
          <AlertTriangle className="w-12 h-12 text-yellow-400" />
        </div>
        <h2 className="text-2xl font-semibold text-indigo-100">Something went wrong</h2>
        <p className="text-sm text-gray-400">{error.message}</p>
        <button
          onClick={() => reset()}
          className="cursor-pointer inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-indigo-500/30 text-indigo-200 bg-indigo-500/10 hover:bg-indigo-500/20 transition-all duration-200"
        >
          <RotateCcw className="w-4 h-4" />
          Try again
        </button>
      </div>
    </div>
  );
}
