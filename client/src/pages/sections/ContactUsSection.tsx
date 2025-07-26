import { FacebookIcon, InstagramIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserTie,
  faUsersCog,
  faEnvelope,
  faGlobe,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

const Bubble = ({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) => (
  <svg
    className={className}
    style={style}
    width="80"
    height="80"
    viewBox="0 0 80 80"
    fill="none"
  >
    <ellipse
      cx="40"
      cy="40"
      rx="38"
      ry="38"
      fill="url(#bubbleGradient)"
      opacity="0.7"
    />
    <defs>
      <radialGradient
        id="bubbleGradient"
        cx="0"
        cy="0"
        r="1"
        gradientTransform="translate(40 40) scale(38)"
      >
        <stop stopColor="#fff" stopOpacity="0.8" />
        <stop offset="1" stopColor="#800000" stopOpacity="0.3" />
      </radialGradient>
    </defs>
  </svg>
);

const Bean = ({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) => (
  <svg
    className={className}
    style={style}
    width="60"
    height="40"
    viewBox="0 0 60 40"
    fill="none"
  >
    <ellipse
      cx="30"
      cy="20"
      rx="28"
      ry="16"
      fill="url(#beanGradient)"
      opacity="0.8"
    />
    <defs>
      <linearGradient
        id="beanGradient"
        x1="0"
        y1="0"
        x2="60"
        y2="40"
        gradientUnits="userSpaceOnUse"
      >
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
      icon: faUserTie,
      iconColor: "text-blue-400",
    },
    {
      title: "CS Chair",
      details: "Charu Dharshana",
      icon: faUsersCog,
      iconColor: "text-green-400",
    },
    {
      title: "Email us",
      details: "techxmadras25@gmail.com",
      icon: faEnvelope,
      iconColor: "text-red-400",
    },
    {
      title: "Stay tuned with us",
      icon: faGlobe,
      iconColor: "text-purple-400",
      social: {
        instagram: "ieee_ssit_cs_society",
        facebook: "IEEE Computer Society - SSIT",
      },
    },
  ];

  const addressInfo = {
    title: "Address",
    details:
      "Sairam College Rd, Sai Leo Nagar, West Tambaram, Chennai, Tamil Nadu 600044",
    icon: faMapMarkerAlt,
    iconColor: "text-yellow-400",
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-gradient-to-br from-[#800000] via-[#a83232] to-[#800000] py-20 overflow-hidden"
    >
      <Bubble className="absolute left-10 top-10 animate-bubble1 z-0" />
      <Bubble
        className="absolute right-16 top-32 animate-bubble2 z-0"
        style={{ width: 60, height: 60 }}
      />
      <Bubble
        className="absolute left-1/2 bottom-10 animate-bubble3 z-0"
        style={{ width: 100, height: 100 }}
      />

      <Bubble
        className="absolute left-1/4 top-1/3 animate-bubble4 z-0"
        style={{ width: 70, height: 70 }}
      />
      <Bubble
        className="absolute right-1/4 bottom-1/4 animate-bubble5 z-0"
        style={{ width: 90, height: 90 }}
      />
      <Bubble
        className="absolute right-1/2 top-1/4 animate-bubble6 z-0"
        style={{ width: 50, height: 50 }}
      />
      <Bubble
        className="absolute left-1/3 bottom-1/5 animate-bubble7 z-0"
        style={{ width: 80, height: 80 }}
      />

      <Bean className="absolute right-10 bottom-24 animate-bean1 z-0" />
      <Bean
        className="absolute left-24 top-1/2 animate-bean2 z-0"
        style={{ width: 80, height: 50 }}
      />

      <Bean
        className="absolute left-1/3 bottom-1/4 animate-bean3 z-0"
        style={{ width: 70, height: 40 }}
      />
      <Bean
        className="absolute right-1/3 top-1/4 animate-bean4 z-0"
        style={{ width: 90, height: 60 }}
      />
      <Bean
        className="absolute left-1/2 top-1/5 animate-bean5 z-0"
        style={{ width: 60, height: 30 }}
      />
      <Bean
        className="absolute right-1/4 bottom-1/3 animate-bean6 z-0"
        style={{ width: 100, height: 50 }}
      />

      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80 z-0"
        style={{
          backgroundImage: `url('https://www.dropbox.com/scl/fi/k83n31ithvnlgvu0dkcou/WhatsApp-Image-2025-07-23-at-22.35.26_d919ebf4.jpg?rlkey=b1npq90ebic8eo7csizbuk554&st=suvsrvc2&dl=1')`,
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
        <div className="flex justify-center mb-20 lg:mb-24">
          <p className="max-w-3xl [font-family:'Aoboshi_One',Helvetica] font-normal text-white text-2xl text-center leading-relaxed drop-shadow-lg">
            Be part of something extraordinary. Join us at TechX 2025 to
            explore, excel, and experience the future of technology. Discover
            how you can contribute to innovation, connect with visionaries, and
            make a lasting impact.
          </p>
        </div>
        <div className="flex justify-center mb-24 lg:mb-32 mt-8 lg:mt-12">
          <div className="relative group w-full max-w-4xl">
            <div className="absolute -inset-6 bg-gradient-to-br from-red-900/25 via-red-800/20 to-red-900/25 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-all duration-700"></div>
            <div className="absolute -inset-4 bg-gradient-to-br from-red-800/20 via-red-700/15 to-red-800/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-all duration-600"></div>
            <div className="absolute -inset-2 bg-gradient-to-br from-red-700/15 via-red-600/10 to-red-700/15 rounded-xl blur-lg opacity-60 transition-all duration-500"></div>

            <Card className="relative w-full bg-gradient-to-br from-black/20 via-red-950/15 to-black/20 border-2 border-red-800/40 shadow-[0_20px_50px_rgba(127,29,29,0.4),0_10px_25px_rgba(153,27,27,0.3),0_5px_15px_rgba(0,0,0,0.5)] backdrop-blur-xl hover:shadow-[0_25px_60px_rgba(127,29,29,0.5),0_12px_30px_rgba(153,27,27,0.4),0_6px_18px_rgba(0,0,0,0.6)] transition-all duration-500 hover:-translate-y-1 hover:scale-[1.005] rounded-2xl overflow-hidden group-hover:border-red-700/50">
              <CardContent className="p-0">
                <a
                  href="https://www.google.com/maps/place/Sri+Sairam+Institute+of+Technology/@12.9609357,80.0547164,1616m/data=!3m1!1e3!4m14!1m7!3m6!1s0x3a52f51f638ddfbb:0xf3aef7ec7c8979ba!2sSri+Sairam+Institute+of+Technology!8m2!3d12.9606471!4d80.0532325!16s%2Fm%2F010qj3mw!3m5!1s0x3a52f51f638ddfbb:0xf3aef7ec7c8979ba!8m2!3d12.9606471!4d80.0532325!16s%2Fm%2F010qj3mw?entry=ttu&g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open location in Google Maps"
                  className="block"
                >
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      className="w-full h-auto object-cover transition-all duration-500 hover:scale-102 filter brightness-95 contrast-105 hover:brightness-100 hover:contrast-110 drop-shadow-[0_8px_20px_rgba(127,29,29,0.4)]"
                      alt="Location Map"
                      src="/figmaAssets/image-8-1.png"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-red-950/30 via-transparent to-red-900/15 pointer-events-none"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-red-800/8 to-transparent pointer-events-none"></div>
                  </div>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="mb-16 lg:mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {contactInfo.map((info, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-br from-white/12 via-gray-500/8 to-white/6 rounded-xl blur-md opacity-40 group-hover:opacity-60 transition-all duration-400"></div>
                <div className="absolute -inset-1 bg-white/6 rounded-lg blur-sm opacity-60"></div>

                <div className="relative bg-gradient-to-br from-white/10 via-white/6 to-white/3 backdrop-blur-lg border border-white/20 rounded-lg p-6 lg:p-8 shadow-[0_12px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.3)] transition-all duration-400 hover:-translate-y-1 hover:scale-102 h-[180px] flex flex-col justify-center">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-12 h-12 bg-gradient-to-br from-white/15 to-white/5 rounded-lg flex items-center justify-center backdrop-blur-sm border border-white/15 shadow-md">
                        <FontAwesomeIcon
                          icon={info.icon}
                          className={`text-xl lg:text-2xl ${info.iconColor}`}
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="font-['Inter',sans-serif] font-semibold text-white text-lg lg:text-xl mb-3">
                        {info.title}
                      </div>
                      {info.details && (
                        <div className="font-['Inter',sans-serif] font-medium text-white/85 text-sm lg:text-base leading-relaxed">
                          {info.details}
                        </div>
                      )}
                      {info.social && (
                        <div className="space-y-2 mt-2">
                          <div className="flex items-center">
                            <div className="w-6 h-6 bg-gradient-to-br from-pink-500/15 to-pink-600/8 rounded-md flex items-center justify-center mr-3 backdrop-blur-sm border border-pink-400/15">
                              <FontAwesomeIcon
                                icon={faInstagram}
                                className="text-sm text-pink-400"
                              />
                            </div>
                            <span className="font-['Inter',sans-serif] text-white/85 text-sm lg:text-base">
                              {info.social.instagram}
                            </span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-6 h-6 bg-gradient-to-br from-blue-500/15 to-blue-600/8 rounded-md flex items-center justify-center mr-3 backdrop-blur-sm border border-blue-400/15">
                              <FontAwesomeIcon
                                icon={faFacebook}
                                className="text-sm text-blue-400"
                              />
                            </div>
                            <span className="font-['Inter',sans-serif] text-white/85 text-sm lg:text-base">
                              {info.social.facebook}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-12 lg:mb-16">
          <div className="relative group max-w-4xl mx-auto">
            <div className="absolute -inset-2 bg-gradient-to-br from-white/12 via-gray-500/10 to-white/6 rounded-xl blur-md opacity-50 group-hover:opacity-70 transition-all duration-400"></div>
            <div className="absolute -inset-1 bg-white/6 rounded-lg blur-sm opacity-60"></div>

            <div className="relative bg-gradient-to-br from-white/10 via-white/6 to-white/3 backdrop-blur-lg border border-white/20 rounded-lg p-6 lg:p-8 shadow-[0_15px_35px_rgba(0,0,0,0.25)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.35)] transition-all duration-400 hover:-translate-y-1">
              <div className="flex items-start space-x-4 lg:space-x-6">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 bg-gradient-to-br from-white/15 to-white/5 rounded-lg flex items-center justify-center backdrop-blur-sm border border-white/15 shadow-md">
                    <FontAwesomeIcon
                      icon={addressInfo.icon}
                      className={`text-xl lg:text-2xl ${addressInfo.iconColor}`}
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="font-['Inter',sans-serif] font-semibold text-white text-lg lg:text-xl mb-3">
                    {addressInfo.title}
                  </div>
                  <div className="font-['Inter',sans-serif] font-medium text-white/85 text-sm lg:text-base leading-relaxed">
                    {addressInfo.details}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mb-6">
          <div className="relative group">
            <div className="absolute -inset-1 bg-white/6 rounded-lg blur-sm opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
            <div className="relative bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-md border border-white/15 rounded-lg px-6 py-4 lg:px-8 lg:py-6 shadow-[0_8px_20px_rgba(0,0,0,0.15)]">
              <div className="font-['Inter',sans-serif] font-medium text-white text-sm lg:text-base text-center opacity-90 leading-relaxed">
                © Copyright IEEE SSIT SBC. All Rights Reserved
                <br />
                <span className="text-white/75">
                  Designed by TechXMadras Tech Team.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>
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
