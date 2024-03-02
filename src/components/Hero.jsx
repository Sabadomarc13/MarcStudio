import React from 'react';
import profilepic from '../assets/profilepic5.png';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <div>
      <div className="bg-white max-w-[1240px] h-[80vh] mx-auto flex flex-col sm:flex-row justify-center items-center" id='about'>
        {/* Text Description Container */}
        <div className="flex-1 flex flex-col justify-center items-start text-left p-4 animate-fadeIn">
          {/* Rounded Box for Description */}
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h1 className="text-red-600 text-4xl font-bold mb-4 drop-shadow-lg">
              {/* Text Animation for Greeting */}
              <TypeAnimation
                sequence={[
                  'Hello, I\'m Marc Sabado', // Text
                  2000, // Pause before deleting
                  '', // Delete text
                ]}
                wrapper="span" // Wrapper element
                cursor={true} // Show cursor
                repeat={Infinity} // Repeat animation
                className="inline-block" // Additional className for styling if needed
              />
            </h1>
            <p className="mb-4 drop-shadow-lg">This is a brief description about yourself. You can add more details here, like your professional background, skills, or interests. This is a brief description about yourself. You can add more details here, like your professional background, skills, or interests.</p>
          </div>
        </div>

        {/* Image Container */}
        <div className="flex-1 my-auto animate-slideUp">
          <img
            className="w-[300px] sm:w-[500px] mx-auto h-auto drop-shadow-lg transition-transform duration-700"
            src={profilepic} 
            alt="profile pic"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
