import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/about.css';
import TeamMemberCard from '../components/about/TeamMemberCard';
import FaqItem from '../components/about/FaqItem';

// Team member data
const teamMembers = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Founder & CEO',
    bio: 'Former education technology consultant with a passion for making learning fun and accessible to everyone.',
    image: null, // In a real app, this would be a path to an image
    social: {
      linkedin: 'https://linkedin.com/',
      twitter: 'https://twitter.com/',
      github: 'https://github.com/'
    }
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'CTO',
    bio: 'Full-stack developer with 10+ years of experience building educational platforms and interactive learning tools.',
    image: null,
    social: {
      linkedin: 'https://linkedin.com/',
      twitter: 'https://twitter.com/',
      github: 'https://github.com/'
    }
  },
  {
    id: 3,
    name: 'Priya Patel',
    role: 'Content Director',
    bio: 'Former high school teacher with a PhD in Education. Oversees all quiz content creation and educational standards.',
    image: null,
    social: {
      linkedin: 'https://linkedin.com/',
      twitter: 'https://twitter.com/'
    }
  },
  {
    id: 4,
    name: 'James Wilson',
    role: 'UX Designer',
    bio: 'Award-winning designer focused on creating engaging and accessible user experiences for educational platforms.',
    image: null,
    social: {
      linkedin: 'https://linkedin.com/',
      dribbble: 'https://dribbble.com/',
      behance: 'https://www.behance.net/'
    }
  },
  {
    id: 5,
    name: 'Elena Rodriguez',
    role: 'Marketing Director',
    bio: 'Digital marketing specialist with experience in educational technology and community building.',
    image: null,
    social: {
      linkedin: 'https://linkedin.com/',
      twitter: 'https://twitter.com/'
    }
  },
  {
    id: 6,
    name: 'David Kim',
    role: 'Community Manager',
    bio: 'Passionate about building inclusive learning communities and helping users get the most out of educational tools.',
    image: null,
    social: {
      linkedin: 'https://linkedin.com/',
      twitter: 'https://twitter.com/'
    }
  }
];

