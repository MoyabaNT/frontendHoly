import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile, sendEmailVerification } from 'firebase/auth';
import { auth } from '../../firebase'; // Adjust path to your firebase.js

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError(null);
    setMessage(null);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName: username });
      await sendEmailVerification(userCredential.user);
      setMessage('Verification email sent! Please check your inbox.');
      console.log('User signed up successfully:', { email, username });
      // Delay navigation to allow message display
      setTimeout(() => navigate('/SignIn'), 3000);
    } catch (err) {
      console.error('Sign-up error:', err.code, err.message);
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-[#4A2C2A] font-sans flex items-center justify-center">
      <div className="fixed top-1/2 left-1/2 bg-[#5E3A36] p-12 rounded-lg z-[2] -translate-x-1/2 -translate-y-1/2 font-light text-white animate-[hide_3s_both] [animation-timeline:scroll()] [animation-range:0%_10%]">
        <h1 className="text-3xl font-serif text-center">
          <Link to="/Landing">
            <span className="font-semibold">Arranged </span>Holy
          </Link>
        </h1>
        <p className="mt-2 text-sm font-light italic text-center">
          Where Holy Words Find Peaceful Order
        </p>
        <form className="mt-8 w-80 space-y-6" onSubmit={handleSignUp}>
          <div>
            <label htmlFor="username" className="block text-sm font-medium">
              Username
            </label>
            <input
              id="username"
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
              placeholder="Enter your username"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
              placeholder="Enter your password"
            />
          </div>
          {error && <p className="text-red-400 text-sm">{error}</p>}
          {message && <p className="text-green-400 text-sm">{message}</p>}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-white font-bold text-[#4A2C2A] rounded-md hover:bg-white/90 transition-colors duration-300"
          >
            Sign Up
          </button>
          <p className="text-center">
            Already have an account?{' '}
            <span className="text-amber-200">
              <Link to="/SignIn">Sign In</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
