import React, { useState } from 'react';
import { Plus, Search, Bell, ChevronRight, ChevronLeft, Clock, CheckCircle, AlertCircle, User, Filter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const Dashboard = () => {
  const [filterActive, setFilterActive] = useState(false);
const navigate = useNavigate();
  const reports = [
    {
      id: "CR-2024-001",
      type: "Theft",
      status: "investigating",
      location: "Downtown Area",
      date: "Feb 1, 2024",
      lastUpdate: "2 hours ago",
      description: "Bicycle stolen from parking area"
    },
    {
      id: "CR-2024-002",
      status: "closed",
      type: "Vandalism",
      location: "Central Park",
      date: "Jan 30, 2024",
      lastUpdate: "1 day ago",
      description: "Graffiti on public property"
    },
    {
      id: "CR-2024-003",
      type: "Suspicious Activity",
      status: "pending",
      location: "North Station",
      date: "Feb 2, 2024",
      lastUpdate: "30 minutes ago",
      description: "Suspicious behavior around ATM"
    }
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'investigating':
        return 'bg-yellow-500/20 text-yellow-400';
      case 'closed':
        return 'bg-green-500/20 text-green-400';
      case 'pending':
        return 'bg-blue-500/20 text-blue-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'investigating':
        return <Clock className="w-4 h-4" />;
      case 'closed':
        return <CheckCircle className="w-4 h-4" />;
      case 'pending':
        return <AlertCircle className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="sticky top-0 bg-gray-900/95 backdrop-blur-sm z-10">
        <div className="max-w-2xl mx-auto p-4">
          <div className="flex justify-between items-center mb-4">
          <button className="hover:bg-gray-800 p-2 rounded-full transition-colors"
          onClick={() => navigate('/')}>
            <ChevronLeft size={24} />
          </button>
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <div className="flex gap-3">
              <button className="p-2 hover:bg-gray-800 rounded-full transition-colors relative">
                <Bell size={24} />
                <span className="absolute top-0 right-0 w-2 h-2 bg-blue-500 rounded-full"></span>
              </button>
              <button className="p-2 hover:bg-gray-800 rounded-full transition-colors">
                <User size={24} />
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Search reports..."
              className="w-full bg-gray-800 rounded-lg pl-10 pr-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>

          {/* Filter Chips */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            <button
              onClick={() => setFilterActive(!filterActive)}
              className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm transition-colors ${
                filterActive ? 'bg-blue-500 text-white' : 'bg-gray-800 text-gray-300'
              }`}
            >
              <Filter size={14} />
              Filter
            </button>
            <button className="px-3 py-1 rounded-full bg-gray-800 text-gray-300 text-sm whitespace-nowrap">
              Recent First
            </button>
            <button className="px-3 py-1 rounded-full bg-gray-800 text-gray-300 text-sm whitespace-nowrap">
              Open Cases
            </button>
          </div>
        </div>
      </div>

      {/* Reports List */}
      <div className="max-w-2xl mx-auto p-4 space-y-4">
        {reports.map(report => (
          <div
            key={report.id}
            className="bg-gray-800 rounded-lg p-4 hover:bg-gray-750 transition-colors cursor-pointer group"
          >
            <div className="flex justify-between items-start mb-3">
              <div>
                <span className="text-sm text-gray-400">{report.id}</span>
                <h3 className="font-semibold">{report.type}</h3>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm flex items-center gap-1 ${getStatusColor(report.status)}`}>
                {getStatusIcon(report.status)}
                {report.status.charAt(0).toUpperCase() + report.status.slice(1)}
              </span>
            </div>
            
            <p className="text-gray-400 text-sm mb-3">{report.description}</p>
            
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-500">{report.location}</span>
              <span className="text-gray-500">{report.lastUpdate}</span>
            </div>
            
            <div className="mt-3 pt-3 border-t border-gray-700 flex justify-between items-center">
              <span className="text-sm text-gray-400">Submitted on {report.date}</span>
              <ChevronRight className="text-gray-400 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>

      {/* Floating Action Button */}
      <button className="fixed bottom-6 right-6 bg-blue-600 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors group">
        <Plus size={24} className="transform group-hover:rotate-90 transition-transform" />
      </button>
    </div>
  );
};

export default Dashboard;