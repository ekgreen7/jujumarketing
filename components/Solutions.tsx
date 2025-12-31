import React, { useState, useEffect } from 'react';
import { Video, GraduationCap, Compass, Layout, ArrowUpRight, Loader2 } from 'lucide-react';
import Button from './Button';
import { generateImage } from '../utils/ai';

const Solutions: React.FC = () => {
  const [generatedImages, setGeneratedImages] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState<Record<string, boolean>>({
    "Event & Class Summaries": true,
    "AI Tools Discovery": true
  });

  const solutions = [
    {
      title: "Event & Class Summaries",
      description: "Automatically transform weekly photos into engaging short video summaries. Keep families and donors connected with your mission without extra work.",
      icon: Video,
      color: "text-blue-500",
      bg: "bg-blue-50",
      prompt: "High quality 3D render of a school calendar merging with a digital video play button, isometric view, soft lighting, white background, blue and purple accent colors"
    },
    {
      title: "AI Tools Discovery",
      description: "We curate fun and useful AI educational tools for students. Our constantly updated library ensures your students have access to safe, cutting-edge learning technologies.",
      icon: Compass,
      color: "text-purple-500",
      bg: "bg-purple-50",
      prompt: "High quality 3D render of a futuristic compass and a cute robot helper, isometric view, soft lighting, white background, purple and green accent colors"
    },
    {
      title: "Staff Training",
      description: "Support your staff with comprehensive training sessions on AI. We empower your team to use these tools effectively to save time on planning and administration.",
      icon: GraduationCap,
      color: "text-green-500",
      bg: "bg-green-50"
    },
    {
      title: "Website Enhancement",
      description: "Enhance your organization's website with engaging educational content. Our widgets automatically populate your site with explainer videos and interactive modules.",
      icon: Layout,
      color: "text-rose-500",
      bg: "bg-rose-50"
    }
  ];

  useEffect(() => {
    const fetchImages = async () => {
      const itemsToGenerate = solutions.filter(item => item.prompt);
      
      for (const item of itemsToGenerate) {
        const cached = localStorage.getItem(`juju_sol_${item.title}`);
        if (cached) {
          setGeneratedImages(prev => ({ ...prev, [item.title]: cached }));
          setLoading(prev => ({ ...prev, [item.title]: false }));
        } else {
          try {
            const base64 = await generateImage(item.prompt!);
            if (base64) {
              setGeneratedImages(prev => ({ ...prev, [item.title]: base64 }));
              try {
                localStorage.setItem(`juju_sol_${item.title}`, base64);
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
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:items-end mb-16">
          <div className="lg:w-2/3">
            <span className="text-accent-500 font-bold tracking-wider uppercase text-sm">Beyond Content Creation</span>
            <h2 className="text-4xl font-heading font-bold text-dark-900 mt-2 leading-tight">
              Holistic AI Solutions for <br/><span className="text-primary-600">Education & Outreach</span>
            </h2>
          </div>
          <div className="lg:w-1/3 lg:text-right">
             <Button variant="outline">Schedule a Demo</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((item, index) => {
            const hasImage = !!item.prompt;
            const imageSrc = generatedImages[item.title];
            const isLoading = loading[item.title];

            return (
              <div key={index} className="group rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 bg-white overflow-hidden flex flex-col">
                {hasImage ? (
                  <div className="h-40 bg-gray-50 overflow-hidden relative flex items-center justify-center">
                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none"></div>
                     
                     {isLoading ? (
                        <div className="flex items-center gap-2 text-primary-500 animate-pulse z-20">
                          <Loader2 size={20} className="animate-spin" />
                          <span className="text-xs font-bold">Creating AI Visual...</span>
                        </div>
                      ) : imageSrc ? (
                        <img src={imageSrc} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      ) : (
                        <div className="z-20 text-white/50 text-xs">Generation failed</div>
                      )}

                     <div className={`absolute bottom-4 left-4 w-10 h-10 ${item.bg} ${item.color} rounded-xl flex items-center justify-center z-20 shadow-lg backdrop-blur-sm bg-white/90`}>
                       <item.icon size={20} />
                     </div>
                  </div>
                ) : (
                  <div className="p-8 pb-0">
                    <div className={`w-14 h-14 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <item.icon size={28} />
                    </div>
                  </div>
                )}
                
                <div className="p-8 pt-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-dark-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                    {item.description}
                  </p>
                  <div className="flex items-center text-primary-600 font-bold text-sm cursor-pointer group-hover:gap-2 transition-all">
                    <span>Learn more</span>
                    <ArrowUpRight size={16} className="ml-1" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Solutions;