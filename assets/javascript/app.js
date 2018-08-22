//!!!!!!!!!!!!!!!!!!!Global variables!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

var time = 10;
var correct = 0;
var incorrect = 0;
var intervalId;

var questionArray = ["who ?", "what?", "where?", "when?", "how?"];
var answerArray = ["me", "sea turtle", "hawaii", "last week", "flew"];

$(".btn").on("click", run);

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(countdown, 1000);
    addQuestionAnswer(questionArray, answerArray);
}

function addQuestionAnswer(x,z) {
    for (var i = 0; i < x.length; i++) {
        var question = $("<div>" + x[i] + "</div>");
        var answer = $("<div>" + z[i] + "</div>");
        question.addClass("question");
        answer.addClass("answer");
        $("#question-area").append(question, answer);
    }
};



//  The countdown function.

function countdown() {


    //  Decrease number by one.
    time--;

    //  Show the number in the #timer-area tag.
    $("#timer-area").html("<h2>" + time + "</h2>");


    //  Once number hits zero...
    if (time === 0) {

        //  ...run the stop function.
        stop();

        //  Alert the user that time is up.
        alert("Time Up!");
    }
}

function stop() {
    clearInterval(intervalId);
}

