// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import icons

function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8 mt-auto w-full">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Logo and Description */}
                    <div className="text-center md:text-left mb-4 md:mb-0">
                        <h2 className="text-2xl font-bold mb-2">Watch To Work</h2>
                        <p className="text-sm">Providing quality service since 2024.</p>
                        <div className="w-70% h-1 border-b-4 border-white mt-2 rounded-2xl md:mt-4 "></div>

                    </div>

                    {/* Navigation Links */}
                    <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 mb-4 md:mb-0 justify-center items-center">
                        <li>
                            <Link to="/" className="hover:text-gray-400">Home</Link>
                        </li>
                        <li>
                            <Link to="/about" className="hover:text-gray-400">About</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:text-gray-400">Contact</Link>
                        </li>
                    </ul>

                    {/* Social Media Links */}
                    <div className="flex space-x-4">
                        <a href="#" className="text-white hover:text-gray-400" aria-label="Facebook">
                            <FaFacebook size={24} />
                        </a>
                        <a href="#" className="text-white hover:text-gray-400" aria-label="Twitter">
                            <FaTwitter size={24} />
                        </a>
                        <a href="#" className="text-white hover:text-gray-400" aria-label="Instagram">
                            <FaInstagram size={24} />
                        </a>
                        <a href="#" className="text-white hover:text-gray-400" aria-label="LinkedIn">
                            <FaLinkedin size={24} />
                        </a>
                    </div>
                </div>
                <div className="text-center mt-6">
                    <p className="text-sm">&copy; 2024 From Watch To Work. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
