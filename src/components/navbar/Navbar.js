import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import './Navbar.css';

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
    const { theme } = useTheme();
    const navigate = useNavigate();
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [user, setUser] = useState(null);
    const [showUserMenu, setShowUserMenu] = useState(false);

    // Handle scroll event to change navbar appearance
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        // Get user info from localStorage
        if (isLoggedIn) {
            const userInfo = JSON.parse(localStorage.getItem('user'));
            setUser(userInfo);
        }
    }, [isLoggedIn]);

    // Toggle mobile menu
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleUserMenu = () => {
        setShowUserMenu(!showUserMenu);
    };

    const handleLogout = () => {
        // Clear user info from localStorage
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('user');

        // Update state
        setIsLoggedIn(false);
        setUser(null);

        // Close menus
        setShowUserMenu(false);
        setIsMobileMenuOpen(false);

        // Redirect to home page
        navigate('/');
    };

    // Check if the current path matches the link
    const isActive = (path) => {
        if (path === '/') {
            return location.pathname === path;
        }
        return location.pathname.startsWith(path);
    };

    return (
        <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
            <div className="container navbar-container">
                <div className="navbar-logo">
                    <Link to="/" className="logo-link">
                        <span className="logo-icon">Q</span>
                        <span className="logo-text">QuizMaster</span>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="navbar-links-desktop">
                    <Link to="/" className={`navbar-link ${isActive('/') ? 'active' : ''}`}>Home</Link>
                    <Link to="/quizzes" className={`navbar-link ${isActive('/quizzes') ? 'active' : ''}`}>Quizzes</Link>
                    <div className="navbar-dropdown">
                        <Link to="/quizzes" className="navbar-link">Categories</Link>
                        <div className="navbar-dropdown-content">
                            <Link to="/quiz/general-knowledge" className="dropdown-item">General Knowledge</Link>
                            <Link to="/quiz/science" className="dropdown-item">Science</Link>
                            <Link to="/quiz/history" className="dropdown-item">History</Link>
                            <Link to="/quiz/geography" className="dropdown-item">Geography</Link>
                            <Link to="/quiz/entertainment" className="dropdown-item">Entertainment</Link>
                            <Link to="/quiz/coding" className="dropdown-item">Coding</Link>
                        </div>
                    </div>
                    <Link to="/leaderboard" className={`navbar-link ${isActive('/leaderboard') ? 'active' : ''}`}>Leaderboard</Link>
                    <Link to="/about" className={`navbar-link ${isActive('/about') ? 'active' : ''}`}>About</Link>
                </div>

                {/* Action Buttons */}
                <div className="navbar-actions">
                    {isLoggedIn ? (
                        <div className="user-menu-container">
                            <button className="user-menu-button" onClick={toggleUserMenu}>
                                <div className="user-avatar">
                                    {user?.fullName ? user.fullName.charAt(0).toUpperCase() : 'U'}
                                </div>
                                <span className="user-name">{user?.fullName || user?.email || 'User'}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="chevron-down">
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </button>

                            {showUserMenu && (
                                <div className="user-dropdown">
                                    <Link to="/profile" className="user-dropdown-item">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                            <circle cx="12" cy="7" r="4"></circle>
                                        </svg>
                                        Profile
                                    </Link>
                                    <Link to="/settings" className="user-dropdown-item">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="12" cy="12" r="3"></circle>
                                            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                                        </svg>
                                        Settings
                                    </Link>
                                    <div className="user-dropdown-divider"></div>
                                    <button onClick={handleLogout} className="user-dropdown-item logout">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                                            <polyline points="16 17 21 12 16 7"></polyline>
                                            <line x1="21" y1="12" x2="9" y2="12"></line>
                                        </svg>
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <>
                            <Link to="/login" className="btn btn-sm btn-outline navbar-btn-login">Login</Link>
                            <Link to="/signup" className="btn btn-sm btn-primary navbar-btn-signup">Sign Up</Link>
                        </>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="navbar-mobile-toggle"
                    onClick={toggleMobileMenu}
                    aria-label="Toggle menu"
                >
                    <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
                    <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
                    <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
                </button>
            </div>

            {/* Mobile Navigation */}
            <div className={`navbar-mobile ${isMobileMenuOpen ? 'open' : ''}`}>
                <div className="navbar-mobile-links">
                    {isLoggedIn && (
                        <div className="navbar-mobile-user">
                            <div className="mobile-user-avatar">
                                {user?.fullName ? user.fullName.charAt(0).toUpperCase() : 'U'}
                            </div>
                            <div className="mobile-user-info">
                                <div className="mobile-user-name">{user?.fullName || 'User'}</div>
                                <div className="mobile-user-email">{user?.email || 'user@example.com'}</div>
                            </div>
                        </div>
                    )}

                    <Link to="/" className={`navbar-mobile-link ${isActive('/') ? 'active' : ''}`}>Home</Link>
                    <Link to="/quizzes" className={`navbar-mobile-link ${isActive('/quizzes') ? 'active' : ''}`}>Quizzes</Link>

                    <div className="navbar-mobile-category">
                        <div className="navbar-mobile-category-header">Quiz Categories</div>
                        <Link to="/quiz/general-knowledge" className="navbar-mobile-link navbar-mobile-sublink">General Knowledge</Link>
                        <Link to="/quiz/science" className="navbar-mobile-link navbar-mobile-sublink">Science</Link>
                        <Link to="/quiz/history" className="navbar-mobile-link navbar-mobile-sublink">History</Link>
                        <Link to="/quiz/geography" className="navbar-mobile-link navbar-mobile-sublink">Geography</Link>
                        <Link to="/quiz/entertainment" className="navbar-mobile-link navbar-mobile-sublink">Entertainment</Link>
                        <Link to="/quiz/coding" className="navbar-mobile-link navbar-mobile-sublink">Coding</Link>
                    </div>

                    <Link to="/leaderboard" className={`navbar-mobile-link ${isActive('/leaderboard') ? 'active' : ''}`}>Leaderboard</Link>
                    <Link to="/about" className={`navbar-mobile-link ${isActive('/about') ? 'active' : ''}`}>About</Link>

                    {isLoggedIn ? (
                        <>
                            <Link to="/profile" className="navbar-mobile-link">Profile</Link>
                            <Link to="/settings" className="navbar-mobile-link">Settings</Link>
                            <button onClick={handleLogout} className="navbar-mobile-link navbar-mobile-logout">
                                Logout
                            </button>
                        </>
                    ) : (
                        <div className="navbar-mobile-actions">
                            <Link to="/login" className="btn btn-outline btn-block mb-2">Login</Link>
                            <Link to="/signup" className="btn btn-primary btn-block">Sign Up</Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;