import { FacebookIcon, InstagramIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const ContactUsSection = (): JSX.Element => {
  // Contact section data
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
    <section id="contact" className="relative w-full bg-[#800000] py-16">
      {/* Geometric background pattern with shared image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90 z-0"
        style={{
          backgroundImage: `url('https://www.dropbox.com/scl/fi/k83n31ithvnlgvu0dkcou/WhatsApp-Image-2025-07-23-at-22.35.26_d919ebf4.jpg?rlkey=b1npq90ebic8eo7csizbuk554&st=suvsrvc2&dl=1')`
        }}
      ></div>
      <div className="absolute inset-0 bg-black/25 z-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {}
        <div className="flex flex-col items-center justify-center mb-8">
          <div className="bg-black/30 p-6 rounded-3xl backdrop-blur-sm border border-white/20 shadow-2xl">
            <h2 className="[font-family:'Aoboshi_One',Helvetica] font-normal text-white text-5xl drop-shadow-xl">
              Contact us
            </h2>
          </div>
        </div>

        {/* Description */}
        <div className="flex justify-center mb-12">
          <p className="max-w-4xl [font-family:'Aoboshi_One',Helvetica] font-normal text-white text-2xl text-justify">
            Be part of something extraordinary. Join us at TechX 2025 to
            explore, excel, and experience the future of technology. Discover
            how you can contribute to innovation, connect with visionaries, and
            make a lasting impact.
          </p>
        </div>

        {/* Map Image */}
        <div className="flex justify-center mb-12">
          <Card className="w-full max-w-2xl bg-transparent border-0">
            <CardContent className="p-0">
              <a
                href="https://www.google.com/maps/place/Sri+Sairam+Institute+of+Technology/@12.9609357,80.0547164,1616m/data=!3m1!1e3!4m14!1m7!3m6!1s0x3a52f51f638ddfbb:0xf3aef7ec7c8979ba!2sSri+Sairam+Institute+of+Technology!8m2!3d12.9606471!4d80.0532325!16s%2Fm%2F010qj3mw!3m5!1s0x3a52f51f638ddfbb:0xf3aef7ec7c8979ba!8m2!3d12.9606471!4d80.0532325!16s%2Fm%2F010qj3mw?entry=ttu&g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open location in Google Maps"
              >
                <div className="relative">
                  <img
                    className="w-full h-auto object-cover rounded-lg shadow-[0_16px_48px_0_rgba(80,0,0,0.85)] transition-transform duration-200 hover:scale-105"
                    alt="Location Map"
                    src="/figmaAssets/image-8-1.png"
                  />
                  <div className="absolute inset-0 bg-black/20 rounded-lg pointer-events-none"></div>
                </div>
              </a>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col space-y-8">
          <div className="flex flex-wrap justify-between gap-8">
            {/* Contact persons */}
            {contactInfo.map((info, index) => (
              <div key={index} className="flex flex-col">
                <div className="[font-family:'Aoboshi_One',Helvetica] font-normal text-white text-sm">
                  {info.title}
                  <br />
                  {info.details}
                </div>
              </div>
            ))}

            {/* Social Media */}
            <div className="flex flex-col">
              <div className="[font-family:'Aoboshi_One',Helvetica] font-normal text-white text-sm">
                {socialInfo.title}
                <div className="flex items-center mt-1">
                  <InstagramIcon className="h-3.5 w-3.5 text-white mr-2" />
                  {socialInfo.instagram}
                </div>
                <div className="flex items-center mt-1">
                  <FacebookIcon className="h-3.5 w-3.5 text-white mr-2" />
                  {socialInfo.facebook}
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="flex flex-col">
              <div className="[font-family:'Aoboshi_One',Helvetica] font-normal text-white text-sm">
                {addressInfo.title} <br />
                {addressInfo.details}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-center mt-8">
            <div className="[font-family:'Aoboshi_One',Helvetica] font-normal text-white text-[15px] text-center">
              ©Copyright IEEE SSIT SBC. All Rights Reserved
              <br />
              Designed by TechXMadras Tech Team.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
