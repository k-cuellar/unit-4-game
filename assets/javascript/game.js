
$(document).ready(function() {
    //creates variables for wins, losses, player score
    var wins = 0;
    var losses = 0;
    var userScore = 0;

    //display wins and losses in html
    $("#wins").text(wins);
    $("#losses").text(losses);
    $("#userScore").text(userScore);

    //random number generator + display randomNumber
    var randomNumber = Math.floor(Math.random() * 101) + 19;
    $("#randomNumber").text(randomNumber);

    //generate random number for each of the crystals
    var number1 = Math.floor(Math.random() * 12) + 1;
    var number2 = Math.floor(Math.random() * 12) + 1;
    var number3 = Math.floor(Math.random() * 12) + 1;
    var number4 = Math.floor(Math.random() * 12) + 1;

    //function to reset game
    function reset(){
        //generate new random number, assign it to randomNumber span in html
        randomNumber = Math.floor(Math.random() * 101) + 19;
        $("#randomNumber").text(randomNumber);

        //generate new random numbers for each of the crystals
        number1 = Math.floor(Math.random() * 12) + 1;
        number2 = Math.floor(Math.random() * 12) + 1;
        number3 = Math.floor(Math.random() * 12) + 1;
        number4 = Math.floor(Math.random() * 12) + 1;

        //reset user score to 0 and display in userScore span in html
        userScore = 0;
        $("#userScore").text(userScore);
    }

    //function to call when user wins
    //alerts user win, increments wins by 1, runs reset function
    function userWin() {
        alert("You win!");
        wins++;
        $("#wins").text(wins);
        reset();
    }

    //function to call when user loses
    //alerts user loss, increments losses by 1, runs reset function
    function userLoss() {
        alert("You lose!");
        losses++;
        $("#losses").text(losses);
        reset();
    }

    //click function for blue crystal    
    $("#blue").click(function() {
        //resets value of var userScore to userScore + random number 1
        userScore = userScore + number1;
        //displays new userScore in user score area
        $("#userScore").text(userScore);

        //if user score exactly equals computer's random number, run userWin function
        if (userScore === randomNumber){
            userWin();
        }
        //if user score is greater than computer's random number, run userLoss function
        else if (userScore > randomNumber){
            userLoss();
        }
    })

    //click function for yellow crystal
    // all the same code for crystal functions but adding "number2"
    $("#yellow").click(function() {
        userScore = userScore + number2;
        $("#userScore").text(userScore);

        if (userScore === randomNumber) {
            userWin();
        }
        else if (userScore > randomNumber) {
            userLoss();
        }
    })

    //click function for purple crystal
    //all the same code for crystal functions but adding "number3" 
    $("#purple").click(function() {
        userScore = userScore + number3;
        $("#userScore").text(userScore);

        if (userScore === randomNumber) {
            userWin();
        }
        else if (userScore > randomNumber) {
            userLoss();
        }
    })

    //click function for red crystal
    //all the same code for crystal functions but adding "number4"
    $("#red").click(function() {
        userScore = userScore + number4;
        $("#userScore").text(userScore);

        if (userScore === randomNumber) {
            userWin();
        }
        else if (userScore > randomNumber) {
            userLoss();
        }
    })


})

