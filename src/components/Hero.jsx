import React from "react";
import { useInView } from "react-intersection-observer";
import BlurText from "./BlurText";
import GradientText from "./GradientText";
const Hero = () => {
  // Define refs and inView states for each animated section
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const { ref: nameRef, inView: nameInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 200,
  });

  const { ref: descRef, inView: descInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 300,
  });

  const { ref: iconRef, inView: iconInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 400,
  });

  return (
    <div
      id="top"
      className="flex flex-col items-center justify-center overflow-hidden pt-36"
    >
      <div
        ref={titleRef}
        className={`pt-42 ${
          titleInView
            ? "animate__animated animate__fadeInUp animate__delay-0s"
            : "opacity-0"
        }`}
      >
        <h4 className="text-center text-sm md:text-md lg:text-lg">Hello I'm</h4>
      </div>
      <div
        ref={nameRef}
        className={`pt-4 ${
          nameInView
            ? "animate__animated animate__zoomIn animate__delay-0s"
            : "opacity-0"
        }`}
      >
        <GradientText
          animationSpeed={5}
          showBorder={false}
          className="text-center text-4xl md:text-8xl lg:text-9xl px-[5%]"
        >
          <h1>SAHIL MURHEKAR</h1>
        </GradientText>
      </div>
      <div
        ref={descRef}
        className={`pt-4 w-82 md:w-120 ${
          descInView
            ? "animate__animated animate__fadeInUp animate__delay-0s"
            : "opacity-0"
        }`}
      >
        <h4 className="text-center text-sm md:text-md lg:text-lg">
          From insightful data analytics and cutting-edge machine learning to
          creative design, full-stack web development, IoT innovation, and
          impactful digital marketing — I craft intelligent solutions that
          connect technology, creativity, and strategy.
        </h4>
      </div>
      <div
        ref={iconRef}
        className={`py-32 ${
          iconInView
            ? "animate__animated animate__bounce animate__delay-0s"
            : "opacity-0"
        }`}
      >
        <a href="#about">
          <img
            style={{ transition: "300ms" }}
            className="floating-icon cursor-pointer hover:opacity-60"
            src="/assets/down.png"
            alt=""
          />
        </a>
      </div>
    </div>
  );
};

export default Hero;
