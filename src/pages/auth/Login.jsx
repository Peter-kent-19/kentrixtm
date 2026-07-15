// Import Link for navigation, useEffect and useState for state management, and useNavigate for redirection
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

// Component for a circular checkbox to select the user role
function CircleCheckbox({ checked, onChange }) {
  // Return the JSX for the checkbox and label
  return (
    // Flex container to center the element
    <div className="flex justify-center items-center min-h-[30px]">
      {/* Label wrapping the input for better accessibility */}
      <label className="flex items-center gap-3 cursor-pointer">
        {/* Checkbox input with custom styling */}
        <input
          type="checkbox"
          checked={checked} // Controlled component state
          onChange={(e) => onChange(e.target.checked)} // Function to handle toggle
          className="w-5 h-5 rounded-full accent-slate-800"
        />
        {/* Label text */}
        <span>I'm the Principal</span>
      </label>
    </div>
  );
}

// Main Login component for user authentication
export default function Login() {
    // State to handle the fade-in animation of the page
    const [isVisible, setIsVisible] = useState(false);
    // State to store email input
    const [email, setEmail] = useState('');
    // State to store password input
    const [password, setPassword] = useState('');
    // State to store role selection
    const [isPrincipal, setIsPrincipal] = useState(false);
    // Hook to handle programmatic navigation
    const navigate = useNavigate();

    // Trigger the fade-in animation when the component mounts
    useEffect(() => {
        setIsVisible(true); // Set visibility to true
    }, []);

    // Function to handle the login form submission
    const handleLogin = (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        // Retrieve the list of registered users from localStorage
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        
        // Search for a user that matches the provided email, password, and role
        const user = users.find(u => 
            u.email === email && 
            u.password === password && 
            u.isPrincipal === isPrincipal
        );

        // Check if a matching user was found
        if (user) {
            // Save the authenticated user to localStorage as the 'currentUser' session
            localStorage.setItem('currentUser', JSON.stringify(user));
            // Redirect the user to the dashboard (home page)
            navigate('/');
        } else {
            // Alert the user if the credentials or role do not match
            alert('Invalid email, password, or role selection.');
        }
    };
    
    // Return the JSX for the Login page
    return (
        // Main container with conditional classes for the fade-in effect
        <div className={`max-w-[700px] m-auto transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            {/* Project logo with custom font style */}
            <h1 className="pt-5 text-5xl logo text-center text-blue-500">
                TMeet
            </h1>
            {/* Tagline/Founder credit */}
            <p className="text-slate-400 text-center">
                Found by Peter Kent 
            </p>
            {/* Welcome message */}
            <p className="text-3xl font-extrabold text-slate-500 text-center py-5 my-5">
                Welcome Back on TMeet!
            </p>

            {/* Form container with background and rounded corners */}
            <div className="form p-5 mt-5 bg-gray-100 [border-radius:50px]">
                {/* Header for the login form */}
                <p className="text-center text-2xl font-extrabold text-slate-500 py-5">
                    Login
                </p>

                {/* Circular checkbox component for role selection */}
                <CircleCheckbox 
                    checked={isPrincipal} 
                    onChange={setIsPrincipal} 
                />
                
                {/* Form element wrapping inputs and button */}
                <form onSubmit={handleLogin}>
                    {/* Input field for email */}
                    <input 
                        className="my-5 border w-full rounded-lg p-3" 
                        placeholder="Email..." 
                        type="email" 
                        value={email} // Controlled component value
                        onChange={(e) => setEmail(e.target.value)} // Update email state
                        required // HTML5 validation
                    />
                    {/* Input field for password */}
                    <input 
                        className="my-5 border w-full rounded-lg p-3" 
                        placeholder="Password..." 
                        type="password" 
                        value={password} // Controlled component value
                        onChange={(e) => setPassword(e.target.value)} // Update password state
                        required // HTML5 validation
                    />
                    
                    {/* Link to the password recovery page */}
                    <p className="text-blue-400 text-center my-5">
                        <Link to='/auth/forgotpassword/verifyemail'>
                            Forgot Passwords?
                        </Link>
                    </p>
                    
                    {/* Login button that triggers handleLogin */}
                    <button type="submit" className="bg-slate-800 w-full p-5 mt-5 text-white rounded-lg">
                        Login Now
                    </button>
                    
                    {/* Link to navigate to the registration (sign-in) page */}
                    <p className="text-blue-400 text-center py-5">
                        <Link to='/auth/sign'>
                            Create Account? 
                            <span className="underline pl-2">
                                Sign in
                            </span>
                        </Link>
                    </p>
                </form>            
            </div>   
        </div>
    )
};