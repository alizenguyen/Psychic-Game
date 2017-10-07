
	var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

	var wins = 0;
	var losses = 0;
	var guessesLeft = 10;
	var wrongGuesses = [];

	document.onkeyup = function(event) {

		// Sets the music
	      var audioElement = document.createElement("audio");
	      audioElement.setAttribute("src", "assets/mood.mp3");

	      // Theme Button
	      $(".setMood").on("click", function() {
	        audioElement.play();
	      });

	      $(".killMood").on("click", function() {
	        audioElement.pause();
	      });

		//determines which key was pressed.
		var userGuess = event.key;
		// randomly chooses a choice from the options array. This is the Computer's guess.
		function computerGuess(computerChoices) {
			 return computerChoices[Math.floor(Math.random() * computerChoices.length)];
		}

		//Pushes userGuess to wongGuesses array.
		var addGuess = function() {
		wrongGuesses.push(
			userGuess
			)
		};	

		//Resets the game.
		var resetGame = function() {
				guessesLeft = 10;
				wrongGuesses = [];
				computerGuess();
		};

		//Determines winning and losing and what happens
		if (userGuess === computerGuess) {
			alert("You got it! You're out of this world!")
			wins++;
			resetGame(); 
		} else {
			guessesLeft--;
			addGuess();
			if (guessesLeft === 0) {
				alert("Disappointing. Prove me wrong.");
				losses++;
				resetGame();
			}
		};

		//Incorporating HTML
		var html =
          "<p>Wins: " + wins + "</p>" +
          "<p>Losses: " + losses + "</p>" +
          "<p>Guesses Left: " + guessesLeft + "</p>" +
          "<p>Your guesses so far: " + wrongGuesses + "</p>";

        document.querySelector("#game").innerHTML = html;

	}


//PSUEDOCODE 
// User guesses a letter
// App chooses a letter
// Compares if the letter is the same or not
// If right, "Win:"" goes up by one and starts the game over (no page refresh)
// If wrong, "Losses:" goes up by one and add letter to "Your Guesses So Far" and reduce guess so far by one

//RESTARTING GAME
//guessLeft to restart at 10
//reset computer guess
//reset wrongGuesses

