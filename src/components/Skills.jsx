import React from 'react';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  // Define refs and inView states for each animated section
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 100,
  });

  const { ref: progSectionRef, inView: progSectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 200,
  });

  const { ref: progImg1Ref, inView: progImg1InView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 300,
  });

  const { ref: progImg2Ref, inView: progImg2InView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 350,
  });

  const { ref: progImg3Ref, inView: progImg3InView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 400,
  });

  const { ref: progImg4Ref, inView: progImg4InView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 450,
  });

  const { ref: progImg5Ref, inView: progImg5InView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 500,
  });

  const { ref: bigDataSectionRef, inView: bigDataSectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 200,
  });

  const { ref: bigDataImg1Ref, inView: bigDataImg1InView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 300,
  });

  const { ref: bigDataImg2Ref, inView: bigDataImg2InView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 350,
  });

  const { ref: bigDataImg3Ref, inView: bigDataImg3InView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 400,
  });

  const { ref: bigDataImg4Ref, inView: bigDataImg4InView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 450,
  });

  const { ref: bigDataImg5Ref, inView: bigDataImg5InView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 500,
  });

  const { ref: bigDataImg6Ref, inView: bigDataImg6InView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 550,
  });

  const { ref: webDevSectionRef, inView: webDevSectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 200,
  });

  const { ref: webDevImg1Ref, inView: webDevImg1InView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 300,
  });

  const { ref: webDevImg2Ref, inView: webDevImg2InView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 320,
  });

  const { ref: webDevImg3Ref, inView: webDevImg3InView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 340,
  });

  const { ref: webDevImg4Ref, inView: webDevImg4InView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 360,
  });

  const { ref: webDevImg5Ref, inView: webDevImg5InView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 380,
  });

  const { ref: webDevImg6Ref, inView: webDevImg6InView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 400,
  });

  const { ref: webDevImg7Ref, inView: webDevImg7InView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 420,
  });

  const { ref: webDevImg8Ref, inView: webDevImg8InView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 440,
  });

  const { ref: webDevImg9Ref, inView: webDevImg9InView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 460,
  });

  const { ref: webDevImg10Ref, inView: webDevImg10InView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 480,
  });

  const { ref: webDevImg11Ref, inView: webDevImg11InView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 500,
  });

  const { ref: webDevImg12Ref, inView: webDevImg12InView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 520,
  });

  const { ref: webDevImg13Ref, inView: webDevImg13InView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 540,
  });

  const { ref: webDevImg14Ref, inView: webDevImg14InView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 560,
  });

  const { ref: webDevImg15Ref, inView: webDevImg15InView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 580,
  });

  const { ref: dataScienceSectionRef, inView: dataScienceSectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 200,
  });

  const { ref: dataScienceImg1Ref, inView: dataScienceImg1InView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 300,
  });

  const { ref: dataScienceImg2Ref, inView: dataScienceImg2InView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 320,
  });

  const { ref: dataScienceImg3Ref, inView: dataScienceImg3InView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 340,
  });

  const { ref: dataScienceImg4Ref, inView: dataScienceImg4InView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 360,
  });

  const { ref: dataScienceImg5Ref, inView: dataScienceImg5InView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 380,
  });

  const { ref: dataScienceImg6Ref, inView: dataScienceImg6InView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 400,
  });

  const { ref: dataScienceImg7Ref, inView: dataScienceImg7InView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 420,
  });

  const { ref: dataScienceImg8Ref, inView: dataScienceImg8InView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 440,
  });

  const { ref: dataScienceImg9Ref, inView: dataScienceImg9InView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 460,
  });

  return (
    <div
      id="skills"
      className={`pt-48 px-[15%] ${sectionInView ? 'animate__animated animate__fadeIn' : 'opacity-0'}`}
      ref={sectionRef}
    >
      <div
        ref={titleRef}
        className={`${titleInView ? 'animate__animated animate__zoomIn animate__delay-0s' : 'opacity-0'}`}
      >
        <h1
          style={{ fontFamily: 'Krona One' }}
          className="text-4xl text-center gradient-text md:text-5xl"
        >
          SKILLS
        </h1>
      </div>

      <div className="flex flex-col pt-24 gap-32">
        <div
          className={`flex flex-col gap-8 justify-center items-center ${
            progSectionInView ? 'animate__animated animate__fadeInUp animate__delay-0s' : 'opacity-0'
          }`}
          ref={progSectionRef}
        >
          <div className="flex justify-center items-center text-2xl font-black gradient-text">
            PROGRAMMING
          </div>
          <div className="flex flex-wrap gap-8 justify-center items-center">
            <img
              className={`h-20 ${
                progImg1InView ? 'animate__animated animate__zoomIn animate__delay-0s' : 'opacity-0'
              }`}
              src="/assets/python.png"
              alt=""
              ref={progImg1Ref}
            />
            <img
              className={`h-20 ${
                progImg2InView ? 'animate__animated animate__zoomIn animate__delay-0s' : 'opacity-0'
              }`}
              src="/assets/cpp.png"
              alt=""
              ref={progImg2Ref}
            />
            <img
              className={`h-20 ${
                progImg3InView ? 'animate__animated animate__zoomIn animate__delay-0s' : 'opacity-0'
              }`}
              src="/assets/java.png"
              alt=""
              ref={progImg3Ref}
            />
            <img
              className={`h-20 ${
                progImg4InView ? 'animate__animated animate__zoomIn animate__delay-0s' : 'opacity-0'
              }`}
              src="/assets/c.png"
              alt=""
              ref={progImg4Ref}
            />
            <img
              className={`h-20 ${
                progImg5InView ? 'animate__animated animate__zoomIn animate__delay-0s' : 'opacity-0'
              }`}
              src="/assets/sql.png"
              alt=""
              ref={progImg5Ref}
            />
          </div>
        </div>

        <div
          className={`flex flex-col gap-8 justify-center items-center ${
            bigDataSectionInView ? 'animate__animated animate__fadeInUp animate__delay-0s' : 'opacity-0'
          }`}
          ref={bigDataSectionRef}
        >
          <div className="flex justify-center items-center text-2xl font-black gradient-text">
            BIG DATA TOOLS
          </div>
          <div className="flex flex-wrap gap-8 justify-center items-center">
            <img
              className={`h-20 ${
                bigDataImg1InView ? 'animate__animated animate__zoomIn animate__delay-0s' : 'opacity-0'
              }`}
              src="/assets/hadoop.png"
              alt=""
              ref={bigDataImg1Ref}
            />
            <img
              className={`h-20 ${
                bigDataImg2InView ? 'animate__animated animate__zoomIn animate__delay-0s' : 'opacity-0'
              }`}
              src="/assets/hive.png"
              alt=""
              ref={bigDataImg2Ref}
            />
            <img
              className={`h-20 ${
                bigDataImg3InView ? 'animate__animated animate__zoomIn animate__delay-0s' : 'opacity-0'
              }`}
              src="/assets/hbase.png"
              alt=""
              ref={bigDataImg3Ref}
            />
            <img
              className={`h-20 ${
                bigDataImg4InView ? 'animate__animated animate__zoomIn animate__delay-0s' : 'opacity-0'
              }`}
              src="/assets/mongodb.png"
              alt=""
              ref={bigDataImg4Ref}
            />
            <img
              style={{ filter: 'invert()' }}
              className={`h-20 ${
                bigDataImg5InView ? 'animate__animated animate__zoomIn animate__delay-0s' : 'opacity-0'
              }`}
              src="/assets/cassandra.png"
              alt=""
              ref={bigDataImg5Ref}
            />
            <img
              style={{ filter: 'invert()' }}
              className={`h-20 ${
                bigDataImg6InView ? 'animate__animated animate__zoomIn animate__delay-0s' : 'opacity-0'
              }`}
              src="/assets/spark.png"
              alt=""
              ref={bigDataImg6Ref}
            />
          </div>
        </div>

        <div
          className={`flex flex-col gap-8 justify-center items-center ${
            webDevSectionInView ? 'animate__animated animate__fadeInUp animate__delay-0s' : 'opacity-0'
          }`}
          ref={webDevSectionRef}
        >
          <div className="flex justify-center items-center text-2xl font-black gradient-text">
            WEB DEVELOPMENT
          </div>
          <div className="flex flex-wrap gap-8 justify-center items-center">
            <img
              className={`h-20 ${
                webDevImg1InView ? 'animate__animated animate__zoomIn animate__delay-0s' : 'opacity-0'
              }`}
              src="/assets/figma.png"
              alt=""
              ref={webDevImg1Ref}
            />
            <img
              className={`h-20 ${
                webDevImg2InView ? 'animate__animated animate__zoomIn animate__delay-0s' : 'opacity-0'
              }`}
              src="/assets/framer.png"
              alt=""
              ref={webDevImg2Ref}
            />
            <img
              className={`h-20 ${
                webDevImg3InView ? 'animate__animated animate__zoomIn animate__delay-0s' : 'opacity-0'
              }`}
              src="/assets/html.png"
              alt=""
              ref={webDevImg3Ref}
            />
            <img
              className={`h-20 ${webDevImg4InView ? 'animate__animated animate__zoomIn animate__delay-0s' : 'opacity-0'}`}
              src="/assets/css.png"
              alt=""
              ref={webDevImg4Ref}
            />
            <img
              className={`h-20 ${
                webDevImg5InView ? 'animate__animated animate__zoomIn animate__delay-0s' : 'opacity-0'
              }`}
              src="/assets/tailwind.png"
              alt=""
              ref={webDevImg5Ref}
            />
            <img
              className={`h-20 ${
                webDevImg6InView ? 'animate__animated animate__zoomIn animate__delay-0s' : 'opacity-0'
              }`}
              src="/assets/js.png"
              alt=""
              ref={webDevImg6Ref}
            />
            <img
              className={`h-20 ${
                webDevImg7InView ? 'animate__animated animate__zoomIn animate__delay-0s' : 'opacity-0'
              }`}
              src="/assets/astro.png"
              alt=""
              ref={webDevImg7Ref}
            />
            <img
              className={`h-20 ${
                webDevImg8InView ? 'animate__animated animate__zoomIn animate__delay-0s' : 'opacity-0'
              }`}
              src="/assets/logo.svg"
              alt=""
              ref={webDevImg8Ref}
            />
            <img
              className={`h-20 ${
                webDevImg9InView ? 'animate__animated animate__zoomIn animate__delay-0s' : 'opacity-0'
              }`}
              src="/assets/react.png"
              alt=""
              ref={webDevImg9Ref}
            />
            <img
              className={`h-20 ${
                webDevImg10InView ? 'animate__animated animate__zoomIn animate__delay-0s' : 'opacity-0'
              }`}
              src="/assets/nodejs.png"
              alt=""
              ref={webDevImg10Ref}
            />
            <img
              className={`h-20 ${
                webDevImg11InView ? 'animate__animated animate__zoomIn animate__delay-0s' : 'opacity-0'
              }`}
              src="/assets/expressjs.png"
              alt=""
              ref={webDevImg11Ref}
            />
            <img
              className={`h-20 ${
                webDevImg12InView ? 'animate__animated animate__zoomIn animate__delay-0s' : 'opacity-0'
              }`}
              src="/assets/flask.png"
              alt=""
              ref={webDevImg12Ref}
            />
            <img
              className={`h-20 ${
                webDevImg13InView ? 'animate__animated animate__zoomIn animate__delay-0s' : 'opacity-0'
              }`}
              src="/assets/django.png"
              alt=""
              ref={webDevImg13Ref}
            />
            <img
              className={`h-20 ${
                webDevImg14InView ? 'animate__animated animate__zoomIn animate__delay-0s' : 'opacity-0'
              }`}
              src="/assets/jwt.png"
              alt=""
              ref={webDevImg14Ref}
            />
            <img
              className={`h-20 ${
                webDevImg15InView ? 'animate__animated animate__zoomIn animate__delay-0s' : 'opacity-0'
              }`}
              src="/assets/socketio.png"
              alt=""
              ref={webDevImg15Ref}
            />
          </div>
        </div>

        <div
          className={`flex flex-col gap-8 justify-center items-center ${
            dataScienceSectionInView
              ? 'animate__animated animate__fadeInUp animate__delay-0s'
              : 'opacity-0'
          }`}
          ref={dataScienceSectionRef}
        >
          <div className="flex justify-center items-center text-2xl font-black gradient-text">
            DATA SCIENCE
          </div>
          <div className="flex flex-wrap gap-8 justify-center items-center">
            <img
              className={`h-20 ${
                dataScienceImg1InView
                  ? 'animate__animated animate__zoomIn animate__delay-0s'
                  : 'opacity-0'
              }`}
              src="/assets/opencv.png"
              alt=""
              ref={dataScienceImg1Ref}
            />
            <img
              className={`h-20 ${
                dataScienceImg2InView
                  ? 'animate__animated animate__zoomIn animate__delay-0s'
                  : 'opacity-0'
              }`}
              src="/assets/matplotlib.png"
              alt=""
              ref={dataScienceImg2Ref}
            />
            <img
              className={`h-20 ${
                dataScienceImg3InView
                  ? 'animate__animated animate__zoomIn animate__delay-0s'
                  : 'opacity-0'
              }`}
              src="/assets/pandas.png"
              alt=""
              ref={dataScienceImg3Ref}
            />
            <img
              className={`h-20 ${
                dataScienceImg4InView
                  ? 'animate__animated animate__zoomIn animate__delay-0s'
                  : 'opacity-0'
              }`}
              src="/assets/numpy.png"
              alt=""
              ref={dataScienceImg4Ref}
            />
            <img
              className={`h-20 ${
                dataScienceImg5InView
                  ? 'animate__animated animate__zoomIn animate__delay-0s'
                  : 'opacity-0'
              }`}
              src="/assets/scikitlearn.png"
              alt=""
              ref={dataScienceImg5Ref}
            />
            <img
              className={`h-20 ${
                dataScienceImg6InView
                  ? 'animate__animated animate__zoomIn animate__delay-0s'
                  : 'opacity-0'
              }`}
              src="/assets/pytorch.png"
              alt=""
              ref={dataScienceImg6Ref}
            />
            <img
              className={`h-20 ${
                dataScienceImg7InView
                  ? 'animate__animated animate__zoomIn animate__delay-0s'
                  : 'opacity-0'
              }`}
              src="/assets/tensorflow.png"
              alt=""
              ref={dataScienceImg7Ref}
            />
            <img
              className={`h-20 rounded-lg ${
                dataScienceImg8InView
                  ? 'animate__animated animate__zoomIn animate__delay-0s'
                  : 'opacity-0'
              }`}
              src="/assets/powerbi.png"
              alt=""
              ref={dataScienceImg8Ref}
            />
            <img
              style={{ filter: 'invert()' }}
              className={`h-20 ${
                dataScienceImg9InView
                  ? 'animate__animated animate__zoomIn animate__delay-0s'
                  : 'opacity-0'
              }`}
              src="/assets/llms.png"
              alt=""
              ref={dataScienceImg9Ref}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;