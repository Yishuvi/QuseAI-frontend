import { useState } from 'react';
import {
  ArrowLeft,
  Link as LinkIcon,
  BarChart,
  ArrowUp,
  LifeBuoy,
  Bell,
  Settings,
} from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

export default function EditTranscript() {
  const [userName, setUserName] = useState('aCreator');
  const [email, setEmail] = useState('aCreator@gmail.com');
  const [isEditing, setIsEditing] = useState(false);
  const [speakerName, setSpeakerName] = useState('Speaker');
  const [speakerText, setSpeakerText] = useState('This is the initial transcript text.');

  return (
    <div className="flex min-h-screen bg-white">
      {/* Left Sidebar */}
      <div className="w-80 border-r border-gray-200 flex flex-col">
        <div className="p-4 flex items-center">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white">
              <span className="text-xl font-semibold">Q</span>
            </div>
            <span className="ml-2 text-2xl font-bold text-purple-600">Ques.AI</span>
          </div>
        </div>

        <div className="flex-1 py-8">
          <div className="px-4 mb-8">
            <button className="text-purple-600 font-semibold flex items-center gap-2 px-6 py-3 rounded-md bg-purple-100 w-full">
              <span className="text-xl">+</span> Add your Podcast(s)
            </button>
          </div>

          <nav className="space-y-1">
            <a href="#" className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100">
              <Link className="w-5 h-5 mr-3" />
              <span className="text-base">Create & Repurpose</span>
            </a>
            <a href="#" className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100">
              <BarChart className="w-5 h-5 mr-3" />
              <span className="text-base">Podcast Widget</span>
            </a>
            <a href="#" className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100">
              <ArrowUp className="w-5 h-5 mr-3" />
              <span className="text-base">Upgrade</span>
            </a>
          </nav>

          <div className="mt-8 border-t border-gray-200 pt-6"></div>

          <div className="mt-auto px-4 py-2">
            <a href="#" className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100">
              <LifeBuoy className="w-5 h-5 mr-3" />
              <span className="text-base">Help</span>
            </a>
          </div>

          <div className="px-4 py-3 border-t border-gray-200 mt-6">
            <Link to="/account-settings" className="flex items-center">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white mr-3">
                U
              </div>
              <div>
                <div className="text-sm font-medium">Username</div>
                <div className="text-xs text-gray-500">creator-user</div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <div className="px-8 py-4 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="text-gray-500 hover:text-gray-700">Home</a>
            <span className="mx-2 text-gray-400">/</span>
            <a href="#" className="text-gray-500 hover:text-gray-700">Sample Project</a>
            <span className="mx-2 text-gray-400">/</span>
            <a href="#" className="text-purple-600 font-medium">Add your podcast</a>
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

        {/* Settings Content */}
        <div className="px-8 py-6">
          <div className="flex items-center mb-10 justify-between">
            <div className="flex items-center">
              <button className="mr-4">
                <ArrowLeft className="w-6 h-6" />
              </button>
              <h1 className="text-2xl font-bold">Edit Transcript</h1>
            </div>
            <div className="flex space-x-4">
              <button
                className="border border-red-500 text-red-500 px-4 py-2 rounded-md text-sm bg-white"
                onClick={() => {
                  setIsEditing(false);
                  setSpeakerName('Speaker');
                  setSpeakerText('This is the initial transcript text.');
                }}
              >
                Discard
              </button>
              <button
                className="bg-black text-white px-4 py-2 rounded-md text-sm"
                onClick={() => setIsEditing(!isEditing)}
              >
                {isEditing ? 'Save' : 'Edit'}
              </button>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-12">
            {isEditing ? (
              <>
                <input
                  type="text"
                  className="text-xl font-semibold text-purple-600 mb-4 border-b border-purple-300 w-full focus:outline-none"
                  value={speakerName}
                  onChange={(e) => setSpeakerName(e.target.value)}
                />
                <textarea
                  className="w-full border border-gray-300 rounded-md p-4 focus:outline-none focus:ring focus:border-purple-500"
                  rows="5"
                  value={speakerText}
                  onChange={(e) => setSpeakerText(e.target.value)}
                />
              </>
            ) : (
              <>
                <h3 className="text-xl font-semibold text-purple-600 mb-4">{speakerName}</h3>
                <p className="text-gray-700">{speakerText}</p>
              </>
            )}
          </div>

          <div className="mt-12"></div>
        </div>
      </div>
    </div>
  );
}