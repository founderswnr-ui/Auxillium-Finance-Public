import { Link } from 'react-router-dom';
import { Home as HomeIcon, FileText, Send, Target, Info, LogIn } from 'lucide-react';
import logo from '../assets/Img/Logo.png';
import slide1 from '../assets/Img/slide1.png';
import slide2 from '../assets/Img/slide2.jpg';
import slide3 from '../assets/Img/slide3.png';
import slide4 from '../assets/Img/slide4.jpg';
import twoImg from '../assets/Img/two.png';
import homeImg from '../assets/Img/Home.png';
import workImg from '../assets/Img/Work.png';
import eduImg from '../assets/Img/Edu.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

export default function Home() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 600,
    arrows: true,
    prevArrow: <button type="button" className="slick-prev">&#10094;</button>,
    nextArrow: <button type="button" className="slick-next">&#10095;</button>,
  };

  // Updated services array with images and without gradient color
  const services = [
    {
      title: 'Self Help Group Loans',
      desc: 'Empowering rural women entrepreneurs',
      link: '/loans',
      btn: 'Know More',
      img: twoImg // Replace with correct image if available
    },
    {
      title: 'Two-Wheeler Loans',
      desc: 'Apply for your choice of Current Account based on your unique business needs',
      link: '/loans',
      btn: 'Know More',
      img: twoImg
    },
    {
      title: 'Home Improvement Loans',
      desc: 'Open term deposits online and grow your wealth with our attractive interest rates',
      link: '/loans',
      btn: 'Know More',
      img: homeImg
    },
    {
      title: 'Working Capital Loans',
      desc: 'Easy and secured loans without income proof',
      link: '/loans',
      btn: 'Know More',
      img: workImg
    },
    {
      title: 'Education & Training Loans',
      desc: 'Open Savings Accounts online with no maintenance charges and attractive interest rates',
      link: '/loans',
      btn: 'Know More',
      img: eduImg
    },
    {
      title: 'Personal Loans',
      desc: 'Quick financial solutions',
      link: '/loans',
      btn: 'Know More',
      img: workImg // Replace with correct image if available
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-900 via-purple-800 to-blue-700">
      <div className="overflow-hidden bg-blue-950 text-white py-2 px-4 text-sm font-semibold">
  <div className="animate-marquee inline-block min-w-full whitespace-nowrap">
    <span className="mx-4">📞 9600220779, 9500482282</span>
    <span className="mx-4">|</span>
    <span className="mx-4">✉️ auxilliumfintvr@gmail.com</span>
  </div>
</div>


      <nav className="bg-gradient-to-r from-orange-900 to-indigo-800 text-white py-3 px-6">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center gap-3 font-semibold text-lg">
            <img src={logo} alt="Auxillium Logo" className="logo w-10 h-10" />
            <span>AUXILLIUM FINANCE</span>
          </div>
          <div className="flex gap-6">
            <Link to="/" className="flex items-center gap-2 hover:text-yellow-300 transition"><HomeIcon size={16} />Home</Link>
            <Link to="/loans" className="flex items-center gap-2 hover:text-yellow-300 transition"><FileText size={16} />Services</Link>
            <Link to="/apply" className="flex items-center gap-2 hover:text-yellow-300 transition"><Send size={16} />Apply</Link>
            <Link to="/about" className="flex items-center gap-2 hover:text-yellow-300 transition"><Info size={16} />About</Link>
            <Link to="/contact" className="flex items-center gap-2 hover:text-yellow-300 transition"><Target size={16} />Contact</Link>
            <Link to="/login" className="flex items-center gap-2 hover:text-yellow-300 transition"><LogIn size={16} />Login</Link>
          </div>
        </div>
      </nav>

      {/* Hero Slider */}
      <section className="hero my-0">
        <Slider {...sliderSettings} className="hero-slider">
          <img src={slide1} alt="Slide 1" />
          <img src={slide2} alt="Slide 2" />
          <img src={slide3} alt="Slide 3" />
          <img src={slide4} alt="Slide 4" />
        </Slider>
      </section>
      
      <section className="py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/95 rounded-3xl p-12 text-center shadow-2xl">
            <h1 className="text-5xl font-bold text-rose-800 mb-4">EMPOWERING DREAMS, FINANCING FUTURES</h1>
            <p className="text-xl text-gray-700">Your trusted partner in personal and business growth.</p>
          </div>
        </div>
      </section>

      {/* Our Services Section with images */}
      <section className="py-6 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div key={i} className="bg-white text-gray-900 p-8 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col justify-between">
                <img src={service.img} alt={service.title} className="w-full h-48 object-cover rounded-lg mb-6" />
                <div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-700 mb-6">{service.desc}</p>
                </div>
                <Link to={service.link} className="inline-block mt-auto bg-rose-800 text-white px-6 py-2 rounded-full font-semibold hover:bg-rose-700 transition">{service.btn}</Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/apply" className="inline-block bg-rose-800 text-white px-8 py-3 rounded-full font-bold text-lg shadow hover:bg-rose-700 transition">Apply Now</Link>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-rose-800 to-purple-900 py-12 px-6">
  <div className="max-w-4xl mx-auto text-center text-white">
    <h2 className="text-3xl font-bold mb-6">Why Choose Auxillium Finance?</h2>
    <div className="grid md:grid-cols-3 gap-6">
      <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
        <h3 className="text-xl font-bold mb-2">Quick Approval</h3>
        <p>Get approved in minutes, not days</p>
      </div>
      <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
        <h3 className="text-xl font-bold mb-2">Low Interest</h3>
        <p>Competitive rates for everyone</p>
      </div>
      <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
        <h3 className="text-xl font-bold mb-2">Flexible Terms</h3>
        <p>Repayment plans that work for you</p>
      </div>
    </div>
    <div className="flex justify-center mt-6">
      <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm w-full md:w-1/2">
        <h3 className="text-xl font-bold mb-2">Women‑Focused</h3>
        <p>Special programmes to empower women entrepreneurs.</p>
      </div>
    </div>
  </div>
</section>

      {/* Testimonials Section */}
      <section className="testimonials container py-6 px-6">
        <h1 className="section-headings text-3xl font-bold text-center text-white mb-12">What Our Clients Feedback</h1>
        <div className="testimonial-grid grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="testimonial-col space-y-8">
            <div className="testimonial-item bg-white rounded-xl shadow p-6 text-gray-800 relative">
              <span className="checkmark text-green-600 text-2xl absolute left-4 top-4">&#10003;</span>
              <div className="pl-10">
                I started my tailoring business with a group loan. Today I earn ₹15,000/month.
                <div className="testimonial-cite text-sm text-gray-500 mt-2 text-right">— Lakshmi, Tiruvarur</div>
              </div>
            </div>
            <div className="testimonial-item bg-white rounded-xl shadow p-6 text-gray-800 relative">
              <span className="checkmark text-green-600 text-2xl absolute left-4 top-4">&#10003;</span>
              <div className="pl-10">
                Our SHG opened a community grocery store using microfinance.
                <div className="testimonial-cite text-sm text-gray-500 mt-2 text-right">— SHG Members, Thiruvarur</div>
              </div>
            </div>
          </div>
          <div className="testimonial-col space-y-8">
            <div className="testimonial-item bg-white rounded-xl shadow p-6 text-gray-800 relative">
              <span className="checkmark text-green-600 text-2xl absolute left-4 top-4">&#10003;</span>
              <div className="pl-10">
                With a two-wheeler loan, I joined delivery work and doubled my income.
                <div className="testimonial-cite text-sm text-gray-500 mt-2 text-right">— Selvam, Iravanjeri</div>
              </div>
            </div>
            <div className="testimonial-item bg-white rounded-xl shadow p-6 text-gray-800 relative">
              <span className="checkmark text-green-600 text-2xl absolute left-4 top-4">&#10003;</span>
              <div className="pl-10">
                Excellent support and quick sanctions for my business.
                <div className="testimonial-cite text-sm text-gray-500 mt-2 text-right">— Arun, Mannargudi</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
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