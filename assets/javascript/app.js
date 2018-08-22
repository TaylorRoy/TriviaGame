//!!!!!!!!!!!!!!!!!!!Global variables!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

var time = 10;
var correct = 0;
var incorrect = 0;
var intervalId;
var innerAnswer = [];


var questionArray = ["who ?", "what?", "where?", "when?", "how?"];
var answerArray = [["me", "you", "him"], ["sea turtle", "whale", "dolphin"], ["hawaii", "oregon", "greece"], ["last week", "yesterday", "last year"], ["flew", "boat", "car"]];

$(".btn").on("click", run);

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(countdown, 1000);
    addQuestionAnswer(questionArray, answerArray);
}

function addQuestionAnswer(x, z) {
    for (var i = 0; i < x.length; i++) {
        var questionAnswerContainer = $("<div>");
        var question = $("<div>" + x[i] + "</div>");
        innerAnswer = z[i];
        console.log(innerAnswer);
        console.log(innerAnswer[0]);
        var answer1 = $('<input type="radio" name="rbtnCount">' + innerAnswer[0] + '</input>');
        var answer2 = $('<input type="radio" name="rbtnCount">' + innerAnswer[1] + '</input>');
        var answer3 = $('<input type="radio" name="rbtnCount">' + innerAnswer[2] + '</input>');
        question.addClass("question");
        answer1.addClass("answer");
        answer2.addClass("answer");
        answer3.addClass("answer");
        $("#question-area").append(question);
        $("#answer-area").append(answer1, answer2, answer3);
    }
};

//'<input type="radio" name="rbtnCount">' + z[i] + '</input>'


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

