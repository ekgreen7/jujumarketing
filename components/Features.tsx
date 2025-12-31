import React, { useState, useEffect } from 'react';
import { Video, Image as ImageIcon, Languages, Wand2, Music, Download, Loader2 } from 'lucide-react';
import Button from './Button';
import { generateImage } from '../utils/ai';

const Features: React.FC = () => {
  const [generatedImages, setGeneratedImages] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState<Record<string, boolean>>({
    "Photo to Video": true,
    "Smart Banners": true
  });

  const featuresList = [
    { 
      title: "Photo to Video", 
      desc: "Turn static event photos into engaging video reels for Instagram, TikTok, and Facebook instantly.",
      icon: Video,
      color: "text-purple-500",
      bg: "bg-purple-100",
      prompt: "High quality 3D render of a stack of photographs magically transforming into a glowing film reel strip, isometric view, soft studio lighting, white background, purple and gold accent colors"
    },
    { 
      title: "Smart Banners", 
      desc: "Generate perfectly sized banners for newsletters, websites, and email blasts automatically.",
      icon: ImageIcon,
      color: "text-blue-500",
      bg: "bg-blue-100",
      prompt: "High quality 3D render of floating web banners and digital layout grids, isometric view, modern design, soft studio lighting, white background, blue and cyan accent colors"
    },
    { 
      title: "Multilingual AI", 
      desc: "Generate flyers and videos in multiple languages to reach every family in your diverse community.",
      icon: Languages,
      color: "text-green-500",
      bg: "bg-green-100"
    },
    { 
      title: "AI Voiceovers", 
      desc: "Add professional voice narration to your announcements without recording a single word.",
      icon: Music,
      color: "text-pink-500",
      bg: "bg-pink-100"
    },
    { 
      title: "One-Click Branding", 
      desc: "Automatically apply your organization's colors, mascot, and logo to every asset generated.",
      icon: Wand2,
      color: "text-amber-500",
      bg: "bg-amber-100"
    },
    { 
      title: "Instant Download", 
      desc: "Download high-resolution assets ready for print or digital distribution immediately.",
      icon: Download,
      color: "text-cyan-500",
      bg: "bg-cyan-100"
    }
  ];

  useEffect(() => {
    const fetchImages = async () => {
      // Filter items that need generation
      const itemsToGenerate = featuresList.filter(item => item.prompt);
      
      for (const item of itemsToGenerate) {
        // Check local storage to save API calls on refresh
        const cached = localStorage.getItem(`juju_img_${item.title}`);
        if (cached) {
          setGeneratedImages(prev => ({ ...prev, [item.title]: cached }));
          setLoading(prev => ({ ...prev, [item.title]: false }));
        } else {
          // Generate
          try {
            const base64 = await generateImage(item.prompt!);
            if (base64) {
              setGeneratedImages(prev => ({ ...prev, [item.title]: base64 }));
              try {
                localStorage.setItem(`juju_img_${item.title}`, base64);
              } catch (e) {
                console.warn("Storage full, skipping cache");
              }
            }
          } catch (e) {
            console.error("Failed to generate", item.title);
          } finally {
            setLoading(prev => ({ ...prev, [item.title]: false }));
          }
        }
      }
    };

    fetchImages();
  }, []);

  return (
    <section id="features" className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-primary-50/50">
      {/* Decorative Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute top-[20%] right-[-5%] w-96 h-96 bg-accent-200/20 rounded-full blur-3xl" />
          <div className="absolute bottom-[10%] left-[-5%] w-96 h-96 bg-primary-200/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary-600 font-bold tracking-wider uppercase text-sm bg-primary-100 px-3 py-1 rounded-full border border-primary-200">Creative Suite</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-dark-900 mt-4 mb-6">
            From One Idea to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500">Complete Solution</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Upload a simple photo from your phone, and let JujuLabs generate professional marketing materials for your school or nonprofit. No design skills required.
          </p>
        </div>

        {/* Feature Grid with Colorful Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {featuresList.map((f, i) => {
              const hasImage = !!f.prompt;
              const imageSrc = generatedImages[f.title];
              const isLoading = loading[f.title];

              return (
                <div key={i} className={`group relative rounded-2xl bg-white shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col ${hasImage ? 'row-span-2' : ''}`}>
                  {hasImage && (
                    <div className="h-48 w-full bg-gray-100 relative overflow-hidden flex items-center justify-center">
                      <div className="absolute inset-0 bg-primary-900/5 group-hover:bg-transparent transition-colors z-10"></div>
                      
                      {isLoading ? (
                        <div className="flex flex-col items-center gap-2 text-primary-500 animate-pulse">
                          <Loader2 size={24} className="animate-spin" />
                          <span className="text-xs font-bold uppercase tracking-wider">Generating AI Image...</span>
                        </div>
                      ) : imageSrc ? (
                        <img src={imageSrc} alt={f.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                      ) : (
                        <div className="text-gray-400 text-xs">Image generation failed</div>
                      )}
                    </div>
                  )}
                  <div className="p-8 flex flex-col flex-grow">
                    <div className={`w-14 h-14 ${f.bg} ${f.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                      <f.icon size={26} />
                    </div>
                    <h3 className="text-xl font-bold text-dark-900 mb-3 group-hover:text-primary-600 transition-colors">{f.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{f.desc}</p>
                  </div>
                </div>
              );
            })}
        </div>

        {/* How It Works Strip */}
        <div className="bg-dark-900 rounded-3xl p-8 lg:p-16 shadow-2xl relative overflow-hidden text-white">
           <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500 rounded-full blur-[100px] opacity-20"></div>
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-500 rounded-full blur-[100px] opacity-20"></div>
           
           <div className="text-center mb-12 relative z-10">
             <h3 className="text-3xl font-heading font-bold">How It Works</h3>
             <p className="text-gray-400 mt-2">Create professional content in 3 simple steps</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
             <div className="text-center relative group">
               <div className="w-16 h-16 bg-white/10 text-accent-400 border border-white/20 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:bg-accent-400 group-hover:text-dark-900 transition-all">1</div>
               <h4 className="text-xl font-bold mb-2">Upload Photo</h4>
               <p className="text-gray-400 text-sm">Drag and drop your event photo, mascot image, or organization logo.</p>
               <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-white/20 to-transparent -ml-16 -z-10"></div>
             </div>
             <div className="text-center relative group">
               <div className="w-16 h-16 bg-white/10 text-accent-400 border border-white/20 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:bg-accent-400 group-hover:text-dark-900 transition-all">2</div>
               <h4 className="text-xl font-bold mb-2">Choose Output</h4>
               <p className="text-gray-400 text-sm">Select Video Reel, Flyer, or Banner. Add a short text prompt.</p>
               <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-white/20 to-transparent -ml-16 -z-10"></div>
             </div>
             <div className="text-center group">
               <div className="w-16 h-16 bg-white/10 text-accent-400 border border-white/20 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:bg-accent-400 group-hover:text-dark-900 transition-all">3</div>
               <h4 className="text-xl font-bold mb-2">Get Visuals</h4>
               <p className="text-gray-400 text-sm">AI generates your assets instantly. Download and share.</p>
             </div>
           </div>

           <div className="text-center mt-12 relative z-10">
             <Button variant="secondary" size="lg">Try It Free</Button>
           </div>
        </div>

      </div>
    </section>
  );
};

export default Features;