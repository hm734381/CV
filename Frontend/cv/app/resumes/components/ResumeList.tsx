import React from 'react';
import ResumeCard from './ResumeCard';

interface ResumeListProps {
  resumes: Array<{ id: string; title: string; lastModified: string }>;
  onDelete: (id: number) => void;
}

const ResumeList: React.FC<ResumeListProps> = ({ resumes, onDelete }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {resumes.map((resume) => (
        <ResumeCard 
          key={resume.id}
          id={resume.id}
          title={resume.title}
          lastModified={resume.lastModified}
          onDelete={() => onDelete(Number(resume.id))}
        />
      ))}
    </div>
  );
};

export default ResumeList;