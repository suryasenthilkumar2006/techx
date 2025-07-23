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
      imagePosition: "right",
    },
    {
      title: "Insider Stories",
      description:
        "Hear real experiences and strategies from the pros who've done it.",
      imageUrl: "/figmaAssets/vector-4-1.svg",
      imagePosition: "left",
    },
    {
      title: "Play, Win & Connect",
      description:
        "Join fun challenges, win cool prizes, and meet your future team.",
      imageUrl: "/figmaAssets/vector-5-1.svg",
      imagePosition: "right",
    },
    {
      title: "Hack & Build Workshops",
      description:
        "Get hands-on with tools and tech in guided, practical sessions.",
      imageUrl: "",
      imagePosition: "none",
    },
  ];

  // Data for speaker placeholders
  const speakerPlaceholders = [
    { type: "wide", position: "top-[60px] left-[275px]" },
    { type: "tall", position: "top-[45px] left-[60px]" },
    { type: "tall", position: "top-[45px] left-[60px]" },
    { type: "wide", position: "top-14 left-[260px]" },
  ];

  return (
    <section className="w-full bg-[linear-gradient(180deg,rgba(45,3,3,1)_0%,rgba(144,8,8,1)_100%)] py-16">
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

      {/* Speakers Section */}
      <div className="container mx-auto mt-32 relative z-10">
        <Card className="w-[800px] h-[600px] mx-auto bg-white rounded-[50px] overflow-hidden shadow-[0px_8px_32px_40px_#00000060] border-4 border-white/20 backdrop-blur-sm">
          <CardContent className="p-0 relative w-full h-full">
            {/* Speaker placeholder boxes positioned around the card */}
            {/* Top left - tall */}
            <div className="absolute top-6 left-6 w-[180px] h-[280px] bg-[#2d0303] rounded-[30px] overflow-hidden shadow-2xl border-2 border-white/10 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[120px] h-[120px] bg-[#717171] rounded-full flex items-center justify-center shadow-xl border-2 border-white/20">
                  <div className="[font-family:'Istok_Web',Helvetica] font-bold text-white text-sm text-center drop-shadow-lg">
                    coming soon
                  </div>
                </div>
              </div>
            </div>

            {/* Top right - wide */}
            <div className="absolute top-6 right-6 w-[280px] h-[180px] bg-[#2d0303] rounded-[30px] overflow-hidden shadow-2xl border-2 border-white/10 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[120px] h-[120px] bg-[#717171] rounded-full flex items-center justify-center shadow-xl border-2 border-white/20">
                  <div className="[font-family:'Istok_Web',Helvetica] font-bold text-white text-sm text-center drop-shadow-lg">
                    coming soon
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom left - wide */}
            <div className="absolute bottom-6 left-6 w-[280px] h-[180px] bg-[#2d0303] rounded-[30px] overflow-hidden shadow-2xl border-2 border-white/10 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[120px] h-[120px] bg-[#717171] rounded-full flex items-center justify-center shadow-xl border-2 border-white/20">
                  <div className="[font-family:'Istok_Web',Helvetica] font-bold text-white text-sm text-center drop-shadow-lg">
                    coming soon
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom right - tall */}
            <div className="absolute bottom-6 right-6 w-[180px] h-[280px] bg-[#2d0303] rounded-[30px] overflow-hidden shadow-2xl border-2 border-white/10 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[120px] h-[120px] bg-[#717171] rounded-full flex items-center justify-center shadow-xl border-2 border-white/20">
                  <div className="[font-family:'Istok_Web',Helvetica] font-bold text-white text-sm text-center drop-shadow-lg">
                    coming soon
                  </div>
                </div>
              </div>
            </div>

            {/* Center text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <h2 className="[font-family:'Aoboshi_One',Helvetica] font-normal text-black text-5xl">
                  Meet our
                </h2>
                <h2 className="[font-family:'Aoboshi_One',Helvetica] font-normal text-black text-5xl mt-2">
                  Speakers
                </h2>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Dark overlay for section */}
      <div className="absolute inset-0 bg-black/25 z-0"></div>
      
      {/* Sponsors Section */}
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
