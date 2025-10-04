import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home, MapPin, Mail, Phone, Globe, Clock } from 'lucide-react';
import logo from '../assets/Img/Logo.png';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-800 to-rose-900 flex flex-col">
      <div className="fixed top-4 right-4 z-50 flex gap-3">
        <button onClick={() => window.history.back()} className="bg-rose-700 hover:bg-rose-800 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition">
          <ArrowLeft size={16} />Back
        </button>
        <Link to="/" className="bg-rose-700 hover:bg-rose-800 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition">
          <Home size={16} />Home
        </Link>
      </div>

      <div className="flex-1">
        <div className="max-w-5xl mx-auto mt-16">
          <div className="bg-white/95 rounded-3xl shadow-2xl p-10">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-blue-900 mb-4">Contact Us</h1>
              <p className="text-xl text-gray-600">Empowering Dreams. Financing Futures.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-xl">
                <MapPin className="text-blue-600 mt-1 flex-shrink-0" size={28} />
                <div>
                  <p className="font-bold text-gray-800 mb-2">Address</p>
                  <p className="text-gray-700">350, B Sri Mahalakshmi Bacary, 1St Floor, Nehru Nagar, Keelakavthu Kudi, Senthamangalam, Thiruvarur (Dt)-610001, Tamil Nadu.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-xl">
                <Mail className="text-blue-600 mt-1 flex-shrink-0" size={28} />
                <div>
                  <p className="font-bold text-gray-800 mb-2">Email</p>
                  <p className="text-gray-700">auxilliumfintvr@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-xl">
                <Phone className="text-blue-600 mt-1 flex-shrink-0" size={28} />
                <div>
                  <p className="font-bold text-gray-800 mb-2">Phone</p>
                  <p className="text-gray-700">9600220779, 9500482282</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-xl">
                <Globe className="text-blue-600 mt-1 flex-shrink-0" size={28} />
                <div>
                  <p className="font-bold text-gray-800 mb-2">Website</p>
                  <p className="text-gray-700">www.auxilliumfinance.org</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <Clock className="text-blue-700 mt-1 flex-shrink-0" size={32} />
                <div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">Office Hours</h3>
                  <div className="space-y-2 text-gray-800">
                    <p><strong>Mon – Fri:</strong> 09:00 AM – 06:00 PM</p>
                    <p><strong>Saturday:</strong> 09:00 AM – 05:00 PM</p>
                    <p><strong>Sunday:</strong> Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="bg-gray-900 text-gray-300 py-12 px-0 mt-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Auxillium Logo" className="logo w-10 h-10" />
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
              <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
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