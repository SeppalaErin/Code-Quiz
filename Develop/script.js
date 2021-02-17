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
    ansC: "A data type used to represent text rather than numbers.",
    ansD: "The action of doing something over and over again.",
    value: "a"
}

var question3 = {
    qText: "What is a Loop?",
    ansA: "Finding and fixing errors in programs.",
    ansB: "A data type used to represent text rather than numbers.",
    ansC: "Another term for coding languages.",
    ansD: "The action of doing something over and over again.",
    value: "d"
}

var question4 = {
    qText: "What is a String?",
    ansA: "A thread of cloth.",
    ansB: "A data type used to represent text rather than numbers.",
    ansC: "The action of doing something over and over again.",
    ansD: "A piece of code that you can easily call over and over again.",
    value: "b"
}

var question5 = {
    qText: "What is referred to as a 'bug' in coding?",
    ansA: "An insect.",
    ansB: "The action of doing something over and over again.",
    ansC: "An error in a program.",
    ansD: "A piece of code that you can easily call over and over again.",
    value: "c"
}

var question6 = {
    qText: "What is Debugging?",
    ansA: "Finding and fixing errors in programs.",
    ansB: "Fun",
    ansC: "Calling an exterminator.",
    ansD: "One or more commands designed to be carried out by a computer.",
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
    qText: "Is the following true or false? (6 < '8')",
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

// When start button is pressed, start quiz and timer
// When Quiz starts, the user is prompted 10 questions
// When the user answers a question, the next question is prompted. If the answer was wrong, deduct 10 seconds from timer
// After 10 questions have been answered or if the timer ran out, end the quiz
// When the Quiz ends, prompt the user to save their initials with their score and is saved to local highscores
// After highscore prompt, return to main screen

var q = 0;
var rightAnswer;
var tval;
var count;
var initials;

// Functions
function gameStart(){
    //main runtime function
    loadGame();
    q = 0;
    rightAnswer = null;
    getQuestion(q);
    timer();

}

function timer(){
    count = 90;
    $("#timer-text").text(count);
    tval = setInterval(function(){
        if (count > 0){
            count--;
            $("#timer-text").text(count);
            $("timer-text").attr("color", "black");
        }
        else {
            clearInterval(tval);
            timeOut();
        }
    }, 1000);

}

function getQuestion(i){
    var currentQ = questionList[i];
    $("#question-text").text(currentQ.qText);
    $("#a-text").text(currentQ.ansA);
    $("#b-text").text(currentQ.ansB);
    $("#c-text").text(currentQ.ansC);
    $("#d-text").text(currentQ.ansD);
    rightAnswer = currentQ.value;
    // reactivates buttons that were disabled last question
    $("#a-button").removeAttr("disabled");
    $("#b-button").removeAttr("disabled");
    $("#c-button").removeAttr("disabled");
    $("#d-button").removeAttr("disabled");
}

function checkAnswer(){
    let userAnswer = $(this).attr("value");
    if (userAnswer === rightAnswer){
        q++;
        getQuestion(q);
    }
    else {
        console.log("else");
        count -= 10;
        $(this).attr("disabled", "true");
        if (count < 0){
            count = 0;
        }
        $("#timer-text").text(count);
        $("timer-text").attr("color", "red");
    }
}

function loadGame(){
    //styles page for the quiz
    clearRows();

    $("#row1").html("<div class = \"col-sm-2\" id=\"col12\"><div class=\"card text-white bg-dark mb-3 text-center\"><div class=\"card-body\"><h6 class=\"card-title\">Time Left</h6><p class=\"card-text\" id=\"timer-text\"></p></div></div></div><div class =\"col-sm-8\" id=\"col11\"><div class=\"card text-white bg-dark mb-3 text-center\"><div class=\"card-body\"><h4 class=\"card-title\" id=\"question-title\">Question</h4><i><p class=\"card-text\" id=\"question-text\"></p></i></div></div></div><div class = \"col-sm-2\" id=\"col12\"><div class=\"card text-white bg-dark mb-3 text-center\"><div class=\"card-body\"><h6 class=\"card-title\">Score</h6><p class=\"card-text\" id=\"score-text\"></p></div></div></div>");

    $("#row2").html("<div class=\"col-sm-6\" id=\"col21\"><div class=\"card text-dark bg-light mb-3 text-center\"><div class=\"card-body\"><p class=\"card-text\" id=\"a-text\"></p><button type=\"button\" class=\"btn btn-secondary\" id=\"a-button\" value=\"a\">A</button></div></div></div><div class=\"col-sm-6\" id=\"col22\"><div class=\"card text-dark bg-light mb-3 text-center\"><div class=\"card-body\"><p class=\"card-text\" id=\"b-text\"></p><button type=\"button\" class=\"btn btn-secondary\" id=\"b-button\" value=\"b\">B</button></div></div></div>");

    $("#row3").html("<div class=\"col-sm-6\" id=\"col31\"><div class=\"card text-dark bg-light mb-3 text-center\"><div class=\"card-body\"><p class=\"card-text\" id=\"c-text\"></p><button type=\"button\" class=\"btn btn-secondary\" id=\"c-button\" value=\"c\">C</button></div></div></div><div class=\"col-sm-6\" id=\"col32\"><div class=\"card text-dark bg-light mb-3 text-center\"><div class=\"card-body\"><p class=\"card-text\" id=\"d-text\"></p><button type=\"button\" class=\"btn btn-secondary\" id=\"d-button\" value=\"d\">D</button></div></div></div>");


    $("h1").replaceWith("<h2>Code Quiz</h2>");
}

function quizFinish(){
    //function for when the quiz is finished
    //triggers when 10 questions are answered

}

function timeOut(){
    //styles page for game over
    //triggers when timer hits zero
    clearRows();

    $("#row2").html("<div class =\"col-sm-8 mx-auto\"><div class=\"card text-white bg-dark mb-3 text-center\"><div class=\"card-body\"><h2 class=\"card-title\" id=\"question-title\">Game Over - Timed Out</h2><i><p class=\"card-text\" id=\"question-text\">Would you like to try again?</p></i></div></div></div>");

    $("#row3").html("<div class=\"d-grid gap-2 col-2 mx-auto\"><button type=\"button\" class=\"btn btn-secondary\" id=\"main-menu-button\">Main Menu</button></div>");

    $("h1").replaceWith("<h2>Code Quiz</h2>");
}

function loadHighScore(){
    //styles page to match log_score template
    clearRows();
    
    $("#row1").html("<div class =\"col-sm-8 offset-2\" id=\"col11\"><div class=\"card text-white bg-dark mb-3 text-center\"><div class=\"card-body\"><h4 class=\"card-title\" id=\"highScore-title\">Highscores</h4><i><p class=\"card-text\" id=\"highScore-text\"></p></i></div></div></div>");

    $("#row2").html("<div class=\"col-sm-8 offset-2\" id=\"col21\"><div class=\"card text-dark bg-light mb-3 text-center\"><div class=\"card-body\"><p class=\"card-text\" id=\"highScore-text\"></p></div></div></div>");

    $("#row3").html("<div class=\"d-grid gap-2 col-2 mx-auto\"><button type=\"button\" class=\"btn btn-secondary\" id=\"main-menu-button\">Main Menu</button></div>");

    $("h1").replaceWith("<h2>Code Quiz</h2>");
}

function clearRows(){
    $(".row").empty();
}

//runtime
$("#start-button").on("click", gameStart);
$("#score-button").on("click", loadHighScore);
$(document).on("click", "#main-menu-button", function(){location.reload()});
$(document).on("click", "#a-button", checkAnswer);
$(document).on("click", "#b-button", checkAnswer);
$(document).on("click", "#c-button", checkAnswer);
$(document).on("click", "#d-button", checkAnswer);