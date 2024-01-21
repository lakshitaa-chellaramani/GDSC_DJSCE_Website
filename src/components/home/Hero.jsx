import React from "react";
import { useState, useRef, useEffect, useMemo} from "react";

function Hero() {
  const wordData = useMemo(() => ['Welcome to', ' स्वागत है', 'خوش آمدید', 'स्वागत आहे', 'স্বাগত মানা', 'ਸੁਆਗਤ ਹੈ'], []);
  const [currWord, setCurrWord] = useState(wordData[0]);
  const index = useRef(0);

  useEffect(() => {
    let interval = null;

    const startAnimation = () => {
      interval = setInterval(() => {
        index.current = (index.current + 1) % wordData.length;
        setCurrWord(wordData[index.current]);

        if (index.current === wordData.length - 1) {
          setTimeout(() => {
            setCurrWord(wordData[0]);
            index.current = 0;
          }, 800);
        }
      }, 800);
    };

    startAnimation();

    return () => clearInterval(interval);
  }, [wordData]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="md:text-8xl text-4xl font-medium text-center mb-0">
        {currWord}
      </div>

      <div className="md:text-8xl text-6xl font-semibold text-center">
        <span className="text-[#EA4335]">G</span>
        <span className="text-[#4285F4]">D</span>
        <span className="text-[#34A853]">S</span>
        <span className="text-[#FBBC05]">C</span> DJSCE,
      </div>

      

      
        <div className="mt-16">
          <div className="flex justify-center">
            <h1>
              <span className="p-5 text-4xl text-[#EA4335] max-md:text-lg">
                Collaborate
              </span>
              <span className="p-5 text-4xl text-[#4285F4] max-md:text-lg">
                Learn
              </span>
              <span className="p-5 text-4xl text-[#34A853] max-md:text-lg">
                Explore
              </span>
              <span className="p-5 text-4xl text-[#FBBC05] max-md:text-lg">
                Create
              </span>
            </h1>
          </div>
          <div className="p-5 text-xl text-[#676E74] flex justify-center">
            <p className="align-middle text-center">
              Meet and learn with other developers and build solutions for
              <br />
              communities with Google technology.
            </p>
          </div>
        </div>
      </div>
  );
}

export default Hero;
