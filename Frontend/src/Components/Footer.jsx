import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto text-center">
                {/* About Us Section */}
                <div className="mb-6">
                    <h2 className="text-2xl font-bold">About Us</h2>
                    <p className="text-gray-400 mt-2">
                        We are dedicated to providing a seamless e-ticketing experience, allowing you to book and manage event tickets effortlessly. Join us and be a part of a community that never misses out on events!
                    </p>
                </div>

                {/* Footer Links */}
                <div className="flex justify-center space-x-6 mb-4">
                    <Link to="/contact" className="text-gray-400 hover:text-white">
                        Contact Us
                    </Link>
                    <Link to="/privacy" className="text-gray-400 hover:text-white">
                        Privacy Policy
                    </Link>
                    <Link to="/terms" className="text-gray-400 hover:text-white">
                        Terms of Service
                    </Link>
                </div>

                {/* Copyright */}
                <div className="text-gray-500">
                    © {new Date().getFullYear()} E-Ticketing. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
