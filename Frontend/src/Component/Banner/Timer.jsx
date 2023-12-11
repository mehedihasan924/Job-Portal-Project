import React from 'react';

const Timer = ({ value, name }) => (
  <div className="flex flex-col items-center gap-[1.5rem]">
    <div className="flip-card h-[1.85em] relative inline-flex flex-col text-softRed w-full min-w-[75px] sm:min-w-[100px] md:min-w-[150px] text-[1.75rem] sm:text-[3rem] md:text-[5rem]">
      <div className="container-top relative h-[50%] bg-[#2c2c44] rounded-lg">
        <div className="relative h-full px-[.25em] pb-[0em] pt-[.425em] brightness-[83%] overflow-hidden leading-none rounded-t-[.25rem] sm:rounded-t-md text-center w-full  top">
          {value}
        </div>
        <div className="absolute text-[#fb6087] top-0 inset-x-0 h-full px-[.25em] pb-[0em] pt-[.425em] brightness-[83%] overflow-hidden leading-none rounded-t-[.25rem] sm:rounded-t-md text-center w-full  top-flip">
          {value}
        </div>
      </div>
      <div className="container-bottom relative h-[50%] bg-[#34364f] rounded-lg">
        <div className="relative flex justify-center items-end h-full px-[.25em] pt-[0em] pb-[.425em] overflow-hidden leading-none rounded-b-[.25rem] sm:rounded-b-md text-center w-full bottom ">
          {value}
        </div>
        <div className="absolute text-[#fa5c88] top-0 inset-x-0 flex justify-center items-end h-full px-[.25em] pt-[0em] pb-[.425em]  overflow-hidden leading-none rounded-b-[.25rem] sm:rounded-b-md text-center w-full  bottom-flip">
          {value}
        </div>
      </div>
    </div>
    <h2 className="text-gray-400 uppercase tracking-[.2rem] text-[.5rem] sm:text-[1rem]">
      {name}
    </h2>
  </div>
);

export default Timer;