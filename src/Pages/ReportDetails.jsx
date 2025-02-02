import React, { useState } from 'react';
import { ChevronLeft, MessageSquare, MapPin, Camera, Clock, Send, CheckCircle, ChevronRight, AlertTriangle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const ReportDetails = () => {
  const [showChat, setShowChat] = useState(false);
  const Nevigate = useNavigate();
  const report = {
    id: "CR-2024-001",
    type: "Theft",
    status: "investigating",
    description: "Black mountain bike stolen from Central Station bike rack. The bike was locked with a U-lock which appears to have been cut. Security cameras may have captured the incident.",
    location: "Central Station, Platform 3",
    date: "Feb 1, 2024",
    lastUpdate: "2 hours ago",
    evidence: [
      { type: "image", url: "/api/placeholder/400/300", caption: "Bike rack where theft occurred" },
      { type: "image", url: "/api/placeholder/400/300", caption: "Cut lock on ground" }
    ],
    timeline: [
      { date: "Feb 2, 2024 - 10:30 AM", event: "Detective assigned to case", status: "active" },
      { date: "Feb 1, 2024 - 6:45 PM", event: "Evidence review initiated", status: "completed" },
      { date: "Feb 1, 2024 - 3:20 PM", event: "Report submitted", status: "completed" }
    ]
  };

  const ChatSection = () => (
    <div className={`fixed inset-x-0 bottom-0 bg-gray-900 transform transition-transform duration-300 ${showChat ? 'translate-y-0' : 'translate-y-full'}`}>
      <div className="max-w-2xl mx-auto p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold">Chat with Investigator</h3>
          <button onClick={() => setShowChat(false)} className="text-gray-400">
            <ChevronRight />
          </button>
        </div>
        
        <div className="h-64 overflow-y-auto mb-4 space-y-4">
          <div className="flex justify-end">
            <div className="bg-blue-600 rounded-lg p-3 max-w-xs">
              <p className="text-sm">Is there any update on the investigation?</p>
              <span className="text-xs text-blue-200">2:30 PM</span>
            </div>
          </div>
          
          <div className="flex justify-start">
            <div className="bg-gray-800 rounded-lg p-3 max-w-xs">
              <p className="text-sm">We're currently reviewing security footage. Will update you soon.</p>
              <span className="text-xs text-gray-400">2:35 PM</span>
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 bg-gray-800 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <button className="p-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white pb-20">
      {/* Header */}
      <div className="sticky top-0 bg-gray-900/95 backdrop-blur-sm z-10 p-4 border-b border-gray-800">
        <div className="max-w-2xl mx-auto flex items-center gap-4">
          <button className="hover:bg-gray-800 p-2 rounded-full transition-colors"
          onClick={() => Nevigate('/')}>
            <ChevronLeft size={24} />
          </button>
          <div>
            <h1 className="text-xl font-bold">Report Details</h1>
            <p className="text-sm text-gray-400">{report.id}</p>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto p-4 space-y-6">
        {/* Status Banner */}
        <div className="bg-yellow-500/20 text-yellow-400 p-4 rounded-lg flex items-center gap-3">
          <AlertTriangle />
          <div>
            <p className="font-medium">Under Investigation</p>
            <p className="text-sm">Last updated {report.lastUpdate}</p>
          </div>
        </div>

        {/* Main Details */}
        <div className="bg-gray-800 rounded-lg p-4 space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">{report.type}</h2>
            <p className="text-gray-300">{report.description}</p>
          </div>

          <div className="flex items-center gap-2 text-gray-400">
            <MapPin size={18} />
            <span>{report.location}</span>
          </div>
        </div>

        {/* Evidence */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Evidence</h3>
          <div className="grid grid-cols-2 gap-4">
            {report.evidence.map((item, index) => (
              <div key={index} className="bg-gray-800 rounded-lg overflow-hidden group cursor-pointer">
                <div className="relative">
                  <img 
                    src={item.url} 
                    alt={item.caption}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                    <p className="text-sm text-white">{item.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Investigation Timeline</h3>
          <div className="space-y-4">
            {report.timeline.map((event, index) => (
              <div key={index} className="flex gap-3">
                <div className={`w-1 ${event.status === 'active' ? 'bg-yellow-500' : 'bg-blue-500'} rounded relative`}>
                  <div className={`absolute -left-2 top-0 w-5 h-5 rounded-full border-2 ${
                    event.status === 'active' ? 'border-yellow-500 bg-yellow-500/20' : 'border-blue-500 bg-blue-500/20'
                  } flex items-center justify-center`}>
                    {event.status === 'completed' && <CheckCircle size={12} className="text-blue-500" />}
                    {event.status === 'active' && <Clock size={12} className="text-yellow-500" />}
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-400">{event.date}</p>
                  <p className="font-medium">{event.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Chat Button */}
      <button 
        onClick={() => setShowChat(true)}
        className="fixed bottom-6 right-6 bg-blue-600 px-4 py-2 rounded-full flex items-center gap-2 shadow-lg hover:bg-blue-700 transition-colors"
      >
        <MessageSquare size={20} />
        Chat with Investigator
      </button>

      {/* Chat Section */}
      <ChatSection />
    </div>
  );
};

export default ReportDetails;