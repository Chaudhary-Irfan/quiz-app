import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <>
            <div className="card">
              <div className="card-header">
                <h2>Welcome to QuizMaster</h2>
              </div>
              <div className="p-3">
                <p>This is a professional quiz application with light and dark theme support.</p>
                <p>Click the button in the bottom right corner to toggle between light and dark themes.</p>
                
                <div className="d-flex justify-content-between mt-4">
                  <Link to="/quizzes" className="btn btn-primary">Start Quiz</Link>
                  <Link to="/leaderboard" className="btn btn-outline">View Leaderboard</Link>
                </div>
              </div>
            </div>
            
            <div className="card mt-4">
              <div className="card-header">
                <h3>Features</h3>
              </div>
              <div className="p-3">
                <ul>
                  <li>Light and Dark theme support</li>
                  <li>Responsive design</li>
                  <li>Interactive quiz interface</li>
                  <li>Score tracking</li>
                  <li>Timer functionality</li>
                </ul>
              </div>
            </div>
        </>
    );
}

export default HomePage;
