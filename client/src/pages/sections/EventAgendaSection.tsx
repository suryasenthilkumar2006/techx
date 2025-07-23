import React from "react";
import eventAgendaImage from "@assets/image_1753253023792.png";

export const EventAgendaSection = (): JSX.Element => {
  return (
    <section className="relative w-full">
      <img
        src={eventAgendaImage}
        alt="Event Agenda Day 1 - Complete schedule showing Registration, Open-Domain Hackathon Kickoff, Break and Nano Mentoring Session, Revision of Projects, Hackathon Submission Deadline, Midnight Break, and Surprise Sprint Engagement Activity with connecting flow arrows"
        className="w-full h-auto object-cover"
      />
    </section>
  );
};
