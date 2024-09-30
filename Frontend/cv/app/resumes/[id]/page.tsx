"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import { FileText, Mail, Download, Share2, Edit } from 'lucide-react';

// Mockup data
const mockResumes = {
  '1': {
    name: 'John Doe',
    title: 'Software Engineer Resume',
    position: 'Software Engineer',
    summary: 'Experienced software engineer with a passion for creating efficient and scalable applications.',
    skills: ['JavaScript (React, Node.js)', 'Python (Django)', 'SQL and NoSQL databases', 'Cloud platforms (AWS, GCP)'],
    experience: [
      {
        title: 'Senior Software Engineer',
        company: 'Tech Co.',
        duration: '2018 - Present',
        description: 'Led development of microservices architecture, improving system scalability by 40%.'
      }
    ],
    coverLetter: `Dear Hiring Manager,

I am writing to express my strong interest in the Software Engineer position at Your Company. With over 5 years of experience in developing scalable web applications and a deep passion for innovative technologies, I believe I would be a valuable addition to your team.

In my current role as a Senior Software Engineer at Tech Co., I have successfully led the development of a microservices architecture that improved our system's scalability by 40%. This experience, combined with my expertise in JavaScript, Python, and cloud platforms, aligns perfectly with the requirements outlined in your job description.

I am particularly excited about the opportunity to contribute to Your Company's mission of revolutionizing the tech industry. Your focus on innovation and commitment to excellence resonates strongly with my personal and professional values.

Thank you for considering my application. I look forward to the opportunity to discuss how my skills and experiences can contribute to the success of Your Company.

Sincerely,
John Doe`
  },
  // Add more mock resumes as needed
};

export default function ResumeAndCoverLetterPage() {
  const params = useParams();
  const id = params.id as string;

  const resumeData = mockResumes[id] || mockResumes['1']; // Default to first resume if ID not found

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">{resumeData.title}</h1>
      
      <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
        {/* Resume Section */}
        <div className="flex-1 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-teal-600 text-white p-4 flex justify-between items-center">
            <h2 className="text-xl font-semibold flex items-center">
              <FileText className="w-6 h-6 mr-2" />
              Generated Resume
            </h2>
            <div className="flex space-x-2">
              <button className="p-2 hover:bg-teal-700 rounded-full transition-colors duration-200" aria-label="Edit Resume">
                <Edit className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-teal-700 rounded-full transition-colors duration-200" aria-label="Download Resume">
                <Download className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-teal-700 rounded-full transition-colors duration-200" aria-label="Share Resume">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-2">{resumeData.name}</h3>
            <p className="text-gray-600 mb-4">{resumeData.position}</p>
            <div className="space-y-4">
              <section>
                <h4 className="font-medium text-teal-600 mb-2">Summary</h4>
                <p className="text-gray-700">{resumeData.summary}</p>
              </section>
              <section>
                <h4 className="font-medium text-teal-600 mb-2">Skills</h4>
                <ul className="list-disc list-inside text-gray-700">
                  {resumeData.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </section>
              <section>
                <h4 className="font-medium text-teal-600 mb-2">Experience</h4>
                {resumeData.experience.map((exp, index) => (
                  <div key={index} className="mb-2">
                    <h5 className="font-medium">{exp.title} at {exp.company}</h5>
                    <p className="text-gray-600">{exp.duration}</p>
                    <p className="text-gray-700">{exp.description}</p>
                  </div>
                ))}
              </section>
            </div>
          </div>
        </div>

        {/* Cover Letter Section */}
        <div className="flex-1 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
            <h2 className="text-xl font-semibold flex items-center">
              <Mail className="w-6 h-6 mr-2" />
              Cover Letter
            </h2>
            <div className="flex space-x-2">
              <button className="p-2 hover:bg-blue-700 rounded-full transition-colors duration-200" aria-label="Edit Cover Letter">
                <Edit className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-blue-700 rounded-full transition-colors duration-200" aria-label="Download Cover Letter">
                <Download className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-blue-700 rounded-full transition-colors duration-200" aria-label="Share Cover Letter">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="p-6">
            {resumeData.coverLetter.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-gray-700 mb-4">{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}