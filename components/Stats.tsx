import React from 'react';
import { TrendingUp, Clock, DollarSign, BarChart3 } from 'lucide-react';
import { Stat } from '../types';

const stats: Stat[] = [
  { label: "More Leads vs Static Images", value: "10X", icon: TrendingUp },
  { label: "Higher ROI on Fundraising", value: "20X", icon: DollarSign },
  { label: "Lower Production Cost", value: "37X", icon: BarChart3 },
  { label: "Hours Saved Per Week", value: "15+", icon: Clock },
];

const Stats: React.FC = () => {
  return (
    <section className="py-20 bg-dark-900 text-white relative overflow-hidden">
      {/* Background shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600 rounded-full blur-[120px] opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500 rounded-full blur-[120px] opacity-20"></div>

      <div className="container mx-auto px-4 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-heading font-bold mb-4">Real Impact Results</h2>
          <p className="text-indigo-200 max-w-2xl mx-auto">See how private schools, charter schools, and non-profits are growing their engagement with AI-powered visuals.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
              <div className="w-14 h-14 mx-auto bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white mb-4 shadow-lg">
                <stat.icon size={24} />
              </div>
              <h3 className="text-4xl md:text-5xl font-bold font-heading mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">{stat.value}</h3>
              <p className="text-indigo-200 font-medium text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;