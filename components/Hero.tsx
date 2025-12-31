import React, { useState } from 'react';
import Button from './Button';
import { ArrowRight, Upload, Wand2, PlayCircle, Image as ImageIcon, Sparkles, X } from 'lucide-react';

const Hero: React.FC = () => {
  const [showVideoModal, setShowVideoModal] = useState(false);

  return (
    <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-36 overflow-hidden bg-hero-gradient">
      {/* Abstract Background Blobs */}
      <div className="blob w-[600px] h-[600px] bg-purple-500 rounded-full top-[-10%] left-[-10%] mix-blend-multiply opacity-50 blur-3xl animate-pulse"></div>
      <div className="blob w-[500px] h-[500px] bg-indigo-500 rounded-full bottom-[-10%] right-[-10%] mix-blend-multiply opacity-50 blur-3xl"></div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

      <div className="container mx-auto px-4 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white border border-white/20 backdrop-blur-md mb-8">
              <Sparkles className="w-4 h-4 text-accent-400" />
              <span className="text-sm font-semibold tracking-wide">AI Powered Media Generation; Videos, Lessons, Explainers, Flyers and Infographics</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-heading font-bold text-white leading-tight mb-6">
              Turn Your Mission <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-white">Into Magic</span>
            </h1>
            
            <p className="text-lg text-indigo-100 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
              Transform a single prompt or photo into a complete media package. Create fundraising videos, event flyers, and explainer animations instantly with the world's first AI creative suite designed specifically for K12, private, charter schools, and nonprofits.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <Button variant="secondary" size="lg" className="group">
                Start Creating
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="white" 
                size="lg"
                onClick={() => setShowVideoModal(true)}
              >
                <PlayCircle className="mr-2 w-5 h-5" />
                Watch 1-Min Demo
              </Button>
            </div>
          </div>

          <div className="lg:w-1/2 relative perspective-1000">
            {/* AI Generator Interface Mockup */}
            <div className="relative z-10 floating-card">
               <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-dark-900/90 backdrop-blur-xl p-6">
                 {/* Header */}
                 <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                   <div className="flex gap-4">
                     <span className="text-white font-bold border-b-2 border-accent-400 pb-4 -mb-4.5">Video Reel</span>
                     <span className="text-gray-400">Banner</span>
                     <span className="text-gray-400">Mockup</span>
                   </div>
                 </div>

                 {/* Upload Area */}
                 <div className="border-2 border-dashed border-white/20 rounded-xl bg-white/5 p-8 text-center mb-6 group cursor-pointer hover:border-accent-400 transition-colors">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent-400/20 text-accent-400">
                      <Upload size={24} />
                    </div>
                    <p className="text-white font-medium mb-1">Upload Event Photo</p>
                    <p className="text-xs text-gray-400">Drag & drop or browse</p>
                 </div>

                 {/* Prompt Input */}
                 <div className="bg-dark-800 rounded-lg p-3 flex items-center gap-3 border border-white/10 mb-6">
                    <Wand2 size={18} className="text-purple-400" />
                    <input type="text" placeholder="Describe your fundraiser (e.g. Winter Bake Sale...)" className="bg-transparent text-sm text-white w-full focus:outline-none" />
                 </div>

                 {/* Action Button */}
                 <Button variant="gradient" className="w-full justify-center">
                    <Sparkles className="mr-2 w-4 h-4" />
                    Generate Assets
                 </Button>

               </div>
               
               {/* Floating Result Badge */}
               <div className="absolute -right-8 top-1/2 bg-white p-3 rounded-lg shadow-xl animate-bounce">
                  <div className="flex items-center gap-3">
                    <img src="https://picsum.photos/40/40" className="rounded w-10 h-10 object-cover" alt="Result" />
                    <div>
                      <p className="text-xs font-bold text-dark-900">Video Ready!</p>
                      <p className="text-xs text-green-500 font-bold">00:15s • 1080p</p>
                    </div>
                  </div>
               </div>

            </div>

            {/* Decorative BG Elements behind mockup */}
            <div className="absolute -z-10 top-10 -right-10 w-full h-full border-2 border-white/5 rounded-3xl transform rotate-6"></div>
            <div className="absolute -z-10 -bottom-10 -left-10 w-full h-full bg-gradient-to-tr from-primary-600 to-transparent opacity-20 rounded-3xl transform -rotate-3"></div>
          </div>

        </div>
      </div>

      {/* Video Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200" onClick={() => setShowVideoModal(false)}>
          <div className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200" onClick={e => e.stopPropagation()}>
            <button 
              onClick={() => setShowVideoModal(false)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-white/20 transition-colors"
            >
              <X size={24} />
            </button>
            <div className="aspect-video w-full bg-black">
              <video 
                className="w-full h-full"
                controls
                autoPlay
                playsInline
                src="https://assets.jujumarketing.com/Smurtle-Metaphors-1_small1.mp4"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;