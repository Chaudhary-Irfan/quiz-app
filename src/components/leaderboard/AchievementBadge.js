import React from 'react';
import '../../styles/leaderboard.css';

const AchievementBadge = ({ achievement, size = 'medium' }) => {
  // Function to get achievement icon
  const getAchievementIcon = (type) => {
    switch (type) {
      case 'streak':
        return '🔥';
      case 'perfect':
        return '💯';
      case 'speed':
        return '⚡';
      case 'category':
        return '🏆';
      case 'quiz':
        return '🎯';
      case 'milestone':
        return '🎖️';
      default:
        return '🏅';
    }
  };

  // Function to get achievement color class
  const getAchievementColorClass = (level) => {
    switch (level) {
      case 'bronze':
        return 'achievement-bronze';
      case 'silver':
        return 'achievement-silver';
      case 'gold':
        return 'achievement-gold';
      case 'platinum':
        return 'achievement-platinum';
      case 'diamond':
        return 'achievement-diamond';
      default:
        return '';
    }
  };

  return (
    <div className={`achievement-badge ${getAchievementColorClass(achievement.level)} achievement-${size}`}>
      <div className="achievement-badge-icon">
        {getAchievementIcon(achievement.type)}
      </div>
      <div className="achievement-badge-info">
        <div className="achievement-badge-name">{achievement.name}</div>
        {size !== 'small' && (
          <div className="achievement-badge-description">{achievement.description}</div>
        )}
      </div>
    </div>
  );
};

export default AchievementBadge;