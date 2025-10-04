import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';
import { supabase } from '../lib/supabase';
import logo from '../assets/Img/Logo.png';

export default function Apply() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    loanType: '',
    amount: '',
    message: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      const filteredValue = value.replace(/\D/g, '');
      setFormData(prev => ({ ...prev, [name]: filteredValue }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
    setError('');
    setSuccess('');
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setError('Full Name is required.');
      return false;
    }
    const phonePattern = /^\d{10}$/;
    if (!formData.phone.match(phonePattern)) {
      setError('Phone number must be exactly 10 digits.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!validateForm()) return;

    setLoading(true);

    try {
      const { data: { user } } = await supabase.auth.getUser();

      const { error: submitError } = await supabase
        .from('loan_applications')
        .insert([{
          user_id: user?.id || null,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          loan_type: formData.loanType,
          amount: parseFloat(formData.amount) || 0,
          message: formData.message,
        }]);

      if (submitError) throw submitError;

      setSuccess('Thank you for your application! We will contact you soon.');
      setFormData({ name: '', email: '', phone: '', loanType: '', amount: '', message: '' });

      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (err: any) {
      setError(err.message || 'Submission failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-800 via-white to-white py-0 px-0">
      <div className="fixed top-4 right-4 z-50 flex gap-3">
        <button onClick={() => window.history.back()} className="bg-rose-700 hover:bg-rose-800 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition">
          <ArrowLeft size={16} />Back
        </button>
        <Link to="/" className="bg-rose-700 hover:bg-rose-800 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition">
          <Home size={16} />Home
        </Link>
      </div>

      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8" style={{ borderBottomWidth: 25 }}>
        <h1 className="text-4xl font-bold text-rose-800 text-center mb-8">Apply for a Loan</h1>

        {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">{error}</div>}
        {success && <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">{success}</div>}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">Phone Number *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              maxLength={10}
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition"
            />
          </div>

          <div>
            <label htmlFor="loanType" className="block text-gray-700 font-semibold mb-2">Loan Type</label>
            <select
              id="loanType"
              name="loanType"
              value={formData.loanType}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition"
            >
              <option value="">Select loan type</option>
              <option value="self-help group loan">Self Help Group Loan</option>
              <option value="two-wheeler loan">Two-Wheeler Loan</option>
              <option value="home improvement loan">Home Improvement Loan</option>
              <option value="working capital">Working Capital Loan</option>
              <option value="education loan">Education Loan</option>
              <option value="personal loan">Personal Loan</option>
            </select>
          </div>

          <div>
            <label htmlFor="amount" className="block text-gray-700 font-semibold mb-2">Loan Amount (₹)</label>
            <input
              type="number"
              id="amount"
              name="amount"
              placeholder="Enter desired loan amount"
              min={0}
              step={1000}
              value={formData.amount}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Additional Information</label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell us more about your loan requirement"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-rose-700 hover:bg-rose-800 text-white font-bold py-4 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Submitting...' : 'Submit Application'}
          </button>
        </form>
      </div>

      <footer className="bg-gray-900 text-gray-300 py-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Auxillium Logo" className="logo w-10 h-10"></img>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">AUXILLIUM FINANCE</h3>
              <p className="text-sm">© 2025 Auxillium Finance Private Limited. All rights reserved.</p>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-white mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white transition">Home</Link></li>
              <li><Link to="/loans" className="hover:text-white transition">Services</Link></li>
              <li><Link to="/apply" className="hover:text-white transition">Apply</Link></li>
              <li><Link to="/about" className="hover:text-white transition">About</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-3">Contact Us</h4>
            <p className="text-sm mb-2"><strong>Phone:</strong> 9600220779, 9500482282</p>
            <p className="text-sm mb-2"><strong>Email:</strong> auxilliumfintvr@gmail.com</p>
            <p className="text-sm"><strong>Address:</strong> 350, B Sri Mahalakshmi Bacary, 1St Floor, Nehru Nagar, Keelakavthu Kudi, Senthamangalam, Thiruvarur (Dt)-610001, Tamil Nadu.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}