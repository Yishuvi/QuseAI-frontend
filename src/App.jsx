import React from 'react';
import Homepage from './pages/Homepage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginForm';
import Register from './pages/Register';
import SignupPage from './pages/SignupForm';
import CreateProject from './pages/create-project';
import ProjectDashboard from './pages/project-dashboard';
import QuesAIPodcast from './pages/QuseAI-Podcast';
import AccountSettings from './pages/account-settings';
import QuesPodcastUI from './components/QuesProjectUI';
import EditTranscrip from './pages/edit-transcrip';
import UpdateEdit from './pages/update-edit';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/create-project' element={<CreateProject />} />
        <Route path='/ProjectDashboard' element={<ProjectDashboard />} />
        <Route path='/QuesAIPodcast' element={<QuesAIPodcast />} />
        <Route path='/account-settings' element={<AccountSettings />} />
        <Route path='/quse-UI' element={<QuesPodcastUI />} />
        <Route path='/edit-transcrip' element={<EditTranscrip />} />
        <Route path='/update-edit' element={<UpdateEdit />} />
      </Routes>
    </Router>
    
  )
}

export default App;
