import { CheckIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export const TicketInfoSection = (): JSX.Element => {
  // Define ticket data for Day 1 & 2 Pass
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

  // Define ticket data for Day 2 Pass
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

  // Render a ticket card
  const renderTicketCard = (ticket: (typeof day1And2Tickets)[0]) => (
    <Card className="bg-black rounded-[30px] border-4 border-white shadow-[10px_10px_10px_#0000004c] px-2.5 py-4">
      <CardContent className="p-0">
        <div className="flex flex-col w-[325px] items-center justify-center gap-[17px]">
          <div className="inline-flex items-center justify-center gap-2.5">
            <div className="[font-family:'Istok_Web',Helvetica] font-bold text-white text-2xl text-center">
              <span>{ticket.type} </span>
              <span className="text-[40px]">{ticket.price}</span>
            </div>
          </div>

          <div className="flex flex-col w-[314.89px] items-start gap-2.5">
            <div className="relative w-[322.89px] h-[198.64px] mr-[-8.00px]">
              {ticket.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="absolute"
                  style={{ top: `${index * 58}px` }}
                >
                  <CheckIcon className="absolute w-[19px] h-[21px] left-0" />
                  <div className="absolute w-[287px] left-7 [font-family:'Istok_Web',Helvetica] font-bold text-white text-[22px]">
                    {benefit}
                  </div>
                </div>
              ))}
            </div>
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
    <section className="w-full bg-[linear-gradient(180deg,rgba(45,3,3,1)_0%,rgba(144,8,8,1)_100%)] py-20">
      <div className="relative w-full">
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
