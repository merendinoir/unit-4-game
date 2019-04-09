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
    currentScore = 0;

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

    //Chnage current score
    currentScore = currentScore + crystal.value;

    //change html
    $("#yourScore").html(currentScore);

    //Call the changeWin fxn
    checkWin();

    //testing
    console.log("Your Score: " + currentScore);
}

//Check if user won or lost - reset game
var checkWin = function() {

    if (currentScore > targetScore) {
        alert("Sorry, you lost!");
        console.log("go cry in a corner");

        //Add to loss count
        lossCount++;

        //change loss html
        $("#lossCount").html(lossCount);
        
        //Restart the game
        startGame();
    }

    else if (currentScore == targetScore) {
        alert("Congratulations!! You won!");
        console.log("Winner winner chicken dinner");
        
        //Add to win count
        winCount++;

        $("#winCount").html(winCount);

        //Restart the game
        startGame();
    }

}


//Main Process
//=====================================================================
startGame();

$("#red").on("click", function() {
    addValue(crystal.red);
});

$("#green").on("click", function() {
    addValue(crystal.green);
});

$("#blue").on("click", function() {
    addValue(crystal.blue);
});

$("#purple").on("click", function() {
    addValue(crystal.purple);
});