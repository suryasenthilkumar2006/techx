import { CheckIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export const TicketInfoSection = (): JSX.Element => {
  
  const day1And2Tickets = [
    {
      type: "IEEE COMPUTER SOCIETY MEMBER",
      price: "₹699",
      benefits: [
        "24Hrs Hackathon",
        "Entry to all Events",
        "Lunch and Refreshements",
        "Goodies",
      ],
    },
    {
      type: "IEEE MEMBER",
      price: "₹749",
      benefits: [
        "24Hrs Hackathon",
        "Entry to all Events",
        "Lunch and Refreshements",
        "Goodies",
      ],
    },
    {
      type: "NON - IEEE MEMBER",
      price: "₹899",
      benefits: [
        "24Hrs Hackathon",
        "Entry to all Events",
        "Lunch and Refreshements",
        "Goodies",
      ],
    },
  ];

  
  const day2Tickets = [
    {
      type: "IEEE COMPUTER SOCIETY MEMBER",
      price: "₹699",
      benefits: [
        "Workshop",
        "Entry to all Events",
        "Lunch and Refreshements",
        "Goodies",
      ],
    },
    {
      type: "IEEE MEMBER",
      price: "₹749",
      benefits: [
        "Workshop",
        "Entry to all Events",
        "Lunch and Refreshements",
        "Goodies",
      ],
    },
    {
      type: "NON - IEEE MEMBER",
      price: "₹899",
      benefits: [
        "Workshop",
        "Entry to all Events",
        "Lunch and Refreshements",
        "Goodies",
      ],
    },
  ];

  
  const renderTicketCard = (ticket: (typeof day1And2Tickets)[0]) => (
    <Card className="bg-black rounded-[30px] border-4 border-white shadow-[10px_10px_10px_#0000004c] px-2.5 py-4 w-[340px] h-[420px] flex flex-col">
      <CardContent className="p-0 flex-1 flex flex-col justify-between">
        <div className="flex flex-col w-full items-center justify-start gap-[17px] h-full">
          <div className="inline-flex items-center justify-center gap-2.5">
            <div className="[font-family:'Istok_Web',Helvetica] font-bold text-white text-2xl text-center">
              <span>{ticket.type} </span>
              <span className="text-[40px]">{ticket.price}</span>
            </div>
          </div>

          <div className="flex flex-col w-full items-start gap-4 flex-1 justify-center px-4">
            {ticket.benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 w-full">
                <CheckIcon className="w-[19px] h-[21px] text-white flex-shrink-0" />
                <div className="[font-family:'Istok_Web',Helvetica] font-bold text-white text-[20px] flex-1">
                  {benefit}
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center p-0 mt-4">
        <Button className="bg-black rounded-[30px] border-[3px] border-[#ff0000] px-[19px] py-1">
          <span className="[font-family:'Istok_Web',Helvetica] font-bold text-white text-2xl text-center">
            Register
          </span>
        </Button>
      </CardFooter>
    </Card>
  );

  return (
    <section id="tickets" className="relative w-full min-h-screen py-24 bg-gradient-to-b from-[#800000] to-[#2d0303]">
      
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90 z-0"
        style={{
          backgroundImage: `url('https://www.dropbox.com/scl/fi/k83n31ithvnlgvu0dkcou/WhatsApp-Image-2025-07-23-at-22.35.26_d919ebf4.jpg?rlkey=b1npq90ebic8eo7csizbuk554&st=suvsrvc2&dl=1')`
        }}
      ></div>
      <div className="relative w-full z-10">
        <h1 className="text-center [font-family:'Aoboshi_One',Helvetica] font-normal text-white text-5xl mb-12">
          Reserve Your Spot!
        </h1>

        <h2 className="text-center [font-family:'Istok_Web',Helvetica] font-bold text-white text-[32px] mb-10">
          Day 1 &amp; 2 Pass
        </h2>

        <div className="flex flex-wrap justify-center gap-[100px] px-[100px] mb-16">
          {day1And2Tickets.map((ticket, index) => (
            <div key={index}>{renderTicketCard(ticket)}</div>
          ))}
        </div>

        <h2 className="text-center [font-family:'Istok_Web',Helvetica] font-bold text-white text-[32px] mb-10">
          Day 2 Pass
        </h2>

        <div className="flex flex-wrap justify-center gap-[100px] px-[100px] mb-16">
          {day2Tickets.map((ticket, index) => (
            <div key={index}>{renderTicketCard(ticket)}</div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Button className="w-[347px] h-[74px] bg-black rounded-[30px] border-[3px] border-white">
            <span className="[font-family:'Istok_Web',Helvetica] font-bold text-white text-[32px]">
              Be an Early Bird
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};
