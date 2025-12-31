import React from 'react';
import { Check } from 'lucide-react';
import Button from './Button';
import { PricingTier } from '../types';

const tiers: PricingTier[] = [
  {
    name: "Starter",
    price: 199,
    description: "For small PTAs and non-profits needing basic flyers.",
    features: [
      "100 AI Generation Credits",
      "Image-to-Banner Tool",
      "Standard Resolution",
      "3 User Accounts",
      "Email Support"
    ]
  },
  {
    name: "Growth",
    price: 299,
    description: "For private & charter schools needing video and social content.",
    features: [
      "500 AI Generation Credits",
      "Image-to-Video Reel Tool",
      "AI Voiceovers (3 Languages)",
      "HD Download Quality",
      "10 User Accounts",
      "Priority Support"
    ]
  },
  {
    name: "Professional",
    price: 499,
    description: "For networks, districts, and large organizations.",
    features: [
      "Unlimited AI Generation",
      "4K Video Resolution",
      "All Languages Supported",
      "API Access",
      "White Label Options",
      "Dedicated Account Manager"
    ]
  },
  {
    name: "DFY Service",
    price: "Contact for pricing",
    description: "Let us know your custom requests and we will create high quality content for you.",
    recommended: true,
    features: [
      "Custom Content Strategy",
      "Full Project Management",
      "Human Expert Review",
      "Bespoke Asset Creation",
      "Priority SLA Delivery",
      "We will create content tailored to your curriculum or Organization's culture"
    ]
  }
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 w-full h-1/2 bg-gray-50 skew-y-3 origin-top-left"></div>
      
      <div className="container mx-auto px-4 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
           <span className="text-primary-600 font-bold tracking-wider uppercase text-sm">Simple Pricing</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-dark-900 mt-4 mb-6">
            Plans that Fit Your Budget
          </h2>
          <p className="text-gray-600 text-lg">
            Pay monthly. Cancel anytime. No hidden fees for high-quality AI generation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[90rem] mx-auto items-start">
          {tiers.map((tier, index) => (
            <div 
              key={index} 
              className={`relative bg-white rounded-3xl p-6 border transition-all duration-300 flex flex-col group hover:shadow-2xl h-full ${tier.recommended ? 'border-primary-500 shadow-xl scale-105 z-10' : 'border-gray-100 shadow-md hover:-translate-y-2'}`}
            >
              {tier.recommended && (
                <div className="absolute top-0 right-0 bg-primary-600 text-white px-6 py-2 rounded-bl-3xl rounded-tr-3xl text-sm font-bold shadow-sm">
                  Suggested Option
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-dark-900 font-heading">{tier.name}</h3>
                <p className="text-gray-500 mt-2 min-h-[60px] text-sm leading-relaxed">{tier.description}</p>
              </div>

              <div className="mb-6 p-4 bg-gray-50 rounded-2xl text-center group-hover:bg-primary-50 transition-colors flex flex-col justify-center min-h-[120px]">
                {typeof tier.price === 'number' ? (
                  <>
                    <div className="flex items-center justify-center">
                      <span className="text-lg text-gray-500 font-bold mr-1">$</span>
                      <span className="text-4xl lg:text-5xl font-bold text-dark-900 tracking-tight">{tier.price}</span>
                    </div>
                    <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Per Month</span>
                  </>
                ) : (
                  <span className="text-2xl font-bold text-dark-900 tracking-tight leading-tight">
                    {tier.price}
                  </span>
                )}
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {tier.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center mr-3 shrink-0 mt-0.5 ${tier.recommended ? 'bg-primary-100 text-primary-600' : 'bg-gray-100 text-gray-500'}`}>
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span className="text-gray-600 font-medium text-sm leading-tight">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={tier.recommended ? 'gradient' : 'outline'} 
                className="w-full text-sm py-2"
                size="md"
              >
                {typeof tier.price === 'number' ? 'Start Free Trial' : 'Contact Sales'}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;