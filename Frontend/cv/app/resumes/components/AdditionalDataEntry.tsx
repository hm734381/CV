import React, { useState } from 'react';
import { X, MapPin, DollarSign, Building, Globe } from 'lucide-react';
import JobDescriptionModal from './JobDescriptionModal'; // Rename to JobDescriptionModal

interface AdditionalDataEntryProps {
  onClose: () => void; // Prop to handle closing the modal
  onSubmit: (data: any) => void; // New prop to handle submitting additional data
}

const AdditionalDataEntry: React.FC<AdditionalDataEntryProps> = ({ onClose, onSubmit }) => {
  const [showJobDescriptionModal, setShowJobDescriptionModal] = useState(false); // State to manage job description form visibility
  const [additionalData, setAdditionalData] = useState({
    location: '',
    rate: '',
    workPreference: '',
    visaStatus: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setAdditionalData({
      ...additionalData,
      [e.target.id]: e.target.value
    });
  };

  const handleSaveInformation = () => {
    setShowJobDescriptionModal(true); // Show the job description form after saving
  };

  const handleGenerate = (jobDescription: string, role: string) => {
    const finalData = {
      ...additionalData,
      jobDescription,
      role,
      title: `${role} Resume`,
      lastModified: new Date().toISOString().split('T')[0]
    };
    onSubmit(finalData);
    onClose();
  };

  return (
    <>
      {!showJobDescriptionModal ? (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
            
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Additional Information</h2>
            
            <div className="space-y-6">
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                  <MapPin className="w-4 h-4 inline-block mr-2" />
                  Current Location
                </label>
                <input
                  type="text"
                  id="location"
                  value={additionalData.location}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="e.g. New York, NY"
                />
              </div>
              
              <div>
                <label htmlFor="rate" className="block text-sm font-medium text-gray-700 mb-2">
                  <DollarSign className="w-4 h-4 inline-block mr-2" />
                  Expected Salary/Hourly Rate
                </label>
                <input
                  type="text"
                  id="rate"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="e.g. $75,000/year or $50/hour"
                />
              </div>
              
              <div>
                <label htmlFor="workPreference" className="block text-sm font-medium text-gray-700 mb-2">
                  <Building className="w-4 h-4 inline-block mr-2" />
                  Work Preference
                </label>
                <select
                  id="workPreference"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  <option value="">Select preference</option>
                  <option value="onsite">On-site</option>
                  <option value="remote">Remote</option>
                  <option value="hybrid">Hybrid</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="visaStatus" className="block text-sm font-medium text-gray-700 mb-2">
                  <Globe className="w-4 h-4 inline-block mr-2" />
                  Work Authorization/Visa Status
                </label>
                <input
                  type="text"
                  id="visaStatus"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="e.g. US Citizen, H1B, etc."
                />
              </div>
            </div>
            
            <div className="mt-8 flex justify-end">
              <button
                className="px-6 py-2 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition duration-300"
                onClick={handleSaveInformation} // Show job description form on save
              >
                Save Information
              </button>
            </div>
          </div>
        </div>
      ) : (
        <JobDescriptionModal
          onClose={() => setShowJobDescriptionModal(false)}
          onGenerate={handleGenerate}
        />
      )}
    </>
  );
};

export default AdditionalDataEntry;