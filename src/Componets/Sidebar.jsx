import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Sidebarlinks } from '../data/sidebarlinks';
import { SideBarList } from './SideBarList';
import { MdClose } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

export const Sidebar = () => {
    const { userData } = useSelector((state) => state.user);
    const [view, setView] = useState(false);

    function handleView() {
        setView(!view);
    }

    return (
        <div className="relative">
            {/* Toggle Icon for mobile view */}
            <GiHamburgerMenu 
                className="sm:hidden text-2xl cursor-pointer text-pure-greys-100 m-4"
                onClick={handleView} 
            />

            {/* Sidebar */}
            <div className={`fixed top-0 left-0 h-full bg-richblack-800 p-6 flex flex-col gap-2 text-pure-greys-100 font-semibold pl-8 transition-transform duration-300 ease-in-out ${view ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0 sm:relative sm:w-[300px] sm:bg-richblack-800 sm:p-6 sm:pl-8`}>
                
                {/* Close Button for mobile view */}
                <MdClose 
                    className="text-2xl cursor-pointer text-pure-greys-100 self-end mb-4 sm:hidden"
                    onClick={handleView}
                />

                {
                    Sidebarlinks.map((element) => {
                        if (element.user && userData.user !== element.user) return null;
                        return <SideBarList key={element.id} data={element} />;
                    })
                }
            </div>
        </div>
    );
};
