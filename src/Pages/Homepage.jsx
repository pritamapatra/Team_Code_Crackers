import React from 'react'
import { Shield, AlertTriangle, Lock, ChevronRight } from 'lucide-react';
import { FiAlertCircle, FiBarChart2, FiFileText } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
const Homepage = () => {
     const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4">
        {/* Logo and Brand */}
              <div className="mb-8 text-center animate-fade-in">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-blue-600 rounded-full">
                  <Shield className="w-8 h-8" />
                </div>
                <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  SafeReport
                </h1>
              </div>
    {/*<h1 className="text-3xl font-bold mb-8 text-center">Welcome to Crime Reporting System</h1> */}
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
    <div className="grid grid-cols-1 gap-4 w-full max-w-sm">
      <button
        className="w-full bg-green-500 mt-5 hover:bg-green-600 text-white font-semibold py-6 px-4 rounded-2xl shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 flex items-center justify-center gap-2"
        onClick={() => navigate('/report')}>
        <FiAlertCircle className="text-xl" />
        Report Crime
      </button>
      <button
        className="w-full bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-4 rounded-2xl shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-gray-900 flex items-center justify-center gap-2"
       onClick={() => navigate('/dashboard')}>
        <FiBarChart2 className="text-xl" />
        Dash Board
      </button>
      <button
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-2xl shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-gray-900 flex items-center justify-center gap-2"
        onClick={()=> navigate('/report/:id')} >
        <FiFileText className="text-xl" />
        Report Details
      </button>
    </div>
    {/* Additional Info */}
    <div className="text-center text-gray-400 text-sm mt-9">
          <p>Emergency? Call 911 immediately</p>
          <p className="mt-2">Your privacy is our priority</p>
        </div>
  </div>
  )
}

export default Homepage