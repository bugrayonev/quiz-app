const quizData = [
  {
    question: "What is the capital of Turkey?",
    a: "İstanbul",
    b: "Adana",
    c: "Paris",
    d: "Ankara",
    correct: "d",
  },
  {
    question: "What years is the cold war between?",
    a: "1932-1950",
    b: "1947-1991",
    c: "1905-1932",
    d: "1960-1978",
    correct: "b",
  },
  {
    question: "What is the capital of Amierica?",
    a: "Washington",
    b: "Newyork",
    c: "Lasvegas",
    d: "Teksas",
    correct: "a",
  },
  {
    question: "Which team has won the most Champions League trophies?",
    a: "ManchesterCity",
    b: "RealMadrid",
    c: "Paris Saint-Germain",
    d: "Liverpool",
    correct: "b",
  },
  {
    question: "What year was the Battle of Malazgirt fought??",
    a: "1071",
    b: "1061",
    c: "1041",
    d: "1051",
    correct: "a",
  
  
  },
  {
    question: "When was the Byzantine empire destroyed?",
    a: "1350",
    b: "1580",
    c: "1453",
    d: "1470",
    correct: "c",
  },
  {
    question: "Who is nicknamed the whip of god?",
    a: "Julianus",
    b: "II. Constantius",
    c: "Timur",
    d: "Atilla",
    correct: "d",
  
  
  }
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswer();
  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswer() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
        <h2>You Answered correctly at ${score} / ${quizData.length} questions </h2>
        <button onclick="location.reload()">Reload</button>

        `;
    }
  }
});
