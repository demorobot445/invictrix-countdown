import { useRef } from "react";
import CountDown from "./CountDown";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function App() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap
        .timeline()
        .to(".heading", { yPercent: -100 })
        .to(".heading", { yPercent: -200, delay: 0.5 })
        .to(".cover", { opacity: 0 });
    },
    { scope: container }
  );

  return (
    <main
      ref={container}
      className="h-screen w-full flex items-center py-2 justify-center bg-[#010101]"
    >
      <div className="cover pointer-events-none fixed h-full w-full flex items-center justify-center z-20 bg-[#010101]">
        <div className="overflow-hidden">
          <h1 className="text-white translate-y-full heading font-lonear text-center lg:text-9xl">
            05 MAY
          </h1>
        </div>
      </div>
      <div className="flex max-h-[720px] flex-col items-center h-full justify-around lg:justify-between">
        <img className="w-52 h-52 object-contain" src="/logo.png" alt="logo" />
        <CountDown />
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-white font-lonear text-4xl lg:text-5xl uppercase  text-center ">
            a new standard
            <br /> of luxury
            <br /> is unfolding
          </h1>
          <p className="text-[#f2d38a] font-lonear text-center text-sm lg:text-lg">
            Timeless access, Cultural power,
            <br />
            Intentionally yours.
          </p>
        </div>
        <div className="flex flex-col gap-4 w-full items-center">
          <input
            className="h-12 w-full lg:w-80 font-proxmia-nova text-white focus:outline-none p-4 border-[#f2d38a] border placeholder:text-[#777777]"
            type="text"
            placeholder="Email address"
          />
          <button className="text-[#f2d38a] hover:text-[#010101] hover:bg-[#f2d38a] transition cursor-pointer h-12 w-full lg:w-80 border-[#f2d38a] border uppercase">
            get early access
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
