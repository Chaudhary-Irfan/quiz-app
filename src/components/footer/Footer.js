import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import './Footer.css';

const Footer = () => {
    const { theme } = useTheme();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section about">
                        <div className="footer-logo">
                            <span className="logo-icon">Q</span>
                            <span className="logo-text">QuizMaster</span>
                        </div>
                        <p className="footer-description">
                            Test your knowledge with our interactive quizzes. Challenge yourself and compete with friends!
                        </p>
                        <div className="social-icons">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <i className="social-icon facebook">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                    </svg>
                                </i>
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                <i className="social-icon twitter">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                    </svg>
                                </i>
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <i className="social-icon instagram">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                    </svg>
                                </i>
                            </a>
                        </div>
                    </div>

                    <div className="footer-section links">
                        <h3 className="footer-heading">Quick Links</h3>
                        <ul className="footer-links">
                            <li><a href="/">Home</a></li>
                            <li><a href="/quizzes">Quizzes</a></li>
                            <li><a href="/leaderboard">Leaderboard</a></li>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-section categories">
                        <h3 className="footer-heading">Quiz Categories</h3>
                        <ul className="footer-links">
                            <li><a href="/quiz/general-knowledge">General Knowledge</a></li>
                            <li><a href="/quiz/science">Science</a></li>
                            <li><a href="/quiz/history">History</a></li>
                            <li><a href="/quiz/geography">Geography</a></li>
                            <li><a href="/quiz/entertainment">Entertainment</a></li>
                            <li><a href="/quiz/coding">Coding</a></li>
                        </ul>
                    </div>

                    <div className="footer-section contact">
                        <h3 className="footer-heading">Contact Us</h3>
                        <div className="contact-info">
                            <div className="contact-item">
                                <i className="contact-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                    </svg>
                                </i>
                                <span>123 Quiz Street, Knowledge City</span>
                            </div>
                            <div className="contact-item">
                                <i className="contact-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                    </svg>
                                </i>
                                <span>+1 (555) 123-4567</span>
                            </div>
                            <div className="contact-item">
                                <i className="contact-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                        <polyline points="22,6 12,13 2,6"></polyline>
                                    </svg>
                                </i>
                                <span>contact@quizmaster.com</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="copyright">
                        &copy; {currentYear} QuizMaster. All rights reserved.
                    </div>
                    <div className="footer-bottom-links">
                        <a href="/privacy">Privacy Policy</a>
                        <a href="/terms">Terms of Service</a>
                        <a href="/cookies">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;