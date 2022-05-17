const questionArr = [
    {
        question : "Which of the following is not a data type in Javascript?", 
        a : "Boolean",
        b : "Object",
        c : "Redefined",
        d : "Undefined",
        correct : "c" 
    },

    {
        question : "What does the abbreviation OOP stands for:",
        a : "Opted Oriented Protocol",
        b : "Operated Outstanding Protocols",
        c : "Operating Object Programs",
        d : "Object Oriented Programming",
        correct : "d"
    },

    {
        question : "What is the use of the Push method in JavaScript?",
        a : "To add or append one or more elements to an Array end.",
        b : "To remove an item from a list in Array",
        b : "To push unwanted items out of an Array list",
        c : "To push an item at the beginning of an Array list",
        correct : "a"
    },

    {
        question : "Which company developed Javascript language?",
        a : "Microsoft",
        b : "Google",
        c : "Netscape",
        d : "Gostlin Co ltd",
        correct : "c"
    },

    {
        question : "Is Javascript sensitive?",
        a : "Yes",
        b : "No",
        c : "Maybe", 
        d : "I dont know ",
        correct : "a"

    },
    {
        question : "Which of the following is a Js framework?",
        a : "Flask",
        b : "Django",
        c : "React", 
        d : "Angular native ",
        correct : "c"

    },
];

const quiz = document.getElementById('quiz');
const choicesEls = document.querySelectorAll('.choices');
const questionEls = document.getElementById('question');
const a_data = document.getElementById('a_data');
const b_data = document.getElementById('b_data');
const c_data = document.getElementById('c_data');
const d_data = document.getElementById('d_data');
const submitBtn = document.getElementById('myBtn');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectChoices();

    const currentQuizData = questionArr[currentQuiz];

    questionEls.innerText = currentQuizData.question;
    a_data.innerText = currentQuizData.a;
    b_data.innerText = currentQuizData.b;
    c_data.innerText = currentQuizData.c;
    d_data.innerText = currentQuizData.d;
};

function deselectChoices() {
    choicesEls.forEach(choicesEl => choicesEl.checked = false);
};

function getSelected() {
    let choice;
    choicesEls.forEach(choicesEls => {
        if (choicesEls.checked) {
            choice = choicesEls.id;
        }
    });
    return choice;
};

submitBtn.addEventListener('click', () => {
    const choice = getSelected();
    if (choice) {
        if (choice === questionArr[currentQuiz].correct) {
            score++;
        };

        currentQuiz++;

        if (currentQuiz < questionArr.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
            <h1 style="text-align: center">You scored ${score}/${questionArr.length}</h1>
            <button onclick = "location.reload()" class="next_btn">Reload</button>
            `
        }
    }
});