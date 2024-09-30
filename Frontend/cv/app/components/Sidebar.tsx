import React from 'react';
import { Home, FileText, PenTool, Users, Zap, Search, Bookmark, Globe, MessageCircle, Settings } from 'lucide-react';

interface SidebarProps {
  activePage: string;
}

const Sidebar: React.FC<SidebarProps> = ({ activePage }) => {
  const navItems = [
    { name: 'Job Hub', icon: Home, route: '/job-hub' },
    { name: 'Resumes', icon: FileText, route: '/resumes' },
    { name: 'Cover Letters', icon: PenTool, route: '/cover-letters' },
    { name: 'Job Interviews', icon: Users, route: '/job-interviews' },
    { name: 'Interview Buddy', icon: Zap, route: '/interview-buddy' },
    { name: 'Search', icon: Search, route: '/search' },
    { name: 'Saved Jobs', icon: Bookmark, route: '/saved-jobs' },
  ];

  const footerItems = [
    { name: 'Language', icon: Globe },
    { name: 'Support', icon: MessageCircle },
    { name: 'Settings', icon: Settings },
  ];

  return (
    <aside className="w-64 bg-white shadow-md">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-teal-600">resumeAI</h1>
      </div>
      <nav className="mt-6">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.route}
            className={`flex items-center px-4 py-2 text-gray-700 ${
              activePage === item.route ? 'bg-teal-50 text-teal-600' : 'hover:bg-gray-100'
            }`}
          >
            {React.createElement(item.icon, { className: "w-5 h-5 mr-3" })}
            {item.name}
          </a>
        ))}
      </nav>
      <div className="absolute bottom-0 w-64 p-4 border-t border-gray-200">
        {footerItems.map((item) => (
          <a
            key={item.name}
            href="#"
            className="flex items-center px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
          >
            {React.createElement(item.icon, { className: "w-4 h-4 mr-3" })}
            {item.name}
          </a>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;