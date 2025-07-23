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
    <div className="flex flex-col min-h-screen w-full">
      <div className="w-full">
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
