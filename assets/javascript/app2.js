//!!!!!!!!!!!!!!!!!!!Global variables!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//global variables 
var time = 10;
//var answers = [];
var correct = 0;
var incorrect = 0;
var intervalId;

//array of objects with multipe key value pairs plus correct answer and radio button click indicator
var questions = [
    {
        question:"who?",
        answers:["me", 'you', 'him'],
        correctAnswer:'me',
        clicked: false
    },
    {
        question:"what?",
        answers:["sea turtle", 'whale', 'dolphin'],
        correctAnswer:'dolphin',
        clicked: false
    },
    {
        question:"where?",
        answers:["hawaii", "oregon", "greece"],
        correctAnswer:"hawaii",
        clicked: false
    },
    {
        question:"when?",
        answers:["last week", "yesterday", "last year"],
        correctAnswer:"last week",
        clicked: false
    },
    {
        question: "how?",
        answers: ["flew", "boat", "car"],
        correctAnswer:"flew",
        clicked: false
    }
];


//when class of .btn is clicked, execute run()
$(".btn").on("click", run);

//run() clears timer, sets setInterval to call countdown() every 1000 milliseconds
function run() {
    clearInterval(intervalId);
    intervalId = setInterval(countdown, 1000);

    //populates DOM with questions and answers from questions array above
    addQuestionAnswer(questions);
};


//iterates through questions array above and dynamically adds them to page using jQuery.  Some critical keys are adding unique names for each group of options for answers, and adding values= text
function addQuestionAnswer(questions) {
    var i;
    for (i=0; i<questions.length; i++){
        
        //adds questions from questions array above
        $("#question-area").append("<h2>" + questions[i].question + "</h2>");  
        
        //adds answers from positions 0,1,2 in questions array above
        $("#question-area").append("<input class='answer' id='" + questions[i].answers[0] + "' type='radio' name='question-"+ i +"' data-questionNumber=" + i + " value='" + questions[i].answers[0] + "'>" + questions[i].answers[0]);
        $("#question-area").append("<input class='answer' id='" + questions[i].answers[1] + "' type='radio' name='question-"+ i +"' data-questionNumber=" + i + " value='" + questions[i].answers[1] + "'>" + questions[i].answers[1]);
        $("#question-area").append("<input class='answer' id='" + questions[i].answers[2] + "' type='radio' name='question-"+ i +"' data-questionNumber=" + i + " value='" + questions[i].answers[2] + "'>" + questions[i].answers[2]);
    }          
};

//if document is clicked on an area with class= answer, run function to gather value(index in answer array) of radio button(string), set to a number, and compare to correct answer if element is unclicked.  if already clicked, it will return to the program without analyzing additional clicks 
$(document).on("click", ".answer", function(){
    var val = $(this).val();
    var questionNum = $(this).attr("data-questionNumber");
    questionNum = parseInt(questionNum);
    if(questions[questionNum].clicked === false){
        console.log(this);
        console.log(val, questions[questionNum].correctAnswer)
        
        if (val === questions[questionNum].correctAnswer) {
            correct++;
            
        } else {
            incorrect++;
            
        }
        questions[questionNum].clicked = true;
    } else {
        return;
    }
});

// var radios = document.getElementsByName('question-0');
// console.log(radios);
// for (var i = 0, length = radios.length; i < length; i++) {
//     if (radio[i].checked)
    
//  {
//   // do whatever you want with the checked radio
// //   alert(NodeList[i].value);

//   // only one radio can be logically checked, don't check the rest
//   break;
//  }
// }


//     if ("value" != z[i][3]) {
// alert('wrong');
//     }


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
        alert("correct:" + correct);
        alert("incorrect:" + incorrect);
        
    }
}

function stop() {
    clearInterval(intervalId);
};