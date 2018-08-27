//!!!!!!!!!!!!!!!!!!!Global variables!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//global variables 
var time = 60;
var correct = 0;
var incorrect = 0;
var intervalId;

//array of objects with multipe key value pairs plus correct answer and radio button click indicator
var questions = [
    {
        question: "What year was Utah acquired by the US?",
        answers: ["1841", '1848', '1860'],
        correctAnswer: "1848",
        clicked: false
    },
    {
        question: "What year did Utah become a state?",
        answers: ["1861", '1878', '1896'],
        correctAnswer: "1896",
        clicked: false
    },
    {
        question: "What number state was Utah?",
        answers: ["47", '48', '49'],
        correctAnswer: "48",
        clicked: false
    },
    {
        question: "How many years did it take to complete the Mormon temple?",
        answers: ["40", '50', '75', "100"],
        correctAnswer: '40',
        clicked: false
    },
    {
        question: "What percent of Utah does the Federal Government own?",
        answers: ["45%", "55%", "65%"],
        correctAnswer: "true",
        clicked: false
    },
    {
        question: "What is the state animal?",
        answers: ["Bighorn Sheep", "Moose", "Rocky Mountain Elk"],
        correctAnswer: "Rocky Mountain Elk",
        clicked: false
    },
    {
        question: "The Wasatch mountain range is named after a Ute Indian name meaning what?",
        answers: ["low place in high mountain", "mountain of much water", "mountain near salt water"],
        correctAnswer: "low place in high mountain",
        clicked: false
    },
    {
        question: "Ute means what?",
        answers: ["people above the salt water", "people of the mountains", "people of the sky"],
        correctAnswer: "people of the mountains",
        clicked: false
    },
    {
        question: "Salt Lake City was originally named Great Salt Lake City. What year was Great was dropped from the name?",
        answers: ["1868", "1901", "1922"],
        correctAnswer: "1868",
        clicked: false
    },
    {
        question: "The Wasatch mountain range is named after a Ute Indian name meaning what?",
        answers: ["low place in high mountain", "mountain of much water", "mountain near salt water"],
        correctAnswer: "low place in high mountain",
        clicked: false
    },
    {
        question: "What is the average snowfall in the mountains near Salt Lake City",
        answers: ["500", "300", "400"],
        correctAnswer: "500",
        clicked: false
    }
];
var unanswered = questions.length;

//when class of .btn is clicked, execute run()
$(".btn").on("click", run);

$("#start-button").on("click", function () {
    $("#start-button").hide();
});

//run() clears timer, sets setInterval to call countdown() every 1000 milliseconds
function run() {
    //prevents multiple clocks from running
    clearInterval(intervalId);
    intervalId = setInterval(countdown, 1000);
    //populates DOM with questions and answers from questions array above
    //$("#question-area").css({background : 'url(./assets/images/utah_outline.jpg)  no-repeat center 60%'});
    $("#question-area").css("background-image", "url('./assets/images/utah_outline.jpg')");
    addQuestionAnswer(questions);
    //adds a break between questions and done button
    $("#question-area").append("<br>");
    //adds done button 
    addDoneButton();
};


//iterates through questions array above and dynamically adds them to page using jQuery.  Some critical keys are adding unique names for each group of options for answers, and adding values= text
function addQuestionAnswer(questions) {
    $("p").hide();
    var i;
    for (i = 0; i < questions.length; i++) {

        //adds questions from questions array above
        $("#question-area").append("<h2>" + questions[i].question + "</h2>");

        //adds radio button answers from positions 0,1,2 in questions array above
        $("#question-area").append("<input class='answer' id='" + questions[i].answers[0] + "' type='radio' name='question-" + i + "' data-questionNumber=" + i + " value='" + questions[i].answers[0] + "'>" + questions[i].answers[0]);
        $("#question-area").append("<input class='answer' id='" + questions[i].answers[1] + "' type='radio' name='question-" + i + "' data-questionNumber=" + i + " value='" + questions[i].answers[1] + "'>" + questions[i].answers[1]);
        $("#question-area").append("<input class='answer' id='" + questions[i].answers[2] + "' type='radio' name='question-" + i + "' data-questionNumber=" + i + " value='" + questions[i].answers[2] + "'>" + questions[i].answers[2]);
    }

};

//if document is clicked on an area with class= answer, run function to gather value(index in answer array) of radio button(string), set to a number, and compare to correct answer if element is unclicked.  if already clicked, it will return to the program without analyzing additional clicks 
$(document).on("click", ".answer", function () {
    var val = $(this).val();
    var questionNum = $(this).attr("data-questionNumber");
    questionNum = parseInt(questionNum);
    if (questions[questionNum].clicked === false) {
        console.log(val, questions[questionNum].correctAnswer);

        if (val === questions[questionNum].correctAnswer) {
            correct++;

        } else {
            incorrect++;
        }
        //switches clicked value to true 
        unanswered--;
        questions[questionNum].clicked = true;
    }
    else {
        return;
    }
});

//listens for clicks on done button.  if done button clicked, clears html container and adds correct and incorrect values
$(document).on("click", ".done-button", function () {
    stop();
    $(".container").empty();
    $(".container-results").css({ background: 'url(./assets/images/utah_outline.jpg)  no-repeat center' });
    var results = $("<div>");
    var breakDiv = $("<br>");
    results.addClass("results");
    $(".container-results").html("<h2>You're Fast!</h2>");
    //$(".container-results").append(breakDiv);
    $(".container-results").append("correct:" + correct + "<br>");
    //$(".container-results").append(breakDiv);
    $(".container-results").append("incorrect:" + incorrect + "<br>");
    //$(".container-results").append(breakDiv);
    $(".container-results").append("unanswered:" + unanswered + "<br>");
    $(".container-results").append("<br>");
    if (correct < 5) {
        $(".container-results").append("LOTS WRONG ANSWERS.<br>");
        $(".container-results").append("YOU DON'T LOVE UTAH. GET OUT!");
    }
    if (correct > 5) {
        $(".container-results").append("YOU GOT HALF OR MORE CORRECT.<br>");
        $(".container-results").append("I GUESS YOU CAN STAY.");
    }
})

//The countdown function.
function countdown() {

    //Decrease time by one.
    time--;

    var timerDiv = $("<div>");
    timerDiv.addClass("timer-area");

    //Show the number in the #timer-area tag.
    timerDiv.text("Time:" + time);
    $("#timer-holder").html(timerDiv);




    //Once time hits zero, empty html container adds a "times up" line, and adds correct and incorrect values
    if (time === 0) {

        //run the stop function.
        stop();
        $(".container").empty();
        $(".container-results").css({ background: 'url(./assets/images/utah_outline.jpg)  no-repeat center' });
        var results = $("<div>");
        var breakDiv = $("<br>");
        results.addClass("results");
        $(".container-results").html("<h2>Time's Up!</h2>");
        //$(".container-results").append(breakDiv);
        $(".container-results").append("correct:" + correct + "<br>");
        //$(".container-results").append(breakDiv);
        $(".container-results").append("incorrect:" + incorrect + "<br>");
        //$(".container-results").append(breakDiv);
        $(".container-results").append("unanswered:" + unanswered);
    }
};

//clear intervalID 
function stop() {
    clearInterval(intervalId);
};

//add done button to #question area on html 
function addDoneButton() {
    var doneDiv = $("<button>");
    doneDiv.addClass("done-button btn btn-primary btn-lg");
    doneDiv.text("DONE!");
    $("#question-area").append(doneDiv);
};