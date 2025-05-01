import { useState } from 'react';
import { ArrowUp, HelpCircle, ChevronLeft, Home, Bell, Edit } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function QuesPodcastUI() {
  const [modalType, setModalType] = useState(null);
  const [modalValue, setModalValue] = useState('');
  const [modalName, setModalName] = useState('');
  const [feeds, setFeeds] = useState([]);

  const handleAdd = (type, value) => {
    const newFeed = {
      id: Date.now(),
      type,
      name: modalName || `${type.toUpperCase()} Entry}`,
      value,
      timestamp: new Date()
    };
    setFeeds(prev => [...prev, newFeed]);
    setModalType(null);
    setModalValue('');
    setModalName('');
  };

  const navigate =  useNavigate();

  const handleEditsumbit = () => {
    navigate('/edit-transcrip');
  };

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="flex items-center justify-center h-16 border-b border-gray-200">
          <span className="text-lg font-semibold">Ques AI</span>
        </div>
        <nav className="flex-1 overflow-y-auto">
          <ul className="p-4 space-y-2">
            <li className="flex items-center space-x-2 text-gray-700 font-medium">
              <Home className="w-5 h-5" /> <span>Home</span>
            </li>
            <li className="flex items-center space-x-2 text-purple-600 font-semibold">
              <Edit className="w-5 h-5" /> <span>Add Podcast</span>
            </li>
            <li className="flex items-center space-x-2 text-gray-700 font-medium">
              <Bell className="w-5 h-5" /> <span>Notifications</span>
            </li>
            <li className="flex items-center space-x-2 text-gray-700 font-medium">
              <HelpCircle className="w-5 h-5" /> <span>Help</span>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <div 
        className="h-16 bg-white border-b border-gray-200 flex items-center px-6"
        onClick={() => navigate('/QuesAIPodcast')}
        >
          <ChevronLeft className="w-5 h-5 text-gray-500 mr-2" />
          <span className="text-gray-500">Back to Home</span>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto p-6">
          <h1 className="text-3xl font-bold mb-6">Add Podcast</h1>

          <div className="grid grid-cols-3 gap-6 mb-6">
            <Card
              title="RSS Feed"
              description="Paste an RSS Feed link"
              bgColor="bg-orange-500"
              onClick={() => setModalType('rss')}
            />
            <Card
              title="Youtube Video"
              description="Paste a YouTube link"
              bgColor="bg-red-500"
              onClick={() => setModalType('youtube')}
            />
            <Card
              title="Upload Files"
              description="Upload media or text files"
              bgColor="bg-purple-100"
              iconColor="text-purple-600"
              onClick={() => setModalType('upload')}
            />
          </div>

          {/* Table Display */}
          {feeds.length > 0 ? (
            <div className="mt-8 overflow-x-auto">
              <h3 className="text-xl font-semibold mb-4">Uploaded Feeds</h3>
              <table className="min-w-full border text-sm text-gray-700">
                <thead className="bg-gray-100 text-left">
                  <tr>
                    <th className="border px-4 py-2">S.No.</th>
                    <th className="border px-4 py-2">Name</th>
                    <th className="border px-4 py-2">Upload Date & Time</th>
                    <th className="border px-4 py-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {feeds.map((feed, i) => (
                    <tr key={feed.id} className="border-t hover:bg-gray-50">
                      <td className="border px-4 py-2">{i + 1}</td>
                      <td className="border px-4 py-2">{feed.name}</td>
                      <td className="border px-4 py-2">{feed.timestamp.toLocaleString()}</td>
                      <td className="border px-4 py-2 flex gap-2">
                        <button
                          className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                          onClick={handleEditsumbit}
                        >
                          View
                        </button>
                        <button
                          className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                          onClick={() => setFeeds(prev => prev.filter(f => f.id !== feed.id))}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="border border-gray-200 rounded-lg p-12 flex flex-col items-center justify-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <ArrowUp className="w-8 h-8 text-purple-600" />
              </div>
              <p className="text-lg mb-2">
                Select a file or drag and drop here (Podcast Media or Transcription Text)
              </p>
              <p className="text-gray-500 text-sm mb-6">
                MP3, MOV, MP3, WAV, PDF, DOCX or TXT file
              </p>
              <button
                className="px-6 py-3 bg-white border-2 border-purple-500 rounded-full text-purple-600 font-semibold"
                onClick={() => setModalType('upload')}
              >
                Select File
              </button>
            </div>
          )}

          {/* Modal */}
          {modalType && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-lg shadow-lg w-96 space-y-4">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                    Q
                  </div>
                  <h2 className="text-xl font-semibold">
                    Add {modalType === 'rss' ? 'RSS Feed' : modalType === 'youtube' ? 'YouTube Link' : 'Transcript'}
                  </h2>
                </div>

                <input
                  type="text"
                  placeholder="Enter a name"
                  className="border px-4 py-2 w-full rounded"
                  value={modalName}
                  onChange={(e) => setModalName(e.target.value)}
                />

                {modalType === 'upload' ? (
                  <textarea
                    placeholder="Enter transcript text"
                    rows="4"
                    className="border px-4 py-2 w-full rounded"
                    value={modalValue}
                    onChange={(e) => setModalValue(e.target.value)}
                  />
                ) : (
                  <input
                    type="text"
                    placeholder={`Enter ${modalType} link`}
                    className="border px-4 py-2 w-full rounded"
                    value={modalValue}
                    onChange={(e) => setModalValue(e.target.value)}
                  />
                )}

                <div className="flex justify-end space-x-2 pt-2">
                  <button className="px-4 py-2 text-gray-600" onClick={() => setModalType(null)}>
                    Cancel
                  </button>
                  <button
                    className="px-4 py-2 bg-purple-600 text-white rounded"
                    onClick={() => {
                      if (modalValue.trim()) {
                        handleAdd(modalType, modalValue.trim());
                      }
                    }}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Card({ title, description, bgColor, iconColor = 'text-white', onClick }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 cursor-pointer hover:shadow-md transition" onClick={onClick}>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p className="text-gray-500 text-sm">{description}</p>
        </div>
        <div className={`w-12 h-12 ${bgColor} rounded-md flex items-center justify-center`}>
          <ArrowUp className={`w-6 h-6 ${iconColor}`} />
        </div>
      </div>
    </div>
  );
}