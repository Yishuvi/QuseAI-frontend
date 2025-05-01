import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreateProjectPage() {
    const navigate = useNavigate();

    const handleCreateProject = () => {
        navigate('/ProjectDashboard');
    };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md">
        <div className="flex items-center text-purple-600 font-bold text-xl">
          <div className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-2">
            Q
          </div>
          Ques.AI
        </div>
        <div className="flex gap-4 text-xl text-gray-600">
          <button className="hover:text-gray-800">⚙</button>
          <button className="hover:text-gray-800">🔔</button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto mt-10 p-8 bg-white rounded-lg shadow-md text-center">
        <h1 className="text-3xl font-bold text-purple-600 mb-6">Create a New Project</h1>
        <div className="h-1 w-16 bg-purple-600 rounded mx-auto mb-6"></div>

        <div className="max-w-xs mx-auto mb-6">
          <img
            src="1.jpg"
            alt="Illustration of two people working at a desk with a computer"
            className="w-full h-auto"
          />
        </div>

        <p className="text-gray-600 mb-6 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>

        <button 
          onClick={handleCreateProject} className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded inline-flex items-center">
          <span className="text-xl mr-2">+</span>
          Create New Project
        </button>
      </main>
    </div>
  );
}