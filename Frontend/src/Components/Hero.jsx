import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="bg-gray-900 text-white py-32 h-screen flex items-center">
            <div className="container mx-auto text-center">
                {/* Hero Text */}
                <h1 className="text-5xl font-bold mb-6">Welcome to E-Ticketing System</h1>
                <p className="text-xl mb-10">
                    Seamlessly book and manage your event tickets online. Join us today and never miss out on your favorite events.
                </p>

                {/* Hero Buttons */}
                <div className="flex justify-center space-x-6">
                    <Link to="/signup">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded">
                            Sign Up
                        </button>
                    </Link>
                    <Link to="/login">
                        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded">
                            Login
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;
