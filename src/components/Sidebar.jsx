"use client"; // When we have any use of state or run anything in clientside
import React, { useContext, useState} from 'react'
import { History, CircleHelp, Menu, Plus, Settings, Sparkles, MessageSquare } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { Context } from '@/context/ContextProvider';
import { useMediaQuery } from 'react-responsive';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);
    const { setDisplayResult, setInput, prevPrompts ,setRecentPrompts, submit} = useContext(Context);
    const loadPrompt = (prompt) => {
        setRecentPrompts(prompt);
        submit(prompt);
    }
    const isSmallScreen = useMediaQuery({ maxWidth: 640 }); // Adjust the breakpoint as needed
    if (isSmallScreen) {
        return null;
    }
    
    return (
        <div className=" min-h-[100vh] inline-flex flex-col justify-between bg-bgSecondaryColor py-6 px-4">
            {/* Sidebar Upper Section */}
            <div>
                {/* Set menu icon size and click etc*/}
                <Menu
                size={25}
                onClick={() => setIsOpen(!isOpen)}
                className={`cursor-pointer text-softTextColor ${isOpen ? 'transform rotate-180 transition-transform duration-300' : 'transition-transform duration-300'}`}
                />

                {/* Set plus sign and New Chat*/}
                <div className='mt-2.5 inline-flex items-center gap-2.5 px-2.5  py-2.5 bg-bgPrimaryColor rounded-full text-md text-gray-400 cursor-pointer'
                onClick={() => {
                    setDisplayResult(false);
                    setInput("")}}>
                    <Plus size={20} className='cursor-pointer text-softTextColor' />
                    {isOpen ? <p>New chat</p> : null}
                </div>

                {/* Show div only when sidebar is open */}
                {/* Recent Section */}
                {isOpen ? 
                    <div className='flex flex-col'>
                        <p className='mt-8 mb-5'>Recent</p>
                        {prevPrompts?.map((item,index) => (
                            <div key={index} 
                            onClick={() => loadPrompt(item)} 
                            className=' my-1.5 flex items-center gap-2.5 pr-10 rounded-full text-gray-700 cursor-pointer hover:bg-slate-200 p-2 bg-bgPrimaryColor'>
                            <MessageSquare size={20} className='cursor-pointer text-softTextColor' />
                            <p>{item?.slice(0, 15)}...</p>
                            </div>
                        ))}
                    </div> 
                : null}
            </div>

            {/* Sidebar Lower Section */}
            <div className='flex flex-col gap-5'>
                {/* Help Section */}
                <div className='pr-2.5 cursor-pointer flex gap-2 text-gray-400 items-center'>
                    <CircleHelp size={20} className='text-softTextColor' />
                    {isOpen ? <p>Help</p> : null}
                </div>

                {/* Activity Section */}
                <div className='pr-2.5 cursor-pointer flex gap-2 text-gray-400 items-center'>
                    <History size={20} className='text-softTextColor' />
                    {isOpen ? <p>Activity</p> : null}
                </div>

                {/* Settings and ThemeToggle Section */}
                <div className='pr-2.5 cursor-pointer flex gap-2 text-gray-400 items-center'>
                    <Settings size={20} className='text-softTextColor' />
                    {isOpen ? <ThemeToggle /> : null} {/* This ThemeToggle is calling from the Themetoggle.jsx */}
                </div>

                {/* Upgrade Section */}
                <div className='pr-2.5 cursor-pointer flex gap-2 text-gray-400 items-center'>
                    <Sparkles size={20} className='text-softTextColor' style={{ color: 'red' }} />
                    {isOpen ? <p style={{ fontSize: '14px' }}>Upgrade to Gemini Advanced</p> : null}
                </div>
            </div>
        </div>
    )
}

export default Sidebar
