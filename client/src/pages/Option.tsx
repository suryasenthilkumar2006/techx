import React from "react";
import { AboutHostSection } from "./sections/AboutHostSection";
import { AboutUsSection } from "./sections/AboutUsSection";
import { ContactUsSection } from "./sections/ContactUsSection";
import { EventAgendaSection } from "./sections/EventAgendaSection";
import { HeroSection } from "./sections/HeroSection";
import { TicketInfoSection } from "./sections/TicketInfoSection";
import { WhySponsorSection } from "./sections/WhySponsorSection";

export const Option = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-col items-center w-full">
      <div className="bg-white w-full max-w-[1440px]">
        <HeroSection />
        <AboutUsSection />
        <AboutHostSection />
        <WhySponsorSection />
        <EventAgendaSection />
        <TicketInfoSection />
        <ContactUsSection />
      </div>
    </div>
  );
};
