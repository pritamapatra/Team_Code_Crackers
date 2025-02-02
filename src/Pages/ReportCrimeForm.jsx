import React, { useState } from 'react';
import { Camera, MapPin, File, ChevronLeft, AlertTriangle, X, Upload, Info } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ReportCrimeForm = () => {
    const [files, setFiles] = useState([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [location, setLocation] = useState(''); // State for location
    const [description, setDescription] = useState(''); // State for description
    const [crimeType, setCrimeType] = useState(''); // State for crime type
    const navigate = useNavigate();

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

        try {
            const response = await fetch('<your_logic_app_url>', { // Replace with your Logic App URL
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 
                    location, 
                    description, 
                    crimeType // Include crime type in the request
                 })
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Success:', data);
                // Handle success (e.g., reset the form, show a message)
                setLocation('');
                setDescription('');
                setCrimeType(''); // Reset crime type as well
                setFiles([]); // Clear file uploads
                alert("Report submitted successfully!");
            } else {
                console.error('Error:', response.status);
                const errorData = await response.json();
                alert(`Error submitting report: ${errorData?.message || response.statusText}`);
            }
        } catch (error) {
            console.error('Error:', error);
            alert("An error occurred while submitting the report.");
        } finally {
            setIsSubmitting(false); // Set isSubmitting to false regardless of success or failure
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white p-4">
            {/* ... (rest of your JSX) */}

            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
                {/* Crime Type */}
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-300">
                        Crime Type
                    </label>
                    <select
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        required
                        value={crimeType} // Bind the value to the state
                        onChange={(e) => setCrimeType(e.target.value)} // Update state on change
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
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 h-32 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Provide as much detail as possible..."
                        required
                        value={description} // Bind the value to the state
                        onChange={(e) => setDescription(e.target.value)} // Update state on change
                    />
                </div>

                {/* ... (rest of your JSX) */}

                {/* Location */}
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-300">
                        Location
                    </label>
                    <div className="relative">
                        <input
                            type="text"
                            className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 pl-10 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            placeholder="Enter location or use current location"
                            required
                            value={location} // Bind the value to the state
                            onChange={(e) => setLocation(e.target.value)} // Update state on change
                        />
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    </div>
                </div>

                {/* ... (rest of your JSX) */}

            </form>
        </div>
    );
};

export default ReportCrimeForm;