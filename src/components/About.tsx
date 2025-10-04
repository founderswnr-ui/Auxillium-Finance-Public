import { Link } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';
import logo from '../assets/Img/Logo.png';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="fixed top-4 right-4 z-50 flex gap-3">
        <Link to="/" className="bg-rose-700 hover:bg-rose-800 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition">
          <ArrowLeft size={16} />Back
        </Link>
        <Link to="/" className="bg-rose-700 hover:bg-rose-800 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition">
          <Home size={16} />Home
        </Link>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold text-rose-800 text-center mb-12">About Us</h1>

        <div className="space-y-12">
          <section className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-3xl font-bold text-rose-700 mb-4">Our Journey</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Started in 2015 through community service efforts, and officially incorporated in 2022, we are now present in Tiruvarur and Iravanjeri with the aim to uplift underserved rural women through sustainable microfinance.
            </p>
          </section>

          <section className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-3xl font-bold text-rose-700 mb-4">Vision</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              To ensure every village household becomes self-sustainable through entrepreneurship and education.
            </p>
          </section>

          <section className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-3xl font-bold text-rose-700 mb-4">Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              To support rural women and families by providing accessible and affordable financial solutions tailored to their needs.
            </p>
          </section>

          <section className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-3xl font-bold text-rose-700 mb-4">Our Values</h2>
            <ul className="space-y-4 text-lg text-gray-700">
              <li className="flex gap-3">
                <span className="text-rose-600 font-bold">✓</span>
                <div>
                  <strong className="text-rose-700">Trust & Transparency:</strong> Clarity and openness in all dealings, ensuring our clients feel secure and respected.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-rose-600 font-bold">✓</span>
                <div>
                  <strong className="text-rose-700">Financial Inclusion:</strong> Eliminating barriers that exclude rural families from formal financial systems.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-rose-600 font-bold">✓</span>
                <div>
                  <strong className="text-rose-700">Empowerment Through Action:</strong> Equipping women with tools and confidence to transform their lives.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-rose-600 font-bold">✓</span>
                <div>
                  <strong className="text-rose-700">Community First:</strong> Prioritizing local communities in our strategy and solutions.
                </div>
              </li>
            </ul>
          </section>

          <section className="bg-gradient-to-r from-rose-700 to-purple-700 text-white p-8 rounded-xl shadow-md">
            <p className="text-lg leading-relaxed">
              Our approach goes beyond just loans. we're here to build trust, encourage leadership, and support rural communities on their journey toward financial independence and growth.
            </p>
          </section>
        </div>
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
