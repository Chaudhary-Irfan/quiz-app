import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const QuizListPage = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadQuizzes = async () => {
      try {
        // In a real app, this would be an API call
        const generalKnowledge = await import('../quizes/general-knowledge.json');
        const science = await import('../quizes/science.json');
        const history = await import('../quizes/history.json');
        const geography = await import('../quizes/geography.json');
        const entertainment = await import('../quizes/entertainment.json');
        const coding = await import('../quizes/coding.json');
        
        setQuizzes([
          generalKnowledge.default || generalKnowledge,
          science.default || science,
          history.default || history,
          geography.default || geography,
          entertainment.default || entertainment,
          coding.default || coding
        ]);
        setLoading(false);
      } catch (error) {
        console.error('Failed to load quizzes:', error);
        setLoading(false);
      }
    };

    loadQuizzes();
  }, []);

  if (loading) {
    return (
      <div className="container mt-5">
        <div className="card">
          <div className="card-body text-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-3">Loading quizzes...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">
          <h2>Available Quizzes</h2>
        </div>
        <div className="card-body">
          <div className="row">
            {quizzes.map((quiz) => (
              <div key={quiz.id} className="col-md-6 mb-4">
                <div className="card h-100">
                  <div className="card-body">
                    <h3 className="card-title">{quiz.title}</h3>
                    <p className="card-text">{quiz.description}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="badge bg-primary">{quiz.difficulty}</span>
                      <span>{quiz.questions.length} questions</span>
                      <span>{Math.floor(quiz.timeLimit / 60)} minutes</span>
                    </div>
                  </div>
                  <div className="card-footer">
                    <Link to={`/quiz/${quiz.id}`} className="btn btn-primary w-100">
                      Start Quiz
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizListPage;