import { useState } from 'react';
import { ArrowUp, Upload, HelpCircle, ChevronLeft, Home, Bell, Edit } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function QuesAIPodcastUI() {
    const navigate = useNavigate();

    const handleAdd = () => {
        navigate('/quse-UI');
    };
  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">Qr</span>
            </div>
            <span className="text-xl font-bold text-purple-600">Ques<span className="text-gray-500">.AI</span></span>
          </div>
        </div>

        <div className="flex-1 overflow-auto">
          <div className="p-4 bg-purple-50 mx-4 my-4 rounded-md">
            <button 
            onClick={handleAdd}
            className="flex items-center gap-2 text-purple-600 font-medium">
              <span className="text-xl">+</span>
              <span>Add your Podcast(s)</span>
            </button>
          </div>

          <div className="px-4 py-2">
            <div className="flex items-center gap-2 py-2 text-gray-700">
              <ArrowUp className="w-5 h-5" />
              <span>Create & Repurpose</span>
            </div>

            <div className="flex items-center gap-2 py-2 text-gray-700">
              <div className="w-5 h-5 flex items-center justify-center">
                <span className="text-lg">🎧</span>
              </div>
              <span>Podcast Widget</span>
            </div>

            <div className="flex items-center gap-2 py-2 text-gray-700">
              <HelpCircle className="w-5 h-5" />
              <div className="bg-yellow-100 px-2 py-1 rounded">
                <span>Upgrade</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 p-4">
          <div className="flex items-center gap-2 py-2 text-gray-700">
            <HelpCircle className="w-5 h-5" />
            <span>Help</span>
          </div>

          <Link to="/account-settings" className="mt-4 flex items-center gap-3 cursor-pointer">
  <div className="w-8 h-8 bg-green-100 rounded-full overflow-hidden">
    <div className="w-8 h-8 flex items-center justify-center bg-green-200">
      <span className="text-xs">👤</span>
    </div>
  </div>
  <div>
    <div className="text-sm font-medium">Username</div>
    <div className="text-xs text-gray-500">username@email.com</div>
  </div>
   </Link>         
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="h-16 border-b border-gray-200 flex items-center justify-between px-6">
          <div className="flex items-center gap-2 text-gray-700">
            <Home className="w-5 h-5" />
            <span>Home Page /</span>
            <span>Sample Project /</span>
            <span className="text-purple-600">Add your podcast</span>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center">
              <Bell className="w-5 h-5 text-gray-700" />
            </button>
            <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center">
              <Edit className="w-5 h-5 text-red-400" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto p-6">
          <h1 className="text-3xl font-bold mb-6">Add Podcast</h1>
          
          <div className="grid grid-cols-3 gap-6 mb-6">
            {/* RSS Feed Card */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold mb-2">RSS Feed</h2>
                <p className="text-gray-500 text-sm">Lorem ipsum dolor sit.</p>
                <p className="text-gray-500 text-sm">Dolor ipsum sit.</p>
              </div>
              <div className="w-12 h-12 bg-orange-500 rounded-md flex items-center justify-center">
                <div className="w-6 h-6 text-white">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 15C5 16.8565 5.73754 18.6371 7.05033 19.9498C8.36312 21.2626 10.1435 22 12 22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5 8C5 7.07954 5.17611 6.17776 5.51291 5.32122C5.8497 4.46467 6.34235 3.67103 6.96642 2.98161C7.5905 2.29219 8.33294 1.71729 9.16118 1.28482C9.98942 0.85235 10.8909 0.568353 11.8167 0.444091C12.7425 0.319829 13.683 0.357806 14.5936 0.55604C15.5043 0.754273 16.3682 1.10921 17.1395 1.60207C17.9108 2.09492 18.5767 2.71628 19.1015 3.43519C19.6262 4.1541 20.0005 4.95941 20.2 5.812" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M19 12C19 12.9193 18.8189 13.8295 18.4672 14.6788C18.1154 15.5281 17.5998 16.2997 16.9497 16.9497C16.2997 17.5998 15.5281 18.1154 14.6788 18.4672C13.8295 18.8189 12.9193 19 12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 19C7 17.9391 7.42143 16.9217 8.17157 16.1716C8.92172 15.4214 9.93913 15 11 15C12.0609 15 13.0783 15.4214 13.8284 16.1716C14.5786 16.9217 15 17.9391 15 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Youtube Video Card */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold mb-2">Youtube Video</h2>
                <p className="text-gray-500 text-sm">Lorem ipsum dolor sit.</p>
                <p className="text-gray-500 text-sm">Dolor ipsum sit.</p>
              </div>
              <div className="w-12 h-12 bg-red-500 rounded-md flex items-center justify-center">
                <div className="w-6 h-6 text-white">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.54 6.42C22.4212 5.94541 22.1793 5.51057 21.8387 5.15941C21.498 4.80824 21.0707 4.55318 20.6 4.42C18.88 4 12 4 12 4C12 4 5.12 4 3.4 4.46C2.92927 4.59318 2.50197 4.84824 2.16134 5.19941C1.82071 5.55057 1.57881 5.98541 1.46 6.46C1.14521 8.20556 0.991235 9.97631 0.999999 11.75C0.988779 13.537 1.14277 15.3213 1.46 17.08C1.59 17.5398 1.83283 17.9581 2.17234 18.2945C2.51186 18.6308 2.93479 18.8738 3.4 19C5.12 19.46 12 19.46 12 19.46C12 19.46 18.88 19.46 20.6 19C21.0707 18.8668 21.498 18.6118 21.8387 18.2606C22.1793 17.9094 22.4212 17.4746 22.54 17C22.8524 15.2676 23.0063 13.5103 23 11.75C23.0112 9.96295 22.8572 8.1787 22.54 6.42Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9.75 15.02L15.5 11.75L9.75 8.48001V15.02Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Upload Files Card */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold mb-2">Upload Files</h2>
                <p className="text-gray-500 text-sm">Lorem ipsum dolor sit.</p>
                <p className="text-gray-500 text-sm">Dolor ipsum sit.</p>
              </div>
              <div className="w-12 h-12 bg-white flex items-center justify-center">
                <ArrowUp className="w-8 h-8 text-purple-600" />
              </div>
            </div>
          </div>

          {/* Upload Area */}
          <div className="border border-gray-200 rounded-lg p-12 flex flex-col items-center justify-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
              <ArrowUp className="w-8 h-8 text-purple-600" />
            </div>
            
            <p className="text-lg mb-2">Select a file or drag and drop here (Podcast Media or Transcription Text)</p>
            <p className="text-gray-500 text-sm mb-6">MP3, MOV, MP3, WAV, PDF, DOCX or TXT file</p>
            
            <button className="px-6 py-3 bg-white border-2 border-purple-500 rounded-full text-purple-600 font-semibold">
              Select File
            </button>
          </div>

          {/* Collapse button at the bottom */}
          <div className="flex justify-center mt-6">
            <button className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}