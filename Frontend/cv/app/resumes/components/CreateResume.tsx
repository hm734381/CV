import React from 'react';
import { Upload, Sparkles, X } from 'lucide-react'; // Import the X icon

interface CreateResumeProps {
  onClose: () => void; // Define the type for onClose
  onFileUpload: (file: File) => void; // Define the type for onFileUpload
  onNext: (data: any) => void; // Update the function to accept an argument
}

export default function CreateResume({ onClose, onFileUpload, onNext }: CreateResumeProps) {
  const handleNextClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault(); // Prevent default behavior
    const mockData = {
      name: "John Doe",
      contactInfo: "123 Main St., Cityville, USA | (123) 456-7890 | john.doe@email.com | linkedin.com/in/johndoe",
      summary: "A dedicated and result-driven professional with 5+ years of experience in software development, specializing in full-stack development.",
      skills: ["JavaScript", "React", "Node.js"],
      experience: ["Software Engineer at Company A", "Junior Developer at Company B"],
      education: ["B.Sc. in Computer Science"],
      certifications: ["AWS Certified Solutions Architect"],
      projects: ["Project A", "Project B"],
      volunteerWork: ["Mentor at Code for Good"],
    };
    onNext(mockData); // Call the onNext function with mock data
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md z-10 relative">
      <button
        className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 transition duration-300"
        onClick={onClose}
      >
        <X className="w-5 h-5" />
      </button>
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Create New Resume</h2>
      
      <div className="bg-gray-50 p-6 rounded-md mb-6">
        <div className="flex items-center mb-4">
          <Upload className="w-5 h-5 mr-2 text-gray-600" />
          <span className="text-gray-700 font-medium">Upload Your Resume (optional)</span>
        </div>
        <div className="border-2 border-dashed border-gray-300 rounded-md p-4 text-center cursor-pointer hover:border-teal-500 transition duration-300">
          <p className="text-gray-500">Drag and drop file here or click to select</p>
        </div>
        <div className="mt-4 flex items-center">
          <input type="checkbox" id="defaultResume" className="rounded text-teal-600 focus:ring-teal-500 mr-2" />
          <label htmlFor="defaultResume" className="text-sm text-gray-600">Save As Default Resume</label>
        </div>
      </div>
      
      <div className="mb-6">
        <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-2">
          What is your desired job title?
        </label>
        <input
          type="text"
          id="jobTitle"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          placeholder="e.g. Backend Software Engineer"
        />
      </div>
      
      <div className="flex justify-between items-center">
        <button className="px-4 py-2 text-gray-600 hover:text-gray-800 transition duration-300" onClick={onClose}>
          Close
        </button>
        <button
          className="px-6 py-2 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition duration-300 flex items-center"
          onClick={handleNextClick} // Call the handleNextClick function
        >
          <Sparkles className="w-4 h-4 mr-2" />
          Next {/* Change button text to "Next" */}
        </button>
      </div>
    </div>
  );
}