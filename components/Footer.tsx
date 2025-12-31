import React from 'react';
import { Rocket, Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-6">
               <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center text-white">
                 <Rocket size={18} fill="currentColor" />
               </div>
               <span className="text-xl font-bold text-white">
                 Juju<span className="text-primary-500">Labs</span>
               </span>
            </div>
            <p className="text-sm leading-relaxed mb-6 text-gray-400">
              Transforming how schools and non-profits connect with their communities. Simple, effective, and built for impact.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" onClick={scrollToTop} className="hover:text-primary-400 transition-colors cursor-pointer">Home</Link>
              </li>
              <li>
                <a href="#features" onClick={(e) => handleScroll(e, 'features')} className="hover:text-primary-400 transition-colors cursor-pointer">Features</a>
              </li>
              <li>
                <a href="#pricing" onClick={(e) => handleScroll(e, 'pricing')} className="hover:text-primary-400 transition-colors cursor-pointer">Pricing Plans</a>
              </li>
            </ul>
          </div>

           {/* Legal */}
           <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/legal" className="hover:text-primary-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/legal" className="hover:text-primary-400 transition-colors">Terms of Service</Link></li>
              <li><Link to="/contact" className="hover:text-primary-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6">Get In Touch</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary-500 shrink-0" />
                <span>accounts@jujumarketing.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} JujuLabs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;