import {  useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Headphone Logo SVG Component
const HeadphoneLogo = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"/>
    <path d="M9 16h2V8H9v8zm4 0h2V8h-2v8z" fill="currentColor"/>
  </svg>
);

// Ques.AI Logo Component
const QuesAiLogo = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="45" fill="currentColor" />
    <path d="M35 60 C35 45 35 35 35 25 C65 40 65 60 35 75 Z" fill="white" />
    <path d="M55 50 C55 40 55 35 55 30 C75 40 75 50 55 60 Z" fill="white" />
  </svg>
);

// Google Logo Component
const GoogleLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 48 48">
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
  </svg>
);

// Wave Background SVG Component
const WaveBackground = () => (
  <div className="absolute w-full h-full top-0 right-0 opacity-20 z-0 pointer-events-none">
    <svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
      <path fill="white" d="M226,415 C328,420 434,448 534,401 C634,354 726,220 787,180" opacity="0.5" />
      <path fill="white" d="M226,315 C328,320 434,348 534,301 C634,254 726,120 787,80" opacity="0.5" />
      <path fill="white" d="M226,515 C328,520 434,548 534,501 C634,454 726,320 787,280" opacity="0.5" />
    </svg>
  </div>
);

// Main Component
export default function QuesAiLanding({ mode = "login" }) {
    const isLogin = mode === 'login';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (res.ok) {
        // login successful
        navigate('/create-project'); // Redirect to create project page
        alert("Login successful!");
      } else {
        alert(data.message || "Login failed");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };
  

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: email.split('@')[0], email, password }),
      });
      const data = await res.json();
      if (res.ok) alert("Signup successful!");
      else alert(data.message || "Signup failed");
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  const handleGoogleLogin = () => {
    console.log('Google login initiated');
    // Handle Google login logic here
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Section - Purple */}
      <div className="w-full md:w-3/5 bg-purple-700 text-white p-8 relative overflow-hidden">
        <div className="relative z-10">
          {/* Logo */}
          <div className="flex items-center text-2xl font-bold mb-20">
            <div className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center mr-2">
              <HeadphoneLogo className="w-6 h-6 text-white" />
            </div>
            Ques.AI
          </div>
          
          {/* Main Content */}
          <h1 className="text-5xl font-bold leading-tight mb-8">
            Your podcast will no longer be just a hobby.
          </h1>
          
          <p className="text-xl mb-12">
            Supercharge Your Distribution using our AI assistant!
          </p>
          

        </div>
        
        {/* Decorative Background */}
        <WaveBackground />
      </div>
      
      {/* Right Section - White */}
      <div className="w-full md:w-2/5 bg-white flex flex-col items-center justify-center p-8">
        {/* Logo */}
        <QuesAiLogo className="w-20 h-20 text-purple-700 mb-4" />
        
        {/* Welcome Text */}
        <div className="text-center mb-8">
          <h2 className="text-2xl text-gray-700 font-normal">Welcome to</h2>
          <h1 className="text-3xl text-purple-700 font-bold">Ques.AI</h1>
        </div>
        
        {/* Login Form */}
        <div className="w-full max-w-md">
          <div className="mb-4">
            <input
              type="email"
              className="w-full p-3 border border-gray-300 rounded text-base"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          
          <div className="mb-4">
            <input
              type="password"
              className="w-full p-3 border border-gray-300 rounded text-base"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          <div className="flex justify-between items-center mb-4">
            <a href="#" className="text-purple-700 no-underline">
              Forgot password?
            </a>
          </div>
          <button
            onClick={isLogin ? handleLogin : handleSignup}
            className="w-full p-3 bg-purple-700 text-white rounded text-base font-bold mb-4"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </div>
        
        {/* Divider */}
        <div className="w-full max-w-md flex items-center text-center text-gray-600 my-4">
          <div className="flex-1 border-b border-gray-300"></div>
          <div className="px-2">or</div>
          <div className="flex-1 border-b border-gray-300"></div>
        </div>
        
        {/* Google Login */}
        <button
          onClick={handleGoogleLogin}
          className="w-full max-w-md p-3 bg-white text-gray-700 border border-gray-300 rounded text-base flex items-center justify-center mb-4"
        >
          <span className="mr-2"><GoogleLogo /></span>
          Continue with Google
        </button>
        
        {/* Sign Up Link */}
        <div className="text-gray-600 text-center">
          {isLogin ? (
            <>Don't have an account? <a href="/signup" className="text-purple-700 font-bold">Create Account</a></>
          ) : (
            <>Already have an account? <a href="/login" className="text-purple-700 font-bold">Login</a></>
          )}
        </div>
      </div>
    </div>
  );
}