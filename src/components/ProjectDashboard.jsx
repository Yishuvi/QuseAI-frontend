import { Settings, Bell, Plus } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProjectDashboard() {
  const [projects] = useState([
    {
      id: 1,
      name: "Sample Project",
      initials: "SP",
      color: "bg-orange-400",
      files: 6,
      lastUpdated: "Oct 06/2023",
      shared: "2"
    }
  ]);

  const navigate = useNavigate();

  const handleCreateProject = () => {
    navigate("/QuesAIPodcast");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-purple-600 mr-2">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 16.5C9 15.837 9.26522 15.2011 9.73744 14.7322C10.2097 14.2634 10.8489 14 11.5152 14H12.4848C13.1511 14 13.7903 14.2634 14.2626 14.7322C14.7348 15.2011 15 15.837 15 16.5C15 17.163 14.7348 17.7989 14.2626 18.2678C13.7903 18.7366 13.1511 19 12.4848 19H11.5152C10.8489 19 10.2097 18.7366 9.73744 18.2678C9.26522 17.7989 9 17.163 9 16.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15 7.5C15 8.163 14.7348 8.79893 14.2626 9.26777C13.7903 9.73661 13.1511 10 12.4848 10H11.5152C10.8489 10 10.2097 9.73661 9.73744 9.26777C9.26522 8.79893 9 8.163 9 7.5C9 6.83696 9.26522 6.20107 9.73744 5.73223C10.2097 5.26339 10.8489 5 11.5152 5H12.4848C13.1511 5 13.7903 5.26339 14.2626 5.73223C14.7348 6.20107 15 6.83696 15 7.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5 12C5 11.337 5.26522 10.7011 5.73744 10.2322C6.20967 9.76339 6.84892 9.5 7.51517 9.5H8.48483C9.15108 9.5 9.79033 9.76339 10.2626 10.2322C10.7348 10.7011 11 11.337 11 12C11 12.663 10.7348 13.2989 10.2626 13.7678C9.79033 14.2366 9.15108 14.5 8.48483 14.5H7.51517C6.84892 14.5 6.20967 14.2366 5.73744 13.7678C5.26522 13.2989 5 12.663 5 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="font-bold text-2xl">
              <span className="text-purple-600">Ques.</span>
              <span className="text-purple-400">AI</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-gray-900">
              <Settings size={24} />
            </button>
            <button className="text-gray-700 hover:text-gray-900">
              <Bell size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-purple-600">Projects</h1>
          <button 
          onClick={handleCreateProject}
          className="bg-gray-900 text-white px-4 py-2 rounded-lg flex items-center">
            <Plus size={20} className="mr-2" />
            Create New Project
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(project => (
  <div key={project.id} className="border border-gray-200 rounded-lg p-4 cursor-pointer hover:shadow-md transition-shadow">
    <div className="flex items-start mb-4">
      <div className={`${project.color} rounded-lg w-20 h-20 flex items-center justify-center mr-4`}>
        <span className="text-white text-4xl font-bold">{project.initials}</span>
      </div>
      <div>
        <h3 className="text-purple-600 font-semibold text-lg">{project.name}</h3>
        <p className="text-gray-500">{project.files} Files</p>
      </div>
    </div>
    <div className="text-gray-400 text-sm">
      Last updated: {project.lastUpdated} • Shared: {project.shared}
    </div>
  </div>
))}
        </div>
      </main>

      
    </div>
  );
}