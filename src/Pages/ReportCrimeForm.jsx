<<<<<<< HEAD
import React, { useState } from 'react';
import { Camera, MapPin, File, ChevronLeft, AlertTriangle, X, Upload, Info } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
=======
import React, { useState } from "react";
import { Camera, MapPin, File, AlertTriangle, X } from "lucide-react";

>>>>>>> cd774b84d1b968f9066cc9fe40dbda3f4d1e7c38
const ReportCrimeForm = () => {
  const [files, setFiles] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [crimeType, setCrimeType] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  // Cosmos DB Configuration (Replace with your details)
  const COSMOS_DB_ENDPOINT = "https://your-cosmosdb.documents.azure.com:443/"; // Replace with your Cosmos DB endpoint
  const PRIMARY_KEY = "your-primary-key"; // Replace with your primary key
  const DATABASE_ID = "CrimeReportsDB"; // Replace with your database name
  const CONTAINER_ID = "Reports"; // Replace with your container name

  // Function to handle file upload
  const handleFileUpload = (e) => {
    const newFiles = Array.from(e.target.files);
    setFiles((prev) => [...prev, ...newFiles]);
  };

  // Function to remove a selected file
  const removeFile = (index) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  // Function to submit crime report to Cosmos DB
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Generate a unique ID for the report
    const reportId = `report-${Date.now()}`;

    // Prepare the data payload
    const crimeReport = {
      id: reportId, // Required for Cosmos DB
      crimeType,
      description,
      location,
      timestamp: new Date().toISOString(),
      files: files.map((file) => file.name), // Storing file names only (uploading actual files requires Blob Storage)
    };

    try {
<<<<<<< HEAD
        console.log("Crime Type: ", crimeType);
console.log("Description: ", description);
console.log("Location: ", location);
      const response = await fetch("https://prod-17.northcentralus.logic.azure.com:443/workflows/b5469829ca6b46c786ec4411010c137b/triggers/When_a_HTTP_request_is_received/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2FWhen_a_HTTP_request_is_received%2Frun&sv=1.0&sig=p7LEanmOfRxvT44dXqvWzPRSQPcZTN0dZAcbwpUCX1E", {
        method: "POST",
        body: formData
      });
=======
      const response = await fetch(
        `${COSMOS_DB_ENDPOINT}dbs/${DATABASE_ID}/colls/${CONTAINER_ID}/docs`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-ms-version": "2018-12-31",
            "x-ms-date": new Date().toUTCString(),
            "Authorization": `type=master&ver=1.0&sig=${PRIMARY_KEY}`,
          },
          body: JSON.stringify(crimeReport),
        }
      );
>>>>>>> cd774b84d1b968f9066cc9fe40dbda3f4d1e7c38

      if (response.ok) {
        alert("Report submitted successfully!");
        setCrimeType("");
        setDescription("");
        setLocation("");
        setFiles([]);
      } else {
        const errorData = await response.json();
        alert(`Failed to submit report: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error submitting report:", error);
      alert("An error occurred while submitting the report.");
    }

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="max-w-2xl mx-auto mb-6">
<<<<<<< HEAD
        <div className="flex items-center gap-4 mb-6">
          <button className="hover:bg-gray-800 p-2 rounded-full transition-colors"
          onClick={() => navigate('/')}>
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
=======
        <h1 className="text-2xl font-bold">Report a Crime</h1>
>>>>>>> cd774b84d1b968f9066cc9fe40dbda3f4d1e7c38
      </div>

      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">
            Crime Type
          </label>
          <select
            value={crimeType}
            onChange={(e) => setCrimeType(e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white"
            required
          >
            <option value="">Select crime type</option>
            {["Theft", "Vandalism", "Suspicious Activity", "Drug-Related", "Assault", "Fraud", "Other"].map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 h-32 text-white"
            placeholder="Provide details..."
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">
            Attach Evidence
          </label>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative border-2 border-dashed border-gray-700 rounded-lg p-4 text-center">
              <input type="file" accept="image/*,video/*" className="absolute inset-0 w-full h-full opacity-0" onChange={handleFileUpload} multiple />
              <Camera className="mx-auto mb-2 text-gray-400" />
              <span className="text-sm text-gray-400">Photos/Videos</span>
            </div>
            <div className="relative border-2 border-dashed border-gray-700 rounded-lg p-4 text-center">
              <input type="file" className="absolute inset-0 w-full h-full opacity-0" onChange={handleFileUpload} multiple />
              <File className="mx-auto mb-2 text-gray-400" />
              <span className="text-sm text-gray-400">Documents</span>
            </div>
          </div>

          {files.length > 0 && (
            <div className="mt-4 space-y-2">
              {files.map((file, index) => (
                <div key={index} className="flex items-center justify-between bg-gray-800 p-2 rounded-lg">
                  <span className="text-sm truncate">{file.name}</span>
                  <button type="button" onClick={() => removeFile(index)} className="text-gray-400 hover:text-red-400">
                    <X size={18} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">
            Location
          </label>
          <div className="relative">
            <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white" required />
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>
        </div>

        <button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 text-white p-4 rounded-lg font-medium">
          {isSubmitting ? "Submitting..." : "Submit Report"}
        </button>
      </form>
    </div>
  );
};

export default ReportCrimeForm;
