import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

export const AboutUsSection = (): JSX.Element => {
  const targetDate = new Date("2025-09-10T09:00:00+05:30");

  const calculateTimeLeft = () => {
    const now = new Date(
      new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
    );
    const diff = targetDate.getTime() - now.getTime();

    const pad = (n: number) => String(n).padStart(2, "0");
    if (diff <= 0) {
      return { days: "00", hours: "00", minutes: "00", seconds: "00" };
    }

    const days = pad(Math.floor(diff / (1000 * 60 * 60 * 24)));
    const hours = pad(Math.floor((diff / (1000 * 60 * 60)) % 24));
    const minutes = pad(Math.floor((diff / (1000 * 60)) % 60));
    const seconds = pad(Math.floor((diff / 1000) % 60));

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const countdownItems = [
    { value: timeLeft.days, label: "DAYS" },
    { value: timeLeft.hours, label: "HOURS" },
    { value: timeLeft.minutes, label: "MINUTES" },
    { value: timeLeft.seconds, label: "SECONDS" },
  ];

  return (
    <section className="w-full min-h-screen bg-black text-white flex flex-col items-center justify-center gap-12 px-4 py-20">
      <h2 className="text-4xl font-bold border px-6 py-2 rounded-xl border-red-500">Now Live In</h2>
      <div className="flex flex-wrap justify-center gap-6 max-w-4xl w-full">
        {countdownItems.map((item, idx) => (
          <Card key={idx} className="flex-1 min-w-[120px] sm:min-w-[150px] md:min-w-[180px] text-center py-6 px-4 rounded-xl bg-gradient-to-br from-black via-red-900 to-black border border-red-500 shadow-lg">
            <CardContent>
              <div className="text-3xl font-bold text-red-400">{item.value}</div>
              <div className="text-sm font-medium mt-2">{item.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
