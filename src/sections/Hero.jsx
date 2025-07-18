import { Canvas, useFrame } from "@react-three/fiber";
import Background from "../components/Background";
import HeroText from "../components/HeroText";
import { Astronaut } from "../components/Astronaut";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import { Float } from "@react-three/drei";
import { Suspense } from "react";
import Loader from "../components/Loader";

function Hero() {
  const isMobile = useMediaQuery({ maxWidth: 853});

  return (
    <section 
      className="flex items-start justify-center md:items-start 
                 md:justify-start min-h-screen overflow-hidden c-space"
    >
      <HeroText />
      <Background />
      <figure 
        className="absolute inset-0"
        style={{
          width: isMobile ? "90vw" : "100vw",
          height: "100vh"
        }}
      >
        <Canvas 
          camera={{ position:[0, 1, 3] }}
        >
         <Suspense
          fallback={<Loader/>}
         >
            <Float>
              <Astronaut 
                scale={isMobile ? 0.23 : 0.26} 
                position={isMobile && [0.1, -1.5, 0]}
                />
            </Float>
            <Rig />
          </Suspense> 
        </Canvas>
      </figure>
    </section>
  )
};

function Rig(){
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta
    );
  })
}

export default Hero;