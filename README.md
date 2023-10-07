# SimonGame
A self learning project to understand concepts of vanilla Javascript and jQuery. While the html, css logic was a part of the material provided, the Javascript logic is completely my own( assistance was provided through steps of what to do). I have not referred to the javascript code/solution presented within the course.

These are the steps I’ve followed through the project development:

->Creating an array with all four game colours 
->Creating an empty array for game pattern 
->Function for finding a random number between 0 and 3, choosing element array corresponding to it, adding animation and calling the sound and animate function  
->Function play sound will take random color as a parameter and using switch case, we can play corresponding sound and have a default case for the wrong sound
->Now we’ll create a new array on top of our JS page for user sequence 
->This is for the button user clicks and we’ll add an event handler for when the user clicks a button. We’ll declare a variable userChosencolor and set the value to $(this).attr(“id”). Here this refers to current instance of the button and .attr(id) gets attribute of the id that was clicked. In other words the color and then we’ll simply push that to our array using .push. Within this function we’ll call the play sound and animate function too 
->But we do need to check if the answer matches so we’ll call the checkAnswer method passing the parameter as the number of elements in the user chosen array which is length-1 because element position starts from 0. 
-> the animate function uses event listener to add a class and a timeout to remove it so that we can have the animation when a button is clicked 
-> the check answer method checks if element in both arrays match and logs a success. It then checks if the length is same, in which case we have a timeout of a 1000ms after which the game is called again through the first function we created ( refer point 3 ). There is also an else clause where we’ll play our default case sound, add a class to the body for error animation and set a timeout to remove that class. Then we’ll call the game restart function
-> we’ll have an eventListener for the keydown operation which starts with an if statement where If game has not started, it’ll change the text, call the function and set start to true so game doesn’t restart multiple times. For this to work, we could simplify specify a variable start=false at the beginning of our code 
-> back in the first method, we’d set user pattern back to an empty array so that the user starts afresh in every level and then we increment the level and change the text of H1 to update the new game level. 
-> In the game restart function, everything is set to its initial value and we call the first method again. 

This project is a part of my udemy web development course. The css and html logic is from the course. However, the javascript logic is completely my own. 


