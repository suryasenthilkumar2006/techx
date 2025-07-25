import { FacebookIcon, InstagramIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const Bubble = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg className={className} style={style} width="80" height="80" viewBox="0 0 80 80" fill="none">
    <ellipse cx="40" cy="40" rx="38" ry="38" fill="url(#bubbleGradient)" opacity="0.7" />
    <defs>
      <radialGradient id="bubbleGradient" cx="0" cy="0" r="1" gradientTransform="translate(40 40) scale(38)">
        <stop stopColor="#fff" stopOpacity="0.8" />
        <stop offset="1" stopColor="#800000" stopOpacity="0.3" />
      </radialGradient>
    </defs>
  </svg>
);

const Bean = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg className={className} style={style} width="60" height="40" viewBox="0 0 60 40" fill="none">
    <ellipse cx="30" cy="20" rx="28" ry="16" fill="url(#beanGradient)" opacity="0.8" />
    <defs>
      <linearGradient id="beanGradient" x1="0" y1="0" x2="60" y2="40" gradientUnits="userSpaceOnUse">
        <stop stopColor="#fff" stopOpacity="0.7" />
        <stop offset="1" stopColor="#800000" stopOpacity="0.5" />
      </linearGradient>
    </defs>
  </svg>
);

export const ContactUsSection = (): JSX.Element => {
  const contactInfo = [
    {
      title: "CS Advisor",
      details: "Mr. Parthiban M",
    },
    {
      title: "CS Chair",
      details: "Charu Dharshana",
    },
    {
      title: "Email us",
      details: "techxmadras25@gmail.com",
    },
  ];

  const socialInfo = {
    title: "Stay tuned with us",
    instagram: "ieee_ssit_cs_society",
    facebook: "IEEE Computer Society - SSIT",
  };

  const addressInfo = {
    title: "Address",
    details:
      "Sairam College Rd, Sai Leo Nagar, West Tambaram, Chennai, Tamil Nadu 600044",
  };

  return (
    <section id="contact" className="relative w-full bg-gradient-to-br from-[#800000] via-[#a83232] to-[#800000] py-20 overflow-hidden">

      <Bubble className="absolute left-10 top-10 animate-bubble1 z-0" />
      <Bubble className="absolute right-16 top-32 animate-bubble2 z-0" style={{ width: 60, height: 60 }} />
      <Bubble className="absolute left-1/2 bottom-10 animate-bubble3 z-0" style={{ width: 100, height: 100 }} />

      <Bubble className="absolute left-1/4 top-1/3 animate-bubble4 z-0" style={{ width: 70, height: 70 }} />
      <Bubble className="absolute right-1/4 bottom-1/4 animate-bubble5 z-0" style={{ width: 90, height: 90 }} />
      <Bubble className="absolute right-1/2 top-1/4 animate-bubble6 z-0" style={{ width: 50, height: 50 }} />
      <Bubble className="absolute left-1/3 bottom-1/5 animate-bubble7 z-0" style={{ width: 80, height: 80 }} />

      <Bean className="absolute right-10 bottom-24 animate-bean1 z-0" />
      <Bean className="absolute left-24 top-1/2 animate-bean2 z-0" style={{ width: 80, height: 50 }} />

      <Bean className="absolute left-1/3 bottom-1/4 animate-bean3 z-0" style={{ width: 70, height: 40 }} />
      <Bean className="absolute right-1/3 top-1/4 animate-bean4 z-0" style={{ width: 90, height: 60 }} />
      <Bean className="absolute left-1/2 top-1/5 animate-bean5 z-0" style={{ width: 60, height: 30 }} />
      <Bean className="absolute right-1/4 bottom-1/3 animate-bean6 z-0" style={{ width: 100, height: 50 }} />

          <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80 z-0"
        style={{
          backgroundImage: `url('https://www.dropbox.com/scl/fi/k83n31ithvnlgvu0dkcou/WhatsApp-Image-2025-07-23-at-22.35.26_d919ebf4.jpg?rlkey=b1npq90ebic8eo7csizbuk554&st=suvsrvc2&dl=1')`
        }}
      ></div>

      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80 z-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
 
        <div className="flex flex-col items-center justify-center mb-10">
          <div className="bg-white/10 p-8 rounded-3xl backdrop-blur-xl border border-white/30 shadow-[0_8px_32px_0_rgba(80,0,0,0.45)]">
            <h2 className="[font-family:'Aoboshi_One',Helvetica] font-semibold text-white text-6xl drop-shadow-2xl tracking-wide">
              Contact Us
            </h2>
          </div>
        </div>
        <div className="flex justify-center mb-12">
          <p className="max-w-3xl [font-family:'Aoboshi_One',Helvetica] font-normal text-white text-2xl text-center leading-relaxed drop-shadow-lg">
            Be part of something extraordinary. Join us at TechX 2025 to
            explore, excel, and experience the future of technology. Discover
            how you can contribute to innovation, connect with visionaries, and
            make a lasting impact.
          </p>
        </div>
        <div className="flex justify-center mb-12">
          <Card className="w-full max-w-2xl bg-white/10 border-0 shadow-2xl backdrop-blur-lg hover:scale-105 transition-transform duration-300">
            <CardContent className="p-0">
              <a
                href="https://www.google.com/maps/place/Sri+Sairam+Institute+of+Technology/@12.9609357,80.0547164,1616m/data=!3m1!1e3!4m14!1m7!3m6!1s0x3a52f51f638ddfbb:0xf3aef7ec7c8979ba!2sSri+Sairam+Institute+of+Technology!8m2!3d12.9606471!4d80.0532325!16s%2Fm%2F010qj3mw!3m5!1s0x3a52f51f638ddfbb:0xf3aef7ec7c8979ba!8m2!3d12.9606471!4d80.0532325!16s%2Fm%2F010qj3mw?entry=ttu&g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open location in Google Maps"
              >
                <div className="relative">
                  <img
                    className="w-full h-auto object-cover rounded-xl shadow-[0_16px_48px_0_rgba(80,0,0,0.85)] transition-transform duration-200 hover:scale-105"
                    alt="Location Map"
                    src="/figmaAssets/image-8-1.png"
                  />
                  <div className="absolute inset-0 bg-black/20 rounded-xl pointer-events-none"></div>
                </div>
              </a>
            </CardContent>
          </Card>
        </div>
        <div className="flex flex-col space-y-8">
          <div className="flex flex-wrap justify-between gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex flex-col bg-white/10 rounded-xl p-6 shadow-lg backdrop-blur-md min-w-[180px] hover:scale-105 transition-transform duration-300">
                <div className="[font-family:'Aoboshi_One',Helvetica] font-semibold text-white text-base mb-2">
                  {info.title}
                </div>
                <div className="font-normal text-white text-sm">{info.details}</div>
              </div>
            ))}

            <div className="flex flex-col bg-white/10 rounded-xl p-6 shadow-lg backdrop-blur-md min-w-[180px] hover:scale-105 transition-transform duration-300">
              <div className="[font-family:'Aoboshi_One',Helvetica] font-semibold text-white text-base mb-2">
                {socialInfo.title}
              </div>
              <div className="flex items-center mt-1">
                <InstagramIcon className="h-4 w-4 text-pink-400 mr-2 drop-shadow" />
                <span className="text-white text-sm">{socialInfo.instagram}</span>
              </div>
              <div className="flex items-center mt-1">
                <FacebookIcon className="h-4 w-4 text-blue-400 mr-2 drop-shadow" />
                <span className="text-white text-sm">{socialInfo.facebook}</span>
              </div>
            </div>

            <div className="flex flex-col bg-white/10 rounded-xl p-6 shadow-lg backdrop-blur-md min-w-[180px] hover:scale-105 transition-transform duration-300">
              <div className="[font-family:'Aoboshi_One',Helvetica] font-semibold text-white text-base mb-2">
                {addressInfo.title}
              </div>
              <div className="font-normal text-white text-sm">{addressInfo.details}</div>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <div className="[font-family:'Aoboshi_One',Helvetica] font-normal text-white text-[15px] text-center opacity-80">
              © Copyright IEEE SSIT SBC. All Rights Reserved
              <br />
              Designed by TechXMadras Tech Team.
            </div>
          </div>
        </div>
      </div>

        <style>
        {`
          .animate-bubble1 {
            animation: bubbleAppearMove1 12s infinite cubic-bezier(.4,0,.2,1) alternate;
          }
          .animate-bubble2 {
            animation: bubbleAppearMove2 10s infinite cubic-bezier(.4,0,.2,1) alternate;
          }
          .animate-bubble3 {
            animation: bubbleAppearMove3 14s infinite cubic-bezier(.4,0,.2,1) alternate;
          }
          .animate-bean1 {
            animation: beanAppearMove1 13s infinite cubic-bezier(.4,0,.2,1) alternate;
          }
          .animate-bean2 {
            animation: beanAppearMove2 11s infinite cubic-bezier(.4,0,.2,1) alternate;
          }
          @keyframes bubbleAppearMove1 {
            0%   { opacity: 0; transform: translateY(0) scale(0.7) rotateY(0deg);}
            10%  { opacity: 1; transform: translateY(0) scale(1) rotateY(10deg);}
            50%  { opacity: 1; transform: translateY(-40px) scale(1.15) rotateY(25deg); filter: drop-shadow(0 8px 32px #80000088);}
            90%  { opacity: 1; }
            100% { opacity: 0; transform: translateY(0) scale(0.7) rotateY(0deg);}
          }
          @keyframes bubbleAppearMove2 {
            0%   { opacity: 0; transform: translateY(0) scale(0.7) rotateX(0deg);}
            10%  { opacity: 1; transform: translateY(0) scale(1) rotateX(10deg);}
            50%  { opacity: 1; transform: translateY(30px) scale(0.95) rotateX(25deg); filter: drop-shadow(0 8px 32px #80000088);}
            90%  { opacity: 1; }
            100% { opacity: 0; transform: translateY(0) scale(0.7) rotateX(0deg);}
          }
          @keyframes bubbleAppearMove3 {
            0%   { opacity: 0; transform: translateY(0) scale(0.7) rotateZ(0deg);}
            10%  { opacity: 1; transform: translateY(0) scale(1) rotateZ(10deg);}
            50%  { opacity: 1; transform: translateY(-60px) scale(1.2) rotateZ(25deg); filter: drop-shadow(0 8px 32px #80000088);}
            90%  { opacity: 1; }
            100% { opacity: 0; transform: translateY(0) scale(0.7) rotateZ(0deg);}
          }
          @keyframes beanAppearMove1 {
            0%   { opacity: 0; transform: translateX(0) rotate(-10deg) scale(0.7);}
            10%  { opacity: 1; transform: translateX(0) rotate(-10deg) scale(1);}
            50%  { opacity: 1; transform: translateX(-30px) rotate(20deg) scale(1.1); filter: drop-shadow(0 8px 32px #80000088);}
            90%  { opacity: 1; }
            100% { opacity: 0; transform: translateX(0) rotate(-10deg) scale(0.7);}
          }
          @keyframes beanAppearMove2 {
            0%   { opacity: 0; transform: translateY(0) rotate(0deg) scale(0.7);}
            10%  { opacity: 1; transform: translateY(0) rotate(0deg) scale(1);}
            50%  { opacity: 1; transform: translateY(40px) rotate(25deg) scale(1.1); filter: drop-shadow(0 8px 32px #80000088);}
            90%  { opacity: 1; }
            100% { opacity: 0; transform: translateY(0) rotate(0deg) scale(0.7);}
          }
                      .animate-bubble4 {
            animation: bubbleAppearMove4 16s infinite cubic-bezier(.4,0,.2,1) alternate;
          }
          .animate-bubble5 {
            animation: bubbleAppearMove5 18s infinite cubic-bezier(.4,0,.2,1) alternate;
          }
          .animate-bubble6 {
            animation: bubbleAppearMove6 15s infinite cubic-bezier(.4,0,.2,1) alternate;
          }
          .animate-bubble7 {
            animation: bubbleAppearMove7 17s infinite cubic-bezier(.4,0,.2,1) alternate;
          }
          .animate-bean3 {
            animation: beanAppearMove3 15s infinite cubic-bezier(.4,0,.2,1) alternate;
          }
          .animate-bean4 {
            animation: beanAppearMove4 17s infinite cubic-bezier(.4,0,.2,1) alternate;
          }
          .animate-bean5 {
            animation: beanAppearMove5 14s infinite cubic-bezier(.4,0,.2,1) alternate;
          }
          .animate-bean6 {
            animation: beanAppearMove6 16s infinite cubic-bezier(.4,0,.2,1) alternate;
          }
          @keyframes bubbleAppearMove4 {
            0%   { opacity: 0; transform: translateY(0) scale(0.7) rotateY(0deg);}
            10%  { opacity: 1; transform: translateY(0) scale(1) rotateY(10deg);}
            50%  { opacity: 1; transform: translateY(-30px) scale(1.1) rotateY(20deg); filter: drop-shadow(0 8px 32px #80000088);}
            90%  { opacity: 1; }
            100% { opacity: 0; transform: translateY(0) scale(0.7) rotateY(0deg);}
          }
          @keyframes bubbleAppearMove5 {
            0%   { opacity: 0; transform: translateY(0) scale(0.7) rotateX(0deg);}
            10%  { opacity: 1; transform: translateY(0) scale(1) rotateX(10deg);}
            50%  { opacity: 1; transform: translateY(40px) scale(1.2) rotateX(20deg); filter: drop-shadow(0 8px 32px #80000088);}
            90%  { opacity: 1; }
            100% { opacity: 0; transform: translateY(0) scale(0.7) rotateX(0deg);}
          }
          @keyframes bubbleAppearMove6 {
            0%   { opacity: 0; transform: translateY(0) scale(0.7) rotateZ(0deg);}
            10%  { opacity: 1; transform: translateY(0) scale(1) rotateZ(10deg);}
            50%  { opacity: 1; transform: translateY(-20px) scale(1.1) rotateZ(15deg); filter: drop-shadow(0 8px 32px #80000088);}
            90%  { opacity: 1; }
            100% { opacity: 0; transform: translateY(0) scale(0.7) rotateZ(0deg);}
          }
          @keyframes bubbleAppearMove7 {
            0%   { opacity: 0; transform: translateY(0) scale(0.7) rotateY(0deg);}
            10%  { opacity: 1; transform: translateY(0) scale(1) rotateY(10deg);}
            50%  { opacity: 1; transform: translateY(25px) scale(1.05) rotateY(10deg); filter: drop-shadow(0 8px 32px #80000088);}
            90%  { opacity: 1; }
            100% { opacity: 0; transform: translateY(0) scale(0.7) rotateY(0deg);}
          }
          @keyframes beanAppearMove3 {
            0%   { opacity: 0; transform: translateX(0) rotate(-5deg) scale(0.7);}
            10%  { opacity: 1; transform: translateX(0) rotate(-5deg) scale(1);}
            50%  { opacity: 1; transform: translateX(25px) rotate(15deg) scale(1.1); filter: drop-shadow(0 8px 32px #80000088);}
            90%  { opacity: 1; }
            100% { opacity: 0; transform: translateX(0) rotate(-5deg) scale(0.7);}
          }
          @keyframes beanAppearMove4 {
            0%   { opacity: 0; transform: translateY(0) rotate(0deg) scale(0.7);}
            10%  { opacity: 1; transform: translateY(0) rotate(0deg) scale(1);}
            50%  { opacity: 1; transform: translateY(-35px) rotate(-15deg) scale(1.1); filter: drop-shadow(0 8px 32px #80000088);}
            90%  { opacity: 1; }
            100% { opacity: 0; transform: translateY(0) rotate(0deg) scale(0.7);}
          }
          @keyframes beanAppearMove5 {
            0%   { opacity: 0; transform: translateX(0) rotate(0deg) scale(0.7);}
            10%  { opacity: 1; transform: translateX(0) rotate(0deg) scale(1);}
            50%  { opacity: 1; transform: translateX(-20px) rotate(10deg) scale(1.1); filter: drop-shadow(0 8px 32px #80000088);}
            90%  { opacity: 1; }
            100% { opacity: 0; transform: translateX(0) rotate(0deg) scale(0.7);}
          }
          @keyframes beanAppearMove6 {
            0%   { opacity: 0; transform: translateY(0) rotate(0deg) scale(0.7);}
            10%  { opacity: 1; transform: translateY(0) rotate(0deg) scale(1);}
            50%  { opacity: 1; transform: translateY(30px) rotate(20deg) scale(1.1); filter: drop-shadow(0 8px 32px #80000088);}
            90%  { opacity: 1; }
            100% { opacity: 0; transform: translateY(0) rotate(0deg) scale(0.7);}
          }
        `}
      </style>
    </section>
  );
};