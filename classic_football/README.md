# SEI-Project-1 | Classic Football

file:///Users/user/Desktop/first_projct/classic_football/index.html

Game Description:
GOAL: Move the offensive player past the defenders to the far (right) endzone to accumulate as many touchdowns as possible in the allotted number of turns. Get tackled by a defender and lose that turn.

Game is meant to be played with two players, each taking turns to score more touchdowns than the other! Press any of the three buttons to get started.


Background: 
"Classic Football" is based on the handheld Mattel Electronics video game that I would play when I was younger (although it was first released in 1977). The objective of the game is to move your player from the left-hand side of the screen to the rightside endzone without running into contact with any of the five defenders. Your player has the options of moving up or down one spot or forward - no going backwards. The key to this game is to time when the defenders are moving so as to be able to avoid them as quickly as possible and make it to the endzone. Typically played against the computer, the game is given a set timer and whoever scores the most amount of touchdowns in that alloted time wins. 

My game: 
My idea was to replicate this - although unsuccessfully. My plan was to substitute the timer with a given amount of turns, although this was something I was not able to develop functionality with. Playing this game with two people, whoever has the higher amount of points at the end would then be the winner. Just as in the original game, the player starts backed up against their own endzone and must make it across the field without running into any defenders on the way. In the likely scenario that this does happen, the player would be stopped and it would then be the opposing player's turn (not what happens in the Mattel game but that's okay). 

Technologies included:
The layout for the football field is a CSS grid surrounded by a container div to separate it from the body of the page. I originally hardcoded the field, but then decided to use JavaScript to make the divs more manageable to move within as the player and defenders. The three buttons serve to move the player right, up, and down and were added as event listeners. The scoreboard is set to add a touchdown (6 points) every time the player reaches the far endzone. 

Unsolved problems:
This should be the longest section here, as I left a lot unsolved and have major room for improvement. To start, my process in developing this project should be much better as there was too much effort put into the configuration of Github, HTML, and CSS, leaving the JavaScript for last was the worst possible thing that could have been done. This project needs actual player movement to work with clicking - or using the arrow keys which I attempted to utilize - and a reset upon reaching the last div column/endzone. In addition to this, I could have made randomized movement for the defenders vertically and horizontally and a condition that colliding with the player would result in a reset of the game. With the scoreboard, this should be working so that it counts player turns (for the two intended players) as well as 6 points every time that player reaches the endzone. With the design of the page, I think that the container surrounding the field could be centered, and the buttons should be more intuitively included so that they are easier to work with. Along with this thinking, I should better implement accessibility for different browsers and screen sized. 


Citations:
Scoreboard formatting: https://stackoverflow.com/questions/53946426/scoreboard-design-using-html-and-css
Div functionality: https://stackoverflow.com/questions/15792855/moving-div-box-using-javascript
                   https://learn.co/lessons/moving-things-with-javascript
                   https://stackoverflow.com/questions/58162481/move-element-in-a-grid-layout-with-arrow-keys
