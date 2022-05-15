let questionArr = [
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

    }
];

let quizSect = document.getElementById('quiz_sect');
let questionSelect = document.getElementById('question');
let a_data = document.getElementById('a_data');
let b_data = document.getElementById('b_data');
let c_data = document.getElementById('c_data');
let d_data = document.getElementById('d_data');
let achieved = document.getElementById('score_count');
let next_btn = document.querySelectorAll('.next');



function showQuiz(){
    for (var i = 0; i > questionArr.length; i++) {
         
    }
    questionSelect.innerHTML = 'Q.'+ (i+1) + ' ' + questionArr[i].question;
    a_data.innerHTML = questionArr[i].a;
    b_data.innerHTML = questionArr[i].b;
    c_data.innerHTML = questionArr[i].c;
    d_data.innerHTML = questionArr[i].d;
    score_count.innerHTML =  'Quiz' + " " + (i+1) + " " + "of" + " " + questionArr.length;
}

showQuiz()

// score calculator

function scoreCalc (){
    if (input.innerHTML === questionArr[i].correct && score_count < questionArr.length) {
        score = score++;
    }
    else {
        setTimeout(nextQuiz, 300)
    }
} 

//function for next Quiz

function nextQuiz(){
    if (q < questionArr-1) {

        i = q + 1;
        displayQuiz();
    } else {
        points.innerHTML = score + '/' + questionArr.length;
    }
}

//this function will activate button click event
next.addEventListener('click', nextQuiz)


function displayQuiz(){

}
   