// Import Link for navigation, useEffect and useState for state management, and useNavigate for programmatic redirects
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

// Component for a styled circular checkbox to identify user role
function CircleCheckbox({ checked, onChange }) {
  // Return the JSX for the checkbox and label
  return (
    // Flex container to center the checkbox vertically
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

// Main Signin component for user registration
export default function Signin() {
    // State to handle the fade-in animation of the page
    const [isVisible, setIsVisible] = useState(false);
    // State to store form input values
    const [formData, setFormData] = useState({
        fullname: '', // Full name of the user
        phone: '',    // Phone number
        email: '',    // Email address
        isPrincipal: false // Role selection
    });
    // Hook to handle programmatic navigation
    const navigate = useNavigate();

    // Trigger the fade-in animation when the component mounts
    useEffect(() => {
        setIsVisible(true); // Set visibility to true after mount
    }, []);

    // Function to update the formData state when inputs change
    const handleChange = (e) => {
        // Destructure name, value, type, and checked from the event target
        const { name, value } = e.target;
        // Update state
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Function to handle the checkbox change separately
    const handleRoleChange = (isChecked) => {
        setFormData(prev => ({
            ...prev,
            isPrincipal: isChecked
        }));
    };

    // Function to handle the "Continue" button click
    const handleContinue = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        // Check if all required fields are filled
        if (formData.fullname && formData.email && formData.phone) {
            // Save the partial registration data to localStorage for the next step
            localStorage.setItem('tempRegData', JSON.stringify(formData));
            // Navigate to the password creation page
            navigate('/auth/sign/authcontinue/password');
        } else {
            // Basic alert if fields are missing
            alert('Please fill in all fields');
        }
    };
    
    // Return the JSX for the Signin page
    return (
        // Container with conditional classes for the fade-in effect
        <div className={`max-w-[700px] m-auto transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            {/* Project logo with custom font class */}
            <h1 className="pt-5 text-5xl logo text-center text-blue-500">
                TMeet
            </h1>
            {/* Tagline/Founder credit */}
            <p className="text-slate-400 text-center">
                Found by Peter Kent 
            </p>
            {/* Main heading for the page */}
            <p className="text-3xl font-extrabold text-slate-500 text-center py-5 my-5">
                Get started 
            </p>

            {/* Form container with background and rounded corners */}
            <div className="form p-5 mt-5 bg-gray-100 [border-radius:50px]">
                {/* Sub-heading for the sign-in process */}
                <p className="text-center text-2xl font-extrabold text-slate-500 py-5">
                    Sign in
                </p>

                {/* Custom checkbox component for role selection */}
                <CircleCheckbox 
                    checked={formData.isPrincipal} 
                    onChange={handleRoleChange} 
                />
                
                {/* Form element wrapping the inputs */}
                <form onSubmit={handleContinue}>
                    {/* Input for full name */}
                    <input 
                        className="my-5 border w-full rounded-lg p-3" 
                        placeholder="Fullname eg: Odo Peter Chinedu" 
                        type="text" 
                        name="fullname" 
                        value={formData.fullname} 
                        onChange={handleChange} 
                        required 
                    />
                    {/* Input for phone number */}
                    <input 
                        className="my-5 border w-full rounded-lg p-3" 
                        placeholder="Phone eg: 07000000000" 
                        type="tel" 
                        name="phone" 
                        value={formData.phone} 
                        onChange={handleChange} 
                        required 
                    />
                    {/* Input for email address */}
                    <input 
                        className="my-5 border w-full rounded-lg p-3" 
                        placeholder="Email eg: peter@gmail.com" 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                    />
                    
                    {/* Button to proceed to the next step of registration */}
                    <button type="submit" className="bg-slate-800 w-full p-5 mt-5 text-white rounded-lg">
                        Continue »
                    </button>
                    
                    {/* Navigation link back to the login page */}
                    <p className="text-blue-400 text-center py-5">
                        <Link to='/auth/'>
                            Already a member?
                            <span className="underline pl-2">
                                Login
                            </span>
                        </Link>
                    </p>
                </form>            
            </div>   
        </div>
    )
};