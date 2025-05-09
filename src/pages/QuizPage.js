import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const QuizPage = () => {
  const { quizId } = useParams();
  const [quiz, setQuiz] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const loadQuiz = async () => {
      try {
        // In a real app, this would be an API call
        const quizData = await import(`../quizes/${quizId}.json`);
        setQuiz(quizData.default || quizData);
        setTimeLeft(quizData.default?.timeLimit || quizData.timeLimit || 300);
        setLoading(false);
      } catch (error) {
        console.error('Failed to load quiz:', error);
        setLoading(false);
      }
    };

    if (quizId) {
      loadQuiz();
    }
  }, [quizId]);

  useEffect(() => {
    if (!loading && quiz && timeLeft > 0 && !showResults) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timer);
            setShowResults(true);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [loading, quiz, showResults, timeLeft]);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    // Save the answer
    const currentQ = quiz.questions[currentQuestion];
    const isCorrect = selectedOption === currentQ.correctAnswer;
    
    setAnswers([...answers, {
      questionId: currentQ.id,
      selectedOption,
      isCorrect
    }]);

    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    } else {
      setShowResults(true);
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setScore(0);
    setShowResults(false);
    setTimeLeft(quiz.timeLimit);
    setAnswers([]);
  };

  if (loading) {
    return (
      <div className="container mt-5">
        <div className="card">
          <div className="card-body text-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-3">Loading quiz...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!quiz) {
    return (
      <div className="container mt-5">
        <div className="card">
          <div className="card-body text-center">
            <h2>Quiz Not Found</h2>
            <p>Sorry, we couldn't find the quiz you're looking for.</p>
            <a href="/" className="btn btn-primary">Back to Home</a>
          </div>
        </div>
      </div>
    );
  }

  if (showResults) {
    return (
      <div className="container mt-5">
        <div className="card">
          <div className="card-header">
            <h2>{quiz.title} - Results</h2>
          </div>
          <div className="card-body quiz-result">
            <h3>Your Score</h3>
            <div className="quiz-score">{score} / {quiz.questions.length}</div>
            <p>You answered {Math.round((score / quiz.questions.length) * 100)}% of the questions correctly.</p>
            
            <div className="mt-4">
              <button onClick={restartQuiz} className="btn btn-primary me-2">Restart Quiz</button>
              <a href="/" className="btn btn-outline">Back to Home</a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentQ = quiz.questions[currentQuestion];
  const progress = ((currentQuestion + 1) / quiz.questions.length) * 100;

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h2>{quiz.title}</h2>
          <div className="quiz-timer">{formatTime(timeLeft)}</div>
        </div>
        <div className="card-body">
          <div className="quiz-progress">
            <div className="quiz-progress-bar" style={{ width: `${progress}%` }}></div>
          </div>
          
          <h4>Question {currentQuestion + 1} of {quiz.questions.length}</h4>
          <p className="lead">{currentQ.question}</p>
          
          <div className="mt-4">
            {currentQ.options.map((option, index) => (
              <div 
                key={index}
                className={`quiz-option ${selectedOption === option ? 'selected' : ''}`}
                onClick={() => handleOptionSelect(option)}
              >
                {option}
              </div>
            ))}
          </div>
          
          <div className="d-flex justify-content-between mt-4">
            <div>
              <span className="badge bg-primary">{quiz.difficulty}</span>
            </div>
            <button 
              className="btn btn-primary" 
              onClick={handleNextQuestion}
              disabled={selectedOption === null}
            >
              {currentQuestion < quiz.questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;