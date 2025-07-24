import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const AboutUsSection = (): JSX.Element => {
  
  const countdownItems = [
    { value: "54", label: "DAYS" },
    { value: "24", label: "HOURS" },
    { value: "30", label: "MINUTES" },
    { value: "20", label: "SECONDS" },
  ];

  
  const collaboratorLogos = [
    {
      src: "/figmaAssets/cs-poster-4.png",
      alt: "CS POSTER",
      className: "w-[101px] h-[95px]",
    },
    {
      src: "/figmaAssets/ieee-mb-blue-3.png",
      alt: "IEEE MB BLUE",
      className: "w-[219px] h-16",
    },
    {
      src: "/figmaAssets/layer-5.png",
      alt: "Layer",
      className: "w-[209px] h-16",
    },
    {
      src: "/figmaAssets/images-removebg-preview--1--2.png",
      alt: "Images removebg",
      className: "w-[264px] h-[126px]",
    },
    {
      src: "/figmaAssets/cs-poster-1--3.png",
      alt: "CS POSTER",
      className: "w-[191px] h-[85px]",
    },
  ];

  return (
    <section id="about" className="relative w-full min-h-screen overflow-hidden">
      
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100 z-10"
        style={{
          backgroundImage: `url('https://www.dropbox.com/scl/fi/k83n31ithvnlgvu0dkcou/WhatsApp-Image-2025-07-23-at-22.35.26_d919ebf4.jpg?rlkey=b1npq90ebic8eo7csizbuk554&st=suvsrvc2&dl=1')`
        }}
      ></div>
      
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(45,3,3,0.7)_0%,rgba(144,8,8,0.7)_100%)] z-20"></div>
      <div className="relative z-30">
        <div className="w-full bg-transparent">
          
          <div className="flex flex-col items-center justify-end mx-auto w-full max-w-[1200px] p-8">
            
              className="relative w-full h-[480px]"
              alt="Vector"
              src="/figmaAssets/vector-1-1.svg"
            
            <img
              className="relative w-[290px] h-[3px] -mt-1"
              alt="Vector"
              src="/figmaAssets/vector-6.svg"
            />
          </div>
          
          <div className="flex flex-col items-center mx-auto w-full max-w-[900px] border-4 border-white rounded-lg p-12 mt-10 bg-black/10 shadow-2xl backdrop-blur-sm">
            
            <div className="flex items-center justify-center w-[266px] px-3 py-[9px] bg-black rounded-[20px] overflow-hidden shadow-2xl backdrop-blur-sm mb-12">
              <div className="[font-family:'Crimson_Text',Helvetica] font-normal text-white text-4xl drop-shadow-lg">
                Now Live In
              </div>
            </div>

            
            <div className="flex items-center justify-center gap-[29px]">
              {countdownItems.map((item, index) => (
                <Card
                  key={index}
                  className="w-[145.65px] h-[191px] bg-black rounded-[30px] shadow-[0px_0px_15px_#0000004c]"
                >
                  <CardContent className="p-0 h-full flex flex-col items-center justify-center">
                    <div className="[font-family:'Inter',Helvetica] font-normal text-[#ff0000] text-5xl">
                      {item.value}
                    </div>
                    <div className="[font-family:'Inter',Helvetica] font-bold text-white text-2xl tracking-[1.00px] mt-4">
                      {item.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>



          
          <div className="flex flex-col items-center mx-auto max-w-[1020px] mt-[100px] px-4">
            <h2 className="[font-family:'Aoboshi_One',Helvetica] font-normal text-5xl text-center">
              <span className="text-white">What is Tech</span>
              <span className="text-[#ff0000]">X </span>
              <span className="text-white">?</span>
            </h2>

            <p className="[font-family:'Aoboshi_One',Helvetica] font-normal text-white text-2xl text-justify mt-6">
              TechX Madras is a premier initiative hosted by the IEEE CS SBC of
              SSIT, as part of the IEEE CS SYP TechX series, in association with
              the IEEE CS Madras Chapter. Gathering over 200+ passionate tech
              minds, this dynamic two-day event offers a vibrant mix of
              learning, collaboration, and innovation. Participants dive into
              engaging hands-on workshops, thought-provoking tech talks led by
              industry experts, and high-energy sessions including debates,
              panel discussions, and a thrilling hackathon&nbsp;&nbsp;all
              designed to inspire, connect, and ignite the next generation of
              tech leaders.
            </p>
          </div>

          
          <div className="flex flex-col items-center justify-center w-full mt-[200px]">
            <h3 className="opacity-75 text-center [font-family:'Aoboshi_One',Helvetica] font-normal text-white text-5xl mb-6">
              Our Collaborators
            </h3>

            <div className="w-full h-[146px] bg-black overflow-hidden relative">
              <div className="flex items-center gap-20 p-2.5 animate-scroll">
                {collaboratorLogos.map((logo, index) => (
                  <img
                    key={index}
                    className={`object-contain flex-shrink-0 ${logo.className}`}
                    alt={logo.alt}
                    src={logo.src}
                  />
                ))}
                
                {collaboratorLogos.map((logo, index) => (
                  <img
                    key={`duplicate-${index}`}
                    className={`object-contain flex-shrink-0 ${logo.className}`}
                    alt={logo.alt}
                    src={logo.src}
                  />
                ))}
                
                {collaboratorLogos.map((logo, index) => (
                  <img
                    key={`triple-${index}`}
                    className={`object-contain flex-shrink-0 ${logo.className}`}
                    alt={logo.alt}
                    src={logo.src}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
