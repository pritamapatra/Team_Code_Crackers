import React from 'react'
import { FiAlertCircle, FiBarChart2, FiFileText } from "react-icons/fi";
const Homepage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4">
    <h1 className="text-3xl font-bold mb-8 text-center">Welcome to Crime Reporting System</h1>
    <div className="grid grid-cols-1 gap-4 w-full max-w-sm">
      <button
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-2xl shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 flex items-center justify-center gap-2"
      >
        <FiAlertCircle className="text-xl" />
        Report Crime
      </button>
      <button
        className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-2xl shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-gray-900 flex items-center justify-center gap-2"
      >
        <FiBarChart2 className="text-xl" />
        Dash Board
      </button>
      <button
        className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-4 rounded-2xl shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-gray-900 flex items-center justify-center gap-2"
      >
        <FiFileText className="text-xl" />
        Report Details
      </button>
    </div>
  </div>
  )
}

export default Homepage