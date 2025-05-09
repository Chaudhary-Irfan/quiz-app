import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './components/common/ThemeToggle';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import HomePage from './pages/HomePage';
import QuizListPage from './pages/QuizListPage';
import QuizPage from './pages/QuizPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import LeaderboardPage from './pages/LeaderboardPage';
import AboutPage from './pages/AboutPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
  }, []);

  // Protected route component
  const ProtectedRoute = ({ children }) => {
    if (!isLoggedIn) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          
          <div className="container" style={{ marginTop: '90px' }}>
            <main>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/quizzes" element={<QuizListPage />} />
                <Route path="/leaderboard" element={<LeaderboardPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route 
                  path="/quiz/:quizId" 
                  element={
                    <ProtectedRoute>
                      <QuizPage />
                    </ProtectedRoute>
                  } 
                />
              </Routes>
            </main>
          </div>
          
          <ThemeToggle />
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
