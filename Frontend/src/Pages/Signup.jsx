import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [role, setRole] = useState("Customer"); // Default role

    return (
        <div className="bg-gray-900 text-white h-screen flex items-center justify-center">
            <div className="w-full max-w-md">
                <h2 className="text-4xl font-bold mb-8 text-center">Create an Account</h2>
                <form className="bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            placeholder="Enter your name"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="phone">
                            Phone Number
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="phone"
                            type="tel"
                            placeholder="Enter your phone number"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="role">
                            Role
                        </label>
                        <select
                            id="role"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        >
                            <option value="Customer">Customer</option>
                            <option value="Event Organizer">Event Organizer</option>
                        </select>
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                        >
                            Sign Up
                        </button>
                        <Link to="/login" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-700">
                            Already have an account? Login
                        </Link>
                    </div>
                </form>
                <p className="text-center text-gray-500 text-xs">
                    &copy; {new Date().getFullYear()} E-Ticketing. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default SignUp;
