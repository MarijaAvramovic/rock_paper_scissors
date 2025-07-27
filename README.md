# rock_paper_scissors

## Odin Project: Rock Paper Scissors
Foundations Course
 
For this project, I will create the game Rock Paper Scissors. This game will be played entirely in the console.

I'll create the GUI in a later phase. 
I will be using commit  early and offten.

### Problem solving approach

Plan or pseudocode solution :
- 
- 
- 
- 

Once pseudocode is complete I will write the code.

 

 I will be using an external JavaScript file.
## First phase 

I will not write additional code in the HTML file. This game will be played entirely via the console.

1. I will write the logic to get the computer choice
My game will be played against the computer. I will write a function that randomly returns “rock”, “paper” or “scissors”.

I will need a new function named (**getComputerChoice**)

I will write the code so that getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.

The Math.random method returns a random number that’s greater than or equal to 0 and less than 1. The method will be multiplied by 100. 
I will be testing that the function returns expected using console.log or the browser developer tools before advancing to the next step.

2. I will need logic to get the users(2nd player) choice
I will need to write a function that takes the user choice and returns it (**named getHumanChoice**) 

I will write the code so that getHumanChoice will return one of the valid choices depending on what the user inputs.
In this function instead of random method I will be using the prompt method to get the user’s input.
It wont include reprompting if the user enters an invalid input. For now, just assuming the user will always enter a valid choice.
Function tested what it rerurns by using console.log.

3. Declaring the players score variables
The game will keep track of the players score. I 

Create two new variables named (**humanScore and computerScore**) in the global scope.
Initializing those variables with the value of 0.

4.  The logic to play a single round
The game will be played round by round. I will write a function that takes the human and computer player choices as arguments, 
- plays a single round, 
- increments the round winner’s score and 
- logs a winner announcement.

Creating a new function named (**playRound**)
With two parameters for playRound: humanChoice and computerChoice. Use these two parameters to take the human and computer choices as arguments.
(*Make your function’s humanChoice parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.*)

1. Write the code for your playRound function to (**console.log a string value**) representing the round winner, such as: “You lose! Paper beats Rock”.
2. Increment the humanScore or computerScore variable based on the round winner.

 
5.  Code to play the entire game
The game will play 5 rounds. You will write a function named (**playGame**) that 
1. calls playRound to play 5 rounds, 
2. keeps track of the scores and 
3. declares a winner at the end.

Once I create a new function named playGame.
I will Move the playRound function and score variables so that they’re declared inside of the new playGame function

The game will Play 5 rounds by calling playRound 5 times.

I am making interactive project without features or user experience, design and styling of the website.

 