import { useEffect, useState } from "react";

const CountDown = () => {
  const calculateTimeLeft = () => {
    const targetDate: Date = new Date("2025-05-15");
    const now: Date = new Date();
    const difference: number = targetDate.getTime() - now.getTime();

    let timeLeft = {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
    };

    if (difference > 0) {
      timeLeft = {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(
          2,
          "0"
        ),
        hours: String(
          Math.floor((difference / (1000 * 60 * 60)) % 24)
        ).padStart(2, "0"),
        minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(
          2,
          "0"
        ),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center w-full gap-6 count-down-main">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div
          key={unit}
          className="timer flex items-center flex-col justify-center"
        >
          <div className="pr-2 pl-2 relative w-max flex flex-col items-center">
            <h3
              className={`countdown-element ${unit} font-manrope font-semibold text-white font-lonear text-4xl lg:text-5xl text-center relative z-10`}
            >
              {value}
            </h3>
          </div>
          <p className="text-[10px] lg:text-xs font-normal text-[#f2d38a] uppercase mt-1 text-center w-full">
            {unit}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CountDown;
