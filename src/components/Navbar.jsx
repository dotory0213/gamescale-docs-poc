import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-xl border-b border-grey-200/50 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    {/* Logo */}
                    <div className="flex-shrink-0 cursor-pointer flex items-center gap-2" onClick={() => navigate('/')}>
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">G</div>
                        <span className="text-xl font-bold text-dark tracking-tight">GameScale</span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-1">
                            {['Features', 'Partners'].map((item) => (
                                <a key={item} href={`/#${item.toLowerCase()}`} className="px-4 py-2 text-grey-600 hover:text-dark hover:bg-grey-100 rounded-lg text-sm font-semibold transition-all">
                                    {item}
                                </a>
                            ))}
                            <Link to="/docs" className="px-4 py-2 text-grey-600 hover:text-dark hover:bg-grey-100 rounded-lg text-sm font-semibold transition-all">
                                Docs
                            </Link>
                            <a href="https://www.gamescale.io/ko/news" target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-grey-600 hover:text-dark hover:bg-grey-100 rounded-lg text-sm font-semibold transition-all">
                                Blog
                            </a>
                            <a href="https://forum.nexon.com/gamescaledevelopers/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-grey-600 hover:text-dark hover:bg-grey-100 rounded-lg text-sm font-semibold transition-all">
                                Community
                            </a>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="hidden md:flex items-center gap-4">
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                if (window.showJiraCollector) {
                                    window.showJiraCollector();
                                } else {
                                    console.warn('Jira Collector not loaded');
                                }
                            }}
                            className="text-sm font-semibold text-grey-600 hover:text-primary transition-colors cursor-pointer"
                        >
                            Support
                        </button>
                        <Link to="/signup" className="px-5 py-2.5 bg-primary hover:bg-primary-dark text-white text-sm font-bold rounded-full transition-all shadow-toss hover:shadow-toss-hover transform hover:-translate-y-0.5">
                            Sign In
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-lg text-grey-600 hover:bg-grey-100 focus:outline-none"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-b border-grey-200">
                    <div className="px-4 pt-4 pb-6 space-y-2">
                        {['Features', 'Partners'].map((item) => (
                            <Link key={item} to="/" className="block px-4 py-3 text-base font-bold text-grey-600 hover:bg-grey-50 rounded-xl">{item}</Link>
                        ))}
                        <Link to="/docs" className="block px-4 py-3 text-base font-bold text-grey-600 hover:bg-grey-50 rounded-xl">Docs</Link>
                        <a href="https://www.gamescale.io/ko/news" target="_blank" rel="noopener noreferrer" className="block px-4 py-3 text-base font-bold text-grey-600 hover:bg-grey-50 rounded-xl">Blog</a>
                        <a href="https://forum.nexon.com/gamescaledevelopers/" target="_blank" rel="noopener noreferrer" className="block px-4 py-3 text-base font-bold text-grey-600 hover:bg-grey-50 rounded-xl">Community</a>
                        <div className="pt-4 mt-4 border-t border-grey-100">
                            <Link to="/signup" className="block w-full text-center px-4 py-3 bg-primary text-white font-bold rounded-xl shadow-toss">
                                Sign In
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
