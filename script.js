//The following code below that are commented out are the different audio tricks I have attempted.

// $(document).ready(function() {
//     $('audio#sound').get(0).play();
//     document.querySelector("audio").volume = 0.1;
// });
// var audio = new Audio('Violet.mp3');
// audio.play();
// function play() {
//   var audio = new Audio('Violet.mp3');
//   audio.play();
// }
// play();
//audio player
// window.onload = function() {
//     document.getElementById('audio#sound')[0].play();
// }

// $('audio#sound')[0].play();

//The acutal audio code.
$(document).mouseover(function() {
    $('audio#sound').get(0).play();
    document.querySelector("audio").volume = 0.1;
});
// var music=document.getElementById('sound');
// function play(){
//   music.muted=true;
//   music.play();
//   music.muted=false;
//   music.play();
// }
// play();
var Score=0;
// $(document).ready(function(){
//     $(document).mousemove(function(){
//          if($(".circle:hover").length != 0){
//            Score=Score+1;
//           $(".score").html("Score: "+ Score);
//         } else{
//           Score=Score-1;
//           $(".score").html("Score: "+ Score);
//         }
//     });
// });
// $(".class").mouseover(function(){
//   console.log("on")
// });




//timer used with the start button
var timer=60;
$(".point").hide();
$(".point1").hide();

$(".start").click(function(){
  $(".start").hide();
  $(".point").show();
  $(".point1").show();
  var time=setInterval(MinusTimer,1000);
  function MinusTimer(){
  if(timer==0){
    timer=60;
    $(".timer").html("Timer: "+timer);
    clearInterval(time);
    $(".start").show();
    $(".point").hide();
    $(".point1").hide();
  }else{
    timer=timer-1;
    $(".timer").html("Timer: "+timer);
  }
  }
});

function randomizer(){
  var num=1;
  while(num!=0){
      var x=Math.random()*700 +1;
      var x1=Math.random()*700 +1;
      
      var y=Math.random()*650 +1;
      var y1=Math.random()*650 +1;
      
      var xFifty=x+55;
      var yFifty=y+55;
      var x1Fifty=x1+55;
      var y1Fifty=y1+55;

      if(x==xFifty||y==y1Fifty||x1==x1Fifty||y1==y1Fifty){
        return [x, x1, y, y1];
      }
      if(x>=x1Fifty||x1>=xFifty){
        return [x, x1, y, y1];
      }
      if(y<=y1Fifty||y1<=yFifty){
        num=1;
      }
      // var distance=(x-x1)*(x-x1)+(y-y1)*(y-y1);
      // var radius=60*60;

      // if(distance>radius){

      //   return [x, x1, y, y1];

      // }
  }
}
//the point/circle
  $(".point").click(function(){
    if(timer!=0&&timer!=60){
      $(".point").hide();
      var coordinates=randomizer();
      $(".point").css({"left":coordinates[0],"top":coordinates[2]});
      $(".point").show();
      Score=Score+15;
      $(".score").html("Score: "+ Score);
    }
  });
  $(".point1").click(function(){
    if(timer!=0&&timer!=60){
      $(".point1").hide();
      var coordinates=randomizer();
      $(".point1").css({"left":coordinates[1],"top":coordinates[3]});
      $(".point1").show();
      Score=Score+15;
      $(".score").html("Score: "+ Score);
    }
  });
  $(".GridBoard").click(function(){
    if(timer!=0&&timer!=60){
      if(Score==0){
        Score=0;
      }else{
        Score=Score-5;
      }
      $(".score").html("Score: "+ Score);
    }
  })

// const myClock = $('#app').squareCountDownClock({
//       countdownDate: 'Dec 24, 2020 15:37:25',
// })

