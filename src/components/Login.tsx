import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react'; // Make sure these icons are imported
import { useAuth } from '../contexts/AuthContext';

export default function Login() {
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const { error: signInError } = await signIn(formData.email, formData.password);
      if (signInError) {
        setError('Invalid email or password');
        return;
      }
      navigate('/');
    } catch (err: any) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-900 via-purple-900 to-blue-900 flex items-center justify-center px-6 relative">
      {/* Navigation Buttons */}
      <div className="fixed top-4 right-4 z-50 flex gap-3">
        <button
          onClick={() => window.history.back()}
          className="bg-rose-700 hover:bg-rose-800 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition"
        >
          <ArrowLeft size={16} />Back
        </button>
        <Link
          to="/"
          className="bg-rose-700 hover:bg-rose-800 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition"
        >
          <Home size={16} />Home
        </Link>
      </div>

      {/* Login Card */}
      <div className="bg-white/95 rounded-2xl shadow-2xl p-10 w-full max-w-md">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Login to Your Account</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-rose-700 hover:bg-rose-800 text-white font-bold py-3 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
          {error && <div className="text-red-600 text-center text-sm">{error}</div>}
        </form>

        <p className="text-center text-gray-600 mt-6">
          Don't have an account?{' '}
          <Link to="/signup" className="text-rose-700 font-semibold hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
