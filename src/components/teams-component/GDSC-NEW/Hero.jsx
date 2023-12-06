import React from 'react';

const Hero = () => {
  const containerStyles = {
    backgroundImage: `url('gdscanim.gif')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const buttonStyles = {
    fontFamily: 'Arial, sans-serif',
  };


  return (
    <div className="h-screen flex items-center justify-center">
      <div className="relative bg-gray-800 w-full h-full opacity-75 backdrop-blur-lg" style={containerStyles}>
        <div className="absolute top-[40vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-black" style={buttonStyles}>
          <h1 className="text-4xl font-bold mb-4 font-pacifico">Welcome to DJSCE-GDSC!</h1>
          <p className="text-lg">Explore our community and events.</p>
          <div className="flex justify-center mt-4">
            <button className="bg-gradient-to-r from-blue-500 to-green-500 text-white py-3 px-6 rounded-md flex items-center justify-center space-x-2 hover:from-blue-700 hover:to-green-700 transition duration-300 ease-in-out" style={{ fontFamily: 'Arial, sans-serif' }}>
              <span>Get Started</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
