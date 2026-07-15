// Component for email verification after sign-up or during password reset
export default function EmailVerifivation() {
    // Return the JSX for the verification screen
    return (
        // Main container with padding
        <div className="max-w-[700px] m-auto p-4">
            {/* Back button with styled circular background */}
            <button className="h-[50px] w-[50px] flex justify-center items-center text-gray-500 text-5xl bg-slate-300 rounded-[50%]">
                ‹
            </button>

            {/* Main instructional heading */}
            <p className="py-5 text-3xl">
                Please verify your Email
            </p>
            
            {/* Sub-instructional text */}
            <p className="text-xl text-slate-500">
                Enter the verification code sent to your email
            </p>

            {/* Placeholder for the user's email address being verified */}
            <p className="text-slate-500 py-5">
                peter@gmail.com
            </p>
            
            {/* Container for the code input field */}
            <div className="align-center">
                {/* Number input for the 6-digit code with custom letter spacing and styling */}
                <input 
                    className="w-[210px] rounded-lg text-2xl text-center py-4 [letter-spacing:20px] bg-slate-200" 
                    placeholder="------" 
                    type="number" 
                />
            </div>

            {/* Verify button to submit the code */}
            <button className="w-full bg-slate-800 text-white p-5 rounded-lg text-2xl text-center mt-[50px]">
                Verify
            </button>
        </div>
    );
}