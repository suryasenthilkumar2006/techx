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

  // Social media section
  const socialInfo = {
    title: "Stay tuned with us",
    instagram: "ieee_ssit_cs_society",
    facebook: "IEEE Computer Society - SSIT",
  };

  // Address information
  const addressInfo = {
    title: "Address",
    details:
      "Sairam College Rd, Sai Leo Nagar, West Tambaram, Chennai, Tamil Nadu 600044",
  };

  return (
    <section className="relative w-full bg-[#800000] py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col items-center justify-center mb-8">
          <h2 className="[font-family:'Aoboshi_One',Helvetica] font-normal text-white text-5xl">
            Contact us
          </h2>
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
              <img
                className="w-full h-auto object-cover"
                alt="Location Map"
                src="/figmaAssets/image-8-1.png"
              />
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
