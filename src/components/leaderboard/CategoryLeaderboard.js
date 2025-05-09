import React from 'react';
import '../../styles/leaderboard.css';

const CategoryLeaderboard = ({ category, leaderboardData, loading }) => {
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

  // Function to get rank color class
  const getRankColorClass = (rank) => {
    if (rank === 1) return 'rank-first';
    if (rank === 2) return 'rank-second';
    if (rank === 3) return 'rank-third';
    return '';
  };

  return (
    <div className="category-leaderboard">
      <div className="category-leaderboard-header">
        <h2>{category.name} Leaderboard</h2>
        <p>Top performers in {category.name.toLowerCase()} quizzes</p>
      </div>

      {loading ? (
        <div className="leaderboard-loading">
          <div className="spinner"></div>
          <p>Loading leaderboard data...</p>
        </div>
      ) : (
        <div className="category-leaderboard-content">
          <div className="category-top-players">
            {leaderboardData.slice(0, 3).map((player, index) => (
              <div key={player.id} className={`category-top-player category-top-player-${index + 1}`}>
                <div className="top-player-rank">
                  <div className={`rank-badge ${getRankColorClass(index + 1)}`}>
                    {index + 1}
                  </div>
                </div>
                <div className="top-player-avatar">
                  {player.user.name.charAt(0).toUpperCase()}
                </div>
                <div className="top-player-info">
                  <h3 className="top-player-name">{player.user.name}</h3>
                  <div className="top-player-country">{player.user.country}</div>
                  <div className="top-player-score">{player.score.toLocaleString()} points</div>
                  <div className={`top-player-badge ${getBadgeColorClass(player.badge)}`}>
                    {player.badge}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="category-leaderboard-table-container">
            <table className="leaderboard-table">
              <thead>
                <tr>
                  <th className="rank-column">Rank</th>
                  <th className="player-column">Player</th>
                  <th className="score-column">Score</th>
                  <th className="quizzes-column">Quizzes</th>
                  <th className="average-column">Avg. Score</th>
                </tr>
              </thead>
              <tbody>
                {leaderboardData.slice(0, 10).map((player) => (
                  <tr key={player.id}>
                    <td className={`rank-column ${getRankColorClass(player.rank)}`}>
                      <span className="rank-number">{player.rank}</span>
                    </td>
                    <td className="player-column">
                      <div className="player-info">
                        <div className="player-avatar">
                          {player.user.name.charAt(0).toUpperCase()}
                        </div>
                        <div className="player-details">
                          <div className="player-name">{player.user.name}</div>
                          <div className="player-meta">
                            <span className="player-level">{player.user.level}</span>
                            <span className="player-country">{player.user.country}</span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="score-column">{player.score.toLocaleString()}</td>
                    <td className="quizzes-column">{player.quizzesTaken}</td>
                    <td className="average-column">{player.averageScore}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryLeaderboard;