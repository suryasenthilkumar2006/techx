import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const WhySponsorSection = (): JSX.Element => {
  // Data for benefit cards
  const benefitCards = [
    {
      title: "Tech Talks",
      description:
        "Dive into trending tech with expert-led sessions that keep you ahead.",
      imageUrl: "/figmaAssets/vector-3-1.svg",
    },
    {
      title: "Insider Stories",
      description:
        "Hear real experiences and strategies from the pros who've done it.",
      imageUrl: "/figmaAssets/vector-4-1.svg",
    },
    {
      title: "Play, Win & Connect",
      description:
        "Join fun challenges, win cool prizes, and meet your future team.",
      imageUrl: "/figmaAssets/vector-5-1.svg",
    },
    {
      title: "Hack & Build Workshops",
      description:
        "Get hands-on with tools and tech in guided, practical sessions.",
      imageUrl: "",
    },
  ];

  // Single professional speaker icon for all speakers
  const speakers = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 }
  ];

  const speakerIcon = (
    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
    </svg>
  );

  return (
    <section className="w-full bg-[linear-gradient(180deg,rgba(45,3,3,1)_0%,rgba(89,9,9,1)_50%,rgba(45,3,3,1)_100%)] py-20 relative overflow-hidden">
      {/* Geometric background pattern with shared image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 z-0"
        style={{ backgroundImage: `url('https://www.dropbox.com/scl/fi/k83n31ithvnlgvu0dkcou/WhatsApp-Image-2025-07-23-at-22.35.26_d919ebf4.jpg?rlkey=b1npq90ebic8eo7csizbuk554&st=suvsrvc2&dl=1')` }}></div>

      {/* Why be part of it? Section */}
       <div className="container mx-auto">
        <h2 className="text-center [font-family:'Aoboshi_One',Helvetica] text-5xl text-white mb-16">
          Why be part of it?
        </h2>

        <div className="flex flex-col gap-[18px] max-w-5xl mx-auto">
          {/* First Card - Tech Talks (left aligned with right vector) */}
          <div className="flex items-center justify-start w-full">
            <Card className="flex flex-col w-[600px] items-center rounded-[50px] overflow-hidden bg-white">
              <CardContent className="p-5">
                <h3 className="[font-family:'Aoboshi_One',Helvetica] font-normal text-black text-4xl text-center">
                  {benefitCards[0].title}
                </h3>
                <p className="[font-family:'Aoboshi_One',Helvetica] font-normal text-black text-2xl text-center mt-2">
                  {benefitCards[0].description}
                </p>
              </CardContent>
            </Card>
            {benefitCards[0].imageUrl && (
              <img
                className="relative ml-4 w-[305.69px] h-[113px]"
                alt="Vector"
                src={benefitCards[0].imageUrl}
              />
            )}
          </div>

          {/* Second Card - Insider Stories (right aligned with left vector) */}
          <div className="flex items-center justify-end w-full">
            {benefitCards[1].imageUrl && (
              <img
                className="relative w-[350.69px] h-[110px] mr-4"
                alt="Vector"
                src={benefitCards[1].imageUrl}
              />
            )}
            <Card className="flex flex-col w-[600px] items-center rounded-[50px] overflow-hidden bg-white">
              <CardContent className="p-5">
                <h3 className="[font-family:'Aoboshi_One',Helvetica] font-normal text-black text-4xl text-center">
                  {benefitCards[1].title}
                </h3>
                <p className="[font-family:'Aoboshi_One',Helvetica] font-normal text-black text-2xl text-center mt-2">
                  {benefitCards[1].description}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Third Card - Play, Win & Connect (left aligned with right vector) */}
          <div className="flex items-center justify-start w-full">
            <Card className="flex flex-col w-[600px] items-center rounded-[50px] overflow-hidden bg-white">
              <CardContent className="p-5">
                <h3 className="[font-family:'Aoboshi_One',Helvetica] font-normal text-black text-4xl text-center">
                  {benefitCards[2].title}
                </h3>
                <p className="[font-family:'Aoboshi_One',Helvetica] font-normal text-black text-2xl text-center mt-2">
                  {benefitCards[2].description}
                </p>
              </CardContent>
            </Card>
            {benefitCards[2].imageUrl && (
              <img
                className="relative ml-4 w-[347.39px] h-[105px]"
                alt="Vector"
                src={benefitCards[2].imageUrl}
              />
            )}
          </div>

          {/* Fourth Card - Hack & Build Workshops (right aligned) */}
          <div className="flex items-center justify-end w-full">
            <Card className="flex flex-col w-[600px] items-center rounded-[50px] overflow-hidden bg-white">
              <CardContent className="p-5">
                <h3 className="[font-family:'Aoboshi_One',Helvetica] font-normal text-black text-4xl text-center">
                  {benefitCards[3].title}
                </h3>
                <p className="[font-family:'Aoboshi_One',Helvetica] font-normal text-black text-2xl text-center mt-2">
                  {benefitCards[3].description}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Enhanced Speakers Section */}
      <div className="container mx-auto mt-32 relative z-10 px-4">
        <Card className="w-full max-w-6xl mx-auto bg-gradient-to-br from-white via-gray-50 to-white rounded-[60px] overflow-hidden shadow-[0px_25px_80px_rgba(0,0,0,0.6)] border-4 border-white/30 backdrop-blur-lg">
          <CardContent className="p-12 lg:p-20 relative">
            {/* Professional header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-4 mb-8">
                <div className="w-16 h-1 bg-gradient-to-r from-[#780000] to-[#450000]"></div>
                <div className="w-4 h-4 bg-[#780000] rounded-full"></div>
                <div className="w-16 h-1 bg-gradient-to-l from-[#780000] to-[#450000]"></div>
              </div>
              <h2 className="[font-family:'Aoboshi_One',Helvetica] font-normal text-black text-5xl lg:text-6xl mb-4">
                Meet our Speakers
              </h2>
              <p className="[font-family:'Aoboshi_One',Helvetica] text-gray-600 text-xl max-w-2xl mx-auto">
                Industry experts and thought leaders ready to share their insights
              </p>
            </div>

            {/* Professional 4-speaker grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {speakers.map((speaker, index) => (
                <div key={speaker.id} className="group relative">
                  {/* Speaker card */}
                  <div className="bg-gradient-to-br from-[#2d0303] via-[#450000] to-[#780000] rounded-[30px] p-8 shadow-[0_15px_40px_rgba(0,0,0,0.4)] border-2 border-white/10 hover:shadow-[0_25px_60px_rgba(0,0,0,0.6)] transition-all duration-500 hover:scale-105 cursor-pointer relative overflow-hidden">

                    {/* Subtle animated background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Speaker content */}
                    <div className="relative z-10 flex flex-col items-center space-y-6">
                      {/* Professional icon container */}
                      <div className="w-24 h-24 bg-gradient-to-br from-[#717171] via-[#5a5a5a] to-[#404040] rounded-full flex items-center justify-center shadow-2xl border-3 border-white/20 group-hover:shadow-3xl group-hover:border-white/40 transition-all duration-500 relative overflow-hidden">
                        {/* Shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        {speakerIcon}
                      </div>

                      {/* Speaker info */}
                      <div className="text-center space-y-3">
                        <div className="[font-family:'Istok_Web',Helvetica] font-bold text-white text-sm opacity-90 group-hover:opacity-100 transition-opacity duration-300 tracking-wide">
                          Speaker {speaker.id}
                        </div>
                        <div className="[font-family:'Istok_Web',Helvetica] font-medium text-white/70 text-xs group-hover:text-white/90 transition-colors duration-300">
                          Coming Soon
                        </div>

                        {/* Professional divider */}
                        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto group-hover:via-white/70 transition-colors duration-300"></div>
                      </div>
                    </div>

                    {/* Corner accent */}
                    <div className="absolute top-3 right-3 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
                  </div>

                  {/* Speaker number badge */}
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-br from-[#780000] to-[#450000] rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                    <span className="text-white text-sm font-bold">{speaker.id}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced decorative elements */}
            <div className="absolute top-8 right-8 w-3 h-3 bg-[#780000]/30 rounded-full animate-pulse"></div>
            <div className="absolute bottom-8 left-8 w-4 h-4 bg-[#780000]/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 left-8 w-2 h-2 bg-[#780000]/40 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
            <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-[#780000]/50 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
          </CardContent>
        </Card>
      </div>

      {/* Simplified Sponsors Section */}
      <div className="container mx-auto mt-32 relative z-10">
        <div className="bg-black/20 p-8 rounded-3xl backdrop-blur-sm border border-white/10 shadow-2xl">
          <h2 className="[font-family:'Aoboshi_One',Helvetica] font-normal text-white text-5xl text-center drop-shadow-xl">
            Our Sponsors
          </h2>
          <p className="[font-family:'Aoboshi_One',Helvetica] font-normal text-white text-3xl opacity-50 mt-8 text-center drop-shadow-lg">
            People who helped to make this event happen
          </p>
        </div>
      </div>
    </section>
  );
};