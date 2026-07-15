import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function MakePassword({title, description}){

    // Get the previous inputs with safe fallback check
    const previousData_json = localStorage.getItem('tempRegData');
    const previousData = previousData_json ? JSON.parse(previousData_json) : null;

    // State to restore role selection
    const [isPrincipal, setIsPrincipal] = useState(previousData ? previousData.isPrincipal : false);
    // State to restore fullname input
    const [fullname, setFullname] = useState(previousData ? previousData.fullname : '');
    // State to restore phone input
    const [phone, setPhone] = useState(previousData ? previousData.phone : '');
    // State to restore email input
    const [email, setEmail] = useState(previousData ? previousData.email : '');
    
    // State to set password inputs
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // State to handle the fade-in animation of the page
    const [isVisible, setIsVisible] = useState(false);
    // Trigger the fade-in animation when the component mounts
    useEffect(() => {
        setIsVisible(true); // Set visibility to true
    }, []);

    // Hook to handle programmatic navigation
    const navigate = useNavigate();

    // Function to handle the registration form
    const handleContinueForm = (e) => {
        if (e) e.preventDefault();

        // Validate password inputs
        if (!password) {
            alert('Please enter a password.');
            return;
        }

        if (password.length < 6) {
            alert('Password must be at least 6 characters long.');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        // Check if we have the registration data
        if (email) {
            // Retrieve the list of registered users from localStorage
            const users = JSON.parse(localStorage.getItem('users') || '[]');
            
            const newUser = {
                fullname,
                phone,
                email,
                isPrincipal,
                password
            };

            // Filter out any existing user with the same email to avoid duplicates
            const updatedUsers = users.filter(u => u.email !== email);
            updatedUsers.push(newUser);

            // Save users back to localStorage
            localStorage.setItem('users', JSON.stringify(updatedUsers));

            // Log the user in (save session to localStorage)
            localStorage.setItem('currentUser', JSON.stringify(newUser));

            // Clean up temporary registration data
            localStorage.removeItem('tempRegData');

            // Redirect the user to the protected route (home / dashboard)
            navigate('/');
        } else {
            // If email is not in state (e.g. page refreshed or accessed out of order), redirect to Sign-in
            alert('No registration data found. Please sign up first.');
            navigate('/auth/sign');
        }
    };

    return (
        // Main container with conditional classes for the fade-in effect
        <div className={`max-w-[700px] m-auto transition-opacity duration-1000 p-4 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <button 
                onClick={() => navigate(-1)} 
                className="h-[50px] w-[50px] flex justify-center items-center text-gray-500 text-5xl bg-slate-300 rounded-[50%]"
            >
                ‹
            </button>

            <p className="py-5 text-3xl">
                {title}
            </p>
            
            <p className="text-xl text-slate-500">
                {description}
            </p>
            
            <form onSubmit={handleContinueForm}>
                <div className="align-center">
                    <input 
                        className="my-5 border w-full rounded-lg p-3" 
                        placeholder="New Password..." 
                        type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />            
                    <input 
                        className="my-5 border w-full rounded-lg p-3" 
                        placeholder="Confirm Password..." 
                        type="password" 
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />            
                </div>

                <button 
                    type="submit" 
                    className="w-full bg-slate-800 text-white p-5 rounded-lg text-2xl text-center mt-[50px] cursor-pointer"
                >
                    Finish
                </button>
            </form>
        </div>
    )
}
