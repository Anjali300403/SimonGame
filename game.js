var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var start = false;
    
    function nextSequence() {
        userClickedPattern=[];
            level++;
            $("#level-title").text("Level " + level);
    
            var randomNumber = Math.floor(Math.random() * 4);
            var randomChosenColour = buttonColours[randomNumber];
            gamePattern.push(randomChosenColour);
    
            $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
            playSound(randomChosenColour);
            animatePress(randomChosenColour);  
    }
    
    function playSound(randomChosenColour) {
        switch(randomChosenColour){
          case "green":
              var audio1= new Audio("sounds/green.mp3")
              audio1.play() 
              break;  
          case "red":
              var audio2= new Audio("sounds/red.mp3")
              audio2.play();
              break; 
          case "yellow":
              var audio3= new Audio("sounds/yellow.mp3")
              audio3.play()
              break;
          case "blue":
                  var audio4= new Audio("sounds/blue.mp3")
                  audio4.play() 
                  break;
          default: 
          var audio5= new Audio("sounds/wrong.mp3")
          audio5.play();
      }
    }
    
    function animatePress(currentColour) {
        $("#" + currentColour).addClass("pressed");
        setTimeout(function () {
            $("#" + currentColour).removeClass("pressed");
        }, 100);
    }
    function checkAnswer(currentLevel) {
        if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
            console.log("success");
            if (userClickedPattern.length === gamePattern.length) {
                setTimeout(function () {
                    nextSequence();
                    userClickedPattern = [];
                }, 1000);
            }
        } else {
            playSound("executeDefault");
            $("body").addClass("game-over")
            setTimeout(function(){
              $("body").removeClass("game-over")
            },200);
            $("level-title").text("Game Over, Press Any Key to Restart")
            startOver()
        }
    }
    $(".btn").click(function () {
        var userChosenColour = $(this).attr("id");
        userClickedPattern.push(userChosenColour);
        playSound(userChosenColour);
        animatePress(userChosenColour);
        checkAnswer(userClickedPattern.length-1);
    });
    $(document).keydown(function () {
      if(!start){
        $("level-title").text("Level is" + level)
         nextSequence(); 
         start=true;
      }
    });   
    function startOver(){
        level=0;
        gamePattern=[];
        userClickedPattern=[];
        start=false;
        nextSequence();
    } 


