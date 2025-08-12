# rock_paper_scissors

## Odin Project: Rock Paper Scissors
Foundations Course
 
For this project, I created the game Rock Paper Scissors.


# First phase of the project
In the first phase this game will be played entirely in the console.

I am making interactive project without features and without user experience, design and styling of the website.

I'll create the GUI in a later phase.
I used git commit early and offten.

#### Time to build: 3hr 15min(from updating readme, adding pseudocode to pushing to github) 

### Problem solving approach

Plan or pseudocode solution :
- The game has 2 players, 1st player is computer
- Computers choice is random logic 3 options 33% chance for each value
- User will type his choice in prompt and we will bring them together
- Paper is winning rock, rock is winning over scissors and scissors winning over paper 
- No winner if choises are the same we need to repeat
- Start from 0 points the winner will get 1 point per round 
- 5th round will check the points for each player and 
declare a winner 

First I understood the task then wrote a pseudocode and after started with code.

I used an external JavaScript file with no elements in html.
This game is played entirely in the console.

1. Logic used to get the computer choice went to playGame function due to game require 5 rounds.
I have a function that randomly returns “rock”, “paper” or “scissors”. 
Named (**getComputerChoice**)
The Math.random method returns a random number that’s greater than or equal to 0 and less than 1. The method will be multiplied by 100 and parseInt.
Testing that the function returns expected using console.log or the browser developer tools before advancing to the next step.

2. Used logic to get the users(2nd player) choice
Created a function that takes the user choice and returns it (**named getHumanChoice**)

In this function instead of random method I used the prompt method to get the user’s input.
its not including reprompting if the user enters an invalid input. For now, just assuming the user will always enter a valid choice.
Function tested what it rerurns by using console.log.

3. Declaring the players score variables
The game will keep track of the players score.

I made and placed on the start/top two new variables named (**humanScore and computerScore**) in the global scope.
Initializing those variables with the value of 0.

4.  #### The logic to play a single round
I have f to  play only 1 round. The function that takes the human and computer player choices as arguments, 
- plays a single round, 
- increments the round winner’s score and 
- logs a winner announcement.

The function named (**playRound**)
With two parameters for playRound: humanChoice and computerChoice. Use these two parameters to take the human and computer choices as arguments.
(*added feature function’s humanChoice parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.*)

 
5.  Code to play the entire game
The game will play 5 rounds.
(**playGame**) function created that 
- calls playRound to play 5 rounds with for (*i*) 
- keeps track of the scores and 
- declares a winner at the end.

Once I created a new function named playGame.
I called the playRound function and score variables so that they’re declared inside of the new playGame function every time with increment by calling playRound 5 times.

## Phase Two Adding UI 

Practicing branching

 
In my UI, the player is able to play the game by clicking on buttons rather than typing their answer in a prompt.
Removed the logic that plays exactly five rounds.

### pseudo
add score 
add buttons fixed in html

on click add new p 
if score is 5 in global scope alert msg who is the winner

I have three buttons, one for each selection. Add an event listener to the buttons that call the playRound function with the correct playerSelection every time a button is clicked. After  5 points blocking the buttons and shpwing reset button.

On click I stored button selected as human choice, called computer choice and store it and play round which will add p/div showing human and computer choice and msg who is better after that change score reflected on the top of the page. If button is clicked again will do the same. 

Add a div for displaying results removed console log for testing

After one player reach 5 announce a winner of the game and reset for new game.

I will likely have to refactor (rework/rewrite) my new  code to make it look nice For now in phase 2 I practiced DOM and its working. 

#### Time to build: 4hr (from updating readme, adding pseudocode to pushing to github phase 2 took longer then 1st) 


 