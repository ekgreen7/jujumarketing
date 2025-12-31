import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Features from '../components/Features';
import Solutions from '../components/Solutions';
import Pricing from '../components/Pricing';
import Button from '../components/Button';
import { Quote, Sparkles } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <div className="bg-gray-50 py-10 border-b border-gray-200">
         <div className="container mx-auto px-4 text-center">
            <p className="text-gray-400 font-bold uppercase tracking-widest text-xs mb-6">Trusted by 500+ Schools & Nonprofits</p>
            <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
               {/* Placeholders for logos */}
               {[1,2,3,4,5].map(i => (
                 <div key={i} className="h-8 w-32 bg-gray-300 rounded"></div>
               ))}
            </div>
         </div>
      </div>
      
      <Stats />

      <Solutions />

      <Features />

      {/* FAQ / Info Section */}
      <section className="py-24 bg-gradient-to-br from-primary-900 to-primary-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 lg:px-12 relative z-10 flex flex-col md:flex-row items-center gap-12">
           <div className="md:w-1/2">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-accent-400 border border-white/20 mb-6">
               <Sparkles size={14} />
               <span className="text-xs font-bold uppercase">AI Insights</span>
             </div>
             <h2 className="text-4xl font-heading font-bold mb-6">Can I really generate a video from just one photo?</h2>
             <p className="text-lg text-indigo-100 mb-6 leading-relaxed">
               Yes! Simply upload your event photo, mascot image, or logo, and JujuLabs' AI engine will automatically animate it, add professional motion graphics, and even generate a voiceover script.
             </p>
             <ul className="space-y-4 mb-8">
               {["No video editing skills needed", "Bring your ideas to life, reflecting your organization's culture.", "Commercial usage rights for your organization"].map(item => (
                 <li key={item} className="flex items-center gap-3">
                   <div className="w-6 h-6 rounded-full bg-accent-500 flex items-center justify-center text-dark-900 font-bold text-xs">✓</div>
                   <span>{item}</span>
                 </li>
               ))}
             </ul>
             <Button variant="secondary">Create Your First Video</Button>
           </div>
           <div className="md:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-black/50 aspect-video group">
                <video 
                  className="w-full h-full object-cover"
                  controls
                  playsInline
                  poster="https://images.unsplash.com/photo-1437622643429-be013384fa51?auto=format&fit=crop&w=800"
                >
                  <source src="https://assets.jujumarketing.com/Smurtle-Metaphors-1_small1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <p className="text-xs text-center text-indigo-200 mt-3 italic opacity-60">
                Sample: "The Turtle's Guide to Metaphors" generated from a single image + script.
              </p>
           </div>
        </div>
      </section>

      <Pricing />

      {/* Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-accent-500 font-bold tracking-wider uppercase text-sm">Testimonials</span>
            <h2 className="text-4xl font-heading font-bold text-dark-900 mt-2">What Leaders Are Saying</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 relative group">
                <div className="absolute top-10 right-10 text-gray-100 group-hover:text-primary-100 transition-colors">
                  <Quote size={64} fill="currentColor" />
                </div>
                <p className="text-gray-600 mb-8 relative z-10 text-lg leading-relaxed">"We used to spend hours designing flyers for our bake sales. Now JujuLabs generates a video and banner in 30 seconds. Our engagement has doubled."</p>
                <div className="flex items-center gap-4">
                  <img src={`https://picsum.photos/60?random=${i + 10}`} alt="User" className="w-14 h-14 rounded-full object-cover ring-4 ring-gray-50" />
                  <div>
                    <h4 className="font-bold text-dark-900 text-lg">Sarah Jenkins</h4>
                    <p className="text-sm text-primary-600 font-bold">PTA President, Westview</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary-900"></div>
        <div className="blob w-[800px] h-[800px] bg-accent-500 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-[150px] opacity-30"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8">Ready to Transform Your Organization's Marketing?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="px-12">Try for Free</Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 hover:border-white">Contact Sales</Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;