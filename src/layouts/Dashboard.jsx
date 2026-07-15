// Import Outlet to render child routes and Navigate for redirection
import { Outlet, Navigate } from 'react-router-dom';

// Define the Dashboard component which acts as a protected route wrapper
export default function Dashboard() {
    // Retrieve the 'currentUser' from localStorage to check if a user is logged in
    const currentUser = localStorage.getItem('currentUser');
    
    // Check if the currentUser exists (meaning they are authenticated)
    // If authenticated, render the Outlet (child components like Home, Meetings)
    // If not authenticated, redirect the user to the login page (/auth)
    return currentUser 
        ? <Outlet /> // Render the matched child route
        : <Navigate to="/auth" />; // Redirect to the authentication entry point
}