// Import Outlet from react-router-dom to render nested child routes
import { Outlet } from 'react-router-dom';

// Define the RootLayout component which serves as a common wrapper for specific routes
export default function RootLayout() {
    // The component simply renders its children (nested routes)
    return (
        // Outlet acts as a placeholder for the child components
        <Outlet />
    );
}