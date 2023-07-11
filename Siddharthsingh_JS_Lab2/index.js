// Define quiz questions and answers
const quizQuestions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Rome"],
    correctAnswer: 0
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Jupiter", "Venus", "Saturn"],
    correctAnswer: 0
  },
  // Add more questions here
];

let currentQuestionIndex = 0;
let score = 0;

// Function to initialize the quiz
function initializeQuiz() {
  const questionElement = document.getElementById("question");
  const choiceElements = document.querySelectorAll(".buttons button span");

  // Display the current question and choices
  questionElement.textContent = quizQuestions[currentQuestionIndex].question;
  for (let i = 0; i < 4; i++) {
    choiceElements[i].textContent = quizQuestions[currentQuestionIndex].options[i];
  }

  updateProgress();
}

// Function to check the selected answer and move to the next question
function checkAnswer(selectedOption) {
  if (selectedOption === quizQuestions[currentQuestionIndex].correctAnswer) {
    score++;
  }
  
  currentQuestionIndex++;

  if (currentQuestionIndex < quizQuestions.length) {
    initializeQuiz();
  } else {
    displayScore();
  }
}

// Function to display the final score
function displayScore() {
  const quizContainer = document.getElementById("quiz");
  const scoreElement = document.createElement("p");
  scoreElement.id = "score";
  scoreElement.textContent = `Score: ${score}/${quizQuestions.length}`;
  quizContainer.appendChild(scoreElement);

  const percentage = (score / quizQuestions.length * 100).toFixed(2);
  const progressElement = document.getElementById("progress");
  progressElement.textContent = `You scored ${percentage}%`;
}

// Function to update the progress indicator
function updateProgress() {
  const progressElement = document.getElementById("progress");
  progressElement.textContent = `Question ${currentQuestionIndex + 1} of ${quizQuestions.length}`;
}

// Event listeners for choice buttons
const choiceButtons = document.querySelectorAll(".buttons button");
for (let i = 0; i < choiceButtons.length; i++) {
  choiceButtons[i].addEventListener("click", function() {
    checkAnswer(i);
  });
}

// Start the quiz
initializeQuiz();
