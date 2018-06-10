
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

    //generate number for each of the crystals
    var number1 = Math.floor(Math.random() * 12) + 1;
    var number2 = Math.floor(Math.random() * 12) + 1;
    var number3 = Math.floor(Math.random() * 12) + 1;
    var number4 = Math.floor(Math.random() * 12) + 1;

    //function to reset game
    function reset(){
        randomNumber = Math.floor(Math.random() * 101) + 19;
        $("#randomNumber").text(randomNumber);

        number1 = Math.floor(Math.random() * 12) + 1;
        number2 = Math.floor(Math.random() * 12) + 1;
        number3 = Math.floor(Math.random() * 12) + 1;
        number4 = Math.floor(Math.random() * 12) + 1;

        userScore = 0;
        $("#userScore").text(userScore);
    }

    function userWin() {
        alert("You win!");
        wins++;
        $("#wins").text(wins);
        reset();
    }

    function userLoss() {
        alert("You lose!");
        losses++;
        $("#losses").text(losses);
        reset();
    }

        
    $("#blue").click(function() {
        userScore = userScore + number1;
        $("#userScore").text(userScore);

        if (userScore === randomNumber){
            userWin();
        }
        else if (userScore > randomNumber){
            userLoss();
        }
    })

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

