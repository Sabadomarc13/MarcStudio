import React from 'react'

const Seminar = () => {
  return (
    <div className="bg-white max-w-[1240px] h-[37vh] mx-auto flex flex-col sm:flex-row justify-start items-center pl-5" id='seminar'>
      {/* Text Description Container, directly containing the text now */}
      <div className="flex flex-col justify-center items-start text-left p-4 animate-fadeIn max-w-[640px]">
        <h1 className="text-red-600 text-3xl font-bold mb-4 drop-shadow-lg">
          {/* Static Text for Greeting */}
          <span className="inline-block">Seminar</span>
        </h1>
        <p className="mb-4 drop-shadow-lg">This is a brief description about yourself. You can add more details here, like your professional background, skills, or interests. This is a brief description about yourself. You can add more details here, like your professional background, skills, or interests.</p>
      </div>
    </div>
  )
}

export default Seminar
