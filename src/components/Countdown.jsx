import { useEffect, useState } from "react";

const targetDate = new Date("2025-01-17T00:00:00").getTime();

function padTwoDigits(number) {
  return number.toString().padStart(2, "0");
}

export const Countdown = () => {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(intervalId); // Stop the timer if the target date has passed
        setTimeRemaining({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeRemaining({
          days,
          hours,
          minutes,
          seconds,
        });
      }
    }, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <div
      className="font-robotoMono px-4 md:px-[505px] py-[80px] md:py-[199px] bg-black text-center"
      style={{ backgroundImage: "url('../assets/images/countdownbg.svg')" }}
    >
      <div className="text-white text-[48px] md:text-[96px] font-bold tracking-[20px] md:tracking-[76.8px] w-full md:w-[462px] mx-auto">
        DATE
      </div>
      <div className="text-white text-[14px] md:text-6 mt-[10px]">
        17th - 19th January
      </div>
      <div className="flex flex-wrap justify-center gap-6 md:gap-[72px] pl-[10px] md:pl-[0px] pr-[10px] md:pr-[0px] py-[20px] mt-5 font-karmatic text-[#ABD40F] text-[48px] md:text-[96px] border border-[2px] border-[#ABD40F]">
        <span className="px-1">{padTwoDigits(timeRemaining.days)}</span>
        <span className="px-1">{padTwoDigits(timeRemaining.hours)}</span>
        <span className="px-1">{padTwoDigits(timeRemaining.minutes)}</span>
      </div>
      <div className="mt-[30px] text-[#ABD40F] text-[14px] md:text-[16px]">
        Registration closes on 16th January 2024 ...
      </div>
    </div>
  );
};