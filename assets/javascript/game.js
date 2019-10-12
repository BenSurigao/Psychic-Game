var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
   
            var wins = 0;
            var losses = 0;
            var totalGuess = 9;
            var choices = [];
   
            document.onkeyup = function(event) {
   
                var playerGuess = event.key;
   
                var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
   
                var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
                
   
               if (letters.indexOf(playerGuess) > -1) {
   
                   if (playerGuess === computerGuess) {
                       wins++;
                    totalGuess = 9;
                       choices = [];
                   }
   
                   if (playerGuess != computerGuess) {
                    totalGuess --;
                       choices.push(playerGuess);
                   }
   
                   if (totalGuess === 0) {
   
                totalGuess = 9;
                   losses ++;
                   choices = [];
   
                   
               }
   
               var html = 
               "<h1> The Psychic Game </h1>" +
               "<p>Guess what letter I'm thinking of</p>" +
               "<p>Wins: " + wins + "</p>" +
               "<p>Losses: " + losses + "</p>" +
               "<p>totalGuess Left: " + totalGuess + "</p>" +
               "<p>Your totalGuess so far: " + choices.join(", ") + "</p>";
   
               document.querySelector("#psychic-game").innerHTML = html;
   
               
               }
           };
   
