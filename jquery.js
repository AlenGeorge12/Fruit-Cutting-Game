var playing = false;
var score;
var trialsleft;
var fruits = ['apple','banana','cherry','grapes','mango','orange','pinapple','strawberry','watermelon'];
var step;
var action;

$(function(){
    
    $("#startreset").click(function(){
        if(playing == true){
            location.reload();
        }
        else{
            playing = true;
            score = 0;
            $("#scorevalue").html(score);
            
            $("#trialsleft").show();
            trialsleft = 3;
             addheart();
            
            $("#gameover").hide();
            
            $("#startreset").html("Reset Game");
            
            startaction();
        }
        
    });
    $("#fruit1").mouseover(function(){
        score++;
        $("#scorevalue").html(score);
        
        document.getElementById("sound").play();
        //$("#sound)[0].play();
        
        
        clearInterval(action);
    
    //hide fruit
    $("#fruit1").hide("explode", 500); //slice fruit
    
    //send new fruit
    setTimeout(startaction, 800);
        
    });
    
    
function addheart(){
     $("#trialsleft").empty();
    for(i = 0; i < trialsleft; i++){
        $("#trialsleft").append('<img src="images/heart23.png" class="life">');
    }
}    
    
function startaction(){
   $("#fruit1").show();
    choosefruit();
    
    $("#fruit1").css({'left': Math.round(550*Math.random()), 'top': -150});
    
    //random step for fruit to go down
    step = 1 + Math.round(5*Math.random());
    
    //fruit going down
    
    action = setInterval(function(){
        $("#fruit1").css({'top' : $("#fruit1").position().top + step});
        
        if($("#fruit1").position().top > $("#fruitcontainer").height()){
            
            if(trialsleft >1){
                
                
                $("#fruit1").show();
    choosefruit();
    
    $("#fruit1").css({'left': Math.round(550*Math.random()), 'top': -150});
    
    //random step for fruit to go down
    step = 1 + Math.round(5*Math.random());
             
                trialsleft--;
                addheart();
            }
            else{
                 playing = false; //we are not playing anymore
                $("#startreset").html("Start Game"); // change button to Start Game
                $("#gameover").show();
                $("#gameover").html('<p>Game Over!</p><p>Your score is '+ score +'</p>');
                $("#trialsleft").hide();
                stopaction();
                
            }
        }
    },10);
}
    
function stopaction(){
    clearInterval(action);
    $("#fruit1").hide();
    
}    
function choosefruit(){
    $("#fruit1").attr('src' , 'images/' + fruits[Math.round(8*Math.random())] +'.png'); 
}
    
    
});