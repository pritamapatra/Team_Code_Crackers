import React, { useState } from 'react';
import { Shield, AlertTriangle, Lock, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
      {/* Logo and Brand */}
      <div className="mb-8 text-center animate-fade-in">
        <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-blue-600 rounded-full">
          <Shield className="w-8 h-8" />
        </div>
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          SafeReport
        </h1>
      </div>

      {/* Main Content */}
      <div className="max-w-md w-full space-y-8">
        {/* Description Card */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg transform transition-all hover:scale-105">
          <h2 className="text-xl font-semibold mb-4 text-center">
            Report crimes securely & anonymously
          </h2>
          
          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <span className="px-3 py-1 bg-blue-600/20 rounded-full text-blue-400 text-sm flex items-center">
              <Lock className="w-4 h-4 mr-1" />
              Anonymous
            </span>
            <span className="px-3 py-1 bg-blue-600/20 rounded-full text-blue-400 text-sm flex items-center">
              <Shield className="w-4 h-4 mr-1" />
              Secure
            </span>
            <span className="px-3 py-1 bg-blue-600/20 rounded-full text-blue-400 text-sm flex items-center">
              <AlertTriangle className="w-4 h-4 mr-1" />
              Urgent
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="space-y-4">
          <button 
            className="w-full bg-blue-600 text-white p-4 rounded-xl font-medium transform transition-all hover:bg-blue-700 hover:shadow-xl flex items-center justify-center group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Login / Sign Up
            <ChevronRight className={`ml-2 transition-transform ${isHovered ? 'translate-x-1' : ''}`} />
          </button>
          
          <button className="w-full bg-gray-800 text-white p-4 rounded-xl font-medium transform transition-all hover:bg-gray-700"
            onClick={() => navigate('/report')}>
            Report a Crime
          </button>
        </div>

        {/* Additional Info */}
        <div className="text-center text-gray-400 text-sm">
          <p>Emergency? Call 911 immediately</p>
          <p className="mt-2">Your privacy is our priority</p>
        </div>
      </div>

      {/* App Store Badges */}
      <div className="mt-12 flex flex-wrap justify-center gap-4">
        <button className="bg-gray-800 px-6 py-3 rounded-xl flex items-center space-x-2 hover:bg-gray-700 transition-colors">
          <span>App Store</span>
        </button>
        <button className="bg-gray-800 px-6 py-3 rounded-xl flex items-center space-x-2 hover:bg-gray-700 transition-colors">
          <span>Play Store</span>
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;