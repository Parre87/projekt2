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
    }
];

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
    resultContainer.innerHTML = '';

    const score = userAnswers.filter((ans, i) => ans === quizData[i].correct).length;

    const scoreElement = document.createElement("h2");
    scoreElement.textContent = `You have scored ${score} out of ${quizData.length}.`;
    resultContainer.appendChild(scoreElement);

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

        resultContainer.appendChild(questionContainer);
    });

    retakeBtn.style.display = "block";
}

retakeBtn.addEventListener("click", () => {
    currentQuestionIndex = 0;
    userAnswers = [];
    resultContainer.style.display = "none";
    quizContainer.style.display = "flex";
    retakeBtn.style.display = "none";
    showQuestion();
});


startBtn.addEventListener("click", startQuiz);



