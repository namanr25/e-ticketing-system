import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Brand */}
                <div className="text-white text-xl font-bold">
                    <Link to="/">E-Ticketing</Link>
                </div>

                {/* Navigation Links */}
                <ul className="flex space-x-6">
                    <li>
                        <Link to="/" className="text-gray-300 hover:text-white">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/events" className="text-gray-300 hover:text-white">
                            Events
                        </Link>
                    </li>
                    <li>
                        <Link to="/profile" className="text-gray-300 hover:text-white">
                            Profile
                        </Link>
                    </li>
                    <li>
                        <Link to="/signup" className="text-gray-300 hover:text-white">
                            Sign Up
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
