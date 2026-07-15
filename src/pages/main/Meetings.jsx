
// Import the common Header component
import Header from './../../components/Header.jsx';
import { useState, useEffect } from 'react';


// Define the Meetings component to show scheduled or past meetings
export default function Meetings() {
    // State to handle the fade-in animation of the page
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        setIsVisible(true); // Set visibility to true after mount
    }, []);

    
    // Retrieve current user
    const currentUserRaw = localStorage.getItem('currentUser');
    const currentUser = currentUserRaw ? JSON.parse(currentUserRaw) : {};
        
    // Mock data for meetings with tagged teachers
    const meetings = [
        { id: 1, 
          title: "Staff Suggesion",
          time: "1:00 pm",
          date: "01/07/2026",
          status: 'pending'
        },
        { id: 2, 
          title: "Morning Duty discussion",
          time: "1:00 pm",
          date: "01/07/2026",
          status: 'started'
        },
        { id: 3, 
          title: "Morning Duty discussion",
          time: "1:00 pm",
          date: "01/07/2026",
          status: 'ended'
        },
        { id: 4, 
          title: "Morning Duty discussion",
          time: "1:00 pm",
          date: "01/07/2026",
          status: 'canceled'
        }
    ];

    const statusCol = (status) => {
        if (status === 'pending'){
            return 'bg-blue-200';
        }
        if (status === 'started'){
            return 'bg-green-200';
        }
            
        if (status === 'ended'){
            return 'bg-gray-300';
        }
            
        if (status === 'canceled'){
            return 'bg-red-200';
        }
    }

    // Return the JSX structure for the meetings page
    return (
        // Main container with light background and scrollability
        <div className={`bg-slate-100 min-h-[100vh] overflow-auto transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            {/* Render the header */}
            {currentUser.isPrincipal 
                ? <Header isPrincippal="true" />
                : <Header isPrincippal="false" />
            }            
            {/* Main content area grid for meeting cards */}
            <div className="max-w-[700px] m-auto p-4 grid gap-2 md:grid-cols-2">
                {meetings.map(meeting => (
                    // Individual meeting card
                    <div key={meeting.id} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200">
                        <h2 className="text-auto text-slate-800">{meeting.title}</h2>
                    
                        <div className="mt-4 flex gap-2 flex-wrap justify-between text-[12px] text-gray-500">
                            <div>{meeting.time}</div>
                            <div>{meeting.date}</div>
                            <div className={`${statusCol(meeting.status)} rounded-xl py-[5px] px-2 [text-transform:capitalize]`}>
                                {meeting.status}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}