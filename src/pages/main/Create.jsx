import Header from '../../components/Header.jsx'
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';


export default function Create() {
    // State to handle the fade-in animation of the page
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        setIsVisible(true); // Set visibility to true after mount
    }, []);


    
    return(
        <div className={`bg-slate-100 min-h-[100vh] overflow-auto transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <Header />
                
            <div className="max-w-[700px] m-auto p-[30px] grid gap-[10px]">
                <NavLink to="/create-ann">
                    <div className="border-slate-400 rounded-xl [box-shadow:0px_0px_5px_orange] h-[200px] flex justify-center items-center">Create Announcement</div>
                </NavLink>
                
                <NavLink to="/create-meet">
                    <div className="border-blue-400 rounded-xl [box-shadow:0px_0px_5px_blue] h-[200px] flex justify-center items-center">Create Meeting</div>
                </NavLink>
            </div>
        </div>
    )
}