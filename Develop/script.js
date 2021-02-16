// Variables

var question1 = {
    qText: "What is Code?",
    ansA: "A language used to keep secrets",
    ansB: "a method used in telecommunication to encode text characters as standardized sequences of two different signal durations.",
    ansC: "One or more commands designed to be carried out by a computer.",
    ansD: "None of the above.",
    value: "c"
}

var question2 = {
    qText: "What is a Function?",
    ansA: "A piece of code that you can easily call over and over again.",
    ansB: "A fun vacation.",
    ansC: "",
    ansD: "",
    value: "a"
}

var question3 = {
    qText: "What is a Loop?",
    ansA: "",
    ansB: "",
    ansC: "",
    ansD: "The action of doing something over and over again.",
    value: "d"
}

var question4 = {
    qText: "What is a String?",
    ansA: "A thread of cloth.",
    ansB: "Data values that are made up of ordered sequences of characters",
    ansC: "",
    ansD: "",
    value: "b"
}

var question5 = {
    qText: "What is referred to as a 'bug' in coding?",
    ansA: "An insect.",
    ansB: "",
    ansC: "An error in a program.",
    ansD: "",
    value: "c"
}

var question6 = {
    qText: "What is Debugging?",
    ansA: "Finding and fixing errors in programs.",
    ansB: "",
    ansC: "",
    ansD: "",
    value: "a"
}

var question7 = {
    qText: "Is the following statement true or false? There can only one variable used in a function at a time.",
    ansA: "True",
    ansB: "False",
    ansC: "",
    ansD: "",
    value: "b"
}

var question8 = {
    qText: "Is the following statement true or false? ('6' == 6)",
    ansA: "True",
    ansB: "False",
    ansC: "",
    ansD: "",
    value: "a"
}

var question9 = {
    qText: "Is the following true or false? (6 < '8') ",
    ansA: "True",
    ansB: "False",
    ansC: "",
    ansD: "",
    value: "a"
}

var question10 = {
    qText: "What isn't a coding language?",
    ansA: "Python",
    ansB: "Java",
    ansC: "Javascript",
    ansD: "Chrome",
    value: "d"
}

var questionList = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];

// Functions


// When start button is pressed, start quiz and timer
// When Quiz starts, the user is prompted 4 questions
// When the user answers a question, the next question is prompted. If the answer was wrong, deduct 10 seconds from timer
// After 10 questions have been answered or if the timer ran out, end the quiz
// When the Quiz ends, prompt the user their score and is saved to local highscores
// After highscore prompt, return to main screen