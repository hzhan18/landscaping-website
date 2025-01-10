import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const Hero: React.FC = () => {
  return (
    <div className="h-screen overflow-hidden">
      <Parallax pages={2}>
        {/* Background Layer */}
        <ParallaxLayer
          offset={0}
          speed={0.2}
          className="absolute w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/hero/landscape_base.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </ParallaxLayer>

        {/* Content Layer */}
        <ParallaxLayer
          offset={0}
          speed={0.3}
          className="absolute w-full h-full flex flex-col justify-center items-center text-center"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            Transform Your Outdoor Space
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-3xl mb-8">
            We create beautiful and functional landscapes tailored to your
            vision. Let us bring your outdoor dreams to life.
          </p>
          <a
            href="#contact"
            className="px-6 py-3 bg-green-500 text-white text-lg rounded hover:bg-green-600 transition-all shadow-lg"
          >
            Get Started Today
          </a>
        </ParallaxLayer>

        {/* Foreground Layer */}
        <ParallaxLayer
          offset={0}
          speed={0.7}
          className="absolute w-full h-full flex justify-center items-center"
          style={{
            backgroundImage: `url('/images/hero/landscape_overlay.jpg')`,
          }}
        ></ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default Hero;
