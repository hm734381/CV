import React, { useState } from 'react';
import { X, Briefcase, UserCircle, FileText, Sparkles } from 'lucide-react';

interface JobDescriptionModalProps {
  onClose: () => void; // Prop to handle closing the modal
  onGenerate: (jobDescription: string, role: string) => void; // Prop to handle the generate action
}

const JobDescriptionModal: React.FC<JobDescriptionModalProps> = ({ onClose, onGenerate }) => {
  const [jobDescription, setJobDescription] = useState('');
  const [role, setRole] = useState('');

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl transform transition-all duration-300 ease-in-out">
        <div className="p-6 sm:p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800 flex items-center">
              <Briefcase className="w-8 h-8 mr-2 text-teal-600" />
              Job Description and Role
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="space-y-6">
            <div>
              <label htmlFor="jobDescription" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                <FileText className="w-5 h-5 mr-2 text-teal-600" />
                Job Description
              </label>
              <textarea
                id="jobDescription"
                className="w-full h-40 px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-teal-500 transition-colors duration-200 resize-none"
                placeholder="Enter job description here..."
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                <UserCircle className="w-5 h-5 mr-2 text-teal-600" />
                Role
              </label>
              <input
                type="text"
                id="role"
                className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-teal-500 transition-colors duration-200"
                placeholder="Enter role here..."
                value={role}
                onChange={(e) => setRole(e.target.value)}
              />
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <button
              onClick={() => {
                console.log("Generate button clicked");
                console.log("Calling onGenerate with:", { jobDescription, role });
                onGenerate(jobDescription, role);
                console.log("onGenerate called");
              }}
              className="px-6 py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 transform transition-all duration-200 ease-in-out hover:scale-105 flex items-center"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Generate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDescriptionModal;