// src/Quiz.jsx
import { useState } from 'react';
import { questions } from './questions';
import { IoIosArrowForward,IoIosArrowBack } from "react-icons/io";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [showScore, setShowScore] = useState(false);

  const handleOptionClick = (option) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[currentQuestion] = option;
    setSelectedOptions(newSelectedOptions);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    return selectedOptions.filter((option, index) => option === questions[index].correct).length;
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOptions([]);
    setShowScore(false);
  };

  if (showScore) {
    const score = calculateScore();
    return (
      <div>
        <h2 className='text-black text-2xl'>Your Score: {score} / {questions.length}</h2>
        {score >= 4 ? (
          <div>
            <p className='text-green-500'>Great job! You did amazing!</p>
            <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWR0bjloYmU1emxid2d2dnh2bDhmYTNqNDMyZXFzbjVmang5dmdtayZlcD12MV9naWZzX3NlYXJjaCZjdbD1n/eIUpSyzwGp0YhAMTKr/giphy.gif" alt="Great job" />
            <button onClick={restartQuiz} className='text-white bg-black rounded-lg p-2 my-3'>Restart Quiz</button>
          </div>
        ) : (
          <div>
            <p className='text-red-500'>Better luck next time!</p>
            <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNm5ob2g5MWl3bnRqcmQ0MG1raXI1emo4N3Q0N2FmYWVlN2ZkNnJjZCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/cJAvY9MCwFwBjESRk0/giphy.gif" alt="Better luck next time" />
            <button onClick={restartQuiz} className='text-white bg-black rounded-lg p-2 my-3'>Restart Quiz</button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className='text-black'>
      <h2 className='my-3'>{questions[currentQuestion].text}</h2>
      <div className='space-y-3'>
        {questions[currentQuestion].options.map((option) => (
          <button
            key={option}
            onClick={() => handleOptionClick(option)}
            className={
              selectedOptions[currentQuestion]===option
              ? 'w-full py-2 px-4 bg-green-100 text-green-500 rounded-lg border border-green-300 cursor-not-allowed'
              : 'w-full py-2 px-4 bg-white text-gray-700 rounded-lg border border-gray-300 hover:bg-gray-100'
            }
            style={{
              backgroundColor: selectedOptions[currentQuestion] === option ? 'lightblue' : 'white'
            }}
          >
            {option}
          </button>
        ))}
      </div>
      <div className='mt-3 flex align-items-center justify-between gap-5'>
        <button onClick={handlePreviousQuestion} disabled={currentQuestion === 0} style={{ cursor: currentQuestion === 0 ? 'not-allowed' : 'pointer' }}>
          <IoIosArrowBack color='white' />
        </button>
        <button className='text-white' onClick={handleNextQuestion}>
          {currentQuestion === questions.length - 1 ? 'Submit' : <IoIosArrowForward color='white' />}
        </button>
      </div>
    </div>
  );
}

export default Quiz;