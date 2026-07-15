// Import Link for navigation
import { NavLink } from 'react-router-dom';

import SignOutIcon from '@iconify-react/akar-icons/sign-out';
import UserBoldIcon from '@iconify-react/solar/user-bold';
import TeamMeetingIcon from '@iconify-react/streamline-ultimate/team-meeting';
import NotificationOutlinedIcon from '@iconify-react/ant-design/notification-outlined';

// Define the Header component for the dashboard
export default function Header({isPrincippal}) {
    // Retrieve the 'currentUser' from localStorage to display personalized info
    const currentUserRaw = localStorage.getItem('currentUser');
    // Parse the user data or default to an empty object if not found
    const currentUser = currentUserRaw ? JSON.parse(currentUserRaw) : {};

    
    // Return the JSX for the header
    return (
        // Main wrapper container
        <div>
            {/* Top section with logo and user profile info */}
            <div className="px-4 flex items-center justify-between h-[80px] bg-slate-900">
                <div>
                    {/* Project logo with custom styling */}
                    <h1 className="text-3xl logo text-white">
                        TMeett
                    </h1>
                    {/* Personalized welcome message using the user's fullname */}
                    <p className="text-gray-500 italic pl-[3px]">
                        Hi, {currentUser.fullname || 'Guest'}
                    </p>
                </div>
                {/* Profile icons section */}
                <div className="flex gap-5">
                    {/* Placeholder for notification icon */}
                    <div className="flex text-2xl justify-center items-center text-gray-500 h-[40px] w-[40px] rounded-[50%] bg-slate-700">
                        <UserBoldIcon height="1em" />
                    </div>
                    {/* Placeholder for user profile image */}
                    <div className="flex text-2xl justify-center items-center text-gray-500 h-[40px] w-[40px] rounded-[50%] bg-slate-700">
                        <SignOutIcon height="1em" />
                    </div>
                </div>
            </div>
            
            {/* Bottom navigation section */}
            <div className="py-4 items-center text-[14px] bg-slate-900 flex justify-evenly">
                {/* Link to the meetings management page */}
                <NavLink to="/meets" className={({isActive}) => 
                isActive 
                ? "text-blue-500"
                : "text-gray-500"
                }>
                    <div className="justify-center items-center flex gap-[2px] flex-wrap">
                        <TeamMeetingIcon height="1em" /> 
                        Meetings
                    </div>
                </NavLink>
                
                {/* Link to the main announcements page (home) */}
                <NavLink to="/" className={({isActive}) => 
                isActive 
                ? "text-blue-500"
                : "text-gray-500"
                }>
                    <div className="justify-center items-center flex gap-[2px] flex-wrap">
                        <NotificationOutlinedIcon height="14" />
                        Announcements
                    </div>
                </NavLink>
                
                
                {/* Show link button to the creation page */}
                {isPrincippal === 'true'  
                    ?<NavLink to='/create'>
                        <button className='bg-blue-500 py-[5px] px-3 text-white rounded-xl'>+ create</button>
                    </NavLink>
                : ''}
            </div>
        </div>
    )
}