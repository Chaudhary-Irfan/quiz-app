import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/leaderboard.css';

// Mock leaderboard data - in a real app, this would come from an API
const mockLeaderboardData = [
  {
    id: 1,
    user: {
      id: 'user1',
      name: 'Irfan',
      avatar: null,
      level: 'Expert',
      country: 'Pakistan ☪️'
    },
    score: 25000,
    quizzesTaken: 42,
    averageScore: 95,
    rank: 1,
    badge: 'Grandmaster'
  },
  {
    id: 2,
    user: {
      id: 'user2',
      name: 'Maria Garcia',
      avatar: null,
      level: 'Expert',
      country: 'Spain'
    },
    score: 9720,
    quizzesTaken: 39,
    averageScore: 94,
    rank: 2,
    badge: 'Grandmaster'
  },
  {
    id: 3,
    user: {
      id: 'user3',
      name: 'James Wilson',
      avatar: null,
      level: 'Advanced',
      country: 'Canada'
    },
    score: 9350,
    quizzesTaken: 36,
    averageScore: 92,
    rank: 3,
    badge: 'Master'
  },
  {
    id: 4,
    user: {
      id: 'user4',
      name: 'Sophia Chen',
      avatar: null,
      level: 'Advanced',
      country: 'China'
    },
    score: 8970,
    quizzesTaken: 35,
    averageScore: 90,
    rank: 4,
    badge: 'Master'
  },
  {
    id: 5,
    user: {
      id: 'user5',
      name: 'Mohammed Al-Farsi',
      avatar: null,
      level: 'Advanced',
      country: 'UAE'
    },
    score: 8840,
    quizzesTaken: 33,
    averageScore: 89,
    rank: 5,
    badge: 'Master'
  },
  {
    id: 6,
    user: {
      id: 'user6',
      name: 'Emma Thompson',
      avatar: null,
      level: 'Intermediate',
      country: 'United Kingdom'
    },
    score: 8650,
    quizzesTaken: 31,
    averageScore: 88,
    rank: 6,
    badge: 'Expert'
  },
  {
    id: 7,
    user: {
      id: 'user7',
      name: 'Lucas Silva',
      avatar: null,
      level: 'Intermediate',
      country: 'Brazil'
    },
    score: 8520,
    quizzesTaken: 30,
    averageScore: 87,
    rank: 7,
    badge: 'Expert'
  },
  {
    id: 8,
    user: {
      id: 'user8',
      name: 'Aisha Patel',
      avatar: null,
      level: 'Intermediate',
      country: 'India'
    },
    score: 8340,
    quizzesTaken: 29,
    averageScore: 86,
    rank: 8,
    badge: 'Expert'
  },
  {
    id: 9,
    user: {
      id: 'user9',
      name: 'Daniel Kim',
      avatar: null,
      level: 'Intermediate',
      country: 'South Korea'
    },
    score: 8120,
    quizzesTaken: 28,
    averageScore: 85,
    rank: 9,
    badge: 'Skilled'
  },
  {
    id: 10,
    user: {
      id: 'user10',
      name: 'Olivia Müller',
      avatar: null,
      level: 'Intermediate',
      country: 'Germany'
    },
    score: 7980,
    quizzesTaken: 27,
    averageScore: 84,
    rank: 10,
    badge: 'Skilled'
  },
  {
    id: 11,
    user: {
      id: 'user11',
      name: 'Hiroshi Tanaka',
      avatar: null,
      level: 'Beginner',
      country: 'Japan'
    },
    score: 7850,
    quizzesTaken: 26,
    averageScore: 83,
    rank: 11,
    badge: 'Skilled'
  },
  {
    id: 12,
    user: {
      id: 'user12',
      name: 'Isabella Rossi',
      avatar: null,
      level: 'Beginner',
      country: 'Italy'
    },
    score: 7720,
    quizzesTaken: 25,
    averageScore: 82,
    rank: 12,
    badge: 'Skilled'
  },
  {
    id: 13,
    user: {
      id: 'user13',
      name: 'Ahmed Hassan',
      avatar: null,
      level: 'Beginner',
      country: 'Egypt'
    },
    score: 7590,
    quizzesTaken: 24,
    averageScore: 81,
    rank: 13,
    badge: 'Novice'
  },
  {
    id: 14,
    user: {
      id: 'user14',
      name: 'Fatima Zahra',
      avatar: null,
      level: 'Beginner',
      country: 'Morocco'
    },
    score: 7460,
    quizzesTaken: 23,
    averageScore: 80,
    rank: 14,
    badge: 'Novice'
  },
  {
    id: 15,
    user: {
      id: 'user15',
      name: 'Liam O\'Connor',
      avatar: null,
      level: 'Beginner',
      country: 'Ireland'
    },
    score: 7330,
    quizzesTaken: 22,
    averageScore: 79,
    rank: 15,
    badge: 'Novice'
  }
];

