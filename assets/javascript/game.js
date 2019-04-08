// Global Var
//=====================================================================

// Crystals
var crystal = {
    red: {
        name: "red",
        value: 0
    },
    green: {
        name: "green",
        value: 0
    },
    blue: {
        name: "blue",
        value: 0
    },
    purple: {
        name: "purple",
        value: 0
    },
};

//Scores
var currentScore = 0;
var targetScore = 0;

//Wins & Losses
var winCount = 0;
var lossCount = 0;



//Fxns
//=====================================================================
var getRandom = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var startGame = function () {

    //Reset the current score
    var currentScore = 0;

    //Set a new target score
    targetScore = getRandom(19, 120);

    //set diff value for crystals
    crystal.blue.value = getRandom(1, 12);
    crystal.red.value = getRandom(1, 12);
    crystal.green.value = getRandom(1, 12);
    crystal.purple.value = getRandom(1, 12);

    //change the html to reflect all of these changes
    $("#yourScore").html(currentScore);
    $("#targetScore").html(targetScore);
    

    //Testing
    console.log("-----------------------------");
    console.log("Target Score " + targetScore);
    console.log("Red " + crystal.red.value + " | Green: " + crystal.green.value + " | Blue: " + crystal.blue.value + " | Purple: " + crystal.purple.value);
    console.log("-----------------------------");
}

// click fxns for crystal value
var addValue = function (crystal) {

    currentScore = currentScore + crystal.value;

    //testing
    console.log("Your Score: " + currentScore);
}


//Main Process
//=====================================================================
startGame();

$("#red").click(function () {
    addValue(crystal.red);
});

$("#green").click(function () {
    addValue(crystal.green);
});

$("#blue").click(function () {
    addValue(crystal.blue);
});

$("#purple").click(function () {
    addValue(crystal.purple);
});