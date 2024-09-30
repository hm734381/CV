"use client"; // Marking this component as a Client Component

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter
import Sidebar from '../components/Sidebar'; // Adjust the import path if necessary
import { FileText, Plus } from 'lucide-react';
import CreateResume from './components/CreateResume'; // Import CreateResume
import ResumeConfirmation from './components/ResumeConfirmation'; // Import ResumeConfirmation
import ResumeList from './components/ResumeList';
import AdditionalDataEntry from './components/AdditionalDataEntry'; // Import AdditionalDataEntry

interface ResumeData {
  title: string;
  lastModified: string;
  location: string;
  rate: string;
  workPreference: string;
  visaStatus: string;
  jobDescription: string;
  role: string;
  name: string;
  contactInfo: string;
  summary: string;
  skills: string[];
  // Add any other missing properties here
}

export default function Resumes() {
  const router = useRouter(); // Initialize router
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility
  const [currentStep, setCurrentStep] = useState<'create' | 'confirm' | 'additional'>('create'); // Track the current step
  const [resumeData, setResumeData] = useState<ResumeData | null>(null); // Store resume data

  const [resumes, setResumes] = useState([
    { id: 1, title: "Software Engineer Resume", lastModified: "2024-09-28" },
    { id: 2, title: "Product Manager CV", lastModified: "2024-09-27" },
    { id: 3, title: "Data Analyst Resume", lastModified: "2024-09-26" },
  ]);

  const handleCreateResumeClick = () => {
    setIsModalOpen(true);
    setCurrentStep('create');
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentStep('create');
  };

  const handleNext = (data: ResumeData) => {
    setResumeData(data);
    setCurrentStep('confirm');
  };

  const handleConfirm = (data: ResumeData) => {
    setResumeData(data);
    setCurrentStep('additional');
  };

  const handleDeleteResume = (id: number) => {
    const updatedResumes = resumes.filter(resume => resume.id !== id);
    setResumes(updatedResumes);

    // Check if there are no resumes left
    if (updatedResumes.length === 0) {
      router.push('/resumes'); // Redirect to the main resumes page
    }
  };

  const handleFileUpload = (file: File) => {
    // Handle file upload logic here
  };

  const handleAddResume = (newResume: ResumeData) => {
    console.log("handleAddResume called with:", newResume);
    setResumes((prevResumes) => {
      const updatedResumes = [
        ...prevResumes,
        { id: Date.now(), ...newResume },
      ];
      console.log("Updated resumes:", updatedResumes);
      return updatedResumes;
    });
    setIsModalOpen(false);
    setCurrentStep('create');
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar activePage="/resumes" />
      <main className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-semibold text-gray-800">My Resumes</h2>
            {resumes.length > 0 && ( // Only show this button if there are resumes
              <button
                className="px-4 py-2 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition duration-300 flex items-center"
                onClick={handleCreateResumeClick}
              >
                <Plus className="w-5 h-5 mr-2" />
                Create New Resume
              </button>
            )}
          </div>

          {resumes.length > 0 ? (
            <ResumeList 
              resumes={resumes.map(resume => ({ 
                ...resume, 
                id: resume.id.toString()
              }))} 
              onDelete={handleDeleteResume} 
            />
          ) : (
            <div className="text-center py-12">
              <FileText className="w-16 h-16 mx-auto text-gray-400" />
              <h3 className="mt-4 text-xl font-medium text-gray-700">No resumes found</h3>
              <p className="mt-1 text-gray-500">Let's create your first resume!</p>
              <button
                className="mt-6 px-6 py-2 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition duration-300"
                onClick={handleCreateResumeClick}
              >
                Create Resume
              </button>
            </div>
          )}

          {isModalOpen && currentStep === 'create' && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="fixed inset-0 bg-black opacity-50" onClick={handleCloseModal} />
              <CreateResume 
                onClose={handleCloseModal} 
                onFileUpload={handleFileUpload} 
                onNext={handleNext}
              /> 
            </div>
          )}

          {currentStep === 'confirm' && resumeData && (
            <ResumeConfirmation
              initialData={resumeData}
              onConfirm={handleConfirm}
              onCancel={handleCloseModal}
            />
          )}

          {currentStep === 'additional' && (
            <AdditionalDataEntry 
              onClose={handleCloseModal} 
              onSubmit={handleAddResume}
            />
          )}
        </div>
      </main>
    </div>
  );
}