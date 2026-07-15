
// Import common components
import Header from './../../components/Header.jsx';
import { useState, useEffect } from 'react';

// Define the Home component
export default function Home() {
    // State to handle the fade-in animation of the page
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        setIsVisible(true); // Set visibility to true after mount
    }, []);

    
    // Retrieve current user
    const currentUserRaw = localStorage.getItem('currentUser');
    const currentUser = currentUserRaw ? JSON.parse(currentUserRaw) : {};
    
    // Manage announcements in state
    const [announcements, setAnnouncements] = useState([
        { id: 1, title: 'School Assembly', content: 'Assembly at 8 AM sharp.' },
        { id: 2, title: 'Holiday Notice', content: 'School closed on Friday.' }
    ]);
    const [newAnn, setNewAnn] = useState('');

    // Handle Principal adding a new announcement
    //const addAnnouncement = () => {
    //    if (newAnn.trim()) {
    //        setAnnouncements([...announcements, { id: Date.now(), title: 'New Announcement', content: newAnn }]);
    //        setNewAnn('');
    //    }
    //};

    return (
        <div className={`bg-slate-100 min-h-[100vh] overflow-auto transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            
            {/* Render the header */}
            {currentUser.isPrincipal 
                ? <Header isPrincippal="true" />
                : <Header isPrincippal="false" />
            }

            {/* Announcements grid */}
            <div className="max-w-[700px] m-auto p-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {announcements.map(ann => (
                    <div key={ann.id} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200">
                        <h2 className="text-lg font-bold text-slate-700">{ann.title}</h2>
                        <p className="text-slate-500 mt-2">{ann.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}