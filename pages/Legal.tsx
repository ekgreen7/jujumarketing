import React, { useEffect } from 'react';

const Legal: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 lg:px-12 max-w-4xl">
        <h1 className="text-4xl font-heading font-bold text-dark-900 mb-8">Legal Information</h1>
        
        <section id="terms" className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-12">
          <h2 className="text-2xl font-bold mb-4 text-primary-700">Terms of Service</h2>
          <p className="text-gray-600 mb-4 text-sm">Last updated: {new Date().toLocaleDateString()}</p>
          <div className="space-y-4 text-gray-600">
            <p>Welcome to JujuLabs. By accessing our website or using our services, you agree to be bound by these Terms of Service.</p>
            <h3 className="font-bold text-dark-900">1. Use of Service</h3>
            <p>You agree to use our AI generation tools responsibly and not for any illegal or unauthorized purpose. You must not transmit any worms or viruses or any code of a destructive nature.</p>
            <h3 className="font-bold text-dark-900">2. Intellectual Property</h3>
            <p>All content generated using JujuLabs remains the intellectual property of the user, subject to our usage rights to improve our AI models. The platform itself is the property of JujuLabs.</p>
            <h3 className="font-bold text-dark-900">3. Cancellation</h3>
            <p>You may cancel your subscription at any time. Refunds are processed according to our refund policy.</p>
          </div>
        </section>

        <section id="privacy" className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold mb-4 text-primary-700">Privacy Policy</h2>
          <p className="text-gray-600 mb-4 text-sm">Last updated: {new Date().toLocaleDateString()}</p>
          <div className="space-y-4 text-gray-600">
            <p>Your privacy is important to us. It is JujuLabs' policy to respect your privacy regarding any information we may collect from you across our website.</p>
            <h3 className="font-bold text-dark-900">1. Information We Collect</h3>
            <p>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent.</p>
            <h3 className="font-bold text-dark-900">2. Data Storage</h3>
            <p>We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we'll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.</p>
            <h3 className="font-bold text-dark-900">3. Third Parties</h3>
            <p>We don't share any personally identifying information publicly or with third-parties, except when required to by law.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Legal;