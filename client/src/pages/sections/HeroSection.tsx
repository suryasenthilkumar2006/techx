import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export const HeroSection = (): JSX.Element => {
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About us", href: "#about" },
    { label: "Agenda", href: "#agenda" },
    { label: "Tickets", href: "#tickets" },
    { label: "Contact us", href: "#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section id="home" className="relative w-full min-h-screen bg-white">
      <div className="relative w-full h-screen bg-[linear-gradient(180deg,rgba(45,3,3,1)_0%,rgba(62,5,5,1)_50%,rgba(144,8,8,1)_100%)]">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100 z-0"
          style={{
            backgroundImage: `url('https://www.dropbox.com/scl/fi/k83n31ithvnlgvu0dkcou/WhatsApp-Image-2025-07-23-at-22.35.26_d919ebf4.jpg?rlkey=b1npq90ebic8eo7csizbuk554&st=suvsrvc2&dl=1')`
          }}
        ></div>
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <div className="absolute top-0 left-0 right-0 flex w-full items-center justify-center pt-8 z-50">
          <NavigationMenu>
            <NavigationMenuList className="flex items-center gap-6 px-8 py-3 bg-[#780000cc] rounded-full border-2 border-white shadow-2xl backdrop-blur-sm">
              {navItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="inline-flex items-center px-6 py-2 rounded-full hover:bg-white/10 transition-all duration-300 hover:shadow-lg focus:outline-none cursor-pointer relative z-50"
                  >
                    <span className="[font-family:'Aoboshi_One',Helvetica] font-normal text-white text-lg text-center tracking-[0] leading-[normal]">
                      {item.label}
                    </span>
                  </a>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="relative flex flex-col items-center justify-center h-full pt-20 z-20">
          <div className="flex flex-col items-center mb-8">
            <div className="relative group">
              <img
                className="w-[800px] h-[250px] object-contain drop-shadow-2xl transition-transform duration-300 group-hover:scale-105"
                alt="TechX Event Logo"
                src="/figmaAssets/image-8.png"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
          <div className="[font-family:'Aoboshi_One',Helvetica] font-normal text-white text-2xl text-center tracking-[0] leading-[normal] mb-6 drop-shadow-lg px-8 py-4 bg-black/20 rounded-2xl backdrop-blur-sm border border-white/10 shadow-2xl">
            Sri Sai Ram Institute of Technology, Chennai
          </div>
        </div>
      </div>
    </section>
  );
};
