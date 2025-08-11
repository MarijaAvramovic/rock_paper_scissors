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

Practice brancing, 

Dropdown menu of branches on GitHub
 
In my UI, the player should be able to play the game by clicking on buttons rather than typing their answer in a prompt.
I will remove the logic that plays exactly five rounds.

### pseudo
add score 
add buttons fixed in html

on click add new p 
if score is 5 in global scope alert msg who is the winner

Create three buttons, one for each selection. Add an event listener to the buttons that call the playRound function with the correct playerSelection every time a button is clicked.

On click I should have stored button selected as human choice, called computer choice and store it and play round which will add p/div showing human and computer choice and msg who is better after that change score reflected on the top of the page. If button is clicked again will do the same. 

Add a div for displaying results and change all of your console.logs into DOM methods.

Display the running score, and 

After one player reach 5 announce a winner of the game.

I will likely have to refactor (rework/rewrite) your original code to make it work for this. That’s OK! Reworking old code is an important part of a programmer’s life.
Once i'm all done with your UI and made sure everything’s satisfactory, ensure all of my changes are committed to the rps-ui branch with git status before continuing.
then merge the changes from my rps-ui branch back to our main branch.
Checkout the branch we want to merge INTO i.e. main with the command git checkout main.
Now let’s merge our rps-ui branch into main, our current branch, with git merge rps-ui.
If everything goes fine, our rps-ui branch is now successfully merged with main! Use git log and you’ll see all the commits you’ve made to your feature branch on top of the commits you made to the main branch. Now for our final step!
Let’s push our main branch into our remote repo by running git push origin main . Go to your GitHub repo and you’ll see that our main branch will have all the changes and commits you made to the rps-ui branch. Congratulations! You’ve successfully pushed your first feature into your production branch!
Now that we have all our code in the main branch, we don’t really need our rps-ui branch anymore. Let’s do some cleanup, both locally and in the remote repo. Delete the branch from our local repo with git branch -d rps-ui and also delete it from the remote repo on GitHub with git push origin --delete rps-ui. Congrats, we’re all done with our cleanup!
Make sure to publish the project on GitHub Pages and add a live preview link in the project lesson.



 