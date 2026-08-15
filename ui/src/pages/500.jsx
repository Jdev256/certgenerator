import React from 'react';
import { RefreshCw, Home, AlertTriangle } from 'lucide-react';

export default function ServerError500() {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center space-y-8 bg-slate-800/50 p-8 sm:p-10 rounded-2xl border border-slate-700/50 shadow-2xl backdrop-blur-xl relative overflow-hidden">
        
        {/* Decorative background ambient glow */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Icon Badge */}
        <div className="mx-auto w-16 h-16 bg-rose-500/10 border border-rose-500/20 rounded-2xl flex items-center justify-center text-rose-400 shadow-inner">
          <AlertTriangle className="w-8 h-8 animate-pulse" />
        </div>

        {/* Error Code & Heading */}
        <div className="space-y-3">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-rose-400 uppercase bg-rose-500/10 rounded-full border border-rose-500/20">
            Error 500
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Server went on vacation
          </h1>
          <p className="text-sm sm:text-base text-slate-400 max-w-sm mx-auto">
            Oops! Something went wrong on our servers. We are fixing the issue. Please try again in a few moments.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            onClick={handleReload}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-medium text-white bg-rose-600 hover:bg-rose-500 active:bg-rose-700 transition-all shadow-lg shadow-rose-600/25 cursor-pointer"
          >
            <RefreshCw className="w-4 h-4" />
            Try Again
          </button>
          
          <a
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-medium text-slate-300 bg-slate-700/50 hover:bg-slate-700 hover:text-white border border-slate-600/50 transition-all"
          >
            <Home className="w-4 h-4" />
            Back Home
          </a>
        </div>

        {/* Footer help text */}
        <p className="text-xs text-slate-500 pt-4 border-t border-slate-700/40">
          If this problem persists, feel free to contact our support team.
        </p>

      </div>
    </div>
  );
}
