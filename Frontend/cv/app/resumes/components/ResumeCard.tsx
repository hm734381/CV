import React from 'react';
import Link from 'next/link';
import { Trash, Download } from 'lucide-react';

interface ResumeCardProps {
  id: string;
  title: string;
  lastModified: string;
  onDelete: () => void;
}

const ResumeCard: React.FC<ResumeCardProps> = ({ id, title, lastModified, onDelete }) => {
  return (
    <Link href={`/resumes/${id}`} passHref>
      <div className="resume-card">
        <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
              <p className="text-sm text-gray-500">Last modified: {lastModified}</p>
            </div>
            <button className="text-red-500 hover:text-red-600" onClick={(e) => { e.preventDefault(); onDelete(); }}>
              <Trash size={20} />
            </button>
          </div>
          <div className="flex justify-between items-center">
            <button className="text-teal-600 hover:text-teal-700 text-sm font-medium">
              Edit
            </button>
            <button className="text-gray-600 hover:text-gray-700">
              <Download size={20} />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ResumeCard;