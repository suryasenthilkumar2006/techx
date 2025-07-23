import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export const HeroSection = (): JSX.Element => {
  // Navigation menu items data
  const navItems = [
    { label: "Home" },
    { label: "About us" },
    { label: "Agenda" },
    { label: "Tickets" },
    { label: "Contact us" },
  ];

  return (
    <section className="relative w-full min-h-screen bg-white">
      <div className="relative w-full h-screen bg-[linear-gradient(180deg,rgba(45,3,3,1)_0%,rgba(62,5,5,1)_50%,rgba(144,8,8,1)_100%)]">
        {/* Navigation menu at the top */}
        <div className="absolute top-0 left-0 right-0 flex w-full items-center justify-center pt-8">
          <NavigationMenu>
            <NavigationMenuList className="flex items-center gap-6 px-8 py-3 bg-[#780000cc] rounded-full border-2 border-white">
              {navItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink className="inline-flex items-center px-6 py-2 rounded-full hover:bg-white/10 transition-colors">
                    <span className="[font-family:'Aoboshi_One',Helvetica] font-normal text-white text-lg text-center tracking-[0] leading-[normal]">
                      {item.label}
                    </span>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Main content container */}
        <div className="flex flex-col items-center justify-center h-full pt-20">
          {/* Event logo/image */}
          <div className="flex flex-col items-center mb-8">
            <img
              className="w-[800px] h-[250px] object-contain"
              alt="TechX Event Logo"
              src="/figmaAssets/image-8.png"
            />
          </div>

          {/* Event venue */}
          <div className="[font-family:'Aoboshi_One',Helvetica] font-normal text-white text-2xl text-center tracking-[0] leading-[normal] mb-16">
            Sri Sai Ram Institute of Technology, Chennai
          </div>
        </div>
      </div>
    </section>
  );
};
