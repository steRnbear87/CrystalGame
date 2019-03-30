// GLOBAL VARIABLES

var wins = 0;
var losses = 0;
var randomTarget = 0;
var randomCrystalValue = 0;
var counter = 0;
var gameStarted = false;

// Crystal data
var crystal = {
    red:{
        value:0
    },
    yellow:{
        value:0
    },
    blue: {
        value:0
    },
    green:{
        value:0
    }
}

// FUNCTIONS

// create random number

function randomNumberGen (min, max) {
    return Math.floor(Math.random() * (max - min)+1)+ min;
};

function startgame(){
    crystal.red.value = randomNumberGen(1,12);
    crystal.yellow.value = randomNumberGen(1,12);
    crystal.blue.value = randomNumberGen(1,12);
    crystal.green.value = randomNumberGen(1,12);
    randomTarget = randomNumberGen(19,120);

    $('#random-number').html("<p>Number: " + randomTarget + "</p>")


};



function checkForWin () {
        if(counter === randomTarget){
            wins++;
            $('#random-number').html("<p> You Won! </p>");
            $('#wins').html("<p>Wins:" + wins +  "</p>");

            gameStarted = false;
            counter = 0;
        }

        if(counter > randomTarget){
            losses++;
            $('#random-number').html("<p> You Lost! </p>")
            $('#losses').html("<p>Losses:" + losses +  "</p>");

            gameStarted = false;
            counter = 0;
        }

        $('#current-guess').html("<p>Counter:" + counter +  "</p>");


    }







// LOGIC

$("#crystal-red").on("click", function() {

    if (gameStarted === false){
        startgame();
        gameStarted = true;
        counter += crystal.red.value;
        console.log(counter);
        checkForWin ();

    }

    else {
        counter += crystal.red.value;
        console.log(counter);
        checkForWin (); 
    }

});


$("#crystal-yellow").on("click", function() {

    if (gameStarted === false){
        startgame();
        gameStarted = true;
        counter += crystal.yellow.value;
        console.log(counter);
        checkForWin ();

    }

    else {
        counter += crystal.yellow.value;
        console.log(counter);
        checkForWin (); 
    }

});

$("#crystal-blue").on("click", function() {

    if (gameStarted === false){
        startgame();
        gameStarted = true;
        counter += crystal.blue.value;
        console.log(counter);
        checkForWin ();

    }

    else {
        counter += crystal.blue.value;
        console.log(counter);
        checkForWin (); 
    }

});

$("#crystal-green").on("click", function() {

    if (gameStarted === false){
        startgame();
        gameStarted = true;
        counter += crystal.green.value;
        console.log(counter);
        checkForWin ();

    }

    else {
        counter += crystal.green.value;
        console.log(counter);
        checkForWin (); 
    }

});

