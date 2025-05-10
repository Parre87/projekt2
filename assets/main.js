/**
 * quizData Array
 * This array holds the questions, options, and correct answers for the football quiz.
 * Each object in the array represents one quiz question and contains:
 * - question`: The text of the question being asked.
 * - options`: An array of multiple choice answers for the user to select from.
 * - correct`: The correct answer to the question.
 * The quiz includes 10 questions related to football (soccer), covering topics such as players, teams, and achievements.
 */

const quizData = [
    {
        question: "Which country was Cristiano Ronaldo born?",
        options: ["Spain", "Portugal", "Brazil", "Sri Lanka"],
        correct: "Portugal",
    },
    {
        question: "Who won the English Premier League season 24/25?",
        options: ["Liverpool", "Arsenal", "Manchester United", "Chelsea"],
        correct: "Liverpool",
    },
    {
        question: "Who has won the most Champions League titles?",
        options: ["Barcelona", "Real Madrid", "Liverpool", "Bayern Munich"],
        correct: "Real Madrid",
    },
    {
        question: "What is Fernando Torres' nickname?",
        options: ["El matador", "El Nino", "El magnifico", "El maestro"],
        correct: "El Nino",
    },
    {
        question: "In which city was Zlatan Ibrahimovic born?",
        options: ["Malmo", "Stockholm", "Sarajevo", "Milan"],
        correct: "Malmo",
    },
     {
        question: "Which national team does Kylian Mbappe play for?",
        options: ["Argentina", "Jamaica", "Brazil", "France"],
        correct: "France",
    },
    {
        question: "What colors are associated with AC Milan?",
        options: ["Red and black", "White and red", "Blue and black", "Red and blue"],
        correct: "Red and black",
    },
    {
        question: "How many times have Arsenal won the champions league?",
        options: ["1", "2", "3", "0"],
        correct: "0",
    },
    {
        question: "With 260 goals, who is the all-time top scorer in the Premier League?",
        options: ["Thierry Henry", "Wayne Rooney", "Cristiano Ronaldo", "Alan Shearer"],
        correct: "Alan Shearer",
    },
    {
        question: "Which player, with 653 games, has made the most Premier League appearances?",
        options: ["Ryan Giggs", "Gareth Barry", "David Beckham", "Michael Owen"],
        correct: "Gareth Barry",
    }
];

/**
 * Quiz Functionality
 * 
 * - Selects necessary DOM elements for the quiz interface such as the quiz container, result container, timer, buttons, etc.
 * - Initializes variables to manage quiz state:
 *   - timeLeft: Sets the countdown timer to 15 seconds.
 *   - timerInterval: Stores the interval reference for updating the timer.
 *   - currentQuestionIndex: Tracks the current question being displayed.
 *   - `userAnswers`: Stores the user's answers to each question.
 * 
 * startQuiz() function:
 * - Hides the start screen, shows the quiz container, and hides the result container when the quiz begins.
 * - Resets the quiz state (question index and user answers) for each new quiz attempt.
 * - Calls showQuestion() to display the first question.
 */
const quizContainer = document.querySelector(".quiz-container");
const resultContainer = document.querySelector(".quiz-result");
const timerElement = document.querySelector(".timer");
const nextButton = document.querySelector(".next-btn");
const retakeBtn = document.querySelector(".retake-btn");
const startBtn = document.querySelector(".start-btn");

let timeLeft = 15;
let timerInterval;
let currentQuestionIndex = 0;
let userAnswers = [];

function startQuiz() {
    document.getElementById('start-screen').style.display = 'none';
    quizContainer.style.display = 'block';
    resultContainer.style.display = 'none';

    currentQuestionIndex = 0;
    userAnswers = [];

    showQuestion();
}

/**
 * showQuestion Function
 * - Displays the current question and its multiple choice options.
 * - Selects the current question object from the quizData array based on the current index (currentQuestionIndex).
 * - Sets the question text to the .question element.
 * - Clears any previous options and dynamically creates buttons for each option.
 * - Each option button is attached with a click event listener that calls selectAnswer() when clicked, passing the selected option.
 * - Calls startTimer() to begin the countdown for the current question.
 */
function showQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    const questionElement = document.querySelector(".quiz-container .question");
    const optionsContainer = document.querySelector(".quiz-container .options");

    optionsContainer.innerHTML = '';
    questionElement.innerHTML = currentQuestion.question;

    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.classList.add("option");
        button.textContent = option;
        button.addEventListener('click', () => {
            selectAnswer(option);
        });
        optionsContainer.appendChild(button);
    });

    startTimer();
}

function startTimer() {
    timeLeft = 15;
    timerElement.textContent = `Time left: ${timeLeft} seconds`;

    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `Time left: ${timeLeft} seconds`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            selectAnswer(null);
        }
    }, 1000);
}


/**
 * selectAnswer Function
 * - Handles the selection of an answer for the current question.
 * - Stores the user's selected answer in the userAnswers array at the index of the current question.
 *   If no answer is selected (exemple, the user runs out of time), stores "Not answered".
 * - Disables all option buttons to prevent further interaction once an answer is selected.
 * - Highlights the correct and incorrect answers by adding respective classes to the options:
 *   - Adds a .correct class to the correct answer.
 *   - Adds an .incorrect class to all wrong answers.
 * - Displays the "Next" button for the user to move to the next question.
 */

function selectAnswer(answer) {
    userAnswers[currentQuestionIndex] = answer || 'Not answered';

    const options = document.querySelectorAll('.option');
    options.forEach(option => option.disabled = true);

    const correctAnswer = quizData[currentQuestionIndex].correct;
    options.forEach(option => {
        if (option.textContent === correctAnswer) {
            option.classList.add('correct');
        } else {
            option.classList.add('incorrect');
        }
    });

    nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        showQuestion();
        nextButton.style.display = "none";
    } else {
        showResults();
    }
});

function showResults() {
    quizContainer.style.display = "none";
    resultContainer.style.display = "flex";

    const score = userAnswers.filter((ans, i) => ans === quizData[i].correct).length;
    document.getElementById("score").textContent = score;

    const resultsContainer = document.getElementById("results-container");
    resultsContainer.innerHTML = ''; // Clear previous results if any

    quizData.forEach((questionData, index) => {
        const userAnswer = userAnswers[index] || 'Not answered';
        const resultClass = userAnswer === questionData.correct ? 'correct' : 'incorrect';

        const questionContainer = document.createElement("div");
        questionContainer.classList.add("question-container", resultClass);

        questionContainer.innerHTML = `
            <div class="question">${questionData.question}</div>
            <div class="user-answer">Your answer: ${userAnswer}</div>
            <div class="correct-answer">Correct answer: ${questionData.correct}</div>
        `;

        resultsContainer.appendChild(questionContainer);
    });
 
    document.querySelector(".retake-btn").style.display = "block";
}

/**
 * Event listener for the "Retake Quiz" button
 * - Resets the quiz to its initial state when the user clicks the "Retake Quiz" button.
 * - Resets the currentQuestionIndex to 0 and clears the userAnswers array to start fresh.
 * - Hides the result container, makes the quiz container visible again, and hides the "Retake Quiz" button.
 * - Calls showQuestion() to display the first question of the quiz.
 */

retakeBtn.addEventListener("click", () => {
    currentQuestionIndex = 0;
    userAnswers = [];
    resultContainer.style.display = "none";
    quizContainer.style.display = "flex";
    retakeBtn.style.display = "none";
    showQuestion();
});


startBtn.addEventListener("click", startQuiz);



