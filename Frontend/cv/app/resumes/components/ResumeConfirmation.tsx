import React, { useState } from 'react';
import { Check, X, Edit2, User, Mail, FileText, Briefcase, GraduationCap, Award, FolderPlus, Heart } from 'lucide-react';

interface ResumeData {
  name: string;
  contactInfo: string;
  summary: string;
  skills: string[];
  experience: string[];
  education: string[];
  certifications: string[];
  projects: string[];
  volunteerWork: string[];
}

// Mockup data for demonstration
const mockupData: ResumeData = {
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

interface ResumeConfirmationProps {
  initialData?: ResumeData;
  onConfirm: (data) => void; // Define the type for onConfirm
  onCancel: () => void;  // Define the type for onCancel
}

export default function ResumeConfirmation({ initialData = mockupData, onConfirm, onCancel }: ResumeConfirmationProps) {
  const [data, setData] = useState<ResumeData>(initialData);
  const [editingField, setEditingField] = useState<string | null>(null);

  const handleEdit = (field: string) => {
    setEditingField(field);
  };

  const handleSave = (field: string, value: string | string[]) => {
    setData({ ...data, [field]: value });
    setEditingField(null);
  };

  const renderEditableField = (field: string, value: string | string[]) => {
    if (editingField === field) {
      return (
        <div className="mt-2">
          {Array.isArray(value) ? (
            <textarea
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              value={value.join('\n')}
              onChange={(e) => handleSave(field, e.target.value.split('\n').filter(item => item.trim() !== ''))}
              rows={5}
            />
          ) : (
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              value={value}
              onChange={(e) => handleSave(field, e.target.value)}
            />
          )}
        </div>
      );
    }
    return (
      <div className="mt-2 text-gray-700">
        {Array.isArray(value) ? (
          value.map((item, index) => <p key={index}>{item}</p>)
        ) : (
          <p>{value}</p>
        )}
      </div>
    );
  };

  const getIcon = (field: string) => {
    switch (field) {
      case 'name': return <User className="w-5 h-5 mr-2" />;
      case 'contactInfo': return <Mail className="w-5 h-5 mr-2" />;
      case 'summary': return <FileText className="w-5 h-5 mr-2" />;
      case 'skills': return <Award className="w-5 h-5 mr-2" />;
      case 'experience': return <Briefcase className="w-5 h-5 mr-2" />;
      case 'education': return <GraduationCap className="w-5 h-5 mr-2" />;
      case 'certifications': return <Award className="w-5 h-5 mr-2" />;
      case 'projects': return <FolderPlus className="w-5 h-5 mr-2" />;
      case 'volunteerWork': return <Heart className="w-5 h-5 mr-2" />;
      default: return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800">Confirm Your Resume Information</h2>
        </div>
        
        <div className="overflow-y-auto flex-grow p-6">
          {Object.entries(data).map(([field, value]) => (
            <div key={field} className="mb-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-700 capitalize flex items-center">
                  {getIcon(field)}
                  {field.replace(/([A-Z])/g, ' $1').trim()}
                </h3>
                <button
                  onClick={() => handleEdit(field)}
                  className="text-teal-600 hover:text-teal-700 transition duration-300"
                >
                  <Edit2 className="w-5 h-5" />
                </button>
              </div>
              {renderEditableField(field, value)}
            </div>
          ))}
        </div>
        
        <div className="p-6 border-t border-gray-200 flex justify-end space-x-4">
          <button
            onClick={onCancel}
            className="px-6 py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100 transition duration-300 flex items-center"
          >
            <X className="w-5 h-5 inline-block mr-2" />
            Cancel
          </button>
          <button
            onClick={() => onConfirm(data)} // Ensure onConfirm accepts data
            className="px-6 py-2 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition duration-300 flex items-center"
          >
            <Check className="w-5 h-5 inline-block mr-2" />
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}