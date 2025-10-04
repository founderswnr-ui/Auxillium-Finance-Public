import { Link } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';
import logo from '../assets/Img/Logo.png';
import twoImg from '../assets/Img/two.png';
import homeImg from '../assets/Img/Home.png';
import workImg from '../assets/Img/Work.png';
import eduImg from '../assets/Img/Edu.png';

export default function Loans() {
  const loanProducts = [
    {
      title: 'Self Help Group Loans',
      subtitle: 'For rural women small businesses',
      features: [
        'Group-based lending',
        'Minimal documentation',
        'Low interest rates',
        'Flexible repayment terms'
      ],
      img: twoImg // Replace with correct image if available
    },
    {
      title: 'Two-Wheeler Loans',
      subtitle: 'Mobility and independence',
      features: [
        'Up to 90% on-road financing',
        'Instant approval',
        'Easy EMIs',
        'Quick documentation process'
      ],
      img: twoImg
    },
    {
      title: 'Home Improvement Loans',
      subtitle: 'Repair, expand or beautify your home',
      features: [
        'Loan amount up to ₹10 Lakhs',
        'Competitive interest rates',
        'Flexible repayment options',
        'Fast disbursal'
      ],
      img: homeImg
    },
    {
      title: 'Working Capital Loans',
      subtitle: 'Fuel your business operations',
      features: [
        'Easy and secured loans',
        'No income proof required',
        'Quick approval',
        'Flexible terms'
      ],
      img: workImg
    },
    {
      title: 'Education & Training Loans',
      subtitle: 'Invest in knowledge',
      features: [
        'Cover tuition and fees',
        'Low interest rates',
        'Flexible repayment',
        'Support for all courses'
      ],
      img: eduImg
    },
    {
      title: 'Personal Loans',
      subtitle: 'For all your personal needs',
      features: [
        'Quick approval',
        'Minimal paperwork',
        'Competitive rates',
        'Flexible tenure'
      ],
      img: workImg // Replace with correct image if available
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-800 via-white to-white">
      <div className="fixed top-4 right-4 z-50 flex gap-3">
        <button onClick={() => window.history.back()} className="bg-rose-700 hover:bg-rose-800 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition">
          <ArrowLeft size={16} />Back
        </button>
        <Link to="/" className="bg-rose-700 hover:bg-rose-800 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition">
          <Home size={16} />Home
        </Link>
      </div>

      <header className="bg-gradient-to-r from-rose-700 to-purple-800 text-white py-5 px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">Loan Products</h1>
        <p className="text-xl max-w-3xl mx-auto">
          Explore our tailored loan solutions designed to uplift communities and individuals. We offer flexible, fast, and affordable financing options for every need.
        </p>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loanProducts.map((loan, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <img src={loan.img} alt={loan.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{loan.title}</h3>
                <p className="text-purple-600 mb-4">{loan.subtitle}</p>
                <div className="mb-6">
                  <p className="font-semibold text-gray-700 mb-2">Features and Benefits</p>
                  <ul className="space-y-2">
                    {loan.features.map((feature, i) => (
                      <li key={i} className="text-gray-600 text-sm flex items-start gap-2">
                        <span className="text-rose-600 font-bold">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex gap-3">
                  <Link to="/apply" className="flex-1 bg-rose-700 hover:bg-rose-800 text-white text-center py-2 rounded-full font-semibold transition">
                    APPLY NOW
                  </Link>
                  <button className="flex-1 border-2 border-rose-700 text-rose-700 hover:bg-rose-700 hover:text-white py-2 rounded-full font-semibold transition">
                    LEARN MORE
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <footer className="bg-gray-900 text-gray-300 py-12 px-6">
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