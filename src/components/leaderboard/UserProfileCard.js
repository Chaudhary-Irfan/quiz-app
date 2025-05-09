import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/leaderboard.css';

const UserProfileCard = ({ userData, isCurrentUser = false }) => {
  // Function to get badge color class
  const getBadgeColorClass = (badge) => {
    switch (badge) {
      case 'Grandmaster':
        return 'badge-grandmaster';
      case 'Master':
        return 'badge-master';
      case 'Expert':
        return 'badge-expert';
      case 'Skilled':
        return 'badge-skilled';
      case 'Novice':
        return 'badge-novice';
      default:
        return '';
    }
  };

  return (
    <div className={`user-profile-card ${isCurrentUser ? 'current-user' : ''}`}>
      <div className="user-profile-header">
        <div className="user-avatar">
          {userData.user.name.charAt(0).toUpperCase()}
        </div>
        <div className="user-profile-info">
          <h3 className="user-profile-name">{userData.user.name}</h3>
          <div className="user-profile-meta">
            <span className="user-profile-country">{userData.user.country}</span>
            <span className="user-profile-level">{userData.user.level}</span>
          </div>
        </div>
        <div className="user-profile-rank">
          <span className="rank-number">#{userData.rank}</span>
          <span className={`user-badge ${getBadgeColorClass(userData.badge)}`}>{userData.badge}</span>
        </div>
      </div>
      
      <div className="user-profile-stats">
        <div className="stat-item">
          <span className="stat-value">{userData.score.toLocaleString()}</span>
          <span className="stat-label">Total Points</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">{userData.quizzesTaken}</span>
          <span className="stat-label">Quizzes Taken</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">{userData.averageScore}%</span>
          <span className="stat-label">Average Score</span>
        </div>
      </div>
      
      <div className="user-profile-categories">
        <h4>Top Categories</h4>
        <div className="category-list">
          {userData.topCategories?.map((category, index) => (
            <div key={index} className="category-item">
              <div className="category-name">{category.name}</div>
              <div className="category-score">{category.score} pts</div>
              <div className="category-progress">
                <div 
                  className="category-progress-bar" 
                  style={{ width: `${category.mastery}%` }}
                ></div>
              </div>
              <div className="category-mastery">{category.mastery}% mastery</div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="user-profile-achievements">
        <h4>Recent Achievements</h4>
        <div className="achievement-list">
          {userData.achievements?.map((achievement, index) => (
            <div key={index} className="achievement-item">
              <div className="achievement-icon">🏆</div>
              <div className="achievement-details">
                <div className="achievement-name">{achievement.name}</div>
                <div className="achievement-description">{achievement.description}</div>
                <div className="achievement-date">{achievement.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {isCurrentUser && (
        <div className="user-profile-actions">
          <Link to="/quizzes" className="btn btn-primary">Take More Quizzes</Link>
          <Link to="/profile" className="btn btn-outline">View Full Profile</Link>
        </div>
      )}
    </div>
  );
};

export default UserProfileCard;