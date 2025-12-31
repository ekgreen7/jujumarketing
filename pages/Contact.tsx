import React, { useEffect } from 'react';
import Button from '../components/Button';
import { Mail, MessageCircle, HelpCircle, Copy } from 'lucide-react';

const Contact: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText('accounts@jujumarketing.com');
    alert('Email address copied to clipboard!');
  };

  return (
    <div className="pt-32 pb-24 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 lg:px-12 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-heading font-bold text-dark-900 mb-4">Contact Us</h1>
          <p className="text-gray-600 text-lg">Have questions about our AI tools for schools? We're here to help.</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-16 border border-gray-100 text-center">
            
            <div className="w-20 h-20 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm">
                <Mail size={40} />
            </div>

            <h2 className="text-2xl font-bold text-dark-900 mb-4">Get in touch directly</h2>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto">
                We'd love to hear from you. Please email our team for any inquiries regarding sales, support, or partnerships.
            </p>

            <div className="bg-gray-50 rounded-2xl p-8 mb-8 max-w-lg mx-auto border border-gray-200 shadow-inner">
                <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-3">Official Email</p>
                <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                  <a href="mailto:accounts@jujumarketing.com" className="text-xl md:text-2xl font-bold text-primary-600 hover:text-primary-700 transition-colors break-all">
                      accounts@jujumarketing.com
                  </a>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="mailto:accounts@jujumarketing.com">
                    <Button variant="primary" size="lg">
                        <MessageCircle size={18} className="mr-2" />
                        Open Mail App
                    </Button>
                </a>
                <Button variant="outline" size="lg" onClick={copyEmail}>
                    <Copy size={18} className="mr-2" />
                    Copy Address
                </Button>
            </div>

            <div className="mt-16 pt-10 border-t border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-2xl mx-auto">
                <div className="flex gap-4">
                    <div className="bg-accent-100 p-3 rounded-lg h-fit text-accent-600">
                        <HelpCircle size={20} />
                    </div>
                    <div>
                        <h3 className="font-bold text-dark-900 mb-1">Support</h3>
                        <p className="text-sm text-gray-600">Need help with the platform? Our team is available Mon-Fri, 9am - 5pm EST.</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="bg-purple-100 p-3 rounded-lg h-fit text-purple-600">
                        <MessageCircle size={20} />
                    </div>
                    <div>
                        <h3 className="font-bold text-dark-900 mb-1">Sales</h3>
                        <p className="text-sm text-gray-600">Interested in a district-wide license? Let's chat about custom pricing.</p>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;