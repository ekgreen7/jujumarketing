import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket } from 'lucide-react';
import Button from './Button';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (e: React.MouseEvent, targetId?: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    const isHomePage = location.pathname === '/';

    if (!isHomePage) {
      navigate('/');
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        if (targetId) {
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Already on home page
      if (targetId) {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const navLinks = [
    { name: 'Home', targetId: undefined },
    { name: 'Video Tools', targetId: 'features' },
    { name: 'Banner Tools', targetId: 'features' },
    { name: 'Pricing', targetId: 'pricing' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 lg:px-12">
        <div className="flex justify-between items-center">
          <Link to="/" onClick={(e) => handleNavigation(e)} className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-400 rounded-lg flex items-center justify-center text-white shadow-lg group-hover:rotate-12 transition-transform duration-300">
              <Rocket size={20} fill="currentColor" />
            </div>
            <span className={`text-2xl font-heading font-extrabold tracking-tight ${scrolled ? 'text-dark-900' : 'text-white'}`}>
              Juju<span className="text-accent-400">Labs</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.targetId ? `#${link.targetId}` : '#'}
                onClick={(e) => handleNavigation(e, link.targetId)}
                className={`font-semibold text-sm uppercase tracking-wide transition-colors hover:text-accent-400 ${scrolled ? 'text-gray-700' : 'text-gray-100'}`}
              >
                {link.name}
              </a>
            ))}
            <div className="flex gap-4 ml-6">
              <span className={`cursor-pointer font-bold flex items-center ${scrolled ? 'text-primary-600' : 'text-white'}`}>Login</span>
              <Button variant={scrolled ? "gradient" : "white"} size="sm" className="shadow-none">
                Get Started
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} className="text-gray-800"/> : <Menu size={24} className={scrolled ? 'text-gray-800' : 'text-white'} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t">
          <div className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.targetId ? `#${link.targetId}` : '#'}
                className="text-gray-700 font-bold text-lg hover:text-primary-600"
                onClick={(e) => handleNavigation(e, link.targetId)}
              >
                {link.name}
              </a>
            ))}
            <div className="flex flex-col gap-3 mt-4 border-t pt-4">
               <Button variant="outline" className="w-full justify-center">Login</Button>
               <Button variant="primary" className="w-full justify-center">Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;