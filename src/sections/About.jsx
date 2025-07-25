import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/Globe";
import EmailButton from "../components/EmailButton";
import Frameworks from "../components/Frameworks";
import { LampDemo } from "../components/LampDemo";

function About() {
  const grid2Container = useRef();
  return (
    <section
      className="c-space section-spacing"
    >
      <h2 className="text-heading">
        Chi Siamo
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 
                      md:auto-rows-[18rem] mt-12"
      >
        {/* GRID 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img 
            src="assets/coding-pov.png" 
            alt="" 
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] 
                       md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="mt-2 mb-2 text-2xl">
              VALROC
            </p>
            <p className="subtext">
              Negli ultimi 2 anni, abbiamo sviluppato le giuste competenze frontend e backend per
              fornire software ed applicazioni web dinamiche.
            </p>
          </div>
          <div
            className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 
                       sm:h-1/3 bg-gradient-to-t from-teal-950"     
          />
        </div>
        {/* GRID 2 */}
        <div className="grid-2 rounded-2xl">
          <div
            ref={grid2Container}
            className="flex pt-52 items-center justify-center w-full h-full"
          >
            <LampDemo />
            {/* <p className="flex items-end text-4xl text-gray-300">
              CODICE È ARTE
            </p> */}
            {/* <Card
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              image="assets/logos/react.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "70%", left: "25%" }}
              image="assets/logos/vue.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              image="assets/logos/js.png"
              containerRef={grid2Container}
            /> */}
          </div>
        </div>
        {/* GRID 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">
              Time Zone
            </p>
            <p className="subtext">
              Abbiamo sede su Marte e siamo disponibili 
              a lavorare da remoto in tutto il mondo.
            </p>
          </div>
          <figure className="absolute left-[30%] top-[20%]">
            <Globe />
          </figure>
        </div>
        {/* GRID 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="headtext text-center">
              Vuoi iniziare un progetto insieme?
            </p>
            <EmailButton />
          </div>
        </div>
        {/* GRID 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headtext">
              Teck Stack
            </p>
            <p className="subtext">
              Siamo specializzati in una varietà di linguaggi, framework e strumenti che
              ci permettono di costruire applicazioni robuste e scalabili.
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full 
                          h-full start-[50%] md:scale-125"
          >
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;