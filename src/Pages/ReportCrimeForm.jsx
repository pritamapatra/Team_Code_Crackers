import React, { useState } from 'react';
import { Camera, MapPin, File, ChevronLeft, AlertTriangle, X, Upload, Info } from 'lucide-react';

const ReportCrimeForm = () => {
  const [files, setFiles] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [crimeType, setCrimeType] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");

  const crimeTypes = [
    "Theft",
    "Vandalism",
    "Suspicious Activity",
    "Drug-Related",
    "Assault",
    "Fraud",
    "Other"
  ];

  const handleFileUpload = (e) => {
    const newFiles = Array.from(e.target.files);
    setFiles(prev => [...prev, ...newFiles]);
  };

  const removeFile = (index) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("crimeType", crimeType);
    formData.append("description", description);
    formData.append("location", location);
    files.forEach((file, index) => {
      formData.append(`file${index}`, file);
    });

    try {
      const response = await fetch("YOUR_LOGIC_APP_URL", {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        alert("Report submitted successfully!");
        setCrimeType("");
        setDescription("");
        setLocation("");
        setFiles([]);
      } else {
        alert("Failed to submit report.");
      }
    } catch (error) {
      alert("An error occurred while submitting the report.");
    }

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      {/* Header */}
      <div className="max-w-2xl mx-auto mb-6">
        <div className="flex items-center gap-4 mb-6">
          <button className="hover:bg-gray-800 p-2 rounded-full transition-colors">
            <ChevronLeft size={24} />
          </button>
          <h1 className="text-2xl font-bold">Report a Crime</h1>
        </div>

        {/* Anonymous Notice */}
        <div className="bg-blue-900/30 border border-blue-500/20 rounded-lg p-4 mb-6 flex items-start gap-3">
          <Info className="text-blue-400 shrink-0 mt-1" size={20} />
          <p className="text-sm text-blue-100">
            Your report is completely anonymous. No personal information will be collected.
          </p>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
        {/* Crime Type */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">
            Crime Type
          </label>
          <select 
            value={crimeType}
            onChange={(e) => setCrimeType(e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            required
          >
            <option value="">Select crime type</option>
            {crimeTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        {/* Description */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 h-32 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="Provide as much detail as possible..."
            required
          />
        </div>

        {/* Evidence Upload */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">
            Attach Evidence
          </label>
          <div className="grid grid-cols-2 gap-4">
            <div 
              className="relative border-2 border-dashed border-gray-700 rounded-lg p-4 text-center hover:border-blue-500 transition-colors cursor-pointer group"
            >
              <input
                type="file"
                accept="image/*,video/*"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                onChange={handleFileUpload}
                multiple
              />
              <Camera className="mx-auto mb-2 text-gray-400 group-hover:text-blue-500 transition-colors" />
              <span className="text-sm text-gray-400 group-hover:text-blue-500 transition-colors">
                Photos/Videos
              </span>
            </div>
            <div 
              className="relative border-2 border-dashed border-gray-700 rounded-lg p-4 text-center hover:border-blue-500 transition-colors cursor-pointer group"
            >
              <input
                type="file"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                onChange={handleFileUpload}
                multiple
              />
              <File className="mx-auto mb-2 text-gray-400 group-hover:text-blue-500 transition-colors" />
              <span className="text-sm text-gray-400 group-hover:text-blue-500 transition-colors">
                Documents
              </span>
            </div>
          </div>

          {/* File Preview */}
          {files.length > 0 && (
            <div className="mt-4 space-y-2">
              {files.map((file, index) => (
                <div key={index} className="flex items-center justify-between bg-gray-800 p-2 rounded-lg">
                  <span className="text-sm truncate">{file.name}</span>
                  <button
                    type="button"
                    onClick={() => removeFile(index)}
                    className="text-gray-400 hover:text-red-400 transition-colors"
                  >
                    <X size={18} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Location */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">
            Location
          </label>
          <div className="relative">
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              type="text"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 pl-10 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="Enter location or use current location"
              required
            />
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white p-4 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-8 flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              Submit Report
              <AlertTriangle className="w-5 h-5" />
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ReportCrimeForm;
