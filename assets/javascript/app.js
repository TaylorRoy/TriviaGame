//!!!!!!!!!!!!!!!!!!!Global variables!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//organize as 
//question= string
//answers = []
//correct answer= sting

var time = 10;
var correct = 0;
var incorrect = 0;
var intervalId;



var questionArray = ["who?", "what?", "where?", "when?", "how?"];

//who answers
var answerArray1 = ["me", "you", "him"];

//what answers
var answerArray2 = ["sea turtle", "whale", "dolphin"];

var answerArray3 = ["hawaii", "oregon", "greece"];

var answerArray4 = ["last week", "yesterday", "last year"];

var answerArray5 = ["flew", "boat", "car"];

$(".btn").on("click", run);

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(countdown, 1000);
    addQuestion(questionArray);
    addAnswer(answerArray1);
}

function addQuestion(x) {
    for (var i = 0; i < x.length; i++) {
        var question = $("<div>" + x[i] + "</div>");
        question.addClass("question");
        $("#question-area").append(question);    
    }
};

function addAnswer(z) {
    for (var i = 0; i < z.length; i++) {
        var answer = $('<input type="radio" name="rbtnCount">' + z[i] + '</input>');
        answer.addClass("answer");
        $("#answer-area").append(answer);
    }
};

//  The countdown function.

function countdown() {

    //  Decrease number by one.
    time--;

    //  Show the number in the #timer-area tag.
    $("#timer-area").html("<h2>" + time + "</h2>");

    //if time-0 run stop()
    if (time === 0) {

        //calls stop()
        stop();

        //Alert the user that time is up.
        alert("Time Up!");
    }
}

function stop() {
    clearInterval(intervalId);
}

