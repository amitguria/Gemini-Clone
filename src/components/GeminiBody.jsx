"use client";
import React, { useContext } from 'react'
import { MapPin, ChevronsLeftRight, Lightbulb, Compass, CircleUserRound, SendHorizontal } from 'lucide-react';
import { Context } from '@/context/ContextProvider';

const GeminiBody = () => {
  const { submit, recentPrompts, displayResult, loading, result, input, setInput } = useContext(Context)
  const handleGeminiClick = () => {
    window.location.reload(); // Reload the page
  };
  return (
    <div className='flex-1 min-h-[100vh] pb-[15vh] relative'> {/* flex-1 is used because after page.js all section is for gemini body */}

      {/* Gemini text and CircleUserIcon section */}
      <div className='flex items-center justify-between p-5 text-xl text-gray-400'> {/* justify between is used so that there is gap between circleUserIcon and gemini */}
        <p className='cursor-pointer' onClick={handleGeminiClick}>Gemini</p>
        <CircleUserRound size={40} className='text-softTextColor' />
      </div>

      <div className='max-w-[900px] m-auto'>
        {/*displayResult Section*/}
        {/* If we don't put any input then show the hello section and four boxes section otherwise show reult */}
        {!displayResult ? (
          <>
            {/* Hello, Name Section*/}
            < div className='my-12 text-5xl font-medium p-5'>
              <p>
                <span className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-400'>Hello, Amit</span>
              </p>
              <p>How can I help you today?</p>
            </div>

            {/* Four boxes section*/}
            <div className='grid grid-cols-1 sm:grid-cols-4 gap-5 p-5'>
              <div className='h-48 p-4 bg-bgSecondaryColor rounded-xl relative cursor-pointer'>
                <p>Create a list of power phrases for my resume</p>
                <Compass size={35} className='p-1 absolute bottom-2 right-2 bg-bgPrimaryColor text-softTextColor rounded-full' />
              </div>
              <div className='h-48 p-4 bg-bgSecondaryColor rounded-xl relative cursor-pointer'>
                <p>Help me incorporate more plant-based options in my diet</p>
                <Lightbulb size={35} className='p-1 absolute bottom-2 right-2 bg-bgPrimaryColor text-softTextColor rounded-full' />
              </div>
              <div className='h-48 p-4 bg-bgSecondaryColor rounded-xl relative cursor-pointer'>
                <p>Look up a Linux shell command for specific task</p>
                <ChevronsLeftRight size={35} className='p-1 absolute bottom-2 right-2 bg-bgPrimaryColor text-softTextColor rounded-full' />
              </div>
              <div className='h-48 p-4 bg-bgSecondaryColor rounded-xl relative cursor-pointer mb-5'>
                <p>What is the it takes to walk to several landmark</p>
                <MapPin size={35} className='p-1 absolute bottom-2 right-2 bg-bgPrimaryColor text-softTextColor rounded-full' />
              </div>
            </div>
          </>
        ) :
          (
            <div>
              <div className='my--10 flex items-center gap-5'>
                <CircleUserRound size={40} className='text-softTextColor' />
                <p>{recentPrompts}</p>
              </div>
              <div className='flex items-start gap-5'>
                <img src='/gemini.png' alt='' />
                  {/* Loading animation */}
                  {loading ? 
                      <div className="flex justify-center items-center h-full w-full">
                          <div className="loader w-full">
                              <hr className="w-full h-4 rounded-full bg-gray-400 animate-pulse mr-1" />
                              <hr className="w-full h-4 rounded-full bg-gray-400 animate-pulse mr-1" />
                              <hr className="w-80 h-4 rounded-full bg-gray-400 animate-pulse mr-1" />
                          </div>
                      </div>
                      :
                      <p className="text-md font-normal loading-6 text-gray-400" dangerouslySetInnerHTML={{ __html: result }}></p>
                  }
                {/* dangerouslySetInnerHTML={{ __html: result }}: This is a React-specific attribute that allows you to render HTML content inside a component. */}
              </div>
            </div>
          )}



        {/* Prompt input and icons Section */}
        <div className='absolute bottom-0 w-full max-w-[900px] px-5 m-auto'>
          <form action={submit}>
            <div className='flex items-center justify-between gap-5 bg-bgSecondaryColor py-2.5 px-6 rounded-full'>
              <input 
                onChange={(e) => setInput(e.target.value)}
                value={input}
                type='text'
                className='flex-1 bg-transparent border-none outline-none p-2 text-md text-gray-400'
                placeholder="Enter a prompt here"
              />
              {input ? <button type="submit" className='flex cursor-pointer' onClick={(e) => submit()}>
                <SendHorizontal size={20} />
              </button> : null}

            </div>
          </form>
          <p className='text-gray-400 text-sm text-center p-3'>Gemini may display inaccurate info, including about people, so
            double-check its responses. <u className='cursor-pointer'>Your privacy and Gemini Apps</u></p>
        </div>
      </div>
    </div>
  )
}

export default GeminiBody