// Mock category data
const categories = [
  { id: 'all', name: 'All Categories' },
  { id: 'general-knowledge', name: 'General Knowledge' },
  { id: 'science', name: 'Science' },
  { id: 'history', name: 'History' },
  { id: 'geography', name: 'Geography' },
  { id: 'entertainment', name: 'Entertainment' },
  { id: 'coding', name: 'Coding' }
];

// Mock time periods
const timePeriods = [
  { id: 'all-time', name: 'All Time' },
  { id: 'this-month', name: 'This Month' },
  { id: 'this-week', name: 'This Week' },
  { id: 'today', name: 'Today' }
];

const LeaderboardPage = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTimePeriod, setSelectedTimePeriod] = useState('all-time');
  const [currentUser, setCurrentUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    // Simulate API call to fetch leaderboard data
    const fetchLeaderboardData = async () => {
      setLoading(true);
      try {
        // In a real app, this would be an API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Filter data based on selected category and time period
        // This is just a simulation - in a real app, the filtering would happen on the server
        let filteredData = [...mockLeaderboardData];
        
        // Filter by search query if provided
        if (searchQuery) {
          filteredData = filteredData.filter(item => 
            item.user.name.toLowerCase().includes(searchQuery.toLowerCase())
          );
        }
        
        setLeaderboardData(filteredData);
        
        // Check if current user is in the leaderboard
        const userInfo = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
        if (userInfo) {
          // In a real app, you would fetch the user's rank from the API
          // For now, we'll just create a mock entry
          setCurrentUser({
            user: {
              id: 'current-user',
              name: userInfo.fullName || userInfo.email,
              avatar: null,
              level: 'Grandmaster',
              country: 'Pakistan ☪️'
            },
            score: 25000,
            quizzesTaken: 12,
            averageScore: 89,
            rank: 1,
            badge: 'Grandmaster'
          });
        }
      } catch (error) {
        console.error('Failed to fetch leaderboard data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboardData();
  }, [selectedCategory, selectedTimePeriod, searchQuery]);

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = leaderboardData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(leaderboardData.length / itemsPerPage);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    setCurrentPage(1);
  };

  const handleTimePeriodChange = (periodId) => {
    setSelectedTimePeriod(periodId);
    setCurrentPage(1);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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
    <div className="leaderboard-page">
      <div className="leaderboard-header">
        <h1>Leaderboard</h1>
        <p>See how you stack up against other quiz masters from around the world!</p>
      </div>

      <div className="leaderboard-filters">
        <div className="filter-group">
          <label>Category:</label>
          <div className="filter-options">
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-option ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => handleCategoryChange(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="filter-group">
          <label>Time Period:</label>
          <div className="filter-options">
            {timePeriods.map(period => (
              <button
                key={period.id}
                className={`filter-option ${selectedTimePeriod === period.id ? 'active' : ''}`}
                onClick={() => handleTimePeriodChange(period.id)}
              >
                {period.name}
              </button>
            ))}
          </div>
        </div>

        <div className="filter-group search-group">
          <input
            type="text"
            placeholder="Search players..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="search-input"
          />
        </div>
      </div>

      {currentUser && (
        <div className="current-user-card">
          <div className="current-user-rank">
            <span className="rank-number">{currentUser.rank}</span>
            <span className="rank-label">Your Rank</span>
          </div>
          <div className="current-user-info">
            <div className="user-avatar">
              {currentUser.user.name.charAt(0).toUpperCase()}
            </div>
            <div className="user-details">
              <h3>{currentUser.user.name} <span className="user-country">{currentUser.user.country}</span></h3>
              <div className="user-stats">
                <span className="user-level">{currentUser.user.level}</span>
                <span className={`user-badge ${getBadgeColorClass(currentUser.badge)}`}>{currentUser.badge}</span>
              </div>
            </div>
          </div>
          <div className="current-user-stats">
            <div className="stat-item">
              <span className="stat-value">{currentUser.score.toLocaleString()}</span>
              <span className="stat-label">Points</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">{currentUser.quizzesTaken}</span>
              <span className="stat-label">Quizzes</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">{currentUser.averageScore}%</span>
              <span className="stat-label">Avg. Score</span>
            </div>
          </div>
          <div className="current-user-actions">
            <Link to="/quizzes" className="btn btn-primary">Take More Quizzes</Link>
          </div>
        </div>
      )}

      <div className="leaderboard-container">
        <div className="leaderboard-top-players">
          {leaderboardData.slice(0, 3).map((player, index) => (
            <div key={player.id} className={`top-player top-player-${index + 1}`}>
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

        {loading ? (
          <div className="leaderboard-loading">
            <div className="spinner"></div>
            <p>Loading leaderboard data...</p>
          </div>
        ) : (
          <>
            <div className="leaderboard-table-container">
              <table className="leaderboard-table">
                <thead>
                  <tr>
                    <th className="rank-column">Rank</th>
                    <th className="player-column">Player</th>
                    <th className="score-column">Score</th>
                    <th className="quizzes-column">Quizzes</th>
                    <th className="average-column">Avg. Score</th>
                    <th className="badge-column">Badge</th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems.map((player) => (
                    <tr key={player.id} className={player.user.id === 'current-user' ? 'current-user-row' : ''}>
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
                      <td className="badge-column">
                        <span className={`player-badge ${getBadgeColorClass(player.badge)}`}>
                          {player.badge}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {totalPages > 1 && (
              <div className="pagination">
                <button 
                  className="pagination-button" 
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNumber => (
                  <button
                    key={pageNumber}
                    className={`pagination-button ${currentPage === pageNumber ? 'active' : ''}`}
                    onClick={() => handlePageChange(pageNumber)}
                  >
                    {pageNumber}
                  </button>
                ))}
                
                <button 
                  className="pagination-button" 
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              </div>
            )}
          </>
        )}
      </div>

      <div className="leaderboard-info">
        <div className="info-card">
          <h3>How Points are Calculated</h3>
          <p>Your leaderboard score is calculated based on:</p>
          <ul>
            <li><strong>Quiz Difficulty:</strong> Harder quizzes award more points</li>
            <li><strong>Accuracy:</strong> Higher percentage of correct answers means more points</li>
            <li><strong>Time Bonus:</strong> Finishing quizzes faster earns you extra points</li>
            <li><strong>Consistency:</strong> Regular participation boosts your overall score</li>
          </ul>
        </div>
        
        <div className="info-card">
          <h3>Badge Levels</h3>
          <div className="badge-list">
            <div className="badge-item">
              <span className="badge badge-grandmaster">Grandmaster</span>
              <span className="badge-description">Top 1% of players</span>
            </div>
            <div className="badge-item">
              <span className="badge badge-master">Master</span>
              <span className="badge-description">Top 5% of players</span>
            </div>
            <div className="badge-item">
              <span className="badge badge-expert">Expert</span>
              <span className="badge-description">Top 15% of players</span>
            </div>
            <div className="badge-item">
              <span className="badge badge-skilled">Skilled</span>
              <span className="badge-description">Top 40% of players</span>
            </div>
            <div className="badge-item">
              <span className="badge badge-novice">Novice</span>
              <span className="badge-description">All new players</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardPage;