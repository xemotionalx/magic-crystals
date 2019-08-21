/* * There will be four crystals displayed as buttons on the page.

   * The player will be shown a random number at the start of the game.

   * When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 

     * Your game will hide this amount until the player clicks a crystal.
     * When they do click one, update the player's score counter.

   * The player wins if their total score matches the random number from the beginning of the game.

   * The player loses if their score goes above the random number.

   * The game restarts whenever the player wins or loses.

     * When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

   * The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.
   */

$(document).ready(function () {

    var game = {
        //initialize:
        score: 0,
        wins: 0,
        losses: 0,
        magicNumber: Math.floor(Math.random() * 120 + 19),
        crystalNumbers: [],

        //generate 4 random numbers btwn 1-12, push to crystalNumbers array, //update each crystal-# with random number
        randomNumber1to12: function () {
            for (i = 0; i < 4; i++) {
                randomNumber = Math.floor(Math.random() * 12 + 1);
                this.crystalNumbers.push(randomNumber);
            }
        },
       
    };

    //Text - wins & losses
    $("#wins").text("Wins:" + game.wins);
    $("#losses").text("Losses:" + game.losses);

    //update #magic-number text with random number
    $('#magic-number').text(game.magicNumber);

    //start game
    init();
    console.log(game.crystalNumbers);

    //onlick of any crystal, add corresponding number from the crystal array to the score, update score

    //crystal 0
    $("#crystal-0").on("click", function () {
        game.score += game.crystalNumbers[0];
    
        if (game.score === game.magicNumber) {
            ++game.wins;
            $("#wins").text("Wins:" + game.wins);
        } else if (game.score > game.magicNumber) {
            ++game.losses
            $("#losses").text("Losses:" + game.losses);
            init();
        }

        $("#score").text(game.score);
    });

    //crystal 1
    $("#crystal-1").on("click", function () {
        game.score += game.crystalNumbers[1];

        if (game.score === game.magicNumber) {
            ++game.wins;
            $("#wins").text("Wins:" + game.wins);
        } else if (game.score > game.magicNumber) {
            ++game.losses
            $("#losses").text("Losses:" + game.losses);
            init();
        };

        $("#score").text(game.score);
    });

    //crystal 2
    $("#crystal-2").on("click", function () {
        game.score += game.crystalNumbers[2];

        if (game.score === game.magicNumber) {
            ++game.wins;
            $("#wins").text("Wins:" + game.wins);
        } else if (game.score > game.magicNumber) {
            ++game.losses
            $("#losses").text("Losses:" + game.losses);
            init();
        };

        $("#score").text(game.score);
    });

    //crystal 3
    $("#crystal-3").on("click", function () {
        game.score += game.crystalNumbers[3];

        if (game.score === game.magicNumber) {
            ++game.wins;
            init();
            $("#wins").text("Wins:" + game.wins);
        } else if (game.score > game.magicNumber) {
            ++game.losses
            init();
            $("#losses").text("Losses:" + game.losses);
        };

        $("#score").text(game.score);
    });


    function init() {
        game.score = 0;
        game.crystalNumbers = [];
        game.randomNumber1to12();
};


});