// FAQ data
const faqItems = [
  {
    question: 'What is QuizMaster?',
    answer: 'QuizMaster is an interactive learning platform that offers quizzes across various subjects and difficulty levels. Our mission is to make learning fun, engaging, and accessible to everyone, anywhere in the world.'
  },
  {
    question: 'Is QuizMaster free to use?',
    answer: 'Yes! The core features of QuizMaster are completely free. We offer a premium subscription that provides additional features like advanced analytics, ad-free experience, and exclusive quiz content.'
  },
  {
    question: 'How are the quizzes created?',
    answer: 'Our quizzes are created by a team of education experts and subject matter specialists. We also have a rigorous review process to ensure accuracy and educational value. For some specialized topics, we collaborate with universities and educational institutions.'
  },
  {
    question: 'Can I create my own quizzes?',
    answer: 'Yes! Registered users can create custom quizzes through our quiz builder tool. You can keep them private, share them with friends, or submit them to our community library for others to enjoy.'
  },
  {
    question: 'How does the leaderboard work?',
    answer: 'Our leaderboard ranks users based on their quiz performance, including accuracy, speed, and difficulty level. Points are awarded for each correct answer, with bonuses for completing quizzes quickly and tackling more challenging questions.'
  },
  {
    question: 'Is there a mobile app available?',
    answer: 'Yes, QuizMaster is available as a mobile app for both iOS and Android devices. You can download it from the App Store or Google Play Store to enjoy quizzes on the go.'
  },
  {
    question: 'How can I report an issue or suggest a feature?',
    answer: 'We welcome your feedback! You can report issues or suggest features through the "Feedback" option in your account settings, or by contacting our support team directly at support@quizmaster.com.'
  },
  {
    question: 'Do you offer quizzes in multiple languages?',
    answer: "Currently, most of our quizzes are available in English, but we're actively working on expanding our content to include more languages. Stay tuned for updates!"
  }
];

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About QuizMaster</h1>
          <p className="about-hero-subtitle">Making learning fun, one quiz at a time</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-section-header">
            <h2>Our Mission</h2>
            <div className="section-divider"></div>
          </div>
          <div className="about-mission-content">
            <div className="about-mission-text">
              <p>At QuizMaster, we believe that learning should be engaging, accessible, and fun. Our mission is to create an interactive platform that helps people of all ages expand their knowledge through the power of quizzes.</p>
              <p>Founded in 2020, QuizMaster has grown from a small passion project to a global learning community with users from over 150 countries. We're dedicated to creating high-quality educational content that sparks curiosity and makes the learning process enjoyable.</p>
              <div className="about-stats">
                <div className="stat-item">
                  <span className="stat-number">10M+</span>
                  <span className="stat-label">Users Worldwide</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">50K+</span>
                  <span className="stat-label">Quizzes Available</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">150+</span>
                  <span className="stat-label">Countries Reached</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">4.8</span>
                  <span className="stat-label">Average Rating</span>
                </div>
              </div>
            </div>
            <div className="about-mission-image">
              <div className="mission-image-placeholder">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                  <path d="M12 16l4-4-4-4"></path>
                  <path d="M8 12h8"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-section about-values-section">
        <div className="about-container">
          <div className="about-section-header">
            <h2>Our Values</h2>
            <div className="section-divider"></div>
          </div>
          <div className="about-values-grid">
            <div className="value-card">
              <div className="value-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                  <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                  <line x1="6" y1="1" x2="6" y2="4"></line>
                  <line x1="10" y1="1" x2="10" y2="4"></line>
                  <line x1="14" y1="1" x2="14" y2="4"></line>
                </svg>
              </div>
              <h3>Education First</h3>
              <p>We prioritize educational value in everything we create, ensuring our content is accurate, informative, and aligned with educational standards.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              </div>
              <h3>Global Accessibility</h3>
              <p>We're committed to making education accessible to everyone, regardless of location, background, or circumstances.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3>Community Driven</h3>
              <p>We believe in the power of community and actively involve our users in shaping the platform through feedback, contributions, and collaboration.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <h3>Excellence</h3>
              <p>We strive for excellence in our content, user experience, and technical implementation, constantly improving and innovating.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                </svg>
              </div>
              <h3>Engagement</h3>
              <p>We make learning fun and engaging through gamification, interactive elements, and a rewarding user experience.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3>Integrity</h3>
              <p>We operate with honesty, transparency, and respect for our users' privacy and data security.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-section-header">
            <h2>Meet Our Team</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">The passionate people behind QuizMaster</p>
          </div>
          <div className="team-grid">
            {teamMembers.map(member => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="about-section about-faq-section">
        <div className="about-container">
          <div className="about-section-header">
            <h2>Frequently Asked Questions</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">Everything you need to know about QuizMaster</p>
          </div>
          <div className="faq-container">
            {faqItems.map((item, index) => (
              <FaqItem 
                key={index} 
                question={item.question} 
                answer={item.answer} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="about-section about-contact-section">
        <div className="about-container">
          <div className="about-contact-grid">
            <div className="about-contact-info">
              <h2>Get in Touch</h2>
              <p>Have questions, feedback, or just want to say hello? We'd love to hear from you!</p>
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="contact-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div className="contact-details">
                    <h3>Email Us</h3>
                    <p>contact@quizmaster.com</p>
                  </div>
                </div>
                <div className="contact-method">
                  <div className="contact-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div className="contact-details">
                    <h3>Call Us</h3>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="contact-method">
                  <div className="contact-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div className="contact-details">
                    <h3>Visit Us</h3>
                    <p>123 Education Lane<br />San Francisco, CA 94107</p>
                  </div>
                </div>
              </div>
              <div className="social-links">
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Twitter">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
                <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="YouTube">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                  </svg>
                </a>
              </div>
            </div>
            <div className="about-contact-form">
              <form className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" name="name" placeholder="Enter your name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" placeholder="Enter your email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" name="subject" placeholder="What's this about?" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="5" placeholder="Tell us what's on your mind..." required></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-block">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-section about-cta-section">
        <div className="about-container">
          <div className="about-cta">
            <h2>Ready to Start Learning?</h2>
            <p>Join thousands of learners expanding their knowledge with QuizMaster today.</p>
            <div className="cta-buttons">
              <Link to="/signup" className="btn btn-primary btn-lg">Sign Up for Free</Link>
              <Link to="/quizzes" className="btn btn-outline btn-lg">Explore Quizzes</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;