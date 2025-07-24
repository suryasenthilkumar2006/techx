import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const AboutHostSection = (): JSX.Element => {
  return (
    <section className="relative w-full pt-20 pb-0 overflow-hidden bg-[linear-gradient(180deg,rgba(45,3,3,1)_0%,rgba(89,9,9,1)_50%,rgba(45,3,3,1)_100%)] min-h-0">
      {/* Background image overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img
          className="w-full h-full object-cover opacity-40"
          alt="Background texture"
          src="/figmaAssets/rectangle-14.png"
        />
      </div>
      {/* Strong dark shadow overlay */}
      <div className="absolute inset-0 bg-black/60 z-0 shadow-[0_40px_120px_40px_rgba(0,0,0,0.85)]"></div>

      {/* Content container */}
      <div className="relative z-20 container mx-auto px-8 lg:px-32 max-w-7xl pb-0">
        {/* Section heading */}
        <h2 className="font-sans font-bold text-white text-6xl mb-16 text-center lg:text-left drop-shadow-2xl">
          The Host Institution
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Placement offers and company logos */}
          <div className="flex flex-col items-center lg:items-start space-y-8 w-full max-w-xs mx-auto">
            <div className="flex items-center space-x-6 bg-black/20 p-6 rounded-2xl backdrop-blur-sm border border-white/10 shadow-2xl w-full">
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
            <div className="bg-black/30 rounded-xl p-6 border border-white/10 shadow-xl flex flex-col items-center w-full">
              <span className="text-5xl font-extrabold text-green-400 mb-2">1527+</span>
              <span className="text-white text-lg font-semibold mb-1">Placement Offers (2025 Batch)</span>
              <span className="text-white text-base opacity-80">1000+ offers every year</span>
            </div>
            <div className="flex flex-wrap gap-3 justify-center mt-4 w-full">
              <img src="https://sairamit.edu.in/wp-content/uploads/2023/11/microsoft-logo.png" alt="Microsoft" className="h-10 w-auto bg-white rounded p-1" />
              <img src="https://sairamit.edu.in/wp-content/uploads/2023/11/oracle-logo.png" alt="Oracle" className="h-10 w-auto bg-white rounded p-1" />
              <img src="https://sairamit.edu.in/wp-content/uploads/2023/11/tcs-bot-logo.png" alt="TCS" className="h-10 w-auto bg-white rounded p-1" />
              <img src="https://sairamit.edu.in/wp-content/uploads/2023/11/vmware-logo.png" alt="VMware" className="h-10 w-auto bg-white rounded p-1" />
              <img src="https://sairamit.edu.in/wp-content/uploads/2023/11/aws-logo.png" alt="AWS" className="h-10 w-auto bg-white rounded p-1" />
              <img src="https://sairamit.edu.in/wp-content/uploads/2023/11/cisco-logo.png" alt="Cisco" className="h-10 w-auto bg-white rounded p-1" />
            </div>
          </div>

          {/* Right: Three main info paragraphs stacked vertically */}
          <div className="flex flex-col space-y-6">
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
}
