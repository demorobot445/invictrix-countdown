import { useRef } from "react";
import CountDown from "./CountDown";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Form from "./Form";

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
      className="h-screen w-full flex items-center py-2 justify-center bg-[#010101] px-4"
    >
      <div className="cover pointer-events-none fixed h-full w-full flex items-center justify-center z-20 bg-[#010101]">
        <div className="overflow-hidden">
          <h1 className="text-white translate-y-full heading font-lonear text-center lg:text-9xl">
            25 MAY
          </h1>
        </div>
      </div>
      <div className="flex max-h-[720px] flex-col items-center h-full justify-around lg:justify-between">
        <img className="w-56 h-56 object-contain" src="/logo.png" alt="logo" />
        <div className="flex flex-col items-center gap-2">
          <p className="text-[10px] lg:text-xs font-proxmia-nova text-[#f2d38a]">
            Refinement completes in:
          </p>
          <CountDown />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-white font-lonear text-4xl lg:text-5xl uppercase  text-center ">
            An Elevated
            <br />
            Chapter Unfolds
          </h1>
          <p className="text-[#f2d38a] lg:max-w-1/2 font-proxmia-nova text-center text-xs lg:text-lg">
            Invictrix has never been about beginnings only evolutions. As we
            refine the contours of your experience, we invite you to stand by
            for what comes next.
          </p>
        </div>
        <Form />
      </div>
    </main>
  );
}

export default App;
