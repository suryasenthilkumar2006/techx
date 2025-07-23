import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const AboutHostSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-20 overflow-hidden bg-[linear-gradient(180deg,rgba(45,3,3,1)_0%,rgba(89,9,9,1)_50%,rgba(45,3,3,1)_100%)]">
      {/* Background image overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img
          className="w-full h-full object-cover opacity-40"
          alt="Background texture"
          src="/figmaAssets/rectangle-14.png"
        />
      </div>
      
      {/* Additional dark overlay for enhanced depth */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      {/* Content container */}
      <div className="relative z-20 container mx-auto px-8 lg:px-32 max-w-7xl">
        {/* Section heading */}
        <h2 className="font-sans font-bold text-white text-6xl mb-16 text-center lg:text-left drop-shadow-2xl">
          The Host Institution
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Institution name and logo */}
          <div className="flex flex-col items-center lg:items-start space-y-8">
            <div className="flex items-center space-x-6 bg-black/20 p-6 rounded-2xl backdrop-blur-sm border border-white/10 shadow-2xl">
              <img
                className="w-20 h-20 object-contain drop-shadow-xl"
                alt="Institution logo"
                src="/figmaAssets/ellipse-4.png"
              />
              <h3 className="font-sans font-bold text-white text-4xl lg:text-5xl leading-tight drop-shadow-lg">
                Sri Sai Ram<br />
                Institute of Technology
              </h3>
            </div>
          </div>

          {/* Institution description */}
          <div className="space-y-6">
            <div className="bg-black/20 backdrop-blur-sm rounded-lg p-8 border border-white/10">
              <p className="font-sans text-white text-lg leading-relaxed">
                Sri Sairam Institute of Technology, Chennai, affiliated with Anna University and accredited with an 'A+' grade by NAAC and NBA, is a premier engineering college known for academic excellence and innovation.
              </p>
            </div>
            
            <div className="bg-black/20 backdrop-blur-sm rounded-lg p-8 border border-white/10">
              <p className="font-sans text-white text-lg leading-relaxed">
                Through platforms like Ideathon, Solveathon, Innovathon, and Inspirathon, and initiatives like the Sairam Techno Incubation Foundation, it has supported over 85 startups in robotics, agriculture, healthcare, and defence.
              </p>
            </div>
            
            <div className="bg-black/20 backdrop-blur-sm rounded-lg p-8 border border-white/10">
              <p className="font-sans text-white text-lg leading-relaxed">
                Empowering students to build real-world solutions aligned with the UN Sustainable Development Goals (SDGs).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
